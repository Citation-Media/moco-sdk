import type { MocoBody, MocoCustomPropertiesFilter, MocoEntity, MocoFieldValue, MocoId, MocoListQuery } from "../core";

export type MocoDateValue = string | Date;
export type MocoIdLike = MocoId | readonly MocoId[] | string;
export type MocoArrayLike = string | readonly string[];

export interface MocoAccountCatalogService extends MocoEntity {
  created_at?: string;
  id?: number;
  items?: readonly MocoFieldValue[];
  title?: string;
  updated_at?: string;
}

export interface AccountCatalogServicesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface AccountCatalogServicesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountCatalogServicesCreateBody extends MocoBody {
  items?: MocoFieldValue;
  net_total?: MocoDateValue;
  quantity?: MocoFieldValue;
  title?: MocoFieldValue;
  type?: MocoFieldValue;
  unit?: MocoFieldValue;
  unit_price?: MocoFieldValue;
}

export interface AccountCatalogServicesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountCatalogServicesUpdateBody extends MocoBody {
  title?: MocoFieldValue;
}

export interface AccountCatalogServicesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountCatalogServicesGetItemPath extends Record<string, MocoId> {
  serviceId: MocoId;
  itemId: MocoId;
}

export interface AccountCatalogServicesItemsPath extends Record<string, MocoId> {
  serviceId: MocoId;
}

export interface AccountCatalogServicesItemsBody extends MocoBody {
  net_total?: MocoDateValue;
  quantity?: MocoFieldValue;
  title?: MocoFieldValue;
  type?: MocoFieldValue;
  unit?: MocoFieldValue;
  unit_price?: MocoFieldValue;
}

export interface AccountCatalogServicesUpdateItemPath extends Record<string, MocoId> {
  serviceId: MocoId;
  itemId: MocoId;
}

export interface AccountCatalogServicesUpdateItemBody extends MocoBody {
  net_total?: MocoDateValue;
  quantity?: MocoFieldValue;
  title?: MocoFieldValue;
  type?: MocoFieldValue;
  unit?: MocoFieldValue;
  unit_price?: MocoFieldValue;
}

export interface AccountCatalogServicesDeleteItemPath extends Record<string, MocoId> {
  serviceId: MocoId;
  itemId: MocoId;
}

export interface MocoAccountCustomProperty extends MocoEntity {
  created_at?: string;
  defaults?: readonly MocoFieldValue[];
  entity?: string;
  id?: number;
  kind?: string;
  name?: string;
  name_alt?: string;
  notification_enabled?: boolean;
  placeholder?: string;
  placeholder_alt?: string;
  print_on_invoice?: boolean;
  print_on_offer?: boolean;
  print_on_timesheet?: boolean;
  updated_at?: string;
}

export interface AccountCustomPropertiesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  entity?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface AccountCustomPropertiesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountCustomPropertiesCreateBody extends MocoBody {
  api_only?: boolean;
  defaults?: MocoIdLike;
  entity: MocoDateValue;
  kind: boolean;
  name: MocoDateValue;
  notification_enabled?: boolean;
  placeholder?: MocoFieldValue;
  placeholder_alt?: MocoFieldValue;
  print_on_invoice?: boolean;
  print_on_offer?: boolean;
  print_on_timesheet?: boolean;
}

export interface AccountCustomPropertiesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountCustomPropertiesUpdateBody extends MocoBody {
  name?: MocoFieldValue;
  placeholder?: MocoFieldValue;
}

export interface AccountCustomPropertiesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoAccountExpenseTemplate extends MocoEntity {
  created_at?: string;
  currency?: string;
  description?: string;
  id?: number;
  revenue_category?: Record<string, MocoFieldValue>;
  title?: string;
  unit?: string;
  unit_cost?: string;
  unit_price?: string;
  updated_at?: string;
}

export interface AccountExpenseTemplatesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface AccountExpenseTemplatesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountExpenseTemplatesCreateBody extends MocoBody {
  currency?: MocoFieldValue;
  description?: MocoFieldValue;
  title?: MocoFieldValue;
  unit?: MocoFieldValue;
  unit_cost?: MocoFieldValue;
  unit_price?: MocoFieldValue;
}

export interface AccountExpenseTemplatesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountExpenseTemplatesUpdateBody extends MocoBody {
  title?: MocoFieldValue;
}

export interface AccountExpenseTemplatesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoAccountFixedCost extends MocoEntity {
  costs?: readonly MocoFieldValue[];
  created_at?: string;
  description?: string;
  id?: number;
  title?: string;
  updated_at?: string;
}

export interface AccountFixedCostsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  year?: MocoDateValue;
}

export interface MocoAccountHourlyRate extends MocoEntity {}

export interface AccountHourlyRatesListQuery extends MocoListQuery {
  company_id?: MocoDateValue;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  include_archived_users?: MocoFieldValue;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface MocoAccountInternalHourlyRate extends MocoEntity {}

export interface AccountInternalHourlyRatesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  include_archived?: MocoFieldValue;
  page?: number;
  per_page?: number;
  sort_by?: string;
  unit_id?: MocoIdLike;
  updated_after?: MocoDateValue;
  years?: MocoArrayLike;
}

export interface AccountInternalHourlyRatesUpdateBody extends MocoBody {
  rate?: MocoFieldValue;
  rates?: MocoFieldValue;
  user_id?: MocoIdLike;
  year?: MocoFieldValue;
}

export interface MocoAccountTaskTemplate extends MocoEntity {
  billable?: boolean;
  created_at?: string;
  description?: string;
  id?: number;
  index?: number;
  name?: string;
  project_default?: boolean;
  revenue_category?: Record<string, MocoFieldValue>;
  updated_at?: string;
}

export interface AccountTaskTemplatesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface AccountTaskTemplatesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountTaskTemplatesCreateBody extends MocoBody {
  billable?: MocoFieldValue;
  description?: MocoFieldValue;
  name?: MocoFieldValue;
  project_default?: MocoFieldValue;
  revenue_category_id?: MocoIdLike;
}

export interface AccountTaskTemplatesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface AccountTaskTemplatesUpdateBody extends MocoBody {
  title?: MocoFieldValue;
}

export interface AccountTaskTemplatesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoActivity extends MocoEntity {
  billable?: boolean;
  billed?: boolean;
  created_at?: string;
  customer?: Record<string, MocoFieldValue>;
  date?: string;
  description?: string;
  hourly_rate?: number;
  hours?: number;
  id?: number;
  invoice_id?: MocoFieldValue | null;
  project?: Record<string, MocoFieldValue>;
  remote_id?: string;
  remote_service?: string;
  remote_url?: string;
  seconds?: number;
  tag?: string;
  task?: Record<string, MocoFieldValue>;
  timer_started_at?: MocoFieldValue | null;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  worked_seconds?: number;
}

