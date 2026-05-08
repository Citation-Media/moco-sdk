import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  InvoiceBookkeepingExportsCreateBody,
  InvoiceBookkeepingExportsGetPath,
  InvoiceBookkeepingExportsListQuery,
  MocoInvoiceBookkeepingExport
} from "../types";

export class InvoiceBookkeepingExportsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /invoices/bookkeeping_exports */
  public list(query?: InvoiceBookkeepingExportsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceBookkeepingExport[]>> {
    return this.client.request<MocoInvoiceBookkeepingExport[]>({
      method: "GET",
      path: "/invoices/bookkeeping_exports",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/bookkeeping_exports. */
  public listAll(query?: InvoiceBookkeepingExportsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoiceBookkeepingExport> {
    return this.client.paginate<MocoInvoiceBookkeepingExport, InvoiceBookkeepingExportsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoInvoiceBookkeepingExport[]>>,
      query,
    );
  }

  /** GET /invoices/bookkeeping_exports/{id} */
  public get(path: InvoiceBookkeepingExportsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceBookkeepingExport>> {
    return this.client.request<MocoInvoiceBookkeepingExport>({
      method: "GET",
      path: "/invoices/bookkeeping_exports/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /invoices/bookkeeping_exports */
  public create(body: InvoiceBookkeepingExportsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceBookkeepingExport>> {
    return this.client.request<MocoInvoiceBookkeepingExport>({
      method: "POST",
      path: "/invoices/bookkeeping_exports",
      body,
      ...options,
    });
  }
}
