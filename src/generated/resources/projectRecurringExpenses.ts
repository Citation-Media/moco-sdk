import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectRecurringExpense,
  ProjectRecurringExpensesCreateForProjectBody,
  ProjectRecurringExpensesCreateForProjectPath,
  ProjectRecurringExpensesDeletePath,
  ProjectRecurringExpensesGetPath,
  ProjectRecurringExpensesListForProjectPath,
  ProjectRecurringExpensesListForProjectQuery,
  ProjectRecurringExpensesListQuery,
  ProjectRecurringExpensesRecurBody,
  ProjectRecurringExpensesRecurPath,
  ProjectRecurringExpensesUpdateBody,
  ProjectRecurringExpensesUpdatePath
} from "../types";

export class ProjectRecurringExpensesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /recurring_expenses */
  public list(query?: ProjectRecurringExpensesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense[]>> {
    return this.client.request<MocoProjectRecurringExpense[]>({
      method: "GET",
      path: "/recurring_expenses",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /recurring_expenses. */
  public listAll(query?: ProjectRecurringExpensesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectRecurringExpense> {
    return this.client.paginate<MocoProjectRecurringExpense, ProjectRecurringExpensesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoProjectRecurringExpense[]>>,
      query,
    );
  }

  /** GET /projects/{id}/recurring_expenses */
  public listForProject(path: ProjectRecurringExpensesListForProjectPath, query?: ProjectRecurringExpensesListForProjectQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense[]>> {
    return this.client.request<MocoProjectRecurringExpense[]>({
      method: "GET",
      path: "/projects/{id}/recurring_expenses",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{id}/recurring_expenses. */
  public listForProjectAll(path: ProjectRecurringExpensesListForProjectPath, query?: ProjectRecurringExpensesListForProjectQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectRecurringExpense> {
    return this.client.paginate<MocoProjectRecurringExpense, ProjectRecurringExpensesListForProjectQuery>(
      (pageQuery) => this.listForProject(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProjectRecurringExpense[]>>,
      query,
    );
  }

  /** GET /projects/{id}/recurring_expenses/{id} */
  public get(path: ProjectRecurringExpensesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense>> {
    return this.client.request<MocoProjectRecurringExpense>({
      method: "GET",
      path: "/projects/{id}/recurring_expenses/{id}",
      pathParams: [path.projectId, path.recurringExpenseId],
      ...options,
    });
  }

  /** POST /projects/{id}/recurring_expenses */
  public createForProject(path: ProjectRecurringExpensesCreateForProjectPath, body: ProjectRecurringExpensesCreateForProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense>> {
    return this.client.request<MocoProjectRecurringExpense>({
      method: "POST",
      path: "/projects/{id}/recurring_expenses",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{id}/recurring_expenses/{id} */
  public update(path: ProjectRecurringExpensesUpdatePath, body?: ProjectRecurringExpensesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense>> {
    return this.client.request<MocoProjectRecurringExpense>({
      method: "PUT",
      path: "/projects/{id}/recurring_expenses/{id}",
      pathParams: [path.projectId, path.recurringExpenseId],
      body,
      ...options,
    });
  }

  /** POST /projects/{id}/recurring_expenses/{id}/recur */
  public recur(path: ProjectRecurringExpensesRecurPath, body?: ProjectRecurringExpensesRecurBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectRecurringExpense>> {
    return this.client.request<MocoProjectRecurringExpense>({
      method: "POST",
      path: "/projects/{id}/recurring_expenses/{id}/recur",
      pathParams: [path.projectId, path.recurringExpenseId],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{id}/recurring_expenses/{id} */
  public delete(path: ProjectRecurringExpensesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{id}/recurring_expenses/{id}",
      pathParams: [path.projectId, path.recurringExpenseId],
      responseType: "void",
      ...options,
    });
  }
}