export interface ActivitiesListQuery extends MocoListQuery {
  billable?: boolean;
  billed?: boolean;
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  project_id?: MocoIdLike;
  sort_by?: string;
  task_id?: MocoIdLike;
  term?: MocoIdLike;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface ActivitiesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ActivitiesCreateBody extends MocoBody {
  billable?: boolean;
  date: MocoDateValue;
  description?: MocoFieldValue;
  project_id: MocoIdLike;
  remote_id?: MocoIdLike;
  remote_service?: "trello" | "jira" | "asana" | "basecamp" | "wunderlist" | "basecamp2" | "basecamp3" | "toggl" | "mite" | "github" | "youtrack";
  remote_url?: MocoFieldValue;
  seconds?: MocoFieldValue;
  tag?: MocoFieldValue;
  task_id: MocoIdLike;
}

export interface ActivitiesBulkCreateBody extends MocoBody {
  activities?: MocoFieldValue;
  date?: MocoDateValue;
  description?: MocoFieldValue;
  project_id?: MocoIdLike;
  seconds?: MocoFieldValue;
  task_id?: MocoIdLike;
}

export interface ActivitiesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ActivitiesUpdateBody extends MocoBody {
  seconds?: MocoFieldValue;
}

export interface ActivitiesUpdateBillableSecondsPath extends Record<string, MocoId> {
  activityId: MocoId;
}

export interface ActivitiesUpdateBillableSecondsBody extends MocoBody {
  seconds?: MocoDateValue;
}

export interface ActivitiesStartTimerPath extends Record<string, MocoId> {
  activityId: MocoId;
}

export interface ActivitiesStartTimerBody extends MocoBody {
}

export interface ActivitiesStopTimerPath extends Record<string, MocoId> {
  activityId: MocoId;
}

export interface ActivitiesStopTimerBody extends MocoBody {
}

export interface ActivitiesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ActivitiesDisregardBody extends MocoBody {
  activity_ids: MocoIdLike;
  company_id: MocoDateValue;
  project_id?: MocoDateValue;
  reason: MocoFieldValue;
}

export interface MocoComment extends MocoEntity {
  commentable_id?: number;
  commentable_type?: string;
  created_at?: string;
  id?: number;
  impersonating_user?: Record<string, MocoFieldValue>;
  manual?: boolean;
  text?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface CommentsListQuery extends MocoListQuery {
  commentable_id?: MocoIdLike;
  commentable_type?: "Company" | "Contact" | "Deal" | "DeiveryNote" | "Expense" | "Invoice" | "InvoiceBookkeepingExport" | "InvoiceDeletion" | "InvoiceReminder" | "Offer" | "OfferConfirmation" | "Project";
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  manual?: boolean;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoDateValue;
}

export interface CommentsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface CommentsCreateBody extends MocoBody {
  attachment_content?: MocoFieldValue;
  attachment_filename?: MocoFieldValue;
  commentable_id: MocoIdLike;
  commentable_type: "Contact" | "Deal" | "DeliveryNote" | "Project" | "User" | "Unit" | "Company" | "Offer" | "OfferConfirmation" | "Invoice" | "InvoiceReminder" | "InvoiceDeletion";
  created_at?: MocoDateValue;
  text: MocoFieldValue;
}

export interface CommentsBulkCreateBody extends MocoBody {
  commentable_ids: MocoIdLike;
}

export interface CommentsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface CommentsUpdateBody extends MocoBody {
  text?: MocoFieldValue;
}

export interface CommentsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoCompany extends MocoEntity {
  active?: boolean;
  address?: string;
  alternative_correspondence_language?: boolean;
  archived_on?: MocoFieldValue | null;
  billing_email_cc?: string;
  billing_notes?: string;
  billing_tax?: number;
  country_code?: string;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  custom_rates?: boolean;
  customer_vat?: Record<string, MocoFieldValue>;
  debit_number?: number;
  default_cash_discount?: number;
  default_cash_discount_days?: number;
  default_discount?: number;
  default_invoice_due_days?: number;
  email?: string;
  fax?: string;
  footer?: string;
  id?: number;
  identifier?: string;
  include_time_report?: boolean;
  info?: string;
  intern?: boolean;
  name?: string;
  phone?: string;
  projects?: readonly MocoFieldValue[];
  supplier_vat?: Record<string, MocoFieldValue>;
  tags?: readonly MocoFieldValue[];
  type?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  vat_identifier?: string;
  website?: string;
}

export interface CompaniesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  include_archived?: boolean;
  page?: number;
  per_page?: number;
  sort_by?: string;
  tags?: MocoDateValue;
  term?: MocoFieldValue;
  type?: "customer" | "supplier" | "organization";
  updated_after?: MocoDateValue;
}

export interface CompaniesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface CompaniesCreateBody extends MocoBody {
  address?: MocoFieldValue;
  alternative_correspondence_language?: boolean;
  bank_bic?: MocoFieldValue;
  bank_owner?: MocoDateValue;
  billing_email_cc?: MocoFieldValue;
  billing_notes?: MocoFieldValue;
  country_code?: "DE" | "CH" | "AT";
  credit_number?: MocoIdLike;
  currency: MocoFieldValue;
  custom_properties?: MocoCustomPropertiesFilter;
  customer_tax?: MocoDateValue;
  customer_vat_code_id?: MocoDateValue;
  debit_number?: MocoIdLike;
  default_invoice_due_days?: MocoDateValue;
  default_payment_means?: "not_defined" | "credit_transfer";
  email?: MocoFieldValue;
  fax?: MocoFieldValue;
  footer?: MocoFieldValue;
  iban?: MocoFieldValue;
  identifier: MocoDateValue;
  info?: MocoFieldValue;
  invoice_format?: "regular_pdf" | "x_invoice" | "zugferd_x_invoice";
  name: MocoFieldValue;
  phone?: MocoFieldValue;
  supplier_tax?: MocoIdLike;
  supplier_vat_code_id?: MocoIdLike;
  tags?: "Network" | "Print";
  type: "customer" | "supplier" | "organization";
  user_id?: MocoIdLike;
  vat_identifier?: MocoIdLike;
  website?: MocoFieldValue;
}

export interface CompaniesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface CompaniesUpdateBody extends MocoBody {
  name?: MocoFieldValue;
}

export interface CompaniesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface CompaniesArchivePath extends Record<string, MocoId> {
  companyId: MocoId;
}

export interface CompaniesArchiveBody extends MocoBody {
}

export interface CompaniesUnarchivePath extends Record<string, MocoId> {
  companyId: MocoId;
}

export interface CompaniesUnarchiveBody extends MocoBody {
}

export interface MocoContact extends MocoEntity {
  avatar_url?: string;
  birthday?: string;
  company?: Record<string, MocoFieldValue>;
  created_at?: string;
  firstname?: string;
  gender?: string;
  home_address?: string;
  home_email?: string;
  id?: number;
  info?: string;
  job_position?: string;
  lastname?: string;
  mobile_phone?: string;
  tags?: readonly MocoFieldValue[];
  title?: string;
  updated_at?: string;
  work_address?: string;
  work_email?: string;
  work_fax?: string;
  work_phone?: string;
}

export interface ContactsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  phone?: MocoFieldValue;
  sort_by?: string;
  tags?: MocoArrayLike;
  term?: MocoFieldValue;
  updated_after?: MocoDateValue;
}

export interface ContactsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ContactsCreateBody extends MocoBody {
  birthday?: MocoDateValue;
  company_id?: MocoIdLike;
  firstname?: MocoFieldValue;
  gender: "F" | "M" | "U";
  home_address?: MocoFieldValue;
  home_email?: MocoFieldValue;
  info?: MocoFieldValue;
  job_position?: MocoFieldValue;
  lastname: MocoFieldValue;
  mobile_phone?: MocoFieldValue;
  tags?: MocoArrayLike;
  title?: MocoFieldValue;
  user_id?: MocoIdLike;
  work_address?: MocoFieldValue;
  work_email?: MocoFieldValue;
  work_fax?: MocoFieldValue;
  work_phone?: MocoFieldValue;
}

export interface ContactsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ContactsUpdateBody extends MocoBody {
  job_position?: MocoFieldValue;
}

