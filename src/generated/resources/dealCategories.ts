import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  DealCategoriesCreateBody,
  DealCategoriesDeletePath,
  DealCategoriesGetPath,
  DealCategoriesListQuery,
  DealCategoriesUpdateBody,
  DealCategoriesUpdatePath,
  MocoDealCategory
} from "../types";

export class DealCategoriesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /deal_categories */
  public list(query?: DealCategoriesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoDealCategory[]>> {
    return this.client.request<MocoDealCategory[]>({
      method: "GET",
      path: "/deal_categories",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /deal_categories. */
  public listAll(query?: DealCategoriesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoDealCategory> {
    return this.client.paginate<MocoDealCategory, DealCategoriesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoDealCategory[]>>,
      query,
    );
  }

  /** GET /deal_categories/{id} */
  public get(path: DealCategoriesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoDealCategory>> {
    return this.client.request<MocoDealCategory>({
      method: "GET",
      path: "/deal_categories/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /deal_categories */
  public create(body: DealCategoriesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoDealCategory>> {
    return this.client.request<MocoDealCategory>({
      method: "POST",
      path: "/deal_categories",
      body,
      ...options,
    });
  }

  /** PUT /deal_categories/{id} */
  public update(path: DealCategoriesUpdatePath, body?: DealCategoriesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoDealCategory>> {
    return this.client.request<MocoDealCategory>({
      method: "PUT",
      path: "/deal_categories/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /deal_categories/{id} */
  public delete(path: DealCategoriesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/deal_categories/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
