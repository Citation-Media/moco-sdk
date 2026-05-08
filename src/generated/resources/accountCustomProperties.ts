import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountCustomPropertiesCreateBody,
  AccountCustomPropertiesDeletePath,
  AccountCustomPropertiesGetPath,
  AccountCustomPropertiesListQuery,
  AccountCustomPropertiesUpdateBody,
  AccountCustomPropertiesUpdatePath,
  MocoAccountCustomProperty
} from "../types";

export class AccountCustomPropertiesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/custom_properties */
  public list(query?: AccountCustomPropertiesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCustomProperty[]>> {
    return this.client.request<MocoAccountCustomProperty[]>({
      method: "GET",
      path: "/account/custom_properties",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/custom_properties. */
  public listAll(query?: AccountCustomPropertiesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountCustomProperty> {
    return this.client.paginate<MocoAccountCustomProperty, AccountCustomPropertiesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountCustomProperty[]>>,
      query,
    );
  }

  /** GET /account/custom_properties/{id} */
  public get(path: AccountCustomPropertiesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCustomProperty>> {
    return this.client.request<MocoAccountCustomProperty>({
      method: "GET",
      path: "/account/custom_properties/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /account/custom_properties */
  public create(body: AccountCustomPropertiesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCustomProperty>> {
    return this.client.request<MocoAccountCustomProperty>({
      method: "POST",
      path: "/account/custom_properties",
      body,
      ...options,
    });
  }

  /** PATCH /account/custom_properties/{id} */
  public update(path: AccountCustomPropertiesUpdatePath, body?: AccountCustomPropertiesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountCustomProperty>> {
    return this.client.request<MocoAccountCustomProperty>({
      method: "PATCH",
      path: "/account/custom_properties/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /account/custom_properties/{id} */
  public delete(path: AccountCustomPropertiesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/custom_properties/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