export interface ContactsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoDealCategory extends MocoEntity {
  created_at?: string;
  id?: number;
  name?: string;
  probability?: number;
  updated_at?: string;
}

export interface DealCategoriesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface DealCategoriesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface DealCategoriesCreateBody extends MocoBody {
  name: MocoFieldValue;
  probability: MocoFieldValue;
}

export interface DealCategoriesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface DealCategoriesUpdateBody extends MocoBody {
  name?: MocoFieldValue;
}

export interface DealCategoriesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoDeal extends MocoEntity {
  category?: Record<string, MocoFieldValue>;
  closed_on?: MocoFieldValue | null;
  company?: Record<string, MocoFieldValue>;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  id?: number;
  inbox_email_address?: string;
  info?: string;
  money?: number;
  name?: string;
  person?: Record<string, MocoFieldValue>;
  reminder_date?: string;
  service_period_from?: string;
  service_period_to?: string;
  status?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface DealsListQuery extends MocoListQuery {
  closed_from?: MocoDateValue;
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  status?: "potential" | "pending" | "won" | "lost" | "dropped";
  tags?: MocoArrayLike;
  updated_after?: MocoDateValue;
}

export interface DealsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface DealsCreateBody extends MocoBody {
  closed_on?: MocoFieldValue;
  company_id?: MocoIdLike;
  currency: MocoFieldValue;
  deal_category_id: MocoIdLike;
  info?: MocoFieldValue;
  money: MocoFieldValue;
  name: MocoFieldValue;
  person_id?: MocoIdLike;
  reminder_date: MocoDateValue;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  status?: "potential" | "pending" | "won" | "lost" | "dropped" | "pending";
  tags?: "Important" | "Health";
  user_id: MocoIdLike;
}

export interface DealsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface DealsUpdateBody extends MocoBody {
  status?: MocoFieldValue;
}

export interface DealsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoEmployment extends MocoEntity {
  created_at?: string;
  from?: string;
  id?: number;
  pattern?: Record<string, MocoFieldValue>;
  to?: MocoFieldValue | null;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  weekly_target_hours?: number;
}

export interface EmploymentsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: "2018-01-01" | "2018-12-31";
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface EmploymentsCreateBody extends MocoBody {
  from?: MocoDateValue;
  pattern: "am" | "pm";
  to?: MocoDateValue;
  user_id: MocoIdLike;
}

export interface EmploymentsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface EmploymentsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface EmploymentsUpdateBody extends MocoBody {
  am?: MocoFieldValue;
  pattern?: MocoFieldValue;
  pm?: MocoFieldValue;
}

export interface EmploymentsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoHoliday extends MocoEntity {
  created_at?: string;
  creator?: Record<string, MocoFieldValue>;
  days?: number;
  hours?: number;
  id?: number;
  title?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  year?: number;
}

export interface HolidaysListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
  year?: MocoFieldValue;
}

export interface HolidaysGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface HolidaysCreateBody extends MocoBody {
  creator_id?: MocoDateValue;
  days: MocoFieldValue;
  title: MocoFieldValue;
  user_id: MocoIdLike;
  year: MocoFieldValue;
}

export interface HolidaysUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface HolidaysUpdateBody extends MocoBody {
  days?: MocoFieldValue;
}

export interface HolidaysDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoInvoiceBookkeepingExport extends MocoEntity {
  comment?: string;
  created_at?: string;
  from?: string;
  id?: number;
  invoice_ids?: readonly MocoFieldValue[];
  status?: string;
  to?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface InvoiceBookkeepingExportsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoiceBookkeepingExportsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoiceBookkeepingExportsCreateBody extends MocoBody {
  comment?: MocoFieldValue;
  invoice_ids: MocoIdLike;
  trigger_submission?: boolean;
}

export interface MocoInvoicePayment extends MocoEntity {
  created_at?: string;
  currency?: string;
  date?: string;
  description?: string;
  id?: number;
  invoice?: Record<string, MocoFieldValue>;
  paid_total?: string;
  paid_total_in_account_currency?: string;
  updated_at?: string;
}

export interface InvoicePaymentsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  date_from?: MocoDateValue;
  date_to?: MocoDateValue;
  ids?: MocoIdLike;
  invoice_id?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoicePaymentsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoicePaymentsCreateBody extends MocoBody {
  currency?: MocoFieldValue;
  date: MocoDateValue;
  description?: MocoIdLike;
  invoice_id?: MocoIdLike;
  paid_total: MocoDateValue;
  partially_paid?: boolean;
}

export interface InvoicePaymentsBulkCreateBody extends MocoBody {
  currency?: MocoFieldValue;
  date: MocoDateValue;
  invoice_id: MocoIdLike;
  paid_total: MocoDateValue;
}

export interface InvoicePaymentsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoicePaymentsUpdateBody extends MocoBody {
  paid_total?: MocoDateValue;
}

export interface InvoicePaymentsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoInvoiceReminder extends MocoEntity {
  created_at?: string;
  date?: string;
  due_date?: string;
  fee?: number;
  file_url?: string;
  id?: number;
  invoice?: Record<string, MocoFieldValue>;
  status?: string;
  text?: string;
  title?: string;
  updated_at?: string;
}

export interface InvoiceRemindersListInvoiceReminderQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  date_from?: MocoDateValue;
  date_to?: MocoDateValue;
  ids?: MocoIdLike;
  invoice_id?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoiceRemindersGetInvoiceReminderPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoiceRemindersInvoiceRemindersBody extends MocoBody {
  date?: MocoDateValue;
  due_date?: MocoDateValue;
  fee?: MocoFieldValue;
  invoice_id: MocoIdLike;
  text?: MocoFieldValue;
  title?: MocoFieldValue;
}

export interface InvoiceRemindersDeleteInvoiceReminderPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoiceRemindersInvoiceRemindersSendEmailPath extends Record<string, MocoId> {
  invoiceReminderId: MocoId;
}

export interface InvoiceRemindersInvoiceRemindersSendEmailBody extends MocoBody {
  emails_bcc?: MocoArrayLike;
  emails_cc?: MocoArrayLike;
  emails_to?: MocoDateValue;
  subject: MocoFieldValue;
  text: MocoFieldValue;
}

export interface MocoInvoice extends MocoEntity {
  activity_hours_modified?: boolean;
  cash_discount?: number;
  cash_discount_days?: number;
  created_at?: string;
  credit_number?: MocoFieldValue | null;
  creditor_reference?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  customer_id?: number;
  date?: string;
  debit_number?: MocoFieldValue | null;
  debt_collection_procedure?: Record<string, MocoFieldValue>;
  discount?: number;
  due_date?: string;
  file_url?: string;
  footer?: string;
  gross_total?: number;
  id?: number;
  identifier?: string;
  items?: readonly MocoFieldValue[];
  locked?: boolean;
  net_total?: number;
  offer_id?: number;
  payments?: readonly MocoFieldValue[];
  project_id?: number;
  recipient_address?: string;
  reminders?: readonly MocoFieldValue[];
  reversal?: boolean;
  reversal_invoice_id?: number;
  reversed?: boolean;
  reversed_invoice_id?: MocoFieldValue | null;
  salutation?: string;
  service_period?: string;
  service_period_from?: string;
  service_period_to?: string;
  status?: string;
  tags?: readonly MocoFieldValue[];
  tax?: number;
  title?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  vat?: Record<string, MocoFieldValue>;
}

export interface InvoicesListQuery extends MocoListQuery {
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  date_from?: MocoDateValue;
  date_to?: MocoDateValue;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  include_disregarded?: boolean;
  not_booked?: boolean;
  page?: number;
  per_page?: number;
  project_id?: MocoIdLike;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  sort_by?: string;
  status?: "draft" | "created" | "sent" | "partially_paid" | "paid" | "overdue" | "ignored";
  tags?: MocoDateValue;
  term?: MocoIdLike;
  updated_after?: MocoDateValue;
}

export interface InvoicesListLockedQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  date_from?: MocoDateValue;
  date_to?: MocoDateValue;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  status?: "draft" | "created" | "sent" | "partially_paid" | "paid" | "overdue" | "ignored";
  updated_after?: MocoDateValue;
}

