import { MocoApiError, MocoConfigurationError, MocoRateLimitError } from "./errors";
import { parsePagination, parseRateLimit } from "./pagination";
import { appendQuery, buildPath, mergeQuery } from "./query";
import type {
  MocoClientConfig,
  MocoFetch,
  MocoId,
  MocoListQuery,
  MocoQuery,
  MocoRequestMetadata,
  MocoRequestOptions,
  MocoResponse,
} from "./types";

const DEFAULT_RATE_LIMIT_RETRY_DELAY_MS = 1_000;
const DEFAULT_MAX_RATE_LIMIT_RETRY_DELAY_MS = 30_000;

export class MocoHttpClient {
  private readonly baseUrl: string;
  private readonly config: MocoClientConfig;
  private readonly fetchImpl: MocoFetch;

  public constructor(config: MocoClientConfig) {
    this.config = { ...config };
    this.baseUrl = resolveBaseUrl(config);
    this.fetchImpl = config.fetch ?? globalThis.fetch;

    if (!this.fetchImpl) {
      throw new MocoConfigurationError(
        "No fetch implementation is available. Pass `fetch` in the client config.",
      );
    }
  }

  public withConfig(config: Partial<MocoClientConfig>): MocoHttpClient {
    return new MocoHttpClient({
      ...this.config,
      ...config,
    });
  }

  public withImpersonation(userId: MocoId | null): MocoHttpClient {
    return this.withConfig({
      impersonateUserId: userId ?? undefined,
    });
  }

  public async request<T = unknown, TQuery extends MocoQuery = MocoQuery>(
    options: MocoRequestOptions<unknown, TQuery>,
  ): Promise<MocoResponse<T>> {
    const method = options.method ?? "GET";
    const path = buildPath(options.path, options.pathParams);
    const query = mergeQuery(this.config.defaultQuery, options.query);
    const url = this.buildUrl(path, query);
    const request = { method, path, url: url.toString() };
    const maxRetries = this.config.rateLimit?.maxRetries ?? 0;

    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      const response = await this.fetchWithTimeout(url, this.buildFetchOptions(method, options));

      if (response.status === 429 && attempt < maxRetries) {
        const retryAfterMs = this.getRateLimitDelayMs(response, attempt);
        await sleep(retryAfterMs);
        continue;
      }

      return this.handleResponse<T>(response, request, options.responseType);
    }

