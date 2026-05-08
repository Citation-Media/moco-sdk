import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

export const CHECK_TIMESTAMP_PATTERN =
  /Last MOCO API feature check with findings:\s*(?<timestamp>never|[0-9TZ:.\-+]+)\s*/;

export const FINDING_LABEL = "moco-api-update";
export const AUTO_PR_LABEL = "flue:auto-pr-ready";
export const NEEDS_HUMAN_LABEL = "flue:needs-human";
export const PR_OPENED_LABEL = "flue:pr-opened";
export const FINDING_MARKER_PREFIX = "flue:moco-api-update";

const LABELS = [
  {
    color: "0e8a16",
    description: "Potential upstream MOCO REST API update found by Flue.",
    name: FINDING_LABEL,
  },
  {
    color: "1d76db",
    description: "Trusted Flue issue ready for an automated implementation PR.",
    name: AUTO_PR_LABEL,
  },
  {
    color: "d93f0b",
    description: "Flue could not safely handle this automatically.",
    name: NEEDS_HUMAN_LABEL,
  },
  {
    color: "5319e7",
    description: "Flue opened an implementation PR.",
    name: PR_OPENED_LABEL,
  },
];

export interface BlogEntry {
  title: string;
  url: string;
  updated: string;
  summary: string;
}

export interface CoverageEndpoint {
  method: string;
  path: string;
  sdkMethod: string;
  source: string;
}

export interface CoverageDiff {
  added: CoverageEndpoint[];
  removed: CoverageEndpoint[];
}

export interface Finding {
  title: string;
  summary: string;
  affectedEndpoints: string[];
  docsUrls: string[];
  blogUrls: string[];
  recommendedSdkWork: string;
}

export function readLastCheckTimestamp(readmePath = "README.md"): string | null {
  const readme = readFileSync(readmePath, "utf8");
  const match = readme.match(CHECK_TIMESTAMP_PATTERN);
  if (!match?.groups?.timestamp || match.groups.timestamp === "never") return null;
  return match.groups.timestamp;
}

export function writeLastCheckTimestamp(timestamp: string, readmePath = "README.md"): void {
  const readme = readFileSync(readmePath, "utf8");
  const replacement = `Last MOCO API feature check with findings: ${timestamp}`;

  if (CHECK_TIMESTAMP_PATTERN.test(readme)) {
    writeFileSync(readmePath, readme.replace(CHECK_TIMESTAMP_PATTERN, replacement), "utf8");
    return;
  }

  writeFileSync(readmePath, `${readme.trimEnd()}\n\n${replacement}\n`, "utf8");
}

export function parseBlogAtom(xml: string): BlogEntry[] {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((match) => {
    const entry = match[1] ?? "";
    return {
      summary: stripXml(readTag(entry, "summary") || readTag(entry, "content")),
      title: stripXml(readTag(entry, "title")),
      updated: readTag(entry, "updated") || readTag(entry, "published"),
      url: readLink(entry),
    };
  });
}

export function filterBlogEntries(entries: BlogEntry[], sinceIso: string | null): BlogEntry[] {
  const since = sinceIso ? Date.parse(sinceIso) : Date.now() - 30 * 24 * 60 * 60 * 1000;

  return entries.filter((entry) => {
    const updated = Date.parse(entry.updated);
    return Number.isFinite(updated) && updated > since;
  });
}

