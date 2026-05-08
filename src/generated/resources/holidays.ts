import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  HolidaysCreateBody,
  HolidaysDeletePath,
  HolidaysGetPath,
  HolidaysListQuery,
  HolidaysUpdateBody,
  HolidaysUpdatePath,
  MocoHoliday
} from "../types";

export class HolidaysApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users/holidays */
  public list(query?: HolidaysListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoHoliday[]>> {
    return this.client.request<MocoHoliday[]>({
      method: "GET",
      path: "/users/holidays",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/holidays. */
  public listAll(query?: HolidaysListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoHoliday> {
    return this.client.paginate<MocoHoliday, HolidaysListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoHoliday[]>>,
      query,
    );
  }

  /** GET /users/holidays/{id} */
  public get(path: HolidaysGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoHoliday>> {
    return this.client.request<MocoHoliday>({
      method: "GET",
      path: "/users/holidays/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /users/holidays */
  public create(body: HolidaysCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoHoliday>> {
    return this.client.request<MocoHoliday>({
      method: "POST",
      path: "/users/holidays",
      body,
      ...options,
    });
  }

  /** PUT /users/holidays/{id} */
  public update(path: HolidaysUpdatePath, body?: HolidaysUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoHoliday>> {
    return this.client.request<MocoHoliday>({
      method: "PUT",
      path: "/users/holidays/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/holidays/{id} */
  public delete(path: HolidaysDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/holidays/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
