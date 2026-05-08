import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  CompaniesArchiveBody,
  CompaniesArchivePath,
  CompaniesCreateBody,
  CompaniesDeletePath,
  CompaniesGetPath,
  CompaniesListQuery,
  CompaniesUnarchiveBody,
  CompaniesUnarchivePath,
  CompaniesUpdateBody,
  CompaniesUpdatePath,
  MocoCompany
} from "../types";

export class CompaniesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /companies */
  public list(query?: CompaniesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany[]>> {
    return this.client.request<MocoCompany[]>({
      method: "GET",
      path: "/companies",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /companies. */
  public listAll(query?: CompaniesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoCompany> {
    return this.client.paginate<MocoCompany, CompaniesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoCompany[]>>,
      query,
    );
  }

  /** GET /companies/{id} */
  public get(path: CompaniesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany>> {
    return this.client.request<MocoCompany>({
      method: "GET",
      path: "/companies/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /companies */
  public create(body: CompaniesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany>> {
    return this.client.request<MocoCompany>({
      method: "POST",
      path: "/companies",
      body,
      ...options,
    });
  }

  /** PUT /companies/{id} */
  public update(path: CompaniesUpdatePath, body?: CompaniesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany>> {
    return this.client.request<MocoCompany>({
      method: "PUT",
      path: "/companies/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /companies/{id} */
  public delete(path: CompaniesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/companies/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** PUT /companies/{id}/archive */
  public archive(path: CompaniesArchivePath, body?: CompaniesArchiveBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany>> {
    return this.client.request<MocoCompany>({
      method: "PUT",
      path: "/companies/{id}/archive",
      pathParams: [path.companyId],
      body,
      ...options,
    });
  }

  /** PUT /companies/{id}/unarchive */
  public unarchive(path: CompaniesUnarchivePath, body?: CompaniesUnarchiveBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoCompany>> {
    return this.client.request<MocoCompany>({
      method: "PUT",
      path: "/companies/{id}/unarchive",
      pathParams: [path.companyId],
      body,
      ...options,
    });
  }
}
