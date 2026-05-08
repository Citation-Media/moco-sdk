import assert from "node:assert/strict";
import test from "node:test";

import sdk from "../dist/index.js";

const {
  MocoClient,
  MocoRateLimitError,
  createWebhookSignature,
  verifyWebhookRequest,
  verifyWebhookSignature,
} = sdk;

test("sends auth, impersonation, pagination, sorting, and custom property filters", async () => {
  const requests = [];
  const client = new MocoClient({
    apiKey: "secret",
    baseUrl: "https://demo.mocoapp.com/api/v1",
    defaultQuery: {
      custom_properties: {
        Region: "EU",
      },
    },
    fetch: async (url, init) => {
      requests.push({ init, url: url.toString() });
      return jsonResponse([{ id: 1 }], {
        "content-type": "application/json",
        link: '<https://demo.mocoapp.com/api/v1/projects?page=2>; rel="next"',
        "x-page": "1",
        "x-per-page": "100",
        "x-total": "101",
      });
    },
    impersonateUserId: 123,
  });

  const response = await client.projects.list({
    custom_properties: {
      Sector: ["Pharma", "Chemistry"],
    },
    include_archived: true,
    page: 1,
    sort_by: "name desc",
  });

  assert.equal(response.pagination?.nextPage, 2);
  assert.equal(response.pagination?.total, 101);
  assert.equal(requests[0].init.headers.get("Authorization"), "Token token=secret");
  assert.equal(requests[0].init.headers.get("X-IMPERSONATE-USER-ID"), "123");

  const url = new URL(requests[0].url);
  assert.equal(url.pathname, "/api/v1/projects");
  assert.equal(url.searchParams.get("include_archived"), "true");
  assert.equal(url.searchParams.get("sort_by"), "name desc");
  assert.equal(url.searchParams.get("custom_properties[Region]"), "EU");
  assert.deepEqual(url.searchParams.getAll("custom_properties[Sector][]"), ["Pharma", "Chemistry"]);
});

test("iterates all paginated list results", async () => {
  const pages = [
    jsonResponse([{ id: 1 }], {
      "content-type": "application/json",
      link: '<https://demo.mocoapp.com/api/v1/activities?page=2>; rel="next"',
      "x-page": "1",
    }),
    jsonResponse([{ id: 2 }], {
      "content-type": "application/json",
      "x-page": "2",
    }),
  ];
  const client = new MocoClient({
    apiKey: "secret",
    baseUrl: "https://demo.mocoapp.com/api/v1",
    fetch: async () => pages.shift(),
  });
  const activities = [];

  for await (const activity of client.activities.listAll({ per_page: 1 })) {
    activities.push(activity);
  }

  assert.deepEqual(activities, [{ id: 1 }, { id: 2 }]);
});

test("supports arbitrary MOCO routes beyond generated resources", async () => {
  let capturedBody;
  const client = new MocoClient({
    authorizationHeader: "Bearer token",
    baseUrl: "https://client.example.test/custom-api",
    fetch: async (url, init) => {
      capturedBody = init.body;
      assert.equal(url.toString(), "https://client.example.test/custom-api/experimental");
      assert.equal(init.headers.get("Authorization"), "Bearer token");
      return jsonResponse({ ok: true }, { "content-type": "application/json" });
    },
  });

  const response = await client.request({
    body: { enabled: true },
    method: "POST",
    path: "/experimental",
  });

  assert.equal(capturedBody, '{"enabled":true}');
  assert.deepEqual(response.data, { ok: true });
});

test("surfaces rate limits with retry metadata", async () => {
  const client = new MocoClient({
    apiKey: "secret",
    baseUrl: "https://demo.mocoapp.com/api/v1",
    fetch: async () =>
      jsonResponse({ error: "Too many requests" }, {
        "content-type": "application/json",
        "retry-after": "7",
      }, 429, "Too Many Requests"),
  });

  await assert.rejects(
    () => client.projects.list(),
    (error) => {
      assert.ok(error instanceof MocoRateLimitError);
      assert.equal(error.status, 429);
      assert.equal(error.retryAfterSeconds, 7);
      assert.equal(error.response.body.error, "Too many requests");
      return true;
    },
  );
});

test("verifies MOCO webhook signatures against the raw payload", async () => {
  const payload = '{"id":111,"description":"a description"}';
  const signatureKey = "1d608b9d72219b90ff2393a1d3ee0ac0";
  const expected = "bf027a86207ef1ca1cb76f5a536b41a14287ab1a0fd5b33bfe86924bc2f48fd1";

  assert.equal(await createWebhookSignature({ payload, signatureKey }), expected);
  assert.equal(await verifyWebhookSignature({ payload, signature: expected, signatureKey }), true);
  assert.equal(
    await verifyWebhookRequest(payload, { "x-moco-signature": expected }, signatureKey),
    true,
  );
  assert.equal(
    await verifyWebhookRequest(`${payload} `, { "x-moco-signature": expected }, signatureKey),
    false,
  );
});

function jsonResponse(body, headers = {}, status = 200, statusText = "OK") {
  return new Response(JSON.stringify(body), {
    headers,
    status,
    statusText,
  });
}