    throw new Error("Unexpected MOCO request retry state.");
  }

  public async *paginate<T, TQuery extends MocoListQuery = MocoListQuery>(
    requestPage: (query: TQuery) => Promise<MocoResponse<readonly T[]>>,
    query?: TQuery,
  ): AsyncGenerator<T> {
    let page = query?.page ?? 1;

    while (true) {
      const response = await requestPage({
        ...(query ?? ({} as TQuery)),
        page,
      });

      for (const item of response.data) {
        yield item;
      }

      const nextPage = response.pagination?.nextPage;
      if (!nextPage) return;

      page = nextPage;
    }
  }

  private buildUrl(path: string, query?: MocoQuery): URL {
    const url = new URL(path.replace(/^\//, ""), `${this.baseUrl}/`);
    appendQuery(url, query);
    return url;
  }

  private buildFetchOptions(
    method: string,
    options: MocoRequestOptions,
  ): RequestInit {
    const headers = new Headers(this.config.defaultHeaders);
    headers.set("Accept", "application/json");

    const authorization = this.resolveAuthorizationHeader();
    if (authorization) headers.set("Authorization", authorization);

    const impersonateUserId =
      options.impersonateUserId === null
        ? undefined
        : options.impersonateUserId ?? this.config.impersonateUserId;
    if (impersonateUserId !== undefined) {
      headers.set("X-IMPERSONATE-USER-ID", String(impersonateUserId));
    }

    if (options.headers) {
      new Headers(options.headers).forEach((value, key) => headers.set(key, value));
    }

    const init: RequestInit = {
      headers,
      method,
    };
    if (options.signal) init.signal = options.signal;

    if (options.body !== undefined) {
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      init.body = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
    }

    return init;
  }

  private async fetchWithTimeout(url: URL, init: RequestInit): Promise<Response> {
    if (!this.config.timeoutMs || init.signal) {
      return this.fetchImpl(url, init);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.config.timeoutMs);

    try {
      return await this.fetchImpl(url, {
        ...init,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }
  }

  private async handleResponse<T>(
    response: Response,
    request: MocoRequestMetadata,
    responseType = "json",
  ): Promise<MocoResponse<T>> {
    const pagination = parsePagination(response.headers);
    const rateLimit = parseRateLimit(response.headers);

    if (!response.ok) {
      const body = await parseBody(response, "json");
      const errorResponse = {
        body,
        headers: response.headers,
        status: response.status,
        statusText: response.statusText,
      };
      const message = buildErrorMessage(response.status, response.statusText, body);

      if (response.status === 429) {
        throw new MocoRateLimitError(message, request, errorResponse, rateLimit);
      }

      throw new MocoApiError(message, request, errorResponse);
    }

    const data = await parseBody<T>(response, responseType);
    const mocoResponse: MocoResponse<T> = {
      data,
      headers: response.headers,
      request,
      status: response.status,
    };

    if (pagination) mocoResponse.pagination = pagination;
    if (rateLimit) mocoResponse.rateLimit = rateLimit;

    return mocoResponse;
  }

  private resolveAuthorizationHeader(): string | undefined {
    if (this.config.authorizationHeader) return this.config.authorizationHeader;
    if (!this.config.apiKey) return undefined;

    if (this.config.authScheme === "bearer") {
      return `Bearer ${this.config.apiKey}`;
    }

    return `Token token=${this.config.apiKey}`;
  }

  private getRateLimitDelayMs(response: Response, attempt: number): number {
    const rateLimit = parseRateLimit(response.headers);
    if (rateLimit?.retryAfterSeconds !== undefined) {
      return rateLimit.retryAfterSeconds * 1000;
    }

    const baseDelay = this.config.rateLimit?.retryDelayMs ?? DEFAULT_RATE_LIMIT_RETRY_DELAY_MS;
    const maxDelay = this.config.rateLimit?.maxRetryDelayMs ?? DEFAULT_MAX_RATE_LIMIT_RETRY_DELAY_MS;
    return Math.min(baseDelay * 2 ** attempt, maxDelay);
  }
}

async function parseBody<T>(response: Response, responseType: string): Promise<T> {
  if (responseType === "void" || response.status === 204) {
    return undefined as T;
  }

  if (responseType === "arrayBuffer") {
    return response.arrayBuffer() as Promise<T>;
  }

  const text = await response.text();
  if (!text) return undefined as T;

  if (responseType === "text") {
    return text as T;
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json") || text.trim().startsWith("{") || text.trim().startsWith("[")) {
    return JSON.parse(text) as T;
  }

  return text as T;
}

function buildErrorMessage(status: number, statusText: string, body: unknown): string {
  const suffix = extractErrorMessage(body);
  const base = `MOCO API request failed with ${status} ${statusText || ""}`.trim();
  return suffix ? `${base}: ${suffix}` : base;
}

function extractErrorMessage(body: unknown): string | undefined {
  if (!body || typeof body !== "object") return undefined;

  const record = body as Record<string, unknown>;
  const candidate = record.message ?? record.error ?? record.errors;

  if (typeof candidate === "string") return candidate;
  if (Array.isArray(candidate)) return candidate.join(", ");
  if (candidate && typeof candidate === "object") return JSON.stringify(candidate);

  return undefined;
}

function resolveBaseUrl(config: MocoClientConfig): string {
  if (config.baseUrl) return trimTrailingSlash(config.baseUrl);

  const domain = config.domain ?? config.subdomain;
  if (!domain) {
    throw new MocoConfigurationError("Configure `baseUrl`, `domain`, or `subdomain` for the MOCO API.");
  }

  const url = domain.startsWith("http") ? domain : `https://${domain}`;
  const withHost = url.includes(".") ? url : `https://${domain}.mocoapp.com`;
  const normalized = trimTrailingSlash(withHost);

  if (normalized.endsWith("/api/v1")) return normalized;
  return `${normalized}/api/v1`;
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
