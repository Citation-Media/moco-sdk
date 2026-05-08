import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchaseCategory,
  PurchaseCategoriesGetPath,
  PurchaseCategoriesListQuery
} from "../types";

export class PurchaseCategoriesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases/categories */
  public list(query?: PurchaseCategoriesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseCategory[]>> {
    return this.client.request<MocoPurchaseCategory[]>({
      method: "GET",
      path: "/purchases/categories",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases/categories. */
  public listAll(query?: PurchaseCategoriesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchaseCategory> {
    return this.client.paginate<MocoPurchaseCategory, PurchaseCategoriesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchaseCategory[]>>,
      query,
    );
  }

  /** GET /purchases/categories/{id} */
  public get(path: PurchaseCategoriesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseCategory>> {
    return this.client.request<MocoPurchaseCategory>({
      method: "GET",
      path: "/purchases/categories/{id}",
      pathParams: [path.id],
      ...options,
    });
  }
}
