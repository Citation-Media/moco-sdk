import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoSchedule,
  SchedulesCreateBody,
  SchedulesDeletePath,
  SchedulesGetPath,
  SchedulesListQuery,
  SchedulesUpdateBody,
  SchedulesUpdatePath
} from "../types";

export class SchedulesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /schedules */
  public list(query?: SchedulesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoSchedule[]>> {
    return this.client.request<MocoSchedule[]>({
      method: "GET",
      path: "/schedules",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /schedules. */
  public listAll(query?: SchedulesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoSchedule> {
    return this.client.paginate<MocoSchedule, SchedulesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoSchedule[]>>,
      query,
    );
  }

  /** GET /schedules/{id} */
  public get(path: SchedulesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoSchedule>> {
    return this.client.request<MocoSchedule>({
      method: "GET",
      path: "/schedules/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /schedules */
  public create(body: SchedulesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoSchedule>> {
    return this.client.request<MocoSchedule>({
      method: "POST",
      path: "/schedules",
      body,
      ...options,
    });
  }

  /** PUT /schedules/{id} */
  public update(path: SchedulesUpdatePath, body?: SchedulesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoSchedule>> {
    return this.client.request<MocoSchedule>({
      method: "PUT",
      path: "/schedules/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /schedules/{id} */
  public delete(path: SchedulesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/schedules/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
