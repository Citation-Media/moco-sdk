import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchase,
  PurchasesAssignToProjectBody,
  PurchasesAssignToProjectPath,
  PurchasesCreateBody,
  PurchasesDeletePath,
  PurchasesGetPath,
  PurchasesListQuery,
  PurchasesStoreDocumentBody,
  PurchasesStoreDocumentPath,
  PurchasesUpdateBody,
  PurchasesUpdatePath,
  PurchasesUpdateStatusBody,
  PurchasesUpdateStatusPath
} from "../types";

export class PurchasesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases */
  public list(query?: PurchasesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase[]>> {
    return this.client.request<MocoPurchase[]>({
      method: "GET",
      path: "/purchases",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases. */
  public listAll(query?: PurchasesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchase> {
    return this.client.paginate<MocoPurchase, PurchasesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchase[]>>,
      query,
    );
  }

  /** GET /purchases/{id} */
  public get(path: PurchasesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "GET",
      path: "/purchases/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /purchases */
  public create(body: PurchasesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "POST",
      path: "/purchases",
      body,
      ...options,
    });
  }

  /** PUT /purchases/{id} */
  public update(path: PurchasesUpdatePath, body?: PurchasesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "PUT",
      path: "/purchases/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** POST /purchases/{id}/assign_to_project */
  public assignToProject(path: PurchasesAssignToProjectPath, body: PurchasesAssignToProjectBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "POST",
      path: "/purchases/{id}/assign_to_project",
      pathParams: [path.purchaseId],
      body,
      ...options,
    });
  }

  /** PATCH /purchases/{id}/update_status */
  public updateStatus(path: PurchasesUpdateStatusPath, body: PurchasesUpdateStatusBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "PATCH",
      path: "/purchases/{id}/update_status",
      pathParams: [path.purchaseId],
      body,
      ...options,
    });
  }

  /** PATCH /purchases/{id}/store_document */
  public storeDocument(path: PurchasesStoreDocumentPath, body: PurchasesStoreDocumentBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchase>> {
    return this.client.request<MocoPurchase>({
      method: "PATCH",
      path: "/purchases/{id}/store_document",
      pathParams: [path.purchaseId],
      body,
      ...options,
    });
  }

  /** DELETE /purchases/{id} */
  public delete(path: PurchasesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/purchases/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
