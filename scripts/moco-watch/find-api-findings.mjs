import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const coveragePath = "docs/API_COVERAGE.md";
const beforePath = process.argv[2] ?? ".flue/tmp/API_COVERAGE.before.md";
const atomPath = process.argv[3] ?? ".flue/tmp/blog.atom";

const beforeCoverage = existsSync(beforePath) ? readFileSync(beforePath, "utf8") : "";
const afterCoverage = readFileSync(coveragePath, "utf8");
const atom = existsSync(atomPath) ? readFileSync(atomPath, "utf8") : "";
const readme = readFileSync("README.md", "utf8");
const lastCheck = readLastCheckTimestamp(readme);
const addedEndpoints = diffCoverage(beforeCoverage, afterCoverage).added;
const blogEntries = filterBlogEntries(parseBlogAtom(atom), lastCheck).filter(isApiRelatedEntry);

const docsFindings = groupEndpointsBySource(addedEndpoints).map(([source, endpoints]) => ({
  affectedEndpoints: endpoints.map((endpoint) => `${endpoint.method} ${endpoint.path}`),
  blogUrls: [],
  docsUrls: [docsUrlForSource(source)],
  recommendedSdkWork:
    "Regenerate the SDK from the updated MOCO API docs and add focused tests for the new endpoint or operation.",
  summary: `The upstream MOCO API docs added ${endpoints.length} endpoint${endpoints.length === 1 ? "" : "s"} in ${source}.`,
  title: `New ${source.replace(/\.md$/, "").replaceAll("_", " ")} API endpoint${endpoints.length === 1 ? "" : "s"}`,
}));

const blogFindings = blogEntries.map((entry) => ({
  affectedEndpoints: [],
  blogUrls: [entry.url],
  docsUrls: ["https://everii-group.github.io/mocoapp-api-docs/"],
  recommendedSdkWork:
    "Review the blog announcement against the generated endpoint coverage and update the SDK if the announcement exposes new API behavior.",
  summary: `${entry.title}\n\n${entry.summary}`.trim(),
  title: entry.title,
}));

const findings = [...docsFindings, ...blogFindings].map((finding) => ({
  ...finding,
  hash: findingHash(finding),
}));

mkdirSync(".flue/tmp", { recursive: true });
writeFileSync(".flue/tmp/moco-api-findings.json", JSON.stringify(findings, null, 2), "utf8");
console.log(JSON.stringify({ count: findings.length, findings }, null, 2));

function readLastCheckTimestamp(markdown) {
  const match = markdown.match(/Last MOCO API feature check with findings:\s*(never|[0-9TZ:.\-+]+)\s*/);
  if (!match?.[1] || match[1] === "never") return null;
  return match[1];
}

function parseBlogAtom(xml) {
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

function filterBlogEntries(entries, sinceIso) {
  const since = sinceIso ? Date.parse(sinceIso) : Date.now() - 30 * 24 * 60 * 60 * 1000;
  return entries.filter((entry) => {
    const updated = Date.parse(entry.updated);
    return Number.isFinite(updated) && updated > since;
  });
}

function isApiRelatedEntry(entry) {
  return /\b(api|rest|endpoint|webhook|integration|oauth|token|export|import)\b/i.test(
    `${entry.title}\n${entry.summary}`,
  );
}

function parseCoverage(markdown) {
  return markdown
    .split("\n")
    .map((line) => line.match(/^\| (GET|POST|PUT|PATCH|DELETE) \| `([^`]+)` \| `([^`]+)` \| `([^`]+)` \|$/))
    .filter(Boolean)
    .map((match) => ({
      method: match[1],
      path: match[2],
      sdkMethod: match[3],
      source: match[4],
    }));
}

function diffCoverage(beforeMarkdown, afterMarkdown) {
  const before = new Set(parseCoverage(beforeMarkdown).map(endpointKey));
  const after = parseCoverage(afterMarkdown);
  return {
    added: after.filter((endpoint) => !before.has(endpointKey(endpoint))),
  };
}

function endpointKey(endpoint) {
  return `${endpoint.method} ${endpoint.path}`;
}

function groupEndpointsBySource(endpoints) {
  const grouped = new Map();
  for (const endpoint of endpoints) {
    const list = grouped.get(endpoint.source) ?? [];
    list.push(endpoint);
    grouped.set(endpoint.source, list);
  }
  return [...grouped.entries()];
}

function docsUrlForSource(source) {
  return `https://everii-group.github.io/mocoapp-api-docs/${source.replace(/\.md$/, "")}`;
}

function findingHash(finding) {
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

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeEntities(match?.[1]?.trim() ?? "");
}

function readLink(xml) {
  const alternate = xml.match(/<link[^>]+rel=["']alternate["'][^>]+href=["']([^"']+)["'][^>]*>/i);
  if (alternate?.[1]) return decodeEntities(alternate[1]);

  const first = xml.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return decodeEntities(first?.[1] ?? "");
}

function stripXml(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}
