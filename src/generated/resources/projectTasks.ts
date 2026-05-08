import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectTask,
  ProjectTasksCreateForProjectBody,
  ProjectTasksCreateForProjectPath,
  ProjectTasksDeleteDestroyAllPath,
  ProjectTasksDeletePath,
  ProjectTasksGetPath,
  ProjectTasksListForProjectPath,
  ProjectTasksListForProjectQuery,
  ProjectTasksUpdateBody,
  ProjectTasksUpdatePath
} from "../types";

export class ProjectTasksApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects/{id}/tasks */
  public listForProject(path: ProjectTasksListForProjectPath, query?: ProjectTasksListForProjectQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectTask[]>> {
    return this.client.request<MocoProjectTask[]>({
      method: "GET",
      path: "/projects/{id}/tasks",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{id}/tasks. */
  public listForProjectAll(path: ProjectTasksListForProjectPath, query?: ProjectTasksListForProjectQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectTask> {
    return this.client.paginate<MocoProjectTask, ProjectTasksListForProjectQuery>(
      (pageQuery) => this.listForProject(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProjectTask[]>>,
      query,
    );
  }

  /** GET /projects/{id}/tasks/{id} */
  public get(path: ProjectTasksGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectTask>> {
    return this.client.request<MocoProjectTask>({
      method: "GET",
      path: "/projects/{id}/tasks/{id}",
      pathParams: [path.projectId, path.taskId],
      ...options,
    });
  }

  /** POST /projects/{id}/tasks */
  public createForProject(path: ProjectTasksCreateForProjectPath, body: ProjectTasksCreateForProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectTask>> {
    return this.client.request<MocoProjectTask>({
      method: "POST",
      path: "/projects/{id}/tasks",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/tasks/{id} */
  public update(path: ProjectTasksUpdatePath, body?: ProjectTasksUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectTask>> {
    return this.client.request<MocoProjectTask>({
      method: "PUT",
      path: "/projects/{id}/tasks/{id}",
      pathParams: [path.projectId, path.taskId],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{id}/tasks/{id} */
  public delete(path: ProjectTasksDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}/tasks/{id}",
      pathParams: [path.projectId, path.taskId],
      responseType: "void",
      ...options,
    });
  }

  /** DELETE /projects/{id}/tasks/destroy_all */
  public deleteDestroyAll(path: ProjectTasksDeleteDestroyAllPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}/tasks/destroy_all",
      pathParams: [path.projectId],
      responseType: "void",
      ...options,
    });
  }
}
