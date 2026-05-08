import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoUser,
  UsersCreateBody,
  UsersDeletePath,
  UsersGetPath,
  UsersListPerformanceReportPath,
  UsersListPerformanceReportQuery,
  UsersListQuery,
  UsersUpdateBody,
  UsersUpdatePath
} from "../types";

export class UsersApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users */
  public list(query?: UsersListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoUser[]>> {
    return this.client.request<MocoUser[]>({
      method: "GET",
      path: "/users",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users. */
  public listAll(query?: UsersListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoUser> {
    return this.client.paginate<MocoUser, UsersListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoUser[]>>,
      query,
    );
  }

  /** GET /users/{id} */
  public get(path: UsersGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoUser>> {
    return this.client.request<MocoUser>({
      method: "GET",
      path: "/users/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /users */
  public create(body: UsersCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoUser>> {
    return this.client.request<MocoUser>({
      method: "POST",
      path: "/users",
      body,
      ...options,
    });
  }

  /** PUT /users/{id} */
  public update(path: UsersUpdatePath, body?: UsersUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoUser>> {
    return this.client.request<MocoUser>({
      method: "PUT",
      path: "/users/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/{id} */
  public delete(path: UsersDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** GET /users/{id}/performance_report */
  public listPerformanceReport(path: UsersListPerformanceReportPath, query?: UsersListPerformanceReportQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoUser[]>> {
    return this.client.request<MocoUser[]>({
      method: "GET",
      path: "/users/{id}/performance_report",
      pathParams: [path.userId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/{id}/performance_report. */
  public listPerformanceReportAll(path: UsersListPerformanceReportPath, query?: UsersListPerformanceReportQuery, options?: MocoOperationOptions): AsyncGenerator<MocoUser> {
    return this.client.paginate<MocoUser, UsersListPerformanceReportQuery>(
      (pageQuery) => this.listPerformanceReport(path, pageQuery, options) as Promise<MocoResponse<readonly MocoUser[]>>,
      query,
    );
  }
}
