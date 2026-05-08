import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  EmploymentsCreateBody,
  EmploymentsDeletePath,
  EmploymentsGetPath,
  EmploymentsListQuery,
  EmploymentsUpdateBody,
  EmploymentsUpdatePath,
  MocoEmployment
} from "../types";

export class EmploymentsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users/employments */
  public list(query?: EmploymentsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoEmployment[]>> {
    return this.client.request<MocoEmployment[]>({
      method: "GET",
      path: "/users/employments",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/employments. */
  public listAll(query?: EmploymentsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoEmployment> {
    return this.client.paginate<MocoEmployment, EmploymentsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoEmployment[]>>,
      query,
    );
  }

  /** POST /users/employments */
  public create(body: EmploymentsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoEmployment>> {
    return this.client.request<MocoEmployment>({
      method: "POST",
      path: "/users/employments",
      body,
      ...options,
    });
  }

  /** GET /users/employments/{id} */
  public get(path: EmploymentsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoEmployment>> {
    return this.client.request<MocoEmployment>({
      method: "GET",
      path: "/users/employments/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** PUT /users/employments/{id} */
  public update(path: EmploymentsUpdatePath, body?: EmploymentsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoEmployment>> {
    return this.client.request<MocoEmployment>({
      method: "PUT",
      path: "/users/employments/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/employments/{id} */
  public delete(path: EmploymentsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/employments/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