export function parseCoverage(markdown: string): CoverageEndpoint[] {
  return markdown
    .split("\n")
    .map((line) => line.match(/^\| (GET|POST|PUT|PATCH|DELETE) \| `([^`]+)` \| `([^`]+)` \| `([^`]+)` \|$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      method: match[1] ?? "",
      path: match[2] ?? "",
      sdkMethod: match[3] ?? "",
      source: match[4] ?? "",
    }));
}

export function diffCoverage(beforeMarkdown: string, afterMarkdown: string): CoverageDiff {
  const before = new Set(parseCoverage(beforeMarkdown).map(endpointKey));
  const after = parseCoverage(afterMarkdown);
  const afterSet = new Set(after.map(endpointKey));
  const beforeEndpoints = parseCoverage(beforeMarkdown);

  return {
    added: after.filter((endpoint) => !before.has(endpointKey(endpoint))),
    removed: beforeEndpoints.filter((endpoint) => !afterSet.has(endpointKey(endpoint))),
  };
}

export function docsUrlForSource(source: string): string {
  const withoutExtension = source.replace(/\.md$/, "");
  return `https://everii-group.github.io/mocoapp-api-docs/${withoutExtension}`;
}

export function findingHash(finding: Pick<Finding, "affectedEndpoints" | "blogUrls" | "docsUrls" | "title">): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        affectedEndpoints: [...finding.affectedEndpoints].sort(),
        blogUrls: [...finding.blogUrls].sort(),
        docsUrls: [...finding.docsUrls].sort(),
        title: finding.title,
      }),
    )
    .digest("hex")
    .slice(0, 12);
}

export function findingMarker(hash: string): string {
  return `<!-- ${FINDING_MARKER_PREFIX} v1 hash=${hash} -->`;
}

export function issueTitleForFinding(finding: Finding, hash: string): string {
  return `MOCO API update: ${finding.title} [moco-api:${hash}]`;
}

export function issueBodyForFinding(finding: Finding, hash: string): string {
  const docs = finding.docsUrls.length ? finding.docsUrls.map((url) => `- ${url}`).join("\n") : "- None";
  const blogs = finding.blogUrls.length ? finding.blogUrls.map((url) => `- ${url}`).join("\n") : "- None";
  const endpoints = finding.affectedEndpoints.length
    ? finding.affectedEndpoints.map((endpoint) => `- \`${endpoint}\``).join("\n")
    : "- Not yet mapped";

  return `${findingMarker(hash)}

## Summary

${finding.summary}

## Affected API Surface

${endpoints}

## Upstream References

### API Docs

${docs}

### Blog

${blogs}

## Recommended SDK Work

${finding.recommendedSdkWork}
`;
}

export function issueExists(hash: string): boolean {
  try {
    const output = execFileSync(
      "gh",
      ["issue", "list", "--state", "all", "--search", `[moco-api:${hash}] in:title`, "--json", "number", "--limit", "1"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    );
    return JSON.parse(output).length > 0;
  } catch {
    return false;
  }
}

export function ensureFlueLabels(): void {
  for (const label of LABELS) {
    try {
      execFileSync(
        "gh",
        ["label", "create", label.name, "--color", label.color, "--description", label.description],
        { stdio: ["ignore", "ignore", "pipe"] },
      );
    } catch {
      // Label creation is idempotent for this workflow; existing labels are fine.
    }
  }
}

export function isTrustedIssueAuthor(author: string, body: string, labels: string[], repo: string): boolean {
  const isTrustedBot =
    author === "github-actions[bot]" &&
    labels.includes(FINDING_LABEL) &&
    labels.includes(AUTO_PR_LABEL) &&
    body.includes(FINDING_MARKER_PREFIX);

  if (isTrustedBot) return true;

  try {
    const output = execFileSync("gh", ["api", `repos/${repo}/collaborators/${author}/permission`], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    const permission = JSON.parse(output).permission;
    return ["write", "maintain", "admin"].includes(permission);
  } catch {
    return false;
  }
}

function endpointKey(endpoint: CoverageEndpoint): string {
  return `${endpoint.method} ${endpoint.path}`;
}

function readTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeEntities(match?.[1]?.trim() ?? "");
}

function readLink(xml: string): string {
  const alternate = xml.match(/<link[^>]+rel=["']alternate["'][^>]+href=["']([^"']+)["'][^>]*>/i);
  if (alternate?.[1]) return decodeEntities(alternate[1]);

  const first = xml.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return decodeEntities(first?.[1] ?? "");
}

function stripXml(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}