export interface InvoicesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoicesGetPdfPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoicesGetPdfQuery extends MocoListQuery {
  blank?: MocoDateValue;
  letter_paper_id?: MocoIdLike;
}

export interface InvoicesListTimesheetPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesListTimesheetQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoicesGetTimesheetPdfPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesGetTimesheetPdfQuery extends MocoListQuery {
  letter_paper_id?: MocoIdLike;
}

export interface InvoicesListExpensePath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesListExpenseQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoicesUpdateStatusPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesUpdateStatusBody extends MocoBody {
  status?: MocoFieldValue;
}

export interface InvoicesCreateBody extends MocoBody {
  cash_discount?: MocoFieldValue;
  cash_discount_days?: MocoDateValue;
  change_address?: "invoice" | "project" | "customer" | "invoice";
  currency: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  customer_id: MocoDateValue;
  date: MocoDateValue;
  discount?: MocoFieldValue;
  due_date: MocoDateValue;
  footer?: MocoFieldValue;
  internal_contact_id?: MocoIdLike;
  items: MocoFieldValue;
  print_detail_columns?: MocoDateValue;
  project_id?: MocoIdLike;
  recipient_address: MocoDateValue;
  salutation?: MocoFieldValue;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  status?: MocoDateValue;
  tags?: "Hosting" | "Europe";
  tax: MocoFieldValue;
  title: MocoFieldValue;
}

export interface InvoicesSendEmailPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesSendEmailBody extends MocoBody {
  emails_bcc?: MocoArrayLike;
  emails_cc?: MocoArrayLike;
  emails_to?: MocoDateValue;
  letter_paper_id?: MocoDateValue;
  subject: MocoFieldValue;
  text: MocoFieldValue;
}

export interface InvoicesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface InvoicesListAttachmentPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesListAttachmentQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface InvoicesAttachmentsPath extends Record<string, MocoId> {
  invoiceId: MocoId;
}

export interface InvoicesAttachmentsBody extends MocoBody {
  attachment?: MocoFieldValue;
  base64?: MocoFieldValue;
  filename?: MocoFieldValue;
}

export interface InvoicesDeleteAttachmentPath extends Record<string, MocoId> {
  invoiceId: MocoId;
  attachmentId: MocoId;
}

export interface MocoLetterPaper extends MocoEntity {
  active?: boolean;
  created_at?: string;
  file?: string;
  id?: number;
  name?: string;
  template?: string;
  updated_at?: string;
}

export interface LetterPapersListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  Link?: MocoDateValue;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  XPage?: MocoIdLike;
  XPerPage?: MocoIdLike;
  XTotal?: MocoDateValue;
}

export interface MocoOfferCustomerApproval extends MocoEntity {
  active?: boolean;
  approval_url?: string;
  created_at?: string;
  customer_email?: MocoFieldValue | null;
  customer_full_name?: MocoFieldValue | null;
  id?: number;
  offer_document_url?: string;
  signature_url?: MocoFieldValue | null;
  signed_at?: MocoFieldValue | null;
  updated_at?: string;
}

export interface OfferCustomerApprovalListForOfferPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OfferCustomerApprovalListForOfferQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface OfferCustomerApprovalActivatePath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OfferCustomerApprovalActivateBody extends MocoBody {
}

export interface OfferCustomerApprovalDeactivatePath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OfferCustomerApprovalDeactivateBody extends MocoBody {
}

export interface MocoOffer extends MocoEntity {
  company?: Record<string, MocoFieldValue>;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  customer_approval?: Record<string, MocoFieldValue>;
  date?: string;
  deal?: Record<string, MocoFieldValue>;
  discount?: number;
  due_date?: string;
  footer?: string;
  gross_total?: number;
  id?: number;
  identifier?: string;
  invoice_id?: number;
  items?: readonly MocoFieldValue[];
  net_total?: number;
  offer_confirmation?: Record<string, MocoFieldValue>;
  project?: Record<string, MocoFieldValue>;
  recipient_address?: string;
  salutation?: string;
  status?: string;
  tags?: readonly MocoFieldValue[];
  tax?: number;
  title?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
  vat?: Record<string, MocoFieldValue>;
}

