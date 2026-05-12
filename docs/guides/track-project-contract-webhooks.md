# Track users assigned via contract webhooks

Use this guide when you want to keep project assignments in sync whenever a contract is created, updated, or deleted.

## What to implement

1. Create a `Contract` webhook in MOCO and subscribe to create/update/delete events.
2. Verify the webhook signature.
3. Extract `project_id` from the webhook payload.
4. Fetch the project with full content so you can read the full contract list.

## Minimal TypeScript example

```ts
import { MocoClient, verifyWebhookRequest } from "@citation-media/moco-sdk";

const moco = new MocoClient({
  subdomain: process.env.MOCO_SUBDOMAIN!,
  apiKey: process.env.MOCO_API_KEY!,
});

export async function handleContractWebhook(request: Request): Promise<Response> {
  const rawBody = await request.text();
  const isValid = await verifyWebhookRequest(
    rawBody,
    request.headers,
    process.env.MOCO_WEBHOOK_SIGNATURE_KEY!,
  );

  if (!isValid) {
    return new Response("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(rawBody) as {
    event?: "create" | "update" | "delete";
    target?: string;
    contract?: { project_id?: number };
    data?: { project_id?: number };
    project_id?: number;
  };

  if (payload.target !== "contract") {
    return new Response("Ignored", { status: 200 });
  }

  if (payload.event !== "create" && payload.event !== "update" && payload.event !== "delete") {
    return new Response("Ignored", { status: 200 });
  }

  const projectId = payload.contract?.project_id ?? payload.data?.project_id ?? payload.project_id;
  if (!projectId) {
    return new Response("Missing project_id", { status: 400 });
  }

  const project = await moco.projects.get({ id: projectId });

  // project.data now includes the latest project details, including contracts.
  console.log(project.data.contracts);

  return new Response("OK", { status: 200 });
}
```
