import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchasePayment,
  PurchasePaymentsBulkCreateBody,
  PurchasePaymentsCreateBody,
  PurchasePaymentsDeletePath,
  PurchasePaymentsGetPath,
  PurchasePaymentsListQuery,
  PurchasePaymentsUpdateBody,
  PurchasePaymentsUpdatePath
} from "../types";

export class PurchasePaymentsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases/payments */
  public list(query?: PurchasePaymentsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchasePayment[]>> {
    return this.client.request<MocoPurchasePayment[]>({
      method: "GET",
      path: "/purchases/payments",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases/payments. */
  public listAll(query?: PurchasePaymentsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchasePayment> {
    return this.client.paginate<MocoPurchasePayment, PurchasePaymentsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchasePayment[]>>,
      query,
    );
  }

  /** GET /purchases/payments/{id} */
  public get(path: PurchasePaymentsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchasePayment>> {
    return this.client.request<MocoPurchasePayment>({
      method: "GET",
      path: "/purchases/payments/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /purchases/payments */
  public create(body: PurchasePaymentsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchasePayment>> {
    return this.client.request<MocoPurchasePayment>({
      method: "POST",
      path: "/purchases/payments",
      body,
      ...options,
    });
  }

  /** POST /purchases/payments/bulk */
  public bulkCreate(body?: PurchasePaymentsBulkCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchasePayment>> {
    return this.client.request<MocoPurchasePayment>({
      method: "POST",
      path: "/purchases/payments/bulk",
      body,
      ...options,
    });
  }

  /** PUT /purchases/payments/{id} */
  public update(path: PurchasePaymentsUpdatePath, body?: PurchasePaymentsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchasePayment>> {
    return this.client.request<MocoPurchasePayment>({
      method: "PUT",
      path: "/purchases/payments/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /purchases/payments/{id} */
  public delete(path: PurchasePaymentsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/purchases/payments/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
