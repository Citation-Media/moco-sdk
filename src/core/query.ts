import type { MocoFieldValue, MocoPathParams, MocoQuery } from "./types";

const PATH_PARAM_PATTERN = /\{[^}]+\}/g;

export function buildPath(path: string, params?: MocoPathParams): string {
  if (!params) return normalizePath(path);

  if (Array.isArray(params)) {
    let index = 0;
    const nextPath = path.replace(PATH_PARAM_PATTERN, () => {
      const value = params[index];
      index += 1;

      if (value === undefined) {
        throw new Error(`Missing path parameter at index ${index - 1} for ${path}`);
      }

      return encodeURIComponent(String(value));
    });

    return normalizePath(nextPath);
  }

  const namedParams = params as Record<string, string | number>;

  return normalizePath(
    path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
      const value = namedParams[key];

      if (value === undefined) {
        throw new Error(`Missing path parameter "${key}" for ${path}`);
      }

      return encodeURIComponent(String(value));
    }),
  );
}

export function mergeQuery(defaultQuery?: MocoQuery, query?: MocoQuery): MocoQuery | undefined {
  if (!defaultQuery && !query) return undefined;

  const merged: MocoQuery = {
    ...(defaultQuery ?? {}),
    ...(query ?? {}),
  };

  const defaultCustomProperties = defaultQuery?.custom_properties as Record<string, MocoFieldValue> | undefined;
  const queryCustomProperties = query?.custom_properties as Record<string, MocoFieldValue> | undefined;

  if (defaultCustomProperties || queryCustomProperties) {
    merged.custom_properties = {
      ...(defaultCustomProperties ?? {}),
      ...(queryCustomProperties ?? {}),
    };
  }

  return merged;
}

export function appendQuery(url: URL, query?: MocoQuery): void {
  if (!query) return;

  for (const [key, value] of Object.entries(query)) {
    appendQueryValue(url.searchParams, key, value);
  }
}

function appendQueryValue(searchParams: URLSearchParams, key: string, value: MocoFieldValue | undefined): void {
  if (value === undefined || value === null) return;

  if (value instanceof Date) {
    searchParams.set(key, value.toISOString());
    return;
  }

  if (Array.isArray(value)) {
    searchParams.set(key, value.map(stringifyQueryValue).join(","));
    return;
  }

  if (typeof value === "object") {
    for (const [childKey, childValue] of Object.entries(value)) {
      appendNestedQueryValue(searchParams, key, childKey, childValue);
    }
    return;
  }

  searchParams.set(key, String(value));
}

function appendNestedQueryValue(
  searchParams: URLSearchParams,
  parentKey: string,
  childKey: string,
  value: MocoFieldValue | undefined,
): void {
  if (value === undefined || value === null) return;

  if (Array.isArray(value)) {
    for (const item of value) {
      searchParams.append(`${parentKey}[${childKey}][]`, stringifyQueryValue(item));
    }
    return;
  }

  searchParams.set(`${parentKey}[${childKey}]`, stringifyQueryValue(value));
}

function stringifyQueryValue(value: MocoFieldValue): string {
  if (value instanceof Date) return value.toISOString();

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function normalizePath(path: string): string {
  if (path.startsWith("/")) return path;
  return `/${path}`;
}
