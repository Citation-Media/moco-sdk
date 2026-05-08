import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "mocoapp-api-docs", "sections");
const RESOURCE_DIR = path.join(ROOT, "src", "generated", "resources");
const GENERATED_DIR = path.join(ROOT, "src", "generated");
const COVERAGE_FILE = path.join(ROOT, "docs", "API_COVERAGE.md");

const HTTP_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);
const GLOBAL_QUERY_FIELDS = ["ids", "updated_after", "custom_properties"];
const PAGINATION_QUERY_FIELDS = ["page", "per_page", "sort_by"];

const SECTION_OVERRIDES = {
  "account/catalog_services": {
    property: "accountCatalogServices",
    className: "AccountCatalogServicesApi",
    entityName: "MocoAccountCatalogService",
    baseSegments: ["account", "catalog_services"],
  },
  "account/custom_properties": {
    property: "accountCustomProperties",
    className: "AccountCustomPropertiesApi",
    entityName: "MocoAccountCustomProperty",
    baseSegments: ["account", "custom_properties"],
  },
  "account/expense_templates": {
    property: "accountExpenseTemplates",
    className: "AccountExpenseTemplatesApi",
    entityName: "MocoAccountExpenseTemplate",
    baseSegments: ["account", "expense_templates"],
  },
  "account/fixed_costs": {
    property: "accountFixedCosts",
    className: "AccountFixedCostsApi",
    entityName: "MocoAccountFixedCost",
    baseSegments: ["account", "fixed_costs"],
  },
  "account/hourly_rates": {
    property: "accountHourlyRates",
    className: "AccountHourlyRatesApi",
    entityName: "MocoAccountHourlyRate",
    baseSegments: ["account", "hourly_rates"],
  },
  "account/internal_hourly_rates": {
    property: "accountInternalHourlyRates",
    className: "AccountInternalHourlyRatesApi",
    entityName: "MocoAccountInternalHourlyRate",
    baseSegments: ["account", "internal_hourly_rates"],
  },
  "account/task_templates": {
    property: "accountTaskTemplates",
    className: "AccountTaskTemplatesApi",
    entityName: "MocoAccountTaskTemplate",
    baseSegments: ["account", "task_templates"],
  },
  contacts: {
    property: "contacts",
    className: "ContactsApi",
    entityName: "MocoContact",
    baseSegments: ["contacts", "people"],
  },
  employments: {
    property: "employments",
    className: "EmploymentsApi",
    entityName: "MocoEmployment",
    baseSegments: ["users", "employments"],
  },
  holidays: {
    property: "holidays",
    className: "HolidaysApi",
    entityName: "MocoHoliday",
    baseSegments: ["users", "holidays"],
  },
  presences: {
    property: "presences",
    className: "PresencesApi",
    entityName: "MocoPresence",
    baseSegments: ["users", "presences"],
  },
  "tags/taggings": {
    property: "taggings",
    className: "TaggingsApi",
    entityName: "MocoTagging",
    baseSegments: ["taggings"],
  },
  "tags/tags": {
    property: "tags",
    className: "TagsApi",
    entityName: "MocoTag",
    baseSegments: ["tags"],
  },
  reports: {
    property: "reports",
    className: "ReportsApi",
    entityName: "MocoReport",
    baseSegments: ["report"],
  },
  vat_codes: {
    property: "vatCodes",
    className: "VatCodesApi",
    entityName: "MocoVatCode",
    baseSegments: ["vat_code"],
  },
  web_hooks: {
    property: "webHooks",
    className: "WebHooksApi",
    entityName: "MocoWebHook",
    baseSegments: ["account", "web_hooks"],
  },
  work_time_adjustments: {
    property: "workTimeAdjustments",
    className: "WorkTimeAdjustmentsApi",
    entityName: "MocoWorkTimeAdjustment",
    baseSegments: ["users", "work_time_adjustments"],
  },
};

