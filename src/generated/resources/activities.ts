import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  ActivitiesBulkCreateBody,
  ActivitiesCreateBody,
  ActivitiesDeletePath,
  ActivitiesDisregardBody,
  ActivitiesGetPath,
  ActivitiesListQuery,
  ActivitiesStartTimerBody,
  ActivitiesStartTimerPath,
  ActivitiesStopTimerBody,
  ActivitiesStopTimerPath,
  ActivitiesUpdateBillableSecondsBody,
  ActivitiesUpdateBillableSecondsPath,
  ActivitiesUpdateBody,
  ActivitiesUpdatePath,
  MocoActivity
} from "../types";

export class ActivitiesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /activities */
  public list(query?: ActivitiesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity[]>> {
    return this.client.request<MocoActivity[]>({
      method: "GET",
      path: "/activities",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /activities. */
  public listAll(query?: ActivitiesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoActivity> {
    return this.client.paginate<MocoActivity, ActivitiesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoActivity[]>>,
      query,
    );
  }

  /** GET /activities/{id} */
  public get(path: ActivitiesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "GET",
      path: "/activities/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /activities */
  public create(body: ActivitiesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "POST",
      path: "/activities",
      body,
      ...options,
    });
  }

  /** POST /activities/bulk */
  public bulkCreate(body?: ActivitiesBulkCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "POST",
      path: "/activities/bulk",
      body,
      ...options,
    });
  }

  /** PUT /activities/{id} */
  public update(path: ActivitiesUpdatePath, body?: ActivitiesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "PUT",
      path: "/activities/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** PATCH /activities/{id}/billable_seconds */
  public updateBillableSeconds(path: ActivitiesUpdateBillableSecondsPath, body?: ActivitiesUpdateBillableSecondsBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "PATCH",
      path: "/activities/{id}/billable_seconds",
      pathParams: [path.activityId],
      body,
      ...options,
    });
  }

  /** PATCH /activities/{id}/start_timer */
  public startTimer(path: ActivitiesStartTimerPath, body?: ActivitiesStartTimerBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "PATCH",
      path: "/activities/{id}/start_timer",
      pathParams: [path.activityId],
      body,
      ...options,
    });
  }

  /** PATCH /activities/{id}/stop_timer */
  public stopTimer(path: ActivitiesStopTimerPath, body?: ActivitiesStopTimerBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "PATCH",
      path: "/activities/{id}/stop_timer",
      pathParams: [path.activityId],
      body,
      ...options,
    });
  }

  /** DELETE /activities/{id} */
  public delete(path: ActivitiesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/activities/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** POST /activities/disregard */
  public disregard(body: ActivitiesDisregardBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoActivity>> {
    return this.client.request<MocoActivity>({
      method: "POST",
      path: "/activities/disregard",
      body,
      ...options,
    });
  }
}
