import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  InvoicePaymentsBulkCreateBody,
  InvoicePaymentsCreateBody,
  InvoicePaymentsDeletePath,
  InvoicePaymentsGetPath,
  InvoicePaymentsListQuery,
  InvoicePaymentsUpdateBody,
  InvoicePaymentsUpdatePath,
  MocoInvoicePayment
} from "../types";

export class InvoicePaymentsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /invoices/payments */
  public list(query?: InvoicePaymentsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoicePayment[]>> {
    return this.client.request<MocoInvoicePayment[]>({
      method: "GET",
      path: "/invoices/payments",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/payments. */
  public listAll(query?: InvoicePaymentsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoicePayment> {
    return this.client.paginate<MocoInvoicePayment, InvoicePaymentsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoInvoicePayment[]>>,
      query,
    );
  }

  /** GET /invoices/payments/{id} */
  public get(path: InvoicePaymentsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoicePayment>> {
    return this.client.request<MocoInvoicePayment>({
      method: "GET",
      path: "/invoices/payments/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /invoices/payments */
  public create(body: InvoicePaymentsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoicePayment>> {
    return this.client.request<MocoInvoicePayment>({
      method: "POST",
      path: "/invoices/payments",
      body,
      ...options,
    });
  }

  /** POST /invoices/payments/bulk */
  public bulkCreate(body: InvoicePaymentsBulkCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoicePayment>> {
    return this.client.request<MocoInvoicePayment>({
      method: "POST",
      path: "/invoices/payments/bulk",
      body,
      ...options,
    });
  }

  /** PUT /invoices/payments/{id} */
  public update(path: InvoicePaymentsUpdatePath, body?: InvoicePaymentsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoicePayment>> {
    return this.client.request<MocoInvoicePayment>({
      method: "PUT",
      path: "/invoices/payments/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /invoices/payments/{id} */
  public delete(path: InvoicePaymentsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/invoices/payments/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
