import type { MocoPagination, MocoRateLimitInfo } from "./types";

export function parsePagination(headers: Headers): MocoPagination | undefined {
  const page = parseIntegerHeader(headers, "x-page");
  const perPage = parseIntegerHeader(headers, "x-per-page");
  const total = parseIntegerHeader(headers, "x-total");
  const nextUrl = parseNextLink(headers.get("link"));
  const nextPage = nextUrl ? parseNextPage(nextUrl) : undefined;

  if (page === undefined && perPage === undefined && total === undefined && nextUrl === undefined) {
    return undefined;
  }

  const pagination: MocoPagination = {};
  if (page !== undefined) pagination.page = page;
  if (perPage !== undefined) pagination.perPage = perPage;
  if (total !== undefined) pagination.total = total;
  if (nextUrl !== undefined) pagination.nextUrl = nextUrl;
  if (nextPage !== undefined) pagination.nextPage = nextPage;

  return pagination;
}

export function parseRateLimit(headers: Headers): MocoRateLimitInfo | undefined {
  const retryAfterSeconds = parseRetryAfter(headers.get("retry-after"));
  const limit = parseIntegerHeader(headers, "x-ratelimit-limit");
  const remaining = parseIntegerHeader(headers, "x-ratelimit-remaining");
  const resetAt = parseResetAt(headers.get("x-ratelimit-reset"));

  if (
    retryAfterSeconds === undefined &&
    limit === undefined &&
    remaining === undefined &&
    resetAt === undefined
  ) {
    return undefined;
  }

  const rateLimit: MocoRateLimitInfo = {};
  if (limit !== undefined) rateLimit.limit = limit;
  if (remaining !== undefined) rateLimit.remaining = remaining;
  if (resetAt !== undefined) rateLimit.resetAt = resetAt;
  if (retryAfterSeconds !== undefined) rateLimit.retryAfterSeconds = retryAfterSeconds;

  return rateLimit;
}

function parseIntegerHeader(headers: Headers, key: string): number | undefined {
  const value = headers.get(key);
  if (!value) return undefined;

  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseNextLink(linkHeader: string | null): string | undefined {
  if (!linkHeader) return undefined;

  for (const segment of linkHeader.split(",")) {
    const match = segment.match(/<([^>]+)>;\s*rel="next"/);
    if (match?.[1]) return match[1];
  }

  return undefined;
}

function parseNextPage(nextUrl: string): number | undefined {
  try {
    const url = new URL(nextUrl);
    const page = Number.parseInt(url.searchParams.get("page") ?? "", 10);
    return Number.isNaN(page) ? undefined : page;
  } catch {
    return undefined;
  }
}

function parseRetryAfter(value: string | null): number | undefined {
  if (!value) return undefined;

  const seconds = Number.parseInt(value, 10);
  if (!Number.isNaN(seconds)) return seconds;

  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) return undefined;

  return Math.max(0, Math.ceil((timestamp - Date.now()) / 1000));
}

function parseResetAt(value: string | null): Date | undefined {
  if (!value) return undefined;

  const unixSeconds = Number.parseInt(value, 10);
  if (!Number.isNaN(unixSeconds)) return new Date(unixSeconds * 1000);

  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? undefined : new Date(timestamp);
}
