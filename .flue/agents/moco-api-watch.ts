import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import type { FlueContext } from "@flue/sdk/client";
import { defineCommand } from "@flue/sdk/node";
import * as v from "valibot";
import {
  AUTO_PR_LABEL,
  FINDING_LABEL,
  findingMarker,
  issueBodyForFinding,
  issueExists,
  issueTitleForFinding,
  writeLastCheckTimestamp,
  type Finding,
} from "../lib/moco-api";

export const triggers = {};

const MODEL = "openai/workers-ai/@cf/moonshotai/kimi-k2.6";
const git = defineCommand("git");
const npm = defineCommand("npm");
const node = defineCommand("node");
const curl = defineCommand("curl");

const ResultSchema = v.object({
  createdIssues: v.array(v.number()),
  findings: v.number(),
  timestampCommitted: v.boolean(),
});

interface StoredFinding extends Finding {
  hash: string;
}

export default async function ({ init, payload, env }: FlueContext) {
  const dryRun = Boolean((payload as { dryRun?: boolean } | undefined)?.dryRun);

  mkdirSync(".flue/tmp", { recursive: true });
  writeFileSync(".flue/tmp/API_COVERAGE.before.md", readFileSync("docs/API_COVERAGE.md", "utf8"), "utf8");

  execFileSync("git", ["submodule", "update", "--remote", "mocoapp-api-docs"], { stdio: "inherit" });
  execFileSync("npm", ["run", "generate"], { stdio: "inherit" });
  execFileSync("curl", ["-L", "https://www.mocoapp.com/blog.atom", "-o", ".flue/tmp/blog.atom"], {
    stdio: "inherit",
  });
  execFileSync("node", ["scripts/moco-watch/find-api-findings.mjs"], { stdio: "inherit" });

  const rawFindings = JSON.parse(readFileSync(".flue/tmp/moco-api-findings.json", "utf8")) as StoredFinding[];

  const agent = await init({
    sandbox: "local",
    model: MODEL,
    providers: cloudflareAiGatewayProvider(env),
  });
  const session = await agent.session("moco-api-watch");
  const reviewed = await session.prompt(
    `Review these candidate MOCO API findings and return only findings that are likely real API functionality changes.

Rules:
- Keep findings from docs/API_COVERAGE.md added endpoints unless they are obviously noise.
- Keep blog findings only when the title or summary references REST API, endpoints, webhooks, integrations, imports, exports, or API tokens.
- Do not invent new findings.
- Preserve hash, title, summary, affectedEndpoints, docsUrls, blogUrls, and recommendedSdkWork exactly enough for issue creation.

Candidate findings JSON:
${JSON.stringify(rawFindings, null, 2)}`,
    {
      commands: [git, npm, node, curl],
      result: v.object({
        findings: v.array(
          v.object({
            affectedEndpoints: v.array(v.string()),
            blogUrls: v.array(v.string()),
            docsUrls: v.array(v.string()),
            hash: v.string(),
            recommendedSdkWork: v.string(),
            summary: v.string(),
            title: v.string(),
          }),
        ),
      }),
    },
  );

  const createdIssues: number[] = [];
  const keptFindings = reviewed.findings as StoredFinding[];

  for (const finding of keptFindings) {
    if (issueExists(finding.hash)) continue;

    const title = issueTitleForFinding(finding, finding.hash);
    const body = `${issueBodyForFinding(finding, finding.hash)}

${findingMarker(finding.hash)}
`;

    if (dryRun) {
      console.log(`[dry-run] would create issue: ${title}`);
      continue;
    }

    const output = execFileSync(
      "gh",
      [
        "issue",
        "create",
        "--title",
        title,
        "--body",
        body,
        "--label",
        FINDING_LABEL,
        "--label",
        AUTO_PR_LABEL,
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
    );
    const issueNumber = Number(output.trim().match(/\/issues\/(\d+)$/)?.[1]);
    if (Number.isFinite(issueNumber)) createdIssues.push(issueNumber);
  }

  if (createdIssues.length > 0 && !dryRun) {
    execFileSync("git", ["checkout", "--", "docs/API_COVERAGE.md", "src/generated"], { stdio: "inherit" });
    execFileSync("git", ["submodule", "update", "--checkout", "mocoapp-api-docs"], { stdio: "inherit" });
    writeLastCheckTimestamp(new Date().toISOString());
    execFileSync("git", ["config", "user.name", "github-actions[bot]"], { stdio: "inherit" });
    execFileSync("git", ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], {
      stdio: "inherit",
    });
    execFileSync("git", ["add", "README.md"], { stdio: "inherit" });
    execFileSync("git", ["commit", "-m", "Update MOCO API check timestamp"], { stdio: "inherit" });
    execFileSync("git", ["push"], { stdio: "inherit" });
  }

  return v.parse(ResultSchema, {
    createdIssues,
    findings: keptFindings.length,
    timestampCommitted: createdIssues.length > 0 && !dryRun,
  });
}

function cloudflareAiGatewayProvider(env: Record<string, string | undefined>) {
  const accountId = env.CLOUDFLARE_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiKey = env.CLOUDFLARE_API_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
  const gatewayId = env.CLOUDFLARE_AI_GATEWAY_ID || process.env.CLOUDFLARE_AI_GATEWAY_ID || "default";

  if (!accountId || !apiKey) {
    throw new Error("CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required for Flue model access.");
  }

  return {
    openai: {
      apiKey,
      baseUrl: `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/compat`,
    },
  };
}
