import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectExpense,
  ProjectExpensesBulkCreateBody,
  ProjectExpensesBulkCreatePath,
  ProjectExpensesCreateForProjectBody,
  ProjectExpensesCreateForProjectPath,
  ProjectExpensesDeletePath,
  ProjectExpensesDisregardBody,
  ProjectExpensesDisregardPath,
  ProjectExpensesGetPath,
  ProjectExpensesListForProjectPath,
  ProjectExpensesListForProjectQuery,
  ProjectExpensesListQuery,
  ProjectExpensesUpdateBody,
  ProjectExpensesUpdatePath
} from "../types";

export class ProjectExpensesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects/{id}/expenses */
  public listForProject(path: ProjectExpensesListForProjectPath, query?: ProjectExpensesListForProjectQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense[]>> {
    return this.client.request<MocoProjectExpense[]>({
      method: "GET",
      path: "/projects/{id}/expenses",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{id}/expenses. */
  public listForProjectAll(path: ProjectExpensesListForProjectPath, query?: ProjectExpensesListForProjectQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectExpense> {
    return this.client.paginate<MocoProjectExpense, ProjectExpensesListForProjectQuery>(
      (pageQuery) => this.listForProject(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProjectExpense[]>>,
      query,
    );
  }

  /** GET /projects/{id}/expenses/{id} */
  public get(path: ProjectExpensesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense>> {
    return this.client.request<MocoProjectExpense>({
      method: "GET",
      path: "/projects/{id}/expenses/{id}",
      pathParams: [path.projectId, path.expenseId],
      ...options,
    });
  }

  /** POST /projects/{id}/expenses */
  public createForProject(path: ProjectExpensesCreateForProjectPath, body: ProjectExpensesCreateForProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense>> {
    return this.client.request<MocoProjectExpense>({
      method: "POST",
      path: "/projects/{id}/expenses",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** POST /projects/{id}/expenses/bulk */
  public bulkCreate(path: ProjectExpensesBulkCreatePath, body: ProjectExpensesBulkCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense>> {
    return this.client.request<MocoProjectExpense>({
      method: "POST",
      path: "/projects/{id}/expenses/bulk",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/expenses/{id} */
  public update(path: ProjectExpensesUpdatePath, body?: ProjectExpensesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense>> {
    return this.client.request<MocoProjectExpense>({
      method: "PUT",
      path: "/projects/{id}/expenses/{id}",
      pathParams: [path.projectId, path.expenseId],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{id}/expenses/{id} */
  public delete(path: ProjectExpensesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}/expenses/{id}",
      pathParams: [path.projectId, path.expenseId],
      responseType: "void",
      ...options,
    });
  }

  /** POST /projects/{id}/expenses/disregard */
  public disregard(path: ProjectExpensesDisregardPath, body: ProjectExpensesDisregardBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense>> {
    return this.client.request<MocoProjectExpense>({
      method: "POST",
      path: "/projects/{id}/expenses/disregard",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** GET /projects/expenses */
  public list(query?: ProjectExpensesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectExpense[]>> {
    return this.client.request<MocoProjectExpense[]>({
      method: "GET",
      path: "/projects/expenses",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/expenses. */
  public listAll(query?: ProjectExpensesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectExpense> {
    return this.client.paginate<MocoProjectExpense, ProjectExpensesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoProjectExpense[]>>,
      query,
    );
  }
}
