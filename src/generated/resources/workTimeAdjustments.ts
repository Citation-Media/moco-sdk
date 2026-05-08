import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoWorkTimeAdjustment,
  WorkTimeAdjustmentsCreateBody,
  WorkTimeAdjustmentsDeletePath,
  WorkTimeAdjustmentsGetPath,
  WorkTimeAdjustmentsListQuery,
  WorkTimeAdjustmentsUpdateBody,
  WorkTimeAdjustmentsUpdatePath
} from "../types";

export class WorkTimeAdjustmentsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users/work_time_adjustments */
  public list(query?: WorkTimeAdjustmentsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoWorkTimeAdjustment[]>> {
    return this.client.request<MocoWorkTimeAdjustment[]>({
      method: "GET",
      path: "/users/work_time_adjustments",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/work_time_adjustments. */
  public listAll(query?: WorkTimeAdjustmentsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoWorkTimeAdjustment> {
    return this.client.paginate<MocoWorkTimeAdjustment, WorkTimeAdjustmentsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoWorkTimeAdjustment[]>>,
      query,
    );
  }

  /** GET /users/work_time_adjustments/{id} */
  public get(path: WorkTimeAdjustmentsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoWorkTimeAdjustment>> {
    return this.client.request<MocoWorkTimeAdjustment>({
      method: "GET",
      path: "/users/work_time_adjustments/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /users/work_time_adjustments */
  public create(body: WorkTimeAdjustmentsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWorkTimeAdjustment>> {
    return this.client.request<MocoWorkTimeAdjustment>({
      method: "POST",
      path: "/users/work_time_adjustments",
      body,
      ...options,
    });
  }

  /** PUT /users/work_time_adjustments/{id} */
  public update(path: WorkTimeAdjustmentsUpdatePath, body?: WorkTimeAdjustmentsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWorkTimeAdjustment>> {
    return this.client.request<MocoWorkTimeAdjustment>({
      method: "PUT",
      path: "/users/work_time_adjustments/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/work_time_adjustments/{id} */
  public delete(path: WorkTimeAdjustmentsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/work_time_adjustments/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