const ACTION_ALIASES = new Map([
  ["bulk", "bulkCreate"],
  ["billableSeconds", "updateBillableSeconds"],
  ["startTimer", "startTimer"],
  ["stopTimer", "stopTimer"],
  ["sendEmail", "sendEmail"],
  ["updateStatus", "updateStatus"],
  ["assignProjectGroup", "assignProjectGroup"],
  ["unassignProjectGroup", "unassignProjectGroup"],
  ["disableShare", "disableShare"],
  ["customerApprovalActivate", "activateCustomerApproval"],
  ["customerApprovalDeactivate", "deactivateCustomerApproval"],
  ["assignToProject", "assignToProject"],
  ["storeDocument", "storeDocument"],
  ["destroyAll", "destroyAll"],
]);

const TYPE_BY_VALUE_HINT = [
  { pattern: /true\s*\/\s*false|boolean/i, type: "boolean" },
  { pattern: /date|from|to|due|created|updated|period|timestamp|birthday|started|ended/i, type: "MocoDateValue" },
  { pattern: /id|identifier|number/i, type: "MocoIdLike" },
  { pattern: /tags|ids|list|array|comma/i, type: "MocoArrayLike" },
];

await mkdir(GENERATED_DIR, { recursive: true });
await rm(RESOURCE_DIR, { force: true, recursive: true });
await mkdir(RESOURCE_DIR, { recursive: true });
await mkdir(path.dirname(COVERAGE_FILE), { recursive: true });

const files = await findMarkdownFiles(DOCS_DIR);
const sections = [];

for (const file of files) {
  const relative = path.relative(DOCS_DIR, file).replace(/\\/g, "/").replace(/\.md$/, "");
  const content = await readFile(file, "utf8");
  const endpoints = parseEndpoints(content, relative);
  if (endpoints.length === 0) continue;

  const metadata = buildSectionMetadata(relative, content);
  sections.push({
    ...metadata,
    source: relative,
    file,
    endpoints,
  });
}

sections.sort((left, right) => left.property.localeCompare(right.property));

const typeDefinitions = [];
const endpointDefinitions = [];
const resourceImports = [];
const resourceInstances = [];
const resourceInterface = [];
const coverageLines = [
  "# MOCO API Coverage",
  "",
  "This file is generated from `mocoapp-api-docs/sections` by `npm run generate`.",
  "",
];

for (const section of sections) {
  const enriched = enrichSectionEndpoints(section);
  await writeResource(section, enriched, typeDefinitions);

  endpointDefinitions.push(...enriched);
  resourceImports.push(
    `import { ${section.className} } from "./resources/${section.property}";`,
  );
  resourceInstances.push(`  ${section.property}: new ${section.className}(client),`);
  resourceInterface.push(`  ${section.property}: ${section.className};`);

  coverageLines.push(`## ${section.title}`);
  coverageLines.push("");
  coverageLines.push("| Method | Path | SDK method | Source |");
  coverageLines.push("| --- | --- | --- | --- |");
  for (const endpoint of enriched) {
    coverageLines.push(
      `| ${endpoint.method} | \`${endpoint.path}\` | \`${section.property}.${endpoint.methodName}()\` | \`${endpoint.source}.md\` |`,
    );
  }
  coverageLines.push("");
}

await writeFile(path.join(GENERATED_DIR, "types.ts"), buildTypesFile(typeDefinitions), "utf8");
await writeFile(path.join(GENERATED_DIR, "endpoints.ts"), buildEndpointsFile(endpointDefinitions), "utf8");
await writeFile(
  path.join(GENERATED_DIR, "api.ts"),
  buildGeneratedApiFile(resourceImports, resourceInstances, resourceInterface),
  "utf8",
);
await writeFile(path.join(GENERATED_DIR, "index.ts"), buildGeneratedIndexFile(), "utf8");
await writeFile(COVERAGE_FILE, `${coverageLines.join("\n")}\n`, "utf8");