export interface OffersListQuery extends MocoListQuery {
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  deal_id?: MocoIdLike;
  from?: MocoDateValue;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  project_id?: MocoIdLike;
  sort_by?: string;
  status?: "created" | "sent" | "accepted" | "partially_billed" | "billed" | "archived";
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface OffersGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface OffersGetPdfPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface OffersGetPdfQuery extends MocoListQuery {
  letter_paper_id?: MocoIdLike;
}

export interface OffersCreateBody extends MocoBody {
  change_address?: "offer" | "customer" | "offer";
  company_id?: MocoDateValue;
  contact_id?: MocoDateValue;
  currency?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  date: MocoDateValue;
  deal_id?: MocoIdLike;
  discount?: MocoFieldValue;
  due_date: MocoDateValue;
  footer?: MocoFieldValue;
  internal_contact_id?: MocoIdLike;
  items: MocoFieldValue;
  print_detail_columns?: MocoDateValue;
  project_id?: MocoIdLike;
  recipient_address: MocoDateValue;
  salutation?: MocoFieldValue;
  tags?: MocoArrayLike;
  tax: MocoFieldValue;
  title: MocoFieldValue;
}

export interface OffersAssignPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OffersAssignBody extends MocoBody {
  company_id?: MocoIdLike;
  deal_id?: MocoIdLike;
  project_id?: MocoIdLike;
}

export interface OffersUpdateStatusPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OffersUpdateStatusBody extends MocoBody {
  status?: MocoFieldValue;
}

export interface OffersSendEmailPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OffersSendEmailBody extends MocoBody {
  emails_bcc?: MocoArrayLike;
  emails_cc?: MocoArrayLike;
  emails_to?: MocoDateValue;
  subject: MocoFieldValue;
  text: MocoFieldValue;
}

export interface OffersListAttachmentPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OffersListAttachmentQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface OffersAttachmentsPath extends Record<string, MocoId> {
  offerId: MocoId;
}

export interface OffersAttachmentsBody extends MocoBody {
  attachment?: MocoFieldValue;
  base64?: MocoFieldValue;
  filename?: MocoFieldValue;
}

export interface OffersDeleteAttachmentPath extends Record<string, MocoId> {
  offerId: MocoId;
  attachmentId: MocoId;
}

export interface MocoPlanningEntry extends MocoEntity {}

export interface PlanningEntriesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  deal_id?: MocoIdLike;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  period?: MocoDateValue;
  project_id?: MocoIdLike;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface PlanningEntriesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PlanningEntriesCreateBody extends MocoBody {
  comment?: MocoFieldValue;
  ends_on: MocoFieldValue;
  hours_per_day: MocoFieldValue;
  starts_on: MocoFieldValue;
  symbol?: MocoFieldValue;
  tentative?: boolean;
  user_id?: MocoIdLike;
}

export interface PlanningEntriesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PlanningEntriesUpdateBody extends MocoBody {
  hours_per_day?: MocoFieldValue;
}

export interface PlanningEntriesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoPresence extends MocoEntity {
  created_at?: string;
  date?: string;
  from?: string;
  id?: number;
  is_home_office?: boolean;
  to?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface PresencesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: "2018-06-01" | "2018-06-30";
  ids?: MocoIdLike;
  is_home_office?: boolean;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface PresencesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PresencesCreateBody extends MocoBody {
  date: MocoDateValue;
  from: MocoDateValue;
  is_home_office?: boolean;
  to?: MocoDateValue;
}

export interface PresencesTouchBody extends MocoBody {
  is_home_office?: boolean;
  override?: MocoIdLike;
}

export interface PresencesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PresencesUpdateBody extends MocoBody {
  to?: MocoDateValue;
}

export interface PresencesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoProfile extends MocoEntity {}

export interface MocoProjectContract extends MocoEntity {
  active?: boolean;
  billable?: boolean;
  budget?: number;
  created_at?: string;
  firstname?: string;
  hourly_rate?: number;
  id?: number;
  lastname?: string;
  updated_at?: string;
  user_id?: number;
}

export interface ProjectContractsListForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectContractsListForProjectQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectContractsGetPath extends Record<string, MocoId> {
  projectId: MocoId;
  contractId: MocoId;
}

export interface ProjectContractsCreateForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectContractsCreateForProjectBody extends MocoBody {
  active?: boolean;
  billable?: boolean;
  budget?: MocoFieldValue;
  hourly_rate?: MocoFieldValue;
  user_id: MocoIdLike;
}

export interface ProjectContractsUpdatePath extends Record<string, MocoId> {
  projectId: MocoId;
  contractId: MocoId;
}

export interface ProjectContractsUpdateBody extends MocoBody {
  budget?: MocoFieldValue;
}

export interface ProjectContractsDeletePath extends Record<string, MocoId> {
  projectId: MocoId;
  contractId: MocoId;
}

export interface MocoProjectExpense extends MocoEntity {
  billable?: boolean;
  billed?: boolean;
  budget_relevant?: boolean;
  company?: Record<string, MocoFieldValue>;
  cost?: number;
  cost_total_planned?: number;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  date?: string;
  description?: string;
  file_url?: string;
  group?: Record<string, MocoFieldValue>;
  id?: number;
  invoice_id?: MocoFieldValue | null;
  planned_purchase_date?: MocoFieldValue | null;
  price?: number;
  project?: Record<string, MocoFieldValue>;
  purchase_assignment_locked?: boolean;
  purchase_items?: readonly MocoFieldValue[];
  quantity?: number;
  recurring_expense_id?: MocoFieldValue | null;
  revenue_category?: Record<string, MocoFieldValue>;
  service_period?: string;
  service_period_from?: string;
  service_period_to?: string;
  title?: string;
  unit?: string;
  unit_cost?: number;
  unit_price?: number;
  updated_at?: string;
}

export interface ProjectExpensesListForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectExpensesListForProjectQuery extends MocoListQuery {
  billable?: boolean;
  billed?: boolean;
  budget_relevant?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoDateValue;
}

export interface ProjectExpensesGetPath extends Record<string, MocoId> {
  projectId: MocoId;
  expenseId: MocoId;
}

export interface ProjectExpensesCreateForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectExpensesCreateForProjectBody extends MocoBody {
  billable?: boolean;
  budget_relevant?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  date: MocoDateValue;
  description?: MocoDateValue;
  file?: MocoDateValue;
  quantity: MocoFieldValue;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  title: MocoFieldValue;
  unit: MocoFieldValue;
  unit_cost: MocoFieldValue;
  unit_price: MocoFieldValue;
  user_id?: MocoIdLike;
}

export interface ProjectExpensesBulkCreatePath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectExpensesBulkCreateBody extends MocoBody {
  billable?: boolean;
  budget_relevant?: boolean;
  date: MocoDateValue;
  description?: MocoDateValue;
  quantity: MocoFieldValue;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  title: MocoFieldValue;
  unit: MocoFieldValue;
  unit_cost: MocoFieldValue;
  unit_price: MocoFieldValue;
}

export interface ProjectExpensesUpdatePath extends Record<string, MocoId> {
  projectId: MocoId;
  expenseId: MocoId;
}

export interface ProjectExpensesUpdateBody extends MocoBody {
  unit_price?: MocoFieldValue;
}

export interface ProjectExpensesDeletePath extends Record<string, MocoId> {
  projectId: MocoId;
  expenseId: MocoId;
}

export interface ProjectExpensesDisregardPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectExpensesDisregardBody extends MocoBody {
  expense_ids: MocoIdLike;
  reason: MocoFieldValue;
}

export interface ProjectExpensesListQuery extends MocoListQuery {
  billable?: boolean;
  billed?: boolean;
  budget_relevant?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  tags?: MocoArrayLike;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
  user_id?: MocoDateValue;
}

export interface MocoProjectGroup extends MocoEntity {
  budget?: number;
  company?: Record<string, MocoFieldValue>;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  customer_report_url?: string;
  id?: number;
  info?: string;
  name?: string;
  projects?: readonly MocoFieldValue[];
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface ProjectGroupsListQuery extends MocoListQuery {
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface ProjectGroupsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoProjectPaymentSchedule extends MocoEntity {
  billed?: boolean;
  checked?: boolean;
  created_at?: string;
  date?: string;
  description?: string;
  id?: number;
  net_total?: number;
  project?: Record<string, MocoFieldValue>;
  title?: string;
  updated_at?: string;
}

export interface ProjectPaymentSchedulesListQuery extends MocoListQuery {
  checked?: boolean;
  company_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  project_id?: MocoIdLike;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface ProjectPaymentSchedulesListForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectPaymentSchedulesListForProjectQuery extends MocoListQuery {
  checked?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface ProjectPaymentSchedulesGetPath extends Record<string, MocoId> {
  projectId: MocoId;
  paymentScheduleId: MocoId;
}

export interface ProjectPaymentSchedulesCreateForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectPaymentSchedulesCreateForProjectBody extends MocoBody {
  checked?: boolean;
  date: MocoDateValue;
  net_total: MocoDateValue;
  title?: MocoFieldValue;
}

export interface ProjectPaymentSchedulesUpdatePath extends Record<string, MocoId> {
  projectId: MocoId;
  paymentScheduleId: MocoId;
}

export interface ProjectPaymentSchedulesUpdateBody extends MocoBody {
  checked?: MocoFieldValue;
}

export interface ProjectPaymentSchedulesDeletePath extends Record<string, MocoId> {
  projectId: MocoId;
  paymentScheduleId: MocoId;
}

export interface MocoProjectRecurringExpense extends MocoEntity {
  billable?: boolean;
  budget_relevant?: boolean;
  cost?: number;
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  description?: string;
  finish_date?: string;
  id?: number;
  period?: string;
  price?: number;
  project?: Record<string, MocoFieldValue>;
  quantity?: number;
  recur_next_date?: string;
  revenue_category?: Record<string, MocoFieldValue>;
  service_period_direction?: string;
  start_date?: string;
  title?: string;
  unit?: string;
  unit_cost?: number;
  unit_price?: number;
  updated_at?: string;
}

export interface ProjectRecurringExpensesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectRecurringExpensesListForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectRecurringExpensesListForProjectQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectRecurringExpensesGetPath extends Record<string, MocoId> {
  projectId: MocoId;
  recurringExpenseId: MocoId;
}

export interface ProjectRecurringExpensesCreateForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectRecurringExpensesCreateForProjectBody extends MocoBody {
  billable?: boolean;
  budget_relevant?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  description?: MocoDateValue;
  finish_date?: MocoDateValue;
  period: "weekly" | "biweekly" | "monthly" | "quarterly" | "biannual" | "annual";
  quantity: MocoFieldValue;
  service_period_direction?: "none" | "forward" | "backward" | "none";
  start_date: MocoDateValue;
  title: MocoFieldValue;
  unit: MocoFieldValue;
  unit_cost: MocoFieldValue;
  unit_price: MocoFieldValue;
}

export interface ProjectRecurringExpensesUpdatePath extends Record<string, MocoId> {
  projectId: MocoId;
  recurringExpenseId: MocoId;
}

export interface ProjectRecurringExpensesUpdateBody extends MocoBody {
  unit_price?: MocoFieldValue;
}

export interface ProjectRecurringExpensesRecurPath extends Record<string, MocoId> {
  projectId: MocoId;
  recurringExpenseId: MocoId;
}

export interface ProjectRecurringExpensesRecurBody extends MocoBody {
}

export interface ProjectRecurringExpensesDeletePath extends Record<string, MocoId> {
  projectId: MocoId;
  recurringExpenseId: MocoId;
}

export interface MocoProject extends MocoEntity {
  active?: boolean;
  billable?: boolean;
  billing_address?: string;
  billing_contact?: Record<string, MocoFieldValue>;
  billing_email_cc?: string;
  billing_email_to?: string;
  billing_notes?: string;
  billing_variant?: string;
  budget?: number;
  budget_expenses?: number;
  budget_monthly?: MocoFieldValue | null;
  co_leader?: MocoFieldValue | null;
  color?: string;
  contact?: Record<string, MocoFieldValue>;
  contracts?: readonly MocoFieldValue[];
  created_at?: string;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  customer?: Record<string, MocoFieldValue>;
  customer_report_url?: string;
  deal?: Record<string, MocoFieldValue>;
  finish_date?: string;
  fixed_price?: boolean;
  hourly_rate?: number;
  id?: number;
  identifier?: string;
  info?: string;
  leader?: Record<string, MocoFieldValue>;
  name?: string;
  project_group?: Record<string, MocoFieldValue>;
  retainer?: boolean;
  secondary_contact?: Record<string, MocoFieldValue>;
  setting_include_time_report?: boolean;
  start_date?: MocoFieldValue | null;
  tags?: readonly MocoFieldValue[];
  tasks?: readonly MocoFieldValue[];
  updated_at?: string;
}

export interface ProjectsListQuery extends MocoListQuery {
  company_id?: MocoIdLike;
  created_from?: MocoDateValue;
  created_to?: MocoDateValue;
  custom_properties?: MocoCustomPropertiesFilter;
  deal_id?: MocoIdLike;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  include_archived?: boolean;
  include_company?: boolean;
  leader_id?: MocoIdLike;
  page?: number;
  per_page?: number;
  project_group_id?: MocoIdLike;
  retainer?: boolean;
  sort_by?: string;
  tags?: MocoArrayLike;
  updated_after?: MocoDateValue;
  updated_from?: MocoDateValue;
  updated_to?: MocoDateValue;
}

export interface ProjectsListAssignedQuery extends MocoListQuery {
  active?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ProjectsCreateBody extends MocoBody {
  billing_address?: MocoFieldValue;
  billing_contact_id?: MocoIdLike;
  billing_email_cc?: MocoFieldValue;
  billing_email_to?: MocoDateValue;
  billing_notes?: MocoFieldValue;
  billing_variant?: "project" | "task" | "user" | "project";
  budget?: MocoFieldValue;
  budget_expenses?: MocoFieldValue;
  budget_monthly?: MocoFieldValue;
  co_leader_id?: MocoIdLike;
  contact_id?: MocoIdLike;
  currency: MocoFieldValue;
  custom_properties?: MocoCustomPropertiesFilter;
  customer_id: MocoDateValue;
  deal_id?: MocoIdLike;
  finish_date: MocoDateValue;
  fixed_price: boolean;
  hourly_rate?: MocoFieldValue;
  identifier: MocoDateValue;
  info?: MocoFieldValue;
  leader_id: MocoIdLike;
  name: MocoFieldValue;
  project_group_id?: MocoIdLike;
  retainer: boolean;
  retainer_billing_date?: MocoDateValue;
  retainer_billing_description?: MocoFieldValue;
  retainer_billing_title?: MocoFieldValue;
  secondary_contact_id?: MocoIdLike;
  setting_include_time_report?: boolean;
  skip_favorite?: MocoDateValue;
  start_date: MocoDateValue;
  tags?: "Print" | "Digital";
}

export interface ProjectsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ProjectsUpdateBody extends MocoBody {
  budget?: MocoFieldValue;
}

export interface ProjectsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ProjectsArchivePath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsArchiveBody extends MocoBody {
}

export interface ProjectsUnarchivePath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsUnarchiveBody extends MocoBody {
}

export interface ProjectsListReportPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsListReportQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectsSharePath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsShareBody extends MocoBody {
}

export interface ProjectsDisableSharePath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsDisableShareBody extends MocoBody {
}

export interface ProjectsAssignProjectGroupPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsAssignProjectGroupBody extends MocoBody {
  project_group_id?: MocoIdLike;
}

export interface ProjectsUnassignProjectGroupPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectsUnassignProjectGroupBody extends MocoBody {
}

export interface MocoProjectTask extends MocoEntity {
  active?: boolean;
  billable?: boolean;
  budget?: number;
  created_at?: string;
  description?: string;
  hourly_rate?: number;
  id?: number;
  name?: string;
  revenue_category?: Record<string, MocoFieldValue>;
  updated_at?: string;
}

export interface ProjectTasksListForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectTasksListForProjectQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface ProjectTasksGetPath extends Record<string, MocoId> {
  projectId: MocoId;
  taskId: MocoId;
}

export interface ProjectTasksCreateForProjectPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface ProjectTasksCreateForProjectBody extends MocoBody {
  active?: boolean;
  billable?: boolean;
  budget?: MocoFieldValue;
  description?: MocoFieldValue;
  hourly_rate?: MocoFieldValue;
  name: MocoFieldValue;
}

export interface ProjectTasksUpdatePath extends Record<string, MocoId> {
  projectId: MocoId;
  taskId: MocoId;
}

export interface ProjectTasksUpdateBody extends MocoBody {
  budget?: MocoFieldValue;
  hourly_rate?: MocoFieldValue;
}

export interface ProjectTasksDeletePath extends Record<string, MocoId> {
  projectId: MocoId;
  taskId: MocoId;
}

export interface ProjectTasksDeleteDestroyAllPath extends Record<string, MocoId> {
  projectId: MocoId;
}

export interface MocoPurchaseBookkeepingExport extends MocoEntity {
  comment?: string;
  created_at?: string;
  from?: string;
  id?: number;
  purchase_ids?: readonly MocoFieldValue[];
  status?: string;
  to?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface PurchaseBookkeepingExportsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface PurchaseBookkeepingExportsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchaseBookkeepingExportsCreateBody extends MocoBody {
  archive_after_export?: boolean;
  comment?: MocoFieldValue;
  purchase_ids: MocoIdLike;
  trigger_submission?: boolean;
}

export interface MocoPurchaseBudget extends MocoEntity {}

export interface PurchaseBudgetsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  year?: MocoFieldValue;
}

export interface MocoPurchaseCategory extends MocoEntity {
  active?: boolean;
  created_at?: string;
  credit_account?: string;
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface PurchaseCategoriesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface PurchaseCategoriesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoPurchaseDraft extends MocoEntity {
  created_at?: string;
  email_body?: string;
  email_from?: string;
  file_url?: string;
  gross_total?: number;
  id?: number;
  net_total?: number;
  title?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface PurchaseDraftsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface PurchaseDraftsCreateBody extends MocoBody {
  file?: MocoFieldValue;
  title?: MocoFieldValue;
}

export interface PurchaseDraftsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchaseDraftsGetPdfPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchaseDraftsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoPurchasePayment extends MocoEntity {
  created_at?: string;
  date?: string;
  id?: number;
  purchase?: Record<string, MocoFieldValue>;
  total?: string;
  updated_at?: string;
}

export interface PurchasePaymentsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  date_from?: MocoDateValue;
  date_to?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  purchase_id?: MocoIdLike;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface PurchasePaymentsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchasePaymentsCreateBody extends MocoBody {
  date: MocoDateValue;
  description?: MocoIdLike;
  purchase_id?: MocoDateValue;
  total: MocoDateValue;
}

export interface PurchasePaymentsBulkCreateBody extends MocoBody {
  bulk_data?: MocoFieldValue;
  date?: MocoDateValue;
  description?: MocoFieldValue;
  purchase_id?: MocoIdLike;
  total?: MocoDateValue;
}

export interface PurchasePaymentsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchasePaymentsUpdateBody extends MocoBody {
  total?: MocoDateValue;
}

export interface PurchasePaymentsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoPurchase extends MocoEntity {
  approval_status?: string;
  company?: Record<string, MocoFieldValue>;
  created_at?: string;
  credit_card_transaction?: Record<string, MocoFieldValue>;
  currency?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  date?: string;
  due_date?: MocoFieldValue | null;
  file_url?: MocoFieldValue | null;
  gross_total?: number;
  iban?: string;
  id?: number;
  identifier?: string;
  info?: MocoFieldValue | null;
  items?: readonly MocoFieldValue[];
  net_total?: number;
  payment_method?: string;
  payments?: readonly MocoFieldValue[];
  receipt_identifier?: string;
  reference?: MocoFieldValue | null;
  refund_request?: Record<string, MocoFieldValue>;
  service_period_from?: string;
  service_period_to?: string;
  status?: string;
  tags?: readonly MocoFieldValue[];
  title?: string;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface PurchasesListQuery extends MocoListQuery {
  category_id?: MocoIdLike;
  company_id?: MocoDateValue;
  custom_properties?: MocoCustomPropertiesFilter;
  date?: MocoDateValue;
  identifier?: MocoIdLike;
  ids?: MocoIdLike;
  not_booked?: boolean;
  page?: number;
  payment_method?: "bank_transfer" | "direct_debit" | "credit_card" | "paypal" | "cash" | "bank_transfer_swiss_qr_esr";
  per_page?: number;
  receipt_identifier?: MocoIdLike;
  sort_by?: string;
  status?: "pending" | "archived";
  tags?: MocoArrayLike;
  term?: MocoFieldValue;
  unpaid?: MocoIdLike;
  updated_after?: MocoDateValue;
}

export interface PurchasesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchasesCreateBody extends MocoBody {
  company_id?: MocoDateValue;
  currency: MocoIdLike;
  custom_property_values?: MocoDateValue;
  date: MocoDateValue;
  due_date?: MocoDateValue;
  file?: MocoDateValue;
  iban?: MocoFieldValue;
  info?: MocoFieldValue;
  items: MocoArrayLike;
  payment_method: "bank_transfer" | "direct_debit" | "credit_card" | "paypal" | "cash" | "bank_transfer_swiss_qr_esr";
  receipt_identifier?: MocoIdLike;
  reference?: MocoFieldValue;
  service_period_from?: MocoDateValue;
  service_period_to?: MocoDateValue;
  status?: "pending" | "archived";
  tags?: "Label1" | "Label2";
  title?: MocoDateValue;
  user_id?: MocoDateValue;
}

export interface PurchasesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface PurchasesUpdateBody extends MocoBody {
  currency?: MocoFieldValue;
  date?: MocoDateValue;
  payment_method?: MocoFieldValue;
  receipt_identifier?: MocoIdLike;
}

export interface PurchasesAssignToProjectPath extends Record<string, MocoId> {
  purchaseId: MocoId;
}

export interface PurchasesAssignToProjectBody extends MocoBody {
  billable?: MocoFieldValue;
  budget_relevant?: MocoFieldValue;
  expense_id?: MocoDateValue;
  item_id: MocoDateValue;
  notify_project_leader?: MocoDateValue;
  project_id: MocoDateValue;
  surcharge?: boolean;
}

export interface PurchasesUpdateStatusPath extends Record<string, MocoId> {
  purchaseId: MocoId;
}

export interface PurchasesUpdateStatusBody extends MocoBody {
  status: "pending" | "archived";
}

export interface PurchasesStoreDocumentPath extends Record<string, MocoId> {
  purchaseId: MocoId;
}

export interface PurchasesStoreDocumentBody extends MocoBody {
  file: MocoDateValue;
}

export interface PurchasesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoReceipt extends MocoEntity {
  attachment_url?: string;
  billable?: boolean;
  currency?: string;
  date?: string;
  gross_total?: number;
  id?: number;
  info?: string;
  items?: readonly MocoFieldValue[];
  pending?: boolean;
  project?: Record<string, MocoFieldValue>;
  refund_request?: Record<string, MocoFieldValue>;
  title?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface ReceiptsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  project_id?: MocoIdLike;
  purchase_category_id?: MocoIdLike;
  refund_request_id?: MocoIdLike;
  sort_by?: string;
  submitted?: boolean;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface ReceiptsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ReceiptsCreateBody extends MocoBody {
  attachment?: MocoDateValue;
  billable?: boolean;
  currency: MocoFieldValue;
  date: MocoDateValue;
  info?: MocoFieldValue;
  items: MocoArrayLike;
  project_id?: MocoIdLike;
  title: MocoFieldValue;
}

export interface ReceiptsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface ReceiptsUpdateBody extends MocoBody {
  attachment?: MocoFieldValue;
  base64?: MocoFieldValue;
  currency?: MocoFieldValue;
  date?: MocoDateValue;
  filename?: MocoFieldValue;
  gross_total?: MocoDateValue;
  items?: MocoFieldValue;
  title?: MocoFieldValue;
  vat_code_id?: MocoIdLike;
}

export interface ReceiptsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoReport extends MocoEntity {}

export interface ReportsListAbsenceQuery extends MocoListQuery {
  active?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  year?: MocoDateValue;
}

export interface ReportsListCashflowQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  term?: MocoFieldValue;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface ReportsListFinanceQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  term?: MocoFieldValue;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface ReportsListPlannedVTrackedQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface ReportsListUtilizationQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
}

export interface MocoSchedule extends MocoEntity {
  am?: boolean;
  assignment?: Record<string, MocoFieldValue>;
  comment?: string;
  created_at?: string;
  date?: string;
  id?: number;
  pm?: boolean;
  symbol?: MocoFieldValue | null;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface SchedulesListQuery extends MocoListQuery {
  absence_code?: MocoIdLike;
  absence_request_id?: MocoIdLike;
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface SchedulesGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface SchedulesCreateBody extends MocoBody {
  absence_code: MocoIdLike;
  am?: MocoFieldValue;
  comment?: MocoFieldValue;
  date: MocoDateValue;
  overwrite?: MocoIdLike;
  pm?: MocoFieldValue;
  symbol?: MocoFieldValue;
  user_id?: MocoIdLike;
}

export interface SchedulesUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface SchedulesUpdateBody extends MocoBody {
  comment?: MocoFieldValue;
}

export interface SchedulesDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoTagging extends MocoEntity {}

export interface TaggingsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface TaggingsUpdateBody extends MocoBody {
  tags?: MocoArrayLike;
}

export interface TaggingsUpdateTaggingsBody extends MocoBody {
  tags?: MocoArrayLike;
}

export interface MocoTag extends MocoEntity {
  color?: string;
  context?: string;
  created_at?: string;
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface TagsListQuery extends MocoListQuery {
  context?: MocoFieldValue;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface TagsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface TagsCreateBody extends MocoBody {
  color?: MocoFieldValue;
  context: MocoFieldValue;
  name: MocoFieldValue;
}

export interface TagsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface TagsUpdateBody extends MocoBody {
  color?: MocoFieldValue;
}

export interface TagsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoUnit extends MocoEntity {
  created_at?: string;
  id?: number;
  name?: string;
  updated_at?: string;
  users?: readonly MocoFieldValue[];
}

export interface UnitsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface UnitsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface UnitsCreateBody extends MocoBody {
  name?: MocoFieldValue;
}

export interface UnitsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface UnitsUpdateBody extends MocoBody {
  name?: MocoFieldValue;
}

export interface UnitsDeleteUserPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoUserRole extends MocoEntity {
  created_at?: string;
  id?: number;
  is_admin?: boolean;
  is_default?: boolean;
  name?: string;
  permission?: Record<string, MocoFieldValue>;
  updated_at?: string;
}

export interface UserRolesListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface MocoUser extends MocoEntity {
  active?: boolean;
  avatar_url?: string;
  birthday?: string;
  created_at?: string;
  custom_properties?: Record<string, MocoFieldValue>;
  email?: string;
  extern?: boolean;
  firstname?: string;
  home_address?: string;
  iban?: string;
  id?: number;
  info?: string;
  lastname?: string;
  mobile_phone?: string;
  role?: Record<string, MocoFieldValue>;
  tags?: readonly MocoFieldValue[];
  unit?: Record<string, MocoFieldValue>;
  updated_at?: string;
  work_phone?: string;
}

export interface UsersListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  email?: MocoFieldValue;
  ids?: MocoIdLike;
  include_archived?: boolean;
  page?: number;
  per_page?: number;
  sort_by?: string;
  tags?: MocoArrayLike;
  updated_after?: MocoDateValue;
}

export interface UsersGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface UsersCreateBody extends MocoBody {
  active?: boolean;
  avatar?: MocoFieldValue;
  bday?: MocoFieldValue;
  custom_properties?: MocoCustomPropertiesFilter;
  email: MocoFieldValue;
  external?: boolean;
  firstname: MocoFieldValue;
  home_address?: MocoFieldValue;
  iban?: MocoFieldValue;
  info?: MocoFieldValue;
  language?: "de" | "de-AT" | "de-CH" | "en" | "it" | "fr";
  lastname: MocoFieldValue;
  mobile_phone?: MocoFieldValue;
  password?: MocoFieldValue;
  role_id?: MocoIdLike;
  tags?: MocoArrayLike;
  unit_id: MocoIdLike;
  welcome_email?: boolean;
  work_phone?: MocoFieldValue;
}

export interface UsersUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface UsersUpdateBody extends MocoBody {
  email?: MocoFieldValue;
  lastname?: MocoFieldValue;
}

export interface UsersDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface UsersListPerformanceReportPath extends Record<string, MocoId> {
  userId: MocoId;
}

export interface UsersListPerformanceReportQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
  year?: MocoFieldValue;
}

export interface MocoVatCode extends MocoEntity {
  active?: boolean;
  code?: string;
  id?: number;
  intra_eu?: boolean;
  notice_tax_exemption?: string;
  notice_tax_exemption_alt?: string;
  print_gross_total?: boolean;
  reverse_charge?: boolean;
  tax?: number;
}

export interface VatCodesListVatCodeSaleQuery extends MocoListQuery {
  active?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  intra_eu?: boolean;
  page?: number;
  per_page?: number;
  reverse_charge?: boolean;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface VatCodesListVatCodePurchaseQuery extends MocoListQuery {
  active?: boolean;
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  intra_eu?: boolean;
  page?: number;
  per_page?: number;
  reverse_charge?: boolean;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface VatCodesGetVatCodeSalePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface VatCodesGetVatCodePurchasePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoWebHook extends MocoEntity {
  created_at?: string;
  disabled?: boolean;
  disabled_at?: MocoFieldValue | null;
  event?: string;
  hook?: string;
  id?: number;
  target?: string;
  updated_at?: string;
}

export interface WebHooksListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  updated_after?: MocoDateValue;
}

export interface WebHooksGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface WebHooksCreateBody extends MocoBody {
  event: MocoDateValue;
  hook: MocoFieldValue;
  target: MocoFieldValue;
}

export interface WebHooksUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface WebHooksUpdateBody extends MocoBody {
  hook?: MocoFieldValue;
}

export interface WebHooksDisablePath extends Record<string, MocoId> {
  webHookId: MocoId;
}

export interface WebHooksDisableBody extends MocoBody {
}

export interface WebHooksEnablePath extends Record<string, MocoId> {
  webHookId: MocoId;
}

export interface WebHooksEnableBody extends MocoBody {
}

export interface WebHooksDeletePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface MocoWorkTimeAdjustment extends MocoEntity {
  created_at?: string;
  creator?: Record<string, MocoFieldValue>;
  date?: string;
  description?: string;
  hours?: number;
  id?: number;
  updated_at?: string;
  user?: Record<string, MocoFieldValue>;
}

export interface WorkTimeAdjustmentsListQuery extends MocoListQuery {
  custom_properties?: MocoCustomPropertiesFilter;
  from?: MocoDateValue;
  ids?: MocoIdLike;
  page?: number;
  per_page?: number;
  sort_by?: string;
  to?: MocoDateValue;
  updated_after?: MocoDateValue;
  user_id?: MocoIdLike;
}

export interface WorkTimeAdjustmentsGetPath extends Record<string, MocoId> {
  id: MocoId;
}

export interface WorkTimeAdjustmentsCreateBody extends MocoBody {
  date: MocoDateValue;
  description: MocoFieldValue;
  hours: MocoFieldValue;
  user_id: MocoIdLike;
}

export interface WorkTimeAdjustmentsUpdatePath extends Record<string, MocoId> {
  id: MocoId;
}

export interface WorkTimeAdjustmentsUpdateBody extends MocoBody {
  description?: MocoFieldValue;
}

export interface WorkTimeAdjustmentsDeletePath extends Record<string, MocoId> {
  id: MocoId;
}
