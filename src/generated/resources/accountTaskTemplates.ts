import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountTaskTemplatesCreateBody,
  AccountTaskTemplatesDeletePath,
  AccountTaskTemplatesGetPath,
  AccountTaskTemplatesListQuery,
  AccountTaskTemplatesUpdateBody,
  AccountTaskTemplatesUpdatePath,
  MocoAccountTaskTemplate
} from "../types";

export class AccountTaskTemplatesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/task_templates */
  public list(query?: AccountTaskTemplatesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountTaskTemplate[]>> {
    return this.client.request<MocoAccountTaskTemplate[]>({
      method: "GET",
      path: "/account/task_templates",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/task_templates. */
  public listAll(query?: AccountTaskTemplatesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountTaskTemplate> {
    return this.client.paginate<MocoAccountTaskTemplate, AccountTaskTemplatesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountTaskTemplate[]>>,
      query,
    );
  }

  /** GET /account/task_templates/{id} */
  public get(path: AccountTaskTemplatesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountTaskTemplate>> {
    return this.client.request<MocoAccountTaskTemplate>({
      method: "GET",
      path: "/account/task_templates/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /account/task_templates */
  public create(body?: AccountTaskTemplatesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountTaskTemplate>> {
    return this.client.request<MocoAccountTaskTemplate>({
      method: "POST",
      path: "/account/task_templates",
      body,
      ...options,
    });
  }

  /** PUT /account/task_templates/{id} */
  public update(path: AccountTaskTemplatesUpdatePath, body?: AccountTaskTemplatesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountTaskTemplate>> {
    return this.client.request<MocoAccountTaskTemplate>({
      method: "PUT",
      path: "/account/task_templates/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /account/task_templates/{id} */
  public delete(path: AccountTaskTemplatesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/task_templates/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