console.log(`Generated ${endpointDefinitions.length} MOCO endpoints across ${sections.length} resource classes.`);

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function parseEndpoints(content, source) {
  const matches = [...content.matchAll(/^##\s+(GET|POST|PUT|PATCH|DELETE)\s+(.+)$/gm)];
  const endpoints = [];

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const next = matches[index + 1];
    const method = match[1];
    const rawPath = cleanEndpointPath(match[2]);
    const start = match.index + match[0].length;
    const end = next?.index ?? content.length;
    const block = content.slice(start, end);

    if (!HTTP_METHODS.has(method)) continue;

    const bodyFields = method === "GET" || method === "DELETE" ? [] : extractFields(block, "body");

    endpoints.push({
      bodyFields:
        bodyFields.length > 0 || method === "GET" || method === "DELETE"
          ? bodyFields
          : extractJsonBodyFields(block),
      block,
      method,
      path: rawPath,
      queryFields: method === "GET" ? extractFields(block, "query") : [],
      source,
    });
  }

  return endpoints;
}

function extractJsonBodyFields(block) {
  const bodyMatch = block.match(/-d\s+'([\s\S]*?)'\s*```/);
  if (!bodyMatch?.[1]) return [];

  const fields = new Map();
  for (const match of bodyMatch[1].matchAll(/"([a-zA-Z][a-zA-Z0-9_]*)"\s*:/g)) {
    const name = match[1];
    fields.set(name, {
      description: "",
      name,
      required: false,
      type: inferFieldType(name, ""),
    });
  }

  return [...fields.values()].sort((left, right) => left.name.localeCompare(right.name));
}

function cleanEndpointPath(value) {
  const pathValue = value.trim().replace(/`/g, "").replace(/\s.*$/, "");
  return pathValue.startsWith("/") ? pathValue : `/${pathValue}`;
}

function extractFields(block, mode) {
  const fields = new Map();
  const lines = block.split("\n");

  for (const line of lines) {
    const bold = line.match(/^- \*\*([^*]+?)\*\*([*\\]*)\s*[–-]?\s*(.*)$/);
    const plain = line.match(/^- ([a-zA-Z][a-zA-Z0-9_]*)(\\?\*)?\s+[–-]\s+(.*)$/);
    const match = bold ?? plain;
    if (!match) continue;

    const rawName = cleanFieldName(match[1]);
    if (!rawName || rawName.includes(" ") || rawName.startsWith("[")) continue;

    const required = mode === "body" && /\\?\*/.test(`${match[1]}${match[2] ?? ""}`);
    const description = match[3] ?? "";
    const existing = fields.get(rawName);
    fields.set(rawName, {
      description: existing?.description ?? description.trim(),
      name: rawName,
      required: existing?.required || required,
      type: inferFieldType(rawName, description),
    });
  }

  return [...fields.values()].sort((left, right) => left.name.localeCompare(right.name));
}

function cleanFieldName(value) {
  return value
    .replace(/\\\*/g, "")
    .replace(/\*/g, "")
    .replace(/`/g, "")
    .trim()
    .split(/\s/)[0]
    .replace(/[^a-zA-Z0-9_]/g, "");
}

function inferFieldType(name, description) {
  if (name === "page" || name === "per_page") return "number";
  if (name === "sort_by") return "string";
  if (name === "ids") return "MocoIdLike";
  if (name === "updated_after") return "MocoDateValue";
  if (name === "custom_properties") return "MocoCustomPropertiesFilter";

  const enumValues = [...description.matchAll(/"([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value) => value && value.length <= 60 && !value.includes(" "))
    .slice(0, 12);

  if (enumValues.length >= 2 && enumValues.length <= 12) {
    return enumValues.map((value) => JSON.stringify(value)).join(" | ");
  }

  const combined = `${name} ${description}`;
  for (const hint of TYPE_BY_VALUE_HINT) {
    if (hint.pattern.test(combined)) return hint.type;
  }

  return "MocoFieldValue";
}

function buildSectionMetadata(source, content) {
  const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? titleize(source.split("/").at(-1) ?? source);
  const override = SECTION_OVERRIDES[source] ?? {};
  const baseName = source.replace(/\//g, "_");
  const normalizedName = pascal(baseName);

  return {
    baseSegments: override.baseSegments ?? inferBaseSegments(source),
    className: override.className ?? `${normalizedName}Api`,
    entityFields: parseEntityFields(content),
    entityName: override.entityName ?? `Moco${singularPascal(baseName)}`,
    property: override.property ?? camel(baseName),
    title,
  };
}

function parseEntityFields(content) {
  const attributesStart = content.indexOf("## Attributes");
  if (attributesStart === -1) return [];

  const attributesEnd = content.indexOf("\n## ", attributesStart + 1);
  const attributesBlock = content.slice(attributesStart, attributesEnd === -1 ? content.length : attributesEnd);
  const jsonMatch = attributesBlock.match(/```json\s*([\s\S]*?)```/i);
  if (!jsonMatch?.[1]) return [];

  const fields = new Map();
  for (const line of jsonMatch[1].split("\n")) {
    const match = line.match(/^ {2}"([^"]+)":\s*(.+?)\s*,?\s*(?:\/\/.*)?$/);
    if (!match) continue;

    const name = match[1].replace(/[^a-zA-Z0-9_]/g, "");
    if (!name) continue;

    fields.set(name, {
      name,
      type: inferJsonValueType(match[2]),
    });
  }

  return [...fields.values()].sort((left, right) => left.name.localeCompare(right.name));
}

function inferJsonValueType(rawValue) {
  const value = rawValue.trim();
  if (value === "true" || value === "false") return "boolean";
  if (value === "null") return "MocoFieldValue | null";
  if (/^-?\d+(\.\d+)?$/.test(value)) return "number";
  if (value.startsWith('"')) return "string";
  if (value.startsWith("[")) return "readonly MocoFieldValue[]";
  if (value.startsWith("{")) return "Record<string, MocoFieldValue>";
  return "MocoFieldValue";
}

function inferBaseSegments(source) {
  const pieces = source.split("/").at(-1)?.split("_") ?? [source];
  if (pieces[0] === "project") return ["projects", pieces.slice(1).join("_")];
  if (pieces[0] === "purchase") return ["purchases", pieces.slice(1).join("_")];
  if (pieces[0] === "invoice") return ["invoices", pieces.slice(1).join("_")];
  if (pieces[0] === "offer") return ["offers", pieces.slice(1).join("_")];
  if (pieces[0] === "user") return ["users", pieces.slice(1).join("_")];
  return [source.split("/").at(-1)];
}

function enrichSectionEndpoints(section) {
  const usedNames = new Map();

  return section.endpoints.map((endpoint) => {
    const pathInfo = buildPathInfo(endpoint.path);
    const methodName = uniqueMethodName(
      buildMethodName(endpoint, section, pathInfo),
      endpoint,
      section,
      usedNames,
    );
    const operationTypeName = `${section.className.replace(/Api$/, "")}${pascal(methodName)}`;
    const hasGlobalFilters = endpoint.block.includes("Global filters apply") || isListEndpoint(endpoint, pathInfo);
    const queryFields =
      endpoint.method === "GET"
        ? mergeGeneratedFields(
            [
              ...(isListEndpoint(endpoint, pathInfo) ? PAGINATION_QUERY_FIELDS : []),
              ...(hasGlobalFilters ? GLOBAL_QUERY_FIELDS : []),
            ],
            endpoint.queryFields,
          )
        : [];
    const bodyFields = endpoint.bodyFields;
    const hasBody = endpoint.method !== "GET" && endpoint.method !== "DELETE";

    return {
      ...endpoint,
      bodyFields,
      bodyOptional: hasBody && bodyFields.every((field) => !field.required),
      bodyType: hasBody ? `${operationTypeName}Body` : undefined,
      entityName: section.entityName,
      isArray: isArrayResponse(endpoint, pathInfo),
      isBinary: endpoint.path.endsWith(".pdf"),
      isVoid: endpoint.method === "DELETE",
      methodName,
      operationTypeName,
      pathInfo,
      pathType: pathInfo.params.length > 0 ? `${operationTypeName}Path` : undefined,
      queryFields,
      queryType: queryFields.length > 0 ? `${operationTypeName}Query` : undefined,
    };
  });
}

function buildPathInfo(endpointPath) {
  const rawSegments = endpointPath.split("/").filter(Boolean);
  const params = [];
  const staticSegments = [];

  for (let index = 0; index < rawSegments.length; index += 1) {
    const segment = rawSegments[index];
    const placeholder = segment.match(/^\{([^}]+)\}(\.pdf)?$/);

    if (placeholder) {
      params.push({
        raw: placeholder[1],
        name: buildPathParamName(placeholder[1], rawSegments, index),
      });
      if (placeholder[2]) staticSegments.push("pdf");
      continue;
    }

    if (segment.endsWith(".pdf")) {
      staticSegments.push(segment.replace(/\.pdf$/, ""));
      staticSegments.push("pdf");
      continue;
    }

    staticSegments.push(segment);
  }

  return {
    endsWithPlaceholder: /^\{[^}]+\}$/.test(rawSegments.at(-1) ?? ""),
    params,
    rawSegments,
    staticSegments,
  };
}

function buildPathParamName(rawName, rawSegments, index) {
  if (rawName !== "id") return camel(rawName);

  const placeholderCount = rawSegments.filter((segment) => segment.includes("{")).length;
  const isLast = index === rawSegments.length - 1;
  if (placeholderCount === 1 && isLast) return "id";

  const previousStatic = [...rawSegments.slice(0, index)]
    .reverse()
    .find((segment) => !segment.includes("{"));

  return `${singularCamel(previousStatic ?? "resource")}Id`;
}

function buildMethodName(endpoint, section, pathInfo) {
  const actionSegments = relevantActionSegments(pathInfo.staticSegments, section.baseSegments);
  const actionName = camel(actionSegments.join("_"));
  const aliasedAction = ACTION_ALIASES.get(actionName) ?? actionName;
  const isCollection = isListEndpoint(endpoint, pathInfo);
  const parentName = parentResourceName(pathInfo);
  const resourceAction = singularPascal(actionSegments.at(-1) ?? actionName);

  if (actionSegments.length === 0) {
    if (endpoint.method === "GET") {
      if (pathInfo.endsWithPlaceholder) return "get";
      return parentName ? `listFor${pascal(parentName)}` : "list";
    }
    if (endpoint.method === "POST") return parentName ? `createFor${pascal(parentName)}` : "create";
    if (endpoint.method === "PUT" || endpoint.method === "PATCH") return "update";
    if (endpoint.method === "DELETE") return "delete";
  }

  if (endpoint.method === "GET") {
    if (endpoint.path.endsWith(".pdf")) {
      return `get${pascal(actionSegments.filter((segment) => segment !== "pdf").join("_"))}Pdf`.replace(
        "getPdfPdf",
        "getPdf",
      );
    }
    return `${isCollection ? "list" : "get"}${resourceAction || pascal(aliasedAction)}`;
  }

  if (endpoint.method === "POST") {
    if (aliasedAction.startsWith("create") || aliasedAction.endsWith("Create")) return aliasedAction;
    if (pathInfo.endsWithPlaceholder) return aliasedAction;
    return isCollection ? `create${resourceAction}` : aliasedAction;
  }

  if (endpoint.method === "DELETE") {
    return `delete${resourceAction || singularPascal(aliasedAction)}`;
  }

  if (endpoint.method === "PUT" || endpoint.method === "PATCH") {
    if (pathInfo.endsWithPlaceholder) return `update${resourceAction || ""}`.replace(/Update$/, "update");
    return aliasedAction || "update";
  }

  return aliasedAction || "update";
}

function relevantActionSegments(staticSegments, baseSegments) {
  const normalizedBase = new Set(baseSegments.filter(Boolean));
  return staticSegments.filter((segment) => !normalizedBase.has(segment));
}

function isListEndpoint(endpoint, pathInfo) {
  if (endpoint.method !== "GET") return false;
  if (endpoint.path.endsWith(".pdf")) return false;
  if (endpoint.path === "/profile") return false;
  if (pathInfo.endsWithPlaceholder) return false;
  if (/returns an array|retrieve all|retrieve assigned|list/i.test(endpoint.block)) return true;

  return !pathInfo.rawSegments.at(-1)?.includes("}");
}

function isArrayResponse(endpoint, pathInfo) {
  return isListEndpoint(endpoint, pathInfo);
}

function parentResourceName(pathInfo) {
  if (pathInfo.params.length === 0) return undefined;
  const first = pathInfo.params[0]?.name;
  if (!first || first === "id") return undefined;
  return first.replace(/Id$/, "");
}

function uniqueMethodName(name, endpoint, section, usedNames) {
  const existing = usedNames.get(name);
  if (!existing) {
    usedNames.set(name, 1);
    return name;
  }

  const suffix = pascal(
    endpoint.path
      .split("/")
      .filter((segment) => segment && !segment.includes("{"))
      .join("_"),
  );
  const candidate = `${name}${suffix}`;
  const candidateCount = usedNames.get(candidate) ?? 0;
  usedNames.set(candidate, candidateCount + 1);
  if (candidateCount === 0) return candidate;

  return `${candidate}${candidateCount + 1}`;
}

function mergeGeneratedFields(names, fields) {
  const merged = new Map();
  for (const name of names) {
    merged.set(name, {
      description: "",
      name,
      required: false,
      type: inferFieldType(name, ""),
    });
  }

  for (const field of fields) {
    merged.set(field.name, {
      ...field,
      required: false,
    });
  }

  return [...merged.values()].sort((left, right) => left.name.localeCompare(right.name));
}

async function writeResource(section, endpoints, typeDefinitions) {
  const imports = new Set(["MocoHttpClient", "MocoOperationOptions", "MocoResponse"]);
  const typeImports = new Set([section.entityName]);
  const methods = [];

  typeDefinitions.push(buildEntityInterface(section.entityName, section.entityFields));

  for (const endpoint of endpoints) {
    if (endpoint.pathType) {
      typeDefinitions.push(buildFieldsInterface(endpoint.pathType, endpoint.pathInfo.params, "path"));
      typeImports.add(endpoint.pathType);
    }
    if (endpoint.queryType) {
      typeDefinitions.push(buildFieldsInterface(endpoint.queryType, endpoint.queryFields, "query"));
      typeImports.add(endpoint.queryType);
    }
    if (endpoint.bodyType) {
      typeDefinitions.push(buildFieldsInterface(endpoint.bodyType, endpoint.bodyFields, "body"));
      typeImports.add(endpoint.bodyType);
    }

    methods.push(buildMethod(endpoint));
    if (endpoint.method === "GET" && endpoint.isArray) {
      methods.push(buildPaginationMethod(endpoint));
    }
  }

  const content = [
    'import type {',
    `  ${[...imports].sort().join(",\n  ")}`,
    '} from "../../core";',
    'import type {',
    `  ${[...typeImports].sort().join(",\n  ")}`,
    '} from "../types";',
    "",
    `export class ${section.className} {`,
    "  public constructor(private readonly client: MocoHttpClient) {}",
    "",
    methods.join("\n\n"),
    "}",
    "",
  ].join("\n");

  await writeFile(path.join(RESOURCE_DIR, `${section.property}.ts`), content, "utf8");
}

function buildFieldsInterface(name, fields, mode) {
  const base =
    mode === "query" ? "MocoListQuery" : mode === "body" ? "MocoBody" : "Record<string, MocoId>";
  const lines = [`export interface ${name} extends ${base} {`];

  for (const field of fields) {
    const fieldName = mode === "path" ? field.name : cleanFieldName(field.name);
    const optional = mode !== "path" && !field.required ? "?" : "";
    const type = mode === "path" ? "MocoId" : field.type;
    lines.push(`  ${fieldName}${optional}: ${type};`);
  }

  lines.push("}");
  return lines.join("\n");
}

function buildEntityInterface(name, fields) {
  if (fields.length === 0) return `export interface ${name} extends MocoEntity {}`;

  const lines = [`export interface ${name} extends MocoEntity {`];
  for (const field of fields) {
    lines.push(`  ${field.name}?: ${field.type};`);
  }
  lines.push("}");
  return lines.join("\n");
}

function buildMethod(endpoint) {
  const responseType = responseTypeFor(endpoint);
  const returnType = `Promise<MocoResponse<${responseType}>>`;
  const params = methodParameters(endpoint);
  const pathParams = endpoint.pathInfo.params.length
    ? `\n      pathParams: [${endpoint.pathInfo.params.map((param) => `path.${param.name}`).join(", ")}],`
    : "";
  const query = endpoint.queryType ? "\n      query," : "";
  const body = endpoint.bodyType ? "\n      body," : "";
  const responseTypeOption = endpoint.isBinary ? '\n      responseType: "arrayBuffer",' : endpoint.isVoid ? '\n      responseType: "void",' : "";

  return [
    `  /** ${endpoint.method} ${endpoint.path} */`,
    `  public ${endpoint.methodName}(${params}): ${returnType} {`,
    `    return this.client.request<${responseType}>({`,
    `      method: "${endpoint.method}",`,
    `      path: "${endpoint.path}",${pathParams}${query}${body}${responseTypeOption}`,
    "      ...options,",
    "    });",
    "  }",
  ].join("\n");
}

function buildPaginationMethod(endpoint) {
  const itemType = endpoint.entityName;
  const params = methodParameters(endpoint, { pagination: true });
  const callArgs = [];
  if (endpoint.pathType) callArgs.push("path");
  if (endpoint.queryType) callArgs.push("pageQuery");
  callArgs.push("options");
  const queryArg = endpoint.queryType ? "query" : "undefined";
  const pageQueryType = endpoint.queryType ?? "MocoListQuery";

  return [
    `  /** Iterates through every page for ${endpoint.method} ${endpoint.path}. */`,
    `  public ${endpoint.methodName}All(${params}): AsyncGenerator<${itemType}> {`,
    `    return this.client.paginate<${itemType}, ${pageQueryType}>(`,
    `      (pageQuery) => this.${endpoint.methodName}(${callArgs.join(", ")}) as Promise<MocoResponse<readonly ${itemType}[]>>,`,
    `      ${queryArg},`,
    "    );",
    "  }",
  ].join("\n");
}

function methodParameters(endpoint, options = {}) {
  const params = [];
  if (endpoint.pathType) params.push(`path: ${endpoint.pathType}`);

  if (endpoint.bodyType) {
    params.push(`body${endpoint.bodyOptional ? "?" : ""}: ${endpoint.bodyType}`);
  }

  if (endpoint.queryType) {
    params.push(`query${endpoint.pathType || endpoint.bodyType ? "?" : "?"}: ${endpoint.queryType}`);
  }

  params.push("options?: MocoOperationOptions");

  if (options.pagination && endpoint.queryType) {
    return params.join(", ");
  }

  return params.join(", ");
}

function responseTypeFor(endpoint) {
  if (endpoint.isBinary) return "ArrayBuffer";
  if (endpoint.isVoid) return "void";
  if (endpoint.isArray) return `${endpoint.entityName}[]`;
  return endpoint.entityName;
}

function buildTypesFile(typeDefinitions) {
  const uniqueDefinitions = [...new Set(typeDefinitions)];
  return [
    'import type { MocoBody, MocoCustomPropertiesFilter, MocoEntity, MocoFieldValue, MocoId, MocoListQuery } from "../core";',
    "",
    "export type MocoDateValue = string | Date;",
    "export type MocoIdLike = MocoId | readonly MocoId[] | string;",
    "export type MocoArrayLike = string | readonly string[];",
    "",
    uniqueDefinitions.join("\n\n"),
    "",
  ].join("\n");
}

function buildEndpointsFile(endpoints) {
  const definitions = endpoints.map((endpoint) => ({
    bodyParameters: endpoint.bodyFields.map((field) => field.name),
    method: endpoint.method,
    operation: endpoint.methodName,
    path: endpoint.path,
    queryParameters: endpoint.queryFields.map((field) => field.name),
    resource: endpoint.source,
    source: `${endpoint.source}.md`,
  }));

  return [
    'import type { MocoHttpMethod } from "../core";',
    "",
    "export interface MocoEndpointDefinition {",
    "  readonly bodyParameters: readonly string[];",
    "  readonly method: MocoHttpMethod;",
    "  readonly operation: string;",
    "  readonly path: string;",
    "  readonly queryParameters: readonly string[];",
    "  readonly resource: string;",
    "  readonly source: string;",
    "}",
    "",
    `export const MOCO_ENDPOINTS = ${JSON.stringify(definitions, null, 2)} as const satisfies readonly MocoEndpointDefinition[];`,
    "",
    "export type MocoEndpoint = (typeof MOCO_ENDPOINTS)[number];",
    'export type MocoEndpointPath = MocoEndpoint["path"];',
    "",
  ].join("\n");
}

function buildGeneratedApiFile(imports, instances, interfaceLines) {
  return [
    'import type { MocoHttpClient } from "../core";',
    imports.sort().join("\n"),
    "",
    "export interface MocoGeneratedApis {",
    interfaceLines.sort().join("\n"),
    "}",
    "",
    "export function createGeneratedApis(client: MocoHttpClient): MocoGeneratedApis {",
    "  return {",
    instances.sort().join("\n"),
    "  };",
    "}",
    "",
  ].join("\n");
}

function buildGeneratedIndexFile() {
  return [
    'export { createGeneratedApis } from "./api";',
    'export type { MocoGeneratedApis } from "./api";',
    'export { MOCO_ENDPOINTS } from "./endpoints";',
    'export type { MocoEndpoint, MocoEndpointDefinition, MocoEndpointPath } from "./endpoints";',
    'export * from "./types";',
    "",
  ].join("\n");
}

function titleize(value) {
  return value
    .split(/[_/]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function pascal(value) {
  return value
    .split(/[_/\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function camel(value) {
  const valuePascal = pascal(value);
  return valuePascal.charAt(0).toLowerCase() + valuePascal.slice(1);
}

function singularPascal(value) {
  return pascal(
    value
      .split(/[_/\s-]+/)
      .filter(Boolean)
      .map(singular)
      .join("_"),
  );
}

function singularCamel(value) {
  const valuePascal = singularPascal(value);
  return valuePascal.charAt(0).toLowerCase() + valuePascal.slice(1);
}

function singular(value) {
  if (value.endsWith("ies")) return `${value.slice(0, -3)}y`;
  if (value.endsWith("sses")) return value.slice(0, -2);
  if (value.endsWith("s") && !value.endsWith("ss")) return value.slice(0, -1);
  return value;
}
