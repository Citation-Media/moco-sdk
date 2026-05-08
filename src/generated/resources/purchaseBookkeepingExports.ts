import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchaseBookkeepingExport,
  PurchaseBookkeepingExportsCreateBody,
  PurchaseBookkeepingExportsGetPath,
  PurchaseBookkeepingExportsListQuery
} from "../types";

export class PurchaseBookkeepingExportsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases/bookkeeping_exports */
  public list(query?: PurchaseBookkeepingExportsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseBookkeepingExport[]>> {
    return this.client.request<MocoPurchaseBookkeepingExport[]>({
      method: "GET",
      path: "/purchases/bookkeeping_exports",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases/bookkeeping_exports. */
  public listAll(query?: PurchaseBookkeepingExportsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchaseBookkeepingExport> {
    return this.client.paginate<MocoPurchaseBookkeepingExport, PurchaseBookkeepingExportsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchaseBookkeepingExport[]>>,
      query,
    );
  }

  /** GET /purchases/bookkeeping_exports/{id} */
  public get(path: PurchaseBookkeepingExportsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseBookkeepingExport>> {
    return this.client.request<MocoPurchaseBookkeepingExport>({
      method: "GET",
      path: "/purchases/bookkeeping_exports/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /purchases/bookkeeping_exports */
  public create(body: PurchaseBookkeepingExportsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseBookkeepingExport>> {
    return this.client.request<MocoPurchaseBookkeepingExport>({
      method: "POST",
      path: "/purchases/bookkeeping_exports",
      body,
      ...options,
    });
  }
}
