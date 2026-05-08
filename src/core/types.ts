export type MocoHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type MocoId = string | number;

export type MocoPrimitive = string | number | boolean | null;

export type MocoFieldValue =
  | MocoPrimitive
  | Date
  | readonly MocoFieldValue[]
  | { readonly [key: string]: MocoFieldValue };

export type MocoRecord = Record<string, MocoFieldValue | undefined>;

export interface MocoEntity extends MocoRecord {
  id?: MocoId;
  created_at?: string;
  updated_at?: string;
}

export type MocoCustomPropertiesFilter = Record<
  string,
  string | number | boolean | readonly (string | number | boolean)[]
>;

export interface MocoGlobalFilters {
  ids?: MocoId | readonly MocoId[] | string;
  updated_after?: string | Date;
  custom_properties?: MocoCustomPropertiesFilter;
}

export interface MocoPaginationQuery {
  page?: number;
  per_page?: number;
  sort_by?: string;
}

export interface MocoQuery extends MocoPaginationQuery {
  [key: string]: MocoFieldValue | undefined;
}

export interface MocoListQuery extends MocoQuery, MocoGlobalFilters {}

export interface MocoBody {
  [key: string]: MocoFieldValue | undefined;
}

export interface MocoPagination {
  page?: number;
  perPage?: number;
  total?: number;
  nextUrl?: string;
  nextPage?: number;
}

export interface MocoRateLimitInfo {
  limit?: number;
  remaining?: number;
  resetAt?: Date;
  retryAfterSeconds?: number;
}

export interface MocoRequestMetadata {
  method: MocoHttpMethod;
  path: string;
  url: string;
}

export interface MocoResponse<T> {
  data: T;
  headers: Headers;
  pagination?: MocoPagination;
  rateLimit?: MocoRateLimitInfo;
  request: MocoRequestMetadata;
  status: number;
}

export interface MocoSessionCredentials extends MocoBody {
  email: string;
  password: string;
}

export interface MocoSession extends MocoEntity {
  uuid?: string;
}

export type MocoAuthScheme = "token" | "bearer";

export interface MocoRateLimitRetryConfig {
  maxRetries?: number | undefined;
  retryDelayMs?: number | undefined;
  maxRetryDelayMs?: number | undefined;
}

export type MocoFetch = typeof fetch;

export interface MocoClientConfig {
  /**
   * Full API base URL. Use this for dedicated or proxied MOCO installations.
   * Example: https://example.mocoapp.com/api/v1
   */
  baseUrl?: string | undefined;
  /**
   * MOCO account subdomain. `example` becomes
   * https://example.mocoapp.com/api/v1.
   */
  subdomain?: string | undefined;
  /**
   * Full MOCO account host or subdomain. If no protocol is supplied, HTTPS is
   * assumed and `/api/v1` is appended when missing.
   */
  domain?: string | undefined;
  apiKey?: string | undefined;
  authScheme?: MocoAuthScheme | undefined;
  /**
   * Raw Authorization header value. Takes precedence over `apiKey`.
   */
  authorizationHeader?: string | undefined;
  defaultHeaders?: HeadersInit | undefined;
  defaultQuery?: MocoQuery | undefined;
  impersonateUserId?: MocoId | undefined;
  fetch?: MocoFetch | undefined;
  timeoutMs?: number | undefined;
  rateLimit?: MocoRateLimitRetryConfig | undefined;
}

export interface MocoOperationOptions {
  headers?: HeadersInit | undefined;
  impersonateUserId?: MocoId | null | undefined;
  responseType?: MocoResponseType | undefined;
  signal?: AbortSignal | undefined;
}

export type MocoPathParams = Record<string, MocoId> | readonly MocoId[];

export type MocoResponseType = "json" | "text" | "arrayBuffer" | "void";

export interface MocoRequestOptions<TBody = unknown, TQuery extends MocoQuery = MocoQuery>
  extends MocoOperationOptions {
  body?: TBody | undefined;
  method?: MocoHttpMethod | undefined;
  path: string;
  pathParams?: MocoPathParams | undefined;
  query?: TQuery | undefined;
}
