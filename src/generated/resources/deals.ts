import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  DealsCreateBody,
  DealsDeletePath,
  DealsGetPath,
  DealsListQuery,
  DealsUpdateBody,
  DealsUpdatePath,
  MocoDeal
} from "../types";

export class DealsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /deals */
  public list(query?: DealsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoDeal[]>> {
    return this.client.request<MocoDeal[]>({
      method: "GET",
      path: "/deals",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /deals. */
  public listAll(query?: DealsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoDeal> {
    return this.client.paginate<MocoDeal, DealsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoDeal[]>>,
      query,
    );
  }

  /** GET /deals/{id} */
  public get(path: DealsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoDeal>> {
    return this.client.request<MocoDeal>({
      method: "GET",
      path: "/deals/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /deals */
  public create(body: DealsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoDeal>> {
    return this.client.request<MocoDeal>({
      method: "POST",
      path: "/deals",
      body,
      ...options,
    });
  }

  /** PUT /deals/{id} */
  public update(path: DealsUpdatePath, body?: DealsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoDeal>> {
    return this.client.request<MocoDeal>({
      method: "PUT",
      path: "/deals/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /deals/{id} */
  public delete(path: DealsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/deals/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
