import { execFileSync } from "node:child_process";
import type { FlueContext } from "@flue/sdk/client";
import { defineCommand } from "@flue/sdk/node";
import * as v from "valibot";
import { AUTO_PR_LABEL, FINDING_LABEL, NEEDS_HUMAN_LABEL, PR_OPENED_LABEL, isTrustedIssueAuthor } from "../lib/moco-api";

export const triggers = {};

const MODEL = "cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6";
const git = defineCommand("git");
const npm = defineCommand("npm");
const node = defineCommand("node");

const ResultSchema = v.object({
  issueNumber: v.number(),
  prCreated: v.boolean(),
  reason: v.optional(v.string()),
});

export default async function ({ init, payload, env }: FlueContext) {
  const typedPayload = payload as { dryRun?: boolean; issueNumber?: number } | undefined;
  const issueNumber = Number(typedPayload?.issueNumber ?? process.env.ISSUE_NUMBER);
  const dryRun = Boolean(typedPayload?.dryRun);
  const repo = process.env.GITHUB_REPOSITORY ?? env?.GITHUB_REPOSITORY;

  if (!issueNumber || !repo) {
    return v.parse(ResultSchema, {
      issueNumber: issueNumber || 0,
      prCreated: false,
      reason: "Missing issue number or GITHUB_REPOSITORY.",
    });
  }

  const issue = JSON.parse(
    execFileSync("gh", ["issue", "view", String(issueNumber), "--json", "author,body,labels,title,url"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "inherit"],
    }),
  ) as {
    author: { login: string };
    body: string;
    labels: { name: string }[];
    title: string;
    url: string;
  };
  const labels = issue.labels.map((label) => label.name);
  const trusted = isTrustedIssueAuthor(issue.author.login, issue.body, labels, repo);
  const hasRequiredLabels = labels.includes(FINDING_LABEL) && labels.includes(AUTO_PR_LABEL);

  if (!trusted || !hasRequiredLabels) {
    const reason = !trusted
      ? "Issue author is not trusted for automated implementation."
      : "Issue is missing required Flue labels.";

    if (!dryRun) {
      execFileSync("gh", ["issue", "comment", String(issueNumber), "--body", reason], { stdio: "inherit" });
      execFileSync("gh", ["issue", "edit", String(issueNumber), "--add-label", NEEDS_HUMAN_LABEL], { stdio: "inherit" });
    }

    return v.parse(ResultSchema, { issueNumber, prCreated: false, reason });
  }

  const branch = `flue/moco-api-issue-${issueNumber}`;
  if (!dryRun) {
    execFileSync("git", ["checkout", "-B", branch], { stdio: "inherit" });
  }

  const agent = await init({
    sandbox: "local",
    model: MODEL,
  });
  const session = await agent.session(`moco-api-pr-${issueNumber}`);
  const result = await session.prompt(
    `Implement the MOCO SDK update requested by this GitHub issue.

Issue #${issueNumber}: ${issue.title}
${issue.url}

Issue body:
${issue.body}

Requirements:
- Validate referenced upstream docs/blog links before changing code.
- Update mocoapp-api-docs submodule if needed.
- Run npm run generate after docs changes.
- Update TypeScript SDK code or generator only if required by the issue.
- Add or update focused tests.
- Run npm test.
- Do not create unrelated changes.
- Return whether implementation was completed and a concise summary.`,
    {
      commands: [git, npm, node],
      result: v.object({
        completed: v.boolean(),
        summary: v.string(),
        tests: v.string(),
      }),
    },
  );

  if (!result.completed) {
    if (!dryRun) {
      execFileSync("gh", ["issue", "comment", String(issueNumber), "--body", `Flue could not implement this automatically:\n\n${result.summary}`], {
        stdio: "inherit",
      });
      execFileSync("gh", ["issue", "edit", String(issueNumber), "--add-label", NEEDS_HUMAN_LABEL], { stdio: "inherit" });
    }

    return v.parse(ResultSchema, { issueNumber, prCreated: false, reason: result.summary });
  }

  if (dryRun) {
    return v.parse(ResultSchema, { issueNumber, prCreated: false, reason: "Dry run completed." });
  }

  execFileSync("git", ["config", "user.name", "github-actions[bot]"], { stdio: "inherit" });
  execFileSync("git", ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], {
    stdio: "inherit",
  });
  execFileSync("git", ["add", "."], { stdio: "inherit" });

  const hasChanges = execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" }).trim().length > 0;
  if (!hasChanges) {
    execFileSync("gh", ["issue", "comment", String(issueNumber), "--body", "Flue found no SDK changes to apply for this issue."], {
      stdio: "inherit",
    });
    return v.parse(ResultSchema, { issueNumber, prCreated: false, reason: "No changes produced." });
  }

  execFileSync("git", ["commit", "-m", `Implement MOCO API update from #${issueNumber}`], { stdio: "inherit" });
  execFileSync("git", ["push", "--set-upstream", "origin", branch], { stdio: "inherit" });
  const prUrl = execFileSync(
    "gh",
    [
      "pr",
      "create",
      "--title",
      `Implement MOCO API update from #${issueNumber}: ${issue.title}`,
      "--body",
      `Closes #${issueNumber}\n\n${result.summary}\n\nTests: ${result.tests}`,
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
  ).trim();

  execFileSync("gh", ["issue", "comment", String(issueNumber), "--body", `Implementation PR opened: ${prUrl}`], {
    stdio: "inherit",
  });
  execFileSync("gh", ["issue", "edit", String(issueNumber), "--add-label", PR_OPENED_LABEL], { stdio: "inherit" });

  return v.parse(ResultSchema, { issueNumber, prCreated: true });
}
