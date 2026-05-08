import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountCatalogServicesCreateBody,
  AccountCatalogServicesDeleteItemPath,
  AccountCatalogServicesDeletePath,
  AccountCatalogServicesGetItemPath,
  AccountCatalogServicesGetPath,
  AccountCatalogServicesItemsBody,
  AccountCatalogServicesItemsPath,
  AccountCatalogServicesListQuery,
  AccountCatalogServicesUpdateBody,
  AccountCatalogServicesUpdateItemBody,
  AccountCatalogServicesUpdateItemPath,
  AccountCatalogServicesUpdatePath,
  MocoAccountCatalogService
} from "../types";

export class AccountCatalogServicesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/catalog_services */
  public list(query?: AccountCatalogServicesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService[]>> {
    return this.client.request<MocoAccountCatalogService[]>({
      method: "GET",
      path: "/account/catalog_services",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/catalog_services. */
  public listAll(query?: AccountCatalogServicesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountCatalogService> {
    return this.client.paginate<MocoAccountCatalogService, AccountCatalogServicesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountCatalogService[]>>,
      query,
    );
  }

  /** GET /account/catalog_services/{id} */
  public get(path: AccountCatalogServicesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "GET",
      path: "/account/catalog_services/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /account/catalog_services */
  public create(body?: AccountCatalogServicesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "POST",
      path: "/account/catalog_services",
      body,
      ...options,
    });
  }

  /** PUT /account/catalog_services/{id} */
  public update(path: AccountCatalogServicesUpdatePath, body?: AccountCatalogServicesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "PUT",
      path: "/account/catalog_services/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /account/catalog_services/{id} */
  public delete(path: AccountCatalogServicesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/catalog_services/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** GET /account/catalog_services/{service_id}/items/{id} */
  public getItem(path: AccountCatalogServicesGetItemPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "GET",
      path: "/account/catalog_services/{service_id}/items/{id}",
      pathParams: [path.serviceId, path.itemId],
      ...options,
    });
  }

  /** POST /account/catalog_services/{service_id}/items */
  public items(path: AccountCatalogServicesItemsPath, body?: AccountCatalogServicesItemsBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "POST",
      path: "/account/catalog_services/{service_id}/items",
      pathParams: [path.serviceId],
      body,
      ...options,
    });
  }

  /** PUT /account/catalog_services/{service_id}/items/{id} */
  public updateItem(path: AccountCatalogServicesUpdateItemPath, body?: AccountCatalogServicesUpdateItemBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCatalogService>> {
    return this.client.request<MocoAccountCatalogService>({
      method: "PUT",
      path: "/account/catalog_services/{service_id}/items/{id}",
      pathParams: [path.serviceId, path.itemId],
      body,
      ...options,
    });
  }

  /** DELETE /account/catalog_services/{service_id}/items/{id} */
  public deleteItem(path: AccountCatalogServicesDeleteItemPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/catalog_services/{service_id}/items/{id}",
      pathParams: [path.serviceId, path.itemId],
      responseType: "void",
      ...options,
    });
  }
}
