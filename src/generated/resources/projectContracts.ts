import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectContract,
  ProjectContractsCreateForProjectBody,
  ProjectContractsCreateForProjectPath,
  ProjectContractsDeletePath,
  ProjectContractsGetPath,
  ProjectContractsListForProjectPath,
  ProjectContractsListForProjectQuery,
  ProjectContractsUpdateBody,
  ProjectContractsUpdatePath
} from "../types";

export class ProjectContractsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects/{id}/contracts */
  public listForProject(path: ProjectContractsListForProjectPath, query?: ProjectContractsListForProjectQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectContract[]>> {
    return this.client.request<MocoProjectContract[]>({
      method: "GET",
      path: "/projects/{id}/contracts",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{id}/contracts. */
  public listForProjectAll(path: ProjectContractsListForProjectPath, query?: ProjectContractsListForProjectQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectContract> {
    return this.client.paginate<MocoProjectContract, ProjectContractsListForProjectQuery>(
      (pageQuery) => this.listForProject(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProjectContract[]>>,
      query,
    );
  }

  /** GET /projects/{id}/contracts/{id} */
  public get(path: ProjectContractsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectContract>> {
    return this.client.request<MocoProjectContract>({
      method: "GET",
      path: "/projects/{id}/contracts/{id}",
      pathParams: [path.projectId, path.contractId],
      ...options,
    });
  }

  /** POST /projects/{id}/contracts */
  public createForProject(path: ProjectContractsCreateForProjectPath, body: ProjectContractsCreateForProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectContract>> {
    return this.client.request<MocoProjectContract>({
      method: "POST",
      path: "/projects/{id}/contracts",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/contracts/{id} */
  public update(path: ProjectContractsUpdatePath, body?: ProjectContractsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectContract>> {
    return this.client.request<MocoProjectContract>({
      method: "PUT",
      path: "/projects/{id}/contracts/{id}",
      pathParams: [path.projectId, path.contractId],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{id}/contracts/{id} */
  public delete(path: ProjectContractsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}/contracts/{id}",
      pathParams: [path.projectId, path.contractId],
      responseType: "void",
      ...options,
    });
  }
}
