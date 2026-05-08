import type {
  MocoWebhookEnvelope,
  MocoWebhookHeaders,
  MocoWebhookSignatureInput,
  MocoWebhookVerificationInput,
} from "./types";

const SIGNATURE_HEADER = "x-moco-signature";

export async function createWebhookSignature(input: MocoWebhookSignatureInput): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encode(input.signatureKey) as BufferSource,
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, toBytes(input.payload) as BufferSource);
  return toHex(new Uint8Array(signature));
}

export async function verifyWebhookSignature(input: MocoWebhookVerificationInput): Promise<boolean> {
  const expected = await createWebhookSignature(input);
  return timingSafeEqualHex(expected, input.signature);
}

export function parseWebhookHeaders(headers: Headers | Record<string, string | string[] | undefined>): MocoWebhookHeaders {
  const get = (name: string): string | undefined => {
    if (headers instanceof Headers) return headers.get(name) ?? undefined;

    const value = headers[name] ?? headers[name.toLowerCase()] ?? headers[name.toUpperCase()];
    if (Array.isArray(value)) return value[0];
    return value;
  };

  return {
    "x-moco-account-url": get("x-moco-account-url"),
    "x-moco-event": get("x-moco-event"),
    "x-moco-signature": get(SIGNATURE_HEADER),
    "x-moco-target": get("x-moco-target"),
    "x-moco-timestamp": get("x-moco-timestamp"),
    "x-moco-user-id": get("x-moco-user-id"),
  };
}

export async function verifyWebhookRequest(
  payload: ArrayBuffer | Uint8Array | string,
  headers: Headers | Record<string, string | string[] | undefined>,
  signatureKey: string,
): Promise<boolean> {
  const parsedHeaders = parseWebhookHeaders(headers);
  const signature = parsedHeaders[SIGNATURE_HEADER];
  if (!signature) return false;

  return verifyWebhookSignature({
    payload,
    signature,
    signatureKey,
  });
}

export function createWebhookEnvelope<TPayload>(
  payload: TPayload,
  headers: Headers | Record<string, string | string[] | undefined>,
): MocoWebhookEnvelope<TPayload> {
  const parsedHeaders = parseWebhookHeaders(headers);
  return {
    accountUrl: parsedHeaders["x-moco-account-url"],
    event: parsedHeaders["x-moco-event"],
    headers: parsedHeaders,
    payload,
    target: parsedHeaders["x-moco-target"],
    timestamp: parsedHeaders["x-moco-timestamp"],
    userId: parsedHeaders["x-moco-user-id"],
  };
}

function toBytes(payload: ArrayBuffer | Uint8Array | string): Uint8Array {
  if (typeof payload === "string") return encode(payload);
  if (payload instanceof Uint8Array) return payload;
  return new Uint8Array(payload);
}

function encode(value: string): Uint8Array {
  return new TextEncoder().encode(value) as unknown as Uint8Array;
}

function toHex(bytes: Uint8Array): string {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqualHex(left: string, right: string): boolean {
  const normalizedLeft = normalizeHex(left);
  const normalizedRight = normalizeHex(right);
  const leftBytes = hexToBytes(normalizedLeft);
  const rightBytes = hexToBytes(normalizedRight);
  const length = Math.max(leftBytes.length, rightBytes.length);
  let diff = leftBytes.length ^ rightBytes.length;

  for (let index = 0; index < length; index += 1) {
    diff |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0);
  }

  return diff === 0;
}

function normalizeHex(value: string): string {
  return value.trim().toLowerCase();
}

function hexToBytes(value: string): Uint8Array {
  if (value.length % 2 !== 0 || /[^a-f0-9]/.test(value)) return new Uint8Array();

  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }

  return bytes;
}
