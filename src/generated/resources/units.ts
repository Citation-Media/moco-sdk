import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoUnit,
  UnitsCreateBody,
  UnitsDeleteUserPath,
  UnitsGetPath,
  UnitsListQuery,
  UnitsUpdateBody,
  UnitsUpdatePath
} from "../types";

export class UnitsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /units */
  public list(query?: UnitsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoUnit[]>> {
    return this.client.request<MocoUnit[]>({
      method: "GET",
      path: "/units",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /units. */
  public listAll(query?: UnitsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoUnit> {
    return this.client.paginate<MocoUnit, UnitsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoUnit[]>>,
      query,
    );
  }

  /** GET /units/{id} */
  public get(path: UnitsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoUnit>> {
    return this.client.request<MocoUnit>({
      method: "GET",
      path: "/units/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /units */
  public create(body?: UnitsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoUnit>> {
    return this.client.request<MocoUnit>({
      method: "POST",
      path: "/units",
      body,
      ...options,
    });
  }

  /** PUT /units/{id} */
  public update(path: UnitsUpdatePath, body?: UnitsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoUnit>> {
    return this.client.request<MocoUnit>({
      method: "PUT",
      path: "/units/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/{id} */
  public deleteUser(path: UnitsDeleteUserPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
