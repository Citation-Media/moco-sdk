# MOCO TypeScript SDK

A typed TypeScript SDK for the MOCO ERP API. It is generated from the cloned `mocoapp-api-docs` documentation and currently covers every documented endpoint in `mocoapp-api-docs/sections`.

Last MOCO API feature check with findings: 2026-05-08T18:19:15.395Z

## Install

```bash
npm install @citation-media/moco-sdk
```

For local development in this repository:

```bash
git submodule update --init --recursive
npm install
npm run generate
npm test
```

## Quick Start

```ts
import { MocoClient } from "@citation-media/moco-sdk";

const moco = new MocoClient({
  subdomain: "your-company",
  apiKey: process.env.MOCO_API_KEY,
});

const projects = await moco.projects.list({
  include_archived: false,
  updated_after: "2026-01-01T00:00:00Z",
  sort_by: "name asc",
});

console.log(projects.data);
console.log(projects.pagination);
```

## Configuration

MOCO uses a dedicated URL per customer. Configure the client with whichever form matches your account:

```ts
new MocoClient({ subdomain: "example", apiKey: "..." });
new MocoClient({ domain: "example.mocoapp.com", apiKey: "..." });
new MocoClient({ baseUrl: "https://example.mocoapp.com/api/v1", apiKey: "..." });
```

Authentication defaults to MOCO's token header:

```http
Authorization: Token token=YOUR_API_KEY
```

Bearer tokens and fully custom authorization headers are also supported:

```ts
new MocoClient({ subdomain: "example", apiKey: "...", authScheme: "bearer" });
new MocoClient({ baseUrl: "https://example.mocoapp.com/api/v1", authorizationHeader: "Bearer ..." });
```

## Common Usage

```ts
const project = await moco.projects.get({ id: 123 });

await moco.activities.create({
  date: "2026-05-08",
  project_id: 123,
  task_id: 456,
  seconds: 3600,
  description: "Implementation",
});

await moco.projects.archive({ id: 123 });
```

Generated resources are grouped by MOCO domain, for example `projects`, `activities`, `companies`, `invoices`, `purchases`, `users`, `offers`, `deals`, `tags`, `webHooks`, and account resources such as `accountTaskTemplates`.

The full generated endpoint map is exported as `MOCO_ENDPOINTS` and documented in [docs/API_COVERAGE.md](docs/API_COVERAGE.md).

## Filters and Pagination

List methods include MOCO's pagination parameters, sorting, global filters, and entity-specific filters from the docs:

```ts
const response = await moco.companies.list({
  page: 1,
  per_page: 100,
  sort_by: "name desc",
  ids: [123, 456],
  updated_after: new Date("2026-01-01T00:00:00Z"),
  type: "customer",
  tags: "Automotive, Pharma",
  custom_properties: {
    Sector: ["Pharma", "Chemistry"],
    Newsletter: true,
  },
});
```

Every list endpoint also has an `All` helper that follows MOCO's `Link: rel="next"` pagination header:

```ts
for await (const activity of moco.activities.listAll({ from: "2026-05-01", to: "2026-05-31" })) {
  console.log(activity.id);
}
```

## Impersonation

Set `X-IMPERSONATE-USER-ID` globally or per request:

```ts
const asUser = moco.withImpersonation(933590696);
await asUser.activities.create({ date: "2026-05-08", project_id: 1, task_id: 2, seconds: 900 });

await moco.activities.list({}, { impersonateUserId: 933590696 });
```

## Rate Limits and Errors

MOCO returns `429 Too Many Requests` when the account limit is exceeded. The SDK throws `MocoRateLimitError` with retry metadata from the response headers.

```ts
import { MocoRateLimitError } from "@citation-media/moco-sdk";

try {
  await moco.projects.list();
} catch (error) {
  if (error instanceof MocoRateLimitError) {
    console.log(error.retryAfterSeconds);
    console.log(error.rateLimit);
  }
}
```

Automatic retries for 429 responses can be enabled:

```ts
const moco = new MocoClient({
  subdomain: "example",
  apiKey: "...",
  rateLimit: { maxRetries: 2 },
});
```

