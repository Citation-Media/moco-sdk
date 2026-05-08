import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  InvoiceRemindersDeleteInvoiceReminderPath,
  InvoiceRemindersGetInvoiceReminderPath,
  InvoiceRemindersInvoiceRemindersBody,
  InvoiceRemindersInvoiceRemindersSendEmailBody,
  InvoiceRemindersInvoiceRemindersSendEmailPath,
  InvoiceRemindersListInvoiceReminderQuery,
  MocoInvoiceReminder
} from "../types";

export class InvoiceRemindersApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /invoice_reminders */
  public listInvoiceReminder(query?: InvoiceRemindersListInvoiceReminderQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceReminder[]>> {
    return this.client.request<MocoInvoiceReminder[]>({
      method: "GET",
      path: "/invoice_reminders",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /invoice_reminders. */
  public listInvoiceReminderAll(query?: InvoiceRemindersListInvoiceReminderQuery, options?: MocoOperationOptions): AsyncGenerator<MocoInvoiceReminder> {
    return this.client.paginate<MocoInvoiceReminder, InvoiceRemindersListInvoiceReminderQuery>(
      (pageQuery) => this.listInvoiceReminder(pageQuery, options) as Promise<MocoResponse<readonly MocoInvoiceReminder[]>>,
      query,
    );
  }

  /** GET /invoice_reminders/{id} */
  public getInvoiceReminder(path: InvoiceRemindersGetInvoiceReminderPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceReminder>> {
    return this.client.request<MocoInvoiceReminder>({
      method: "GET",
      path: "/invoice_reminders/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /invoice_reminders */
  public invoiceReminders(body: InvoiceRemindersInvoiceRemindersBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceReminder>> {
    return this.client.request<MocoInvoiceReminder>({
      method: "POST",
      path: "/invoice_reminders",
      body,
      ...options,
    });
  }

  /** DELETE /invoice_reminders/{id} */
  public deleteInvoiceReminder(path: InvoiceRemindersDeleteInvoiceReminderPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/invoice_reminders/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }

  /** POST /invoice_reminders/{id}/send_email */
  public invoiceRemindersSendEmail(path: InvoiceRemindersInvoiceRemindersSendEmailPath, body: InvoiceRemindersInvoiceRemindersSendEmailBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoInvoiceReminder>> {
    return this.client.request<MocoInvoiceReminder>({
      method: "POST",
      path: "/invoice_reminders/{id}/send_email",
      pathParams: [path.invoiceReminderId],
      body,
      ...options,
    });
  }
}
