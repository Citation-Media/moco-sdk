import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountExpenseTemplatesCreateBody,
  AccountExpenseTemplatesDeletePath,
  AccountExpenseTemplatesGetPath,
  AccountExpenseTemplatesListQuery,
  AccountExpenseTemplatesUpdateBody,
  AccountExpenseTemplatesUpdatePath,
  MocoAccountExpenseTemplate
} from "../types";

export class AccountExpenseTemplatesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/expense_templates */
  public list(query?: AccountExpenseTemplatesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountExpenseTemplate[]>> {
    return this.client.request<MocoAccountExpenseTemplate[]>({
      method: "GET",
      path: "/account/expense_templates",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/expense_templates. */
  public listAll(query?: AccountExpenseTemplatesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountExpenseTemplate> {
    return this.client.paginate<MocoAccountExpenseTemplate, AccountExpenseTemplatesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountExpenseTemplate[]>>,
      query,
    );
  }

  /** GET /account/expense_templates/{id} */
  public get(path: AccountExpenseTemplatesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountExpenseTemplate>> {
    return this.client.request<MocoAccountExpenseTemplate>({
      method: "GET",
      path: "/account/expense_templates/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /account/expense_templates */
  public create(body?: AccountExpenseTemplatesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountExpenseTemplate>> {
    return this.client.request<MocoAccountExpenseTemplate>({
      method: "POST",
      path: "/account/expense_templates",
      body,
      ...options,
    });
  }

  /** PUT /account/expense_templates/{id} */
  public update(path: AccountExpenseTemplatesUpdatePath, body?: AccountExpenseTemplatesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountExpenseTemplate>> {
    return this.client.request<MocoAccountExpenseTemplate>({
      method: "PUT",
      path: "/account/expense_templates/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /account/expense_templates/{id} */
  public delete(path: AccountExpenseTemplatesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/expense_templates/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