## Webhook Signature Verification

MOCO signs webhook payloads with HMAC-SHA256. Verify the raw request payload before parsing or trusting it:

```ts
import { createWebhookEnvelope, verifyWebhookRequest } from "@citation-media/moco-sdk";

const rawBody = await request.text();
const valid = await verifyWebhookRequest(rawBody, request.headers, process.env.MOCO_WEBHOOK_SIGNATURE_KEY!);

if (!valid) {
  throw new Error("Invalid MOCO webhook signature");
}

const envelope = createWebhookEnvelope(JSON.parse(rawBody), request.headers);
console.log(envelope.target, envelope.event, envelope.userId);
```

## Guides

- [Track users assigned via contract webhooks](docs/guides/track-project-contract-webhooks.md)

## Custom and Future Routes

If MOCO adds a route before this SDK is regenerated, use the typed low-level request API:

```ts
const response = await moco.request({
  method: "POST",
  path: "/experimental_route",
  body: { enabled: true },
});
```

## Development

The upstream MOCO API docs are tracked as a Git submodule at `mocoapp-api-docs`. This keeps the docs related to the SDK without vendoring the full docs repository into this repository's history.

Clone with submodules:

```bash
git clone --recurse-submodules <repo-url>
```

If you already cloned the repository:

```bash
git submodule update --init --recursive
```

Update to the latest upstream docs and regenerate the SDK:

```bash
git submodule update --remote mocoapp-api-docs
npm run generate
npm test
```

Commit the submodule pointer together with generated SDK changes:

```bash
git add mocoapp-api-docs src/generated docs/API_COVERAGE.md
git commit -m "Update generated SDK from MOCO API docs"
```

```bash
npm run generate  # Rebuild resources and API coverage from mocoapp-api-docs
npm run build     # Type-check and emit dist
npm test          # Build and run SDK behavior tests
```

## Automation

This repository uses [Flue](https://github.com/withastro/flue#readme) to watch for new MOCO REST API functionality.

- `MOCO API Watch` runs every Monday at 06:00 UTC and can also be triggered manually from GitHub Actions.
- Both Flue agents use the direct Workers AI model `cloudflare-workers-ai/@cf/moonshotai/kimi-k2.6`.
- The watch agent updates the docs submodule in its CI workspace, regenerates `docs/API_COVERAGE.md`, checks `https://www.mocoapp.com/blog.atom`, and opens one issue per new API-relevant finding.
- Blog posts are treated as supplemental references only. The watch agent creates issues only for concrete upstream docs/API coverage additions that still need SDK work.
- The watch agent updates the `Last MOCO API feature check with findings` timestamp above by direct commit only when it creates at least one issue.
- `MOCO API PR Agent` runs on trusted `moco-api-update` issues and opens implementation PRs.
- Issues created by `github-actions[bot]` are trusted only when they include the expected Flue labels and hidden finding marker. Human-created issues must be authored by a repo collaborator with `write`, `maintain`, or `admin` permission.
- Add `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` as GitHub Actions repository secrets before enabling the workflows. The workflow maps `CLOUDFLARE_API_TOKEN` to the `CLOUDFLARE_API_KEY` env var expected by Flue's Workers AI provider.
- Allow GitHub Actions to create pull requests in the repository settings, or add `FLUE_GITHUB_TOKEN` as a repository secret containing a PAT with access to create branches, issues, workflow dispatches, and pull requests.
- Package publishing uses npm trusted publishing with GitHub Actions OIDC. Configure `@citation-media/moco-sdk` on npm with this repository and workflow `.github/workflows/deploy.yml`; no `NPM_TOKEN` secret is required for that path.

Manual runs:

```bash
cp .env.example .env
# Fill GITHUB_TOKEN/GH_TOKEN and Cloudflare AI Gateway values in .env, then load them:
set -a && source .env && set +a

npm run flue:moco-api-watch -- --payload '{"dryRun":true}'
npm run flue:moco-api-pr -- --payload '{"issueNumber":123,"dryRun":true}'
```
