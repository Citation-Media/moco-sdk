import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectPaymentSchedule,
  ProjectPaymentSchedulesCreateForProjectBody,
  ProjectPaymentSchedulesCreateForProjectPath,
  ProjectPaymentSchedulesDeletePath,
  ProjectPaymentSchedulesGetPath,
  ProjectPaymentSchedulesListForProjectPath,
  ProjectPaymentSchedulesListForProjectQuery,
  ProjectPaymentSchedulesListQuery,
  ProjectPaymentSchedulesUpdateBody,
  ProjectPaymentSchedulesUpdatePath
} from "../types";

export class ProjectPaymentSchedulesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects/payment_schedules */
  public list(query?: ProjectPaymentSchedulesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectPaymentSchedule[]>> {
    return this.client.request<MocoProjectPaymentSchedule[]>({
      method: "GET",
      path: "/projects/payment_schedules",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/payment_schedules. */
  public listAll(query?: ProjectPaymentSchedulesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectPaymentSchedule> {
    return this.client.paginate<MocoProjectPaymentSchedule, ProjectPaymentSchedulesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoProjectPaymentSchedule[]>>,
      query,
    );
  }

  /** GET /projects/{project_id}/payment_schedules */
  public listForProject(path: ProjectPaymentSchedulesListForProjectPath, query?: ProjectPaymentSchedulesListForProjectQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectPaymentSchedule[]>> {
    return this.client.request<MocoProjectPaymentSchedule[]>({
      method: "GET",
      path: "/projects/{project_id}/payment_schedules",
      pathParams: [path.projectId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/{project_id}/payment_schedules. */
  public listForProjectAll(path: ProjectPaymentSchedulesListForProjectPath, query?: ProjectPaymentSchedulesListForProjectQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectPaymentSchedule> {
    return this.client.paginate<MocoProjectPaymentSchedule, ProjectPaymentSchedulesListForProjectQuery>(
      (pageQuery) => this.listForProject(path, pageQuery, options) as Promise<MocoResponse<readonly MocoProjectPaymentSchedule[]>>,
      query,
    );
  }

  /** GET /projects/{project_id}/payment_schedules/{id} */
  public get(path: ProjectPaymentSchedulesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectPaymentSchedule>> {
    return this.client.request<MocoProjectPaymentSchedule>({
      method: "GET",
      path: "/projects/{project_id}/payment_schedules/{id}",
      pathParams: [path.projectId, path.paymentScheduleId],
      ...options,
    });
  }

  /** POST /projects/{project_id}/payment_schedules */
  public createForProject(path: ProjectPaymentSchedulesCreateForProjectPath, body: ProjectPaymentSchedulesCreateForProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectPaymentSchedule>> {
    return this.client.request<MocoProjectPaymentSchedule>({
      method: "POST",
      path: "/projects/{project_id}/payment_schedules",
      pathParams: [path.projectId],
      body,
      ...options,
    });
  }

  /** PUT /projects/{project_id}/payment_schedules/{id} */
  public update(path: ProjectPaymentSchedulesUpdatePath, body?: ProjectPaymentSchedulesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectPaymentSchedule>> {
    return this.client.request<MocoProjectPaymentSchedule>({
      method: "PUT",
      path: "/projects/{project_id}/payment_schedules/{id}",
      pathParams: [path.projectId, path.paymentScheduleId],
      body,
      ...options,
    });
  }

  /** DELETE /projects/{project_id}/payment_schedules/{id} */
  public delete(path: ProjectPaymentSchedulesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/projects/{project_id}/payment_schedules/{id}",
      pathParams: [path.projectId, path.paymentScheduleId],
      responseType: "void",
      ...options,
    });
  }
}
