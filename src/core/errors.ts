import type { MocoHttpMethod, MocoRateLimitInfo } from "./types";

export interface MocoErrorRequest {
  method: MocoHttpMethod;
  path: string;
  url: string;
}

export interface MocoErrorResponse {
  body: unknown;
  headers: Headers;
  status: number;
  statusText: string;
}

export class MocoApiError extends Error {
  public readonly request: MocoErrorRequest;
  public readonly response: MocoErrorResponse | undefined;

  public constructor(message: string, request: MocoErrorRequest, response?: MocoErrorResponse) {
    super(message);
    this.name = "MocoApiError";
    this.request = request;
    this.response = response;
  }

  public get status(): number | undefined {
    return this.response?.status;
  }
}

export class MocoRateLimitError extends MocoApiError {
  public readonly retryAfterSeconds: number | undefined;
  public readonly retryAt: Date | undefined;
  public readonly rateLimit: MocoRateLimitInfo | undefined;

  public constructor(
    message: string,
    request: MocoErrorRequest,
    response: MocoErrorResponse,
    rateLimit?: MocoRateLimitInfo,
  ) {
    super(message, request, response);
    this.name = "MocoRateLimitError";
    this.rateLimit = rateLimit;
    this.retryAfterSeconds = rateLimit?.retryAfterSeconds;
    this.retryAt = rateLimit?.retryAfterSeconds
      ? new Date(Date.now() + rateLimit.retryAfterSeconds * 1000)
      : undefined;
  }
}

export class MocoConfigurationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = "MocoConfigurationError";
  }
}
