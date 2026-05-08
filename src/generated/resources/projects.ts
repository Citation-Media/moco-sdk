import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProject,
  ProjectsArchiveBody,
  ProjectsArchivePath,
  ProjectsAssignProjectGroupBody,
  ProjectsAssignProjectGroupPath,
  ProjectsCreateBody,
  ProjectsDeletePath,
  ProjectsDisableShareBody,
  ProjectsDisableSharePath,
  ProjectsGetPath,
  ProjectsListAssignedQuery,
  ProjectsListQuery,
  ProjectsListReportPath,
  ProjectsListReportQuery,
  ProjectsShareBody,
  ProjectsSharePath,
  ProjectsUnarchiveBody,
  ProjectsUnarchivePath,
  ProjectsUnassignProjectGroupBody,
  ProjectsUnassignProjectGroupPath,
  ProjectsUpdateBody,
  ProjectsUpdatePath
} from "../types";

export class ProjectsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects */
  public list(query?: ProjectsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject[]>> {
    return this.client.request<MocoProject[]>({
      method: "GET",
      path: "/projects",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects. */
  public listAll(query?: ProjectsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProject> {
    return this.client.paginate<MocoProject, ProjectsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoProject[]>>,
      query,
    );
  }

  /** GET /projects/assigned */
  public listAssigned(query?: ProjectsListAssignedQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject[]>> {
    return this.client.request<MocoProject[]>({
      method: "GET",
      path: "/projects/assigned",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/assigned. */
  public listAssignedAll(query?: ProjectsListAssignedQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProject> {
    return this.client.paginate<MocoProject, ProjectsListAssignedQuery>(
      (pageQuery) => this.listAssigned(pageQuery, options) as Promise<MocoResponse<readonly MocoProject[]>>,
      query,
    );
  }

  /** GET /projects/{id} */
  public get(path: ProjectsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "GET",
      path: "/projects/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /projects */
  public create(body: ProjectsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "POST",
      path: "/projects",
      body,
      ...options,
    });
  }

  /** PUT /projects/{id} */
  public update(path: ProjectsUpdatePath, body?: ProjectsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{id} */
  public delete(path: ProjectsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** PUT /projects/{id}/archive */
  public archive(path: ProjectsArchivePath, body?: ProjectsArchiveBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/archive",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/unarchive */
  public unarchive(path: ProjectsUnarchivePath, body?: ProjectsUnarchiveBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/unarchive",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** GET /projects/{id}/report */
  public listReport(path: ProjectsListReportPath, query?: ProjectsListReportQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject[]>> {
    return this.client.request<MocoProject[]>({
      method: "GET",
      path: "/projects/{id}/report",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{id}/report. */
  public listReportAll(path: ProjectsListReportPath, query?: ProjectsListReportQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProject> {
    return this.client.paginate<MocoProject, ProjectsListReportQuery>(
      (pageQuery) => this.listReport(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProject[]>>,
      query,
    );
  }

  /** PUT /projects/{id}/share */
  public share(path: ProjectsSharePath, body?: ProjectsShareBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/share",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/disable_share */
  public disableShare(path: ProjectsDisableSharePath, body?: ProjectsDisableShareBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/disable_share",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/assign_project_group */
  public assignProjectGroup(path: ProjectsAssignProjectGroupPath, body?: ProjectsAssignProjectGroupBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/assign_project_group",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/unassign_project_group */
  public unassignProjectGroup(path: ProjectsUnassignProjectGroupPath, body?: ProjectsUnassignProjectGroupBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProject>> {
    return this.client.request<MocoProject>({
      method: "PUT",
      path: "/projects/{id}/unassign_project_group",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }
}
