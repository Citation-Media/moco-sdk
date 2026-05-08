export interface MocoWebhookHeaders {
  "x-moco-account-url"?: string | undefined;
  "x-moco-event"?: string | undefined;
  "x-moco-signature"?: string | undefined;
  "x-moco-target"?: string | undefined;
  "x-moco-timestamp"?: string | undefined;
  "x-moco-user-id"?: string | undefined;
}

export interface MocoWebhookSignatureInput {
  payload: ArrayBuffer | Uint8Array | string;
  signatureKey: string;
}

export interface MocoWebhookVerificationInput extends MocoWebhookSignatureInput {
  signature: string;
}

export interface MocoWebhookEnvelope<TPayload = unknown> {
  accountUrl?: string | undefined;
  event?: string | undefined;
  headers: MocoWebhookHeaders;
  payload: TPayload;
  target?: string | undefined;
  timestamp?: string | undefined;
  userId?: string | undefined;
}
