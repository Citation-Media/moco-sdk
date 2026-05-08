import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  InvoicesAttachmentsBody,
  InvoicesAttachmentsPath,
  InvoicesCreateBody,
  InvoicesDeleteAttachmentPath,
  InvoicesDeletePath,
  InvoicesGetPath,
  InvoicesGetPdfPath,
  InvoicesGetPdfQuery,
  InvoicesGetTimesheetPdfPath,
  InvoicesGetTimesheetPdfQuery,
  InvoicesListAttachmentPath,
  InvoicesListAttachmentQuery,
  InvoicesListExpensePath,
  InvoicesListExpenseQuery,
  InvoicesListLockedQuery,
  InvoicesListQuery,
  InvoicesListTimesheetPath,
  InvoicesListTimesheetQuery,
  InvoicesSendEmailBody,
  InvoicesSendEmailPath,
  InvoicesUpdateStatusBody,
  InvoicesUpdateStatusPath,
  MocoInvoice
} from "../types";

export class InvoicesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /invoices */
  public list(query?: InvoicesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice[]>> {
    return this.client.request<MocoInvoice[]>({
      method: "GET",
      path: "/invoices",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices. */
  public listAll(query?: InvoicesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoice> {
    return this.client.paginate<MocoInvoice, InvoicesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoInvoice[]>>,
      query,
    );
  }

  /** GET /invoices/locked */
  public listLocked(query?: InvoicesListLockedQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice[]>> {
    return this.client.request<MocoInvoice[]>({
      method: "GET",
      path: "/invoices/locked",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/locked. */
  public listLockedAll(query?: InvoicesListLockedQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoice> {
    return this.client.paginate<MocoInvoice, InvoicesListLockedQuery>(
      (pageQuery) => this.listLocked(pageQuery, options) as Promise<MocoResponse<readonly MocoInvoice[]>>,
      query,
    );
  }

  /** GET /invoices/{id} */
  public get(path: InvoicesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice>> {
    return this.client.request<MocoInvoice>({
      method: "GET",
      path: "/invoices/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** GET /invoices/{id}.pdf */
  public getPdf(path: InvoicesGetPdfPath, query?: InvoicesGetPdfQuery, options?: MocoOperationOptions): Promise<MocoResponse<ArrayBuffer>> {
    return this.client.request<ArrayBuffer>({
      method: "GET",
      path: "/invoices/{id}.pdf",
      pathParams: [path.id],
      query,
      responseType: "arrayBuffer",
      ...options,
    });
  }

  /** GET /invoices/{id}/timesheet */
  public listTimesheet(path: InvoicesListTimesheetPath, query?: InvoicesListTimesheetQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice[]>> {
    return this.client.request<MocoInvoice[]>({
      method: "GET",
      path: "/invoices/{id}/timesheet",
      pathParams: [path.invoiceId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/{id}/timesheet. */
  public listTimesheetAll(path: InvoicesListTimesheetPath, query?: InvoicesListTimesheetQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoice> {
    return this.client.paginate<MocoInvoice, InvoicesListTimesheetQuery>(
      (pageQuery) => this.listTimesheet(path, pageQuery, options) as Promise<MocoResponse<readonly MocoInvoice[]>>,
      query,
    );
  }

  /** GET /invoices/{id}/timesheet.pdf */
  public getTimesheetPdf(path: InvoicesGetTimesheetPdfPath, query?: InvoicesGetTimesheetPdfQuery, options?: MocoOperationOptions): Promise<MocoResponse<ArrayBuffer>> {
    return this.client.request<ArrayBuffer>({
      method: "GET",
      path: "/invoices/{id}/timesheet.pdf",
      pathParams: [path.invoiceId],
      query,
      responseType: "arrayBuffer",
      ...options,
    });
  }

  /** GET /invoices/{id}/expenses */
  public listExpense(path: InvoicesListExpensePath, query?: InvoicesListExpenseQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice[]>> {
    return this.client.request<MocoInvoice[]>({
      method: "GET",
      path: "/invoices/{id}/expenses",
      pathParams: [path.invoiceId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/{id}/expenses. */
  public listExpenseAll(path: InvoicesListExpensePath, query?: InvoicesListExpenseQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoice> {
    return this.client.paginate<MocoInvoice, InvoicesListExpenseQuery>(
      (pageQuery) => this.listExpense(path, pageQuery, options) as Promise<MocoResponse<readonly MocoInvoice[]>>,
      query,
    );
  }

  /** PUT /invoices/{id}/update_status */
  public updateStatus(path: InvoicesUpdateStatusPath, body?: InvoicesUpdateStatusBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice>> {
    return this.client.request<MocoInvoice>({
      method: "PUT",
      path: "/invoices/{id}/update_status",
      pathParams: [path.invoiceId],
      body,
      ...options,
    });
  }

  /** POST /invoices */
  public create(body: InvoicesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice>> {
    return this.client.request<MocoInvoice>({
      method: "POST",
      path: "/invoices",
      body,
      ...options,
    });
  }

  /** POST /invoices/{id}/send_email */
  public sendEmail(path: InvoicesSendEmailPath, body: InvoicesSendEmailBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice>> {
    return this.client.request<MocoInvoice>({
      method: "POST",
      path: "/invoices/{id}/send_email",
      pathParams: [path.invoiceId],
      body,
      ...options,
    });
  }

  /** DELETE /invoices/{id} */
  public delete(path: InvoicesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/invoices/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** GET /invoices/{id}/attachments */
  public listAttachment(path: InvoicesListAttachmentPath, query?: InvoicesListAttachmentQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice[]>> {
    return this.client.request<MocoInvoice[]>({
      method: "GET",
      path: "/invoices/{id}/attachments",
      pathParams: [path.invoiceId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoices/{id}/attachments. */
  public listAttachmentAll(path: InvoicesListAttachmentPath, query?: InvoicesListAttachmentQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoice> {
    return this.client.paginate<MocoInvoice, InvoicesListAttachmentQuery>(
      (pageQuery) => this.listAttachment(path, pageQuery, options) as Promise<MocoResponse<readonly MocoInvoice[]>>,
      query,
    );
  }

  /** POST /invoices/{invoice_id}/attachments */
  public attachments(path: InvoicesAttachmentsPath, body?: InvoicesAttachmentsBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoice>> {
    return this.client.request<MocoInvoice>({
      method: "POST",
      path: "/invoices/{invoice_id}/attachments",
      pathParams: [path.invoiceId],
      body,
      ...options,
    });
  }

  /** DELETE /invoices/{invoice_id}/attachments/{id} */
  public deleteAttachment(path: InvoicesDeleteAttachmentPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/invoices/{invoice_id}/attachments/{id}",
      pathParams: [path.invoiceId, path.attachmentId],
      responseType: "void",
      ...options,
    });
  }
}
