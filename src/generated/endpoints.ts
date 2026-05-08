import type { MocoHttpMethod } from "../core";

export interface MocoEndpointDefinition {
  readonly bodyParameters: readonly string[];
  readonly method: MocoHttpMethod;
  readonly operation: string;
  readonly path: string;
  readonly queryParameters: readonly string[];
  readonly resource: string;
  readonly source: string;
}

export const MOCO_ENDPOINTS = [
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/catalog_services",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/account/catalog_services/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [
      "items",
      "net_total",
      "quantity",
      "title",
      "type",
      "unit",
      "unit_price"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/account/catalog_services",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [
      "title"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/account/catalog_services/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/account/catalog_services/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getItem",
    "path": "/account/catalog_services/{service_id}/items/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [
      "net_total",
      "quantity",
      "title",
      "type",
      "unit",
      "unit_price"
    ],
    "method": "POST",
    "operation": "items",
    "path": "/account/catalog_services/{service_id}/items",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [
      "net_total",
      "quantity",
      "title",
      "type",
      "unit",
      "unit_price"
    ],
    "method": "PUT",
    "operation": "updateItem",
    "path": "/account/catalog_services/{service_id}/items/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteItem",
    "path": "/account/catalog_services/{service_id}/items/{id}",
    "queryParameters": [],
    "resource": "account/catalog_services",
    "source": "account/catalog_services.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/custom_properties",
    "queryParameters": [
      "custom_properties",
      "entity",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "account/custom_properties",
    "source": "account/custom_properties.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/account/custom_properties/{id}",
    "queryParameters": [],
    "resource": "account/custom_properties",
    "source": "account/custom_properties.md"
  },
  {
    "bodyParameters": [
      "api_only",
      "defaults",
      "entity",
      "kind",
      "name",
      "notification_enabled",
      "placeholder",
      "placeholder_alt",
      "print_on_invoice",
      "print_on_offer",
      "print_on_timesheet"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/account/custom_properties",
    "queryParameters": [],
    "resource": "account/custom_properties",
    "source": "account/custom_properties.md"
  },
  {
    "bodyParameters": [
      "name",
      "placeholder"
    ],
    "method": "PATCH",
    "operation": "update",
    "path": "/account/custom_properties/{id}",
    "queryParameters": [],
    "resource": "account/custom_properties",
    "source": "account/custom_properties.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/account/custom_properties/{id}",
    "queryParameters": [],
    "resource": "account/custom_properties",
    "source": "account/custom_properties.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/expense_templates",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "account/expense_templates",
    "source": "account/expense_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/account/expense_templates/{id}",
    "queryParameters": [],
    "resource": "account/expense_templates",
    "source": "account/expense_templates.md"
  },
  {
    "bodyParameters": [
      "currency",
      "description",
      "title",
      "unit",
      "unit_cost",
      "unit_price"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/account/expense_templates",
    "queryParameters": [],
    "resource": "account/expense_templates",
    "source": "account/expense_templates.md"
  },
  {
    "bodyParameters": [
      "title"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/account/expense_templates/{id}",
    "queryParameters": [],
    "resource": "account/expense_templates",
    "source": "account/expense_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/account/expense_templates/{id}",
    "queryParameters": [],
    "resource": "account/expense_templates",
    "source": "account/expense_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/fixed_costs",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "year"
    ],
    "resource": "account/fixed_costs",
    "source": "account/fixed_costs.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/hourly_rates",
    "queryParameters": [
      "company_id",
      "custom_properties",
      "ids",
      "include_archived_users",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "account/hourly_rates",
    "source": "account/hourly_rates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/internal_hourly_rates",
    "queryParameters": [
      "custom_properties",
      "ids",
      "include_archived",
      "page",
      "per_page",
      "sort_by",
      "unit_id",
      "updated_after",
      "years"
    ],
    "resource": "account/internal_hourly_rates",
    "source": "account/internal_hourly_rates.md"
  },
  {
    "bodyParameters": [
      "rate",
      "rates",
      "user_id",
      "year"
    ],
    "method": "PATCH",
    "operation": "update",
    "path": "/account/internal_hourly_rates",
    "queryParameters": [],
    "resource": "account/internal_hourly_rates",
    "source": "account/internal_hourly_rates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/task_templates",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "account/task_templates",
    "source": "account/task_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/account/task_templates/{id}",
    "queryParameters": [],
    "resource": "account/task_templates",
    "source": "account/task_templates.md"
  },
  {
    "bodyParameters": [
      "billable",
      "description",
      "name",
      "project_default",
      "revenue_category_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/account/task_templates",
    "queryParameters": [],
    "resource": "account/task_templates",
    "source": "account/task_templates.md"
  },
  {
    "bodyParameters": [
      "title"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/account/task_templates/{id}",
    "queryParameters": [],
    "resource": "account/task_templates",
    "source": "account/task_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/account/task_templates/{id}",
    "queryParameters": [],
    "resource": "account/task_templates",
    "source": "account/task_templates.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/activities",
    "queryParameters": [
      "billable",
      "billed",
      "company_id",
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "project_id",
      "sort_by",
      "task_id",
      "term",
      "to",
      "updated_after",
      "user_id"
    ],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/activities/{id}",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [
      "billable",
      "date",
      "description",
      "project_id",
      "remote_id",
      "remote_service",
      "remote_url",
      "seconds",
      "tag",
      "task_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/activities",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [
      "activities",
      "date",
      "description",
      "project_id",
      "seconds",
      "task_id"
    ],
    "method": "POST",
    "operation": "bulkCreate",
    "path": "/activities/bulk",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [
      "seconds"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/activities/{id}",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [
      "seconds"
    ],
    "method": "PATCH",
    "operation": "updateBillableSeconds",
    "path": "/activities/{id}/billable_seconds",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [],
    "method": "PATCH",
    "operation": "startTimer",
    "path": "/activities/{id}/start_timer",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [],
    "method": "PATCH",
    "operation": "stopTimer",
    "path": "/activities/{id}/stop_timer",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/activities/{id}",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [
      "activity_ids",
      "company_id",
      "project_id",
      "reason"
    ],
    "method": "POST",
    "operation": "disregard",
    "path": "/activities/disregard",
    "queryParameters": [],
    "resource": "activities",
    "source": "activities.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/comments",
    "queryParameters": [
      "commentable_id",
      "commentable_type",
      "custom_properties",
      "ids",
      "manual",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/comments/{id}",
    "queryParameters": [],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [
      "attachment_content",
      "attachment_filename",
      "commentable_id",
      "commentable_type",
      "created_at",
      "text"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/comments",
    "queryParameters": [],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [
      "commentable_ids"
    ],
    "method": "POST",
    "operation": "bulkCreate",
    "path": "/comments/bulk",
    "queryParameters": [],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [
      "text"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/comments/{id}",
    "queryParameters": [],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/comments/{id}",
    "queryParameters": [],
    "resource": "comments",
    "source": "comments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/companies",
    "queryParameters": [
      "custom_properties",
      "identifier",
      "ids",
      "include_archived",
      "page",
      "per_page",
      "sort_by",
      "tags",
      "term",
      "type",
      "updated_after"
    ],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/companies/{id}",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [
      "address",
      "alternative_correspondence_language",
      "bank_bic",
      "bank_owner",
      "billing_email_cc",
      "billing_notes",
      "country_code",
      "credit_number",
      "currency",
      "custom_properties",
      "customer_tax",
      "customer_vat_code_id",
      "debit_number",
      "default_invoice_due_days",
      "default_payment_means",
      "email",
      "fax",
      "footer",
      "iban",
      "identifier",
      "info",
      "invoice_format",
      "name",
      "phone",
      "supplier_tax",
      "supplier_vat_code_id",
      "tags",
      "type",
      "user_id",
      "vat_identifier",
      "website"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/companies",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [
      "name"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/companies/{id}",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/companies/{id}",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "archive",
    "path": "/companies/{id}/archive",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "unarchive",
    "path": "/companies/{id}/unarchive",
    "queryParameters": [],
    "resource": "companies",
    "source": "companies.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/contacts/people",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "phone",
      "sort_by",
      "tags",
      "term",
      "updated_after"
    ],
    "resource": "contacts",
    "source": "contacts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/contacts/people/{id}",
    "queryParameters": [],
    "resource": "contacts",
    "source": "contacts.md"
  },
  {
    "bodyParameters": [
      "birthday",
      "company_id",
      "firstname",
      "gender",
      "home_address",
      "home_email",
      "info",
      "job_position",
      "lastname",
      "mobile_phone",
      "tags",
      "title",
      "user_id",
      "work_address",
      "work_email",
      "work_fax",
      "work_phone"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/contacts/people",
    "queryParameters": [],
    "resource": "contacts",
    "source": "contacts.md"
  },
  {
    "bodyParameters": [
      "job_position"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/contacts/people/{id}",
    "queryParameters": [],
    "resource": "contacts",
    "source": "contacts.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/contacts/people/{id}",
    "queryParameters": [],
    "resource": "contacts",
    "source": "contacts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/deal_categories",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "deal_categories",
    "source": "deal_categories.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/deal_categories/{id}",
    "queryParameters": [],
    "resource": "deal_categories",
    "source": "deal_categories.md"
  },
  {
    "bodyParameters": [
      "name",
      "probability"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/deal_categories",
    "queryParameters": [],
    "resource": "deal_categories",
    "source": "deal_categories.md"
  },
  {
    "bodyParameters": [
      "name"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/deal_categories/{id}",
    "queryParameters": [],
    "resource": "deal_categories",
    "source": "deal_categories.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/deal_categories/{id}",
    "queryParameters": [],
    "resource": "deal_categories",
    "source": "deal_categories.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/deals",
    "queryParameters": [
      "closed_from",
      "company_id",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "status",
      "tags",
      "updated_after"
    ],
    "resource": "deals",
    "source": "deals.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/deals/{id}",
    "queryParameters": [],
    "resource": "deals",
    "source": "deals.md"
  },
  {
    "bodyParameters": [
      "closed_on",
      "company_id",
      "currency",
      "deal_category_id",
      "info",
      "money",
      "name",
      "person_id",
      "reminder_date",
      "service_period_from",
      "service_period_to",
      "status",
      "tags",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/deals",
    "queryParameters": [],
    "resource": "deals",
    "source": "deals.md"
  },
  {
    "bodyParameters": [
      "status"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/deals/{id}",
    "queryParameters": [],
    "resource": "deals",
    "source": "deals.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/deals/{id}",
    "queryParameters": [],
    "resource": "deals",
    "source": "deals.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users/employments",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "employments",
    "source": "employments.md"
  },
  {
    "bodyParameters": [
      "from",
      "pattern",
      "to",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/users/employments",
    "queryParameters": [],
    "resource": "employments",
    "source": "employments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/users/employments/{id}",
    "queryParameters": [],
    "resource": "employments",
    "source": "employments.md"
  },
  {
    "bodyParameters": [
      "am",
      "pattern",
      "pm"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/users/employments/{id}",
    "queryParameters": [],
    "resource": "employments",
    "source": "employments.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/users/employments/{id}",
    "queryParameters": [],
    "resource": "employments",
    "source": "employments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users/holidays",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id",
      "year"
    ],
    "resource": "holidays",
    "source": "holidays.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/users/holidays/{id}",
    "queryParameters": [],
    "resource": "holidays",
    "source": "holidays.md"
  },
  {
    "bodyParameters": [
      "creator_id",
      "days",
      "title",
      "user_id",
      "year"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/users/holidays",
    "queryParameters": [],
    "resource": "holidays",
    "source": "holidays.md"
  },
  {
    "bodyParameters": [
      "days"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/users/holidays/{id}",
    "queryParameters": [],
    "resource": "holidays",
    "source": "holidays.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/users/holidays/{id}",
    "queryParameters": [],
    "resource": "holidays",
    "source": "holidays.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/invoices/bookkeeping_exports",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoice_bookkeeping_exports",
    "source": "invoice_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/invoices/bookkeeping_exports/{id}",
    "queryParameters": [],
    "resource": "invoice_bookkeeping_exports",
    "source": "invoice_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [
      "comment",
      "invoice_ids",
      "trigger_submission"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/invoices/bookkeeping_exports",
    "queryParameters": [],
    "resource": "invoice_bookkeeping_exports",
    "source": "invoice_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/invoices/payments",
    "queryParameters": [
      "custom_properties",
      "date_from",
      "date_to",
      "ids",
      "invoice_id",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/invoices/payments/{id}",
    "queryParameters": [],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [
      "currency",
      "date",
      "description",
      "invoice_id",
      "paid_total",
      "partially_paid"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/invoices/payments",
    "queryParameters": [],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [
      "currency",
      "date",
      "invoice_id",
      "paid_total"
    ],
    "method": "POST",
    "operation": "bulkCreate",
    "path": "/invoices/payments/bulk",
    "queryParameters": [],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [
      "paid_total"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/invoices/payments/{id}",
    "queryParameters": [],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/invoices/payments/{id}",
    "queryParameters": [],
    "resource": "invoice_payments",
    "source": "invoice_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listInvoiceReminder",
    "path": "/invoice_reminders",
    "queryParameters": [
      "custom_properties",
      "date_from",
      "date_to",
      "ids",
      "invoice_id",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoice_reminders",
    "source": "invoice_reminders.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getInvoiceReminder",
    "path": "/invoice_reminders/{id}",
    "queryParameters": [],
    "resource": "invoice_reminders",
    "source": "invoice_reminders.md"
  },
  {
    "bodyParameters": [
      "date",
      "due_date",
      "fee",
      "invoice_id",
      "text",
      "title"
    ],
    "method": "POST",
    "operation": "invoiceReminders",
    "path": "/invoice_reminders",
    "queryParameters": [],
    "resource": "invoice_reminders",
    "source": "invoice_reminders.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteInvoiceReminder",
    "path": "/invoice_reminders/{id}",
    "queryParameters": [],
    "resource": "invoice_reminders",
    "source": "invoice_reminders.md"
  },
  {
    "bodyParameters": [
      "emails_bcc",
      "emails_cc",
      "emails_to",
      "subject",
      "text"
    ],
    "method": "POST",
    "operation": "invoiceRemindersSendEmail",
    "path": "/invoice_reminders/{id}/send_email",
    "queryParameters": [],
    "resource": "invoice_reminders",
    "source": "invoice_reminders.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/invoices",
    "queryParameters": [
      "company_id",
      "custom_properties",
      "date_from",
      "date_to",
      "identifier",
      "ids",
      "include_disregarded",
      "not_booked",
      "page",
      "per_page",
      "project_id",
      "service_period_from",
      "service_period_to",
      "sort_by",
      "status",
      "tags",
      "term",
      "updated_after"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listLocked",
    "path": "/invoices/locked",
    "queryParameters": [
      "custom_properties",
      "date_from",
      "date_to",
      "identifier",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "status",
      "updated_after"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/invoices/{id}",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getPdf",
    "path": "/invoices/{id}.pdf",
    "queryParameters": [
      "blank",
      "letter_paper_id"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listTimesheet",
    "path": "/invoices/{id}/timesheet",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getTimesheetPdf",
    "path": "/invoices/{id}/timesheet.pdf",
    "queryParameters": [
      "letter_paper_id"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listExpense",
    "path": "/invoices/{id}/expenses",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [
      "status"
    ],
    "method": "PUT",
    "operation": "updateStatus",
    "path": "/invoices/{id}/update_status",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [
      "cash_discount",
      "cash_discount_days",
      "change_address",
      "currency",
      "custom_properties",
      "customer_id",
      "date",
      "discount",
      "due_date",
      "footer",
      "internal_contact_id",
      "items",
      "print_detail_columns",
      "project_id",
      "recipient_address",
      "salutation",
      "service_period_from",
      "service_period_to",
      "status",
      "tags",
      "tax",
      "title"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/invoices",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [
      "emails_bcc",
      "emails_cc",
      "emails_to",
      "letter_paper_id",
      "subject",
      "text"
    ],
    "method": "POST",
    "operation": "sendEmail",
    "path": "/invoices/{id}/send_email",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/invoices/{id}",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listAttachment",
    "path": "/invoices/{id}/attachments",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [
      "attachment",
      "base64",
      "filename"
    ],
    "method": "POST",
    "operation": "attachments",
    "path": "/invoices/{invoice_id}/attachments",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteAttachment",
    "path": "/invoices/{invoice_id}/attachments/{id}",
    "queryParameters": [],
    "resource": "invoices",
    "source": "invoices.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/letter_papers",
    "queryParameters": [
      "custom_properties",
      "ids",
      "Link",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "XPage",
      "XPerPage",
      "XTotal"
    ],
    "resource": "letter_papers",
    "source": "letter_papers.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForOffer",
    "path": "/offers/{id}/customer_approval",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "offer_customer_approval",
    "source": "offer_customer_approval.md"
  },
  {
    "bodyParameters": [],
    "method": "POST",
    "operation": "activate",
    "path": "/offers/{id}/customer_approval/activate",
    "queryParameters": [],
    "resource": "offer_customer_approval",
    "source": "offer_customer_approval.md"
  },
  {
    "bodyParameters": [],
    "method": "POST",
    "operation": "deactivate",
    "path": "/offers/{id}/customer_approval/deactivate",
    "queryParameters": [],
    "resource": "offer_customer_approval",
    "source": "offer_customer_approval.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/offers",
    "queryParameters": [
      "company_id",
      "custom_properties",
      "deal_id",
      "from",
      "identifier",
      "ids",
      "page",
      "per_page",
      "project_id",
      "sort_by",
      "status",
      "to",
      "updated_after"
    ],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/offers/{id}",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getPdf",
    "path": "/offers/{id}.pdf",
    "queryParameters": [
      "letter_paper_id"
    ],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [
      "change_address",
      "company_id",
      "contact_id",
      "currency",
      "custom_properties",
      "date",
      "deal_id",
      "discount",
      "due_date",
      "footer",
      "internal_contact_id",
      "items",
      "print_detail_columns",
      "project_id",
      "recipient_address",
      "salutation",
      "tags",
      "tax",
      "title"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/offers",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [
      "company_id",
      "deal_id",
      "project_id"
    ],
    "method": "PUT",
    "operation": "assign",
    "path": "/offers/{id}/assign",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [
      "status"
    ],
    "method": "PUT",
    "operation": "updateStatus",
    "path": "/offers/{id}/update_status",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [
      "emails_bcc",
      "emails_cc",
      "emails_to",
      "subject",
      "text"
    ],
    "method": "POST",
    "operation": "sendEmail",
    "path": "/offers/{id}/send_email",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listAttachment",
    "path": "/offers/{id}/attachments",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [
      "attachment",
      "base64",
      "filename"
    ],
    "method": "POST",
    "operation": "attachments",
    "path": "/offers/{id}/attachments",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteAttachment",
    "path": "/offers/{offer_id}/attachments/{id}",
    "queryParameters": [],
    "resource": "offers",
    "source": "offers.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/planning_entries",
    "queryParameters": [
      "custom_properties",
      "deal_id",
      "ids",
      "page",
      "per_page",
      "period",
      "project_id",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "planning_entries",
    "source": "planning_entries.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/planning_entries/{id}",
    "queryParameters": [],
    "resource": "planning_entries",
    "source": "planning_entries.md"
  },
  {
    "bodyParameters": [
      "comment",
      "ends_on",
      "hours_per_day",
      "starts_on",
      "symbol",
      "tentative",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/planning_entries",
    "queryParameters": [],
    "resource": "planning_entries",
    "source": "planning_entries.md"
  },
  {
    "bodyParameters": [
      "hours_per_day"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/planning_entries/{id}",
    "queryParameters": [],
    "resource": "planning_entries",
    "source": "planning_entries.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/planning_entries/{id}",
    "queryParameters": [],
    "resource": "planning_entries",
    "source": "planning_entries.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users/presences",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "is_home_office",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/users/presences/{id}",
    "queryParameters": [],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [
      "date",
      "from",
      "is_home_office",
      "to"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/users/presences",
    "queryParameters": [],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [
      "is_home_office",
      "override"
    ],
    "method": "POST",
    "operation": "touch",
    "path": "/users/presences/touch",
    "queryParameters": [],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [
      "to"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/users/presences/{id}",
    "queryParameters": [],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/users/presences/{id}",
    "queryParameters": [],
    "resource": "presences",
    "source": "presences.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/profile",
    "queryParameters": [],
    "resource": "profile",
    "source": "profile.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForProject",
    "path": "/projects/{id}/contracts",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "project_contracts",
    "source": "project_contracts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{id}/contracts/{id}",
    "queryParameters": [],
    "resource": "project_contracts",
    "source": "project_contracts.md"
  },
  {
    "bodyParameters": [
      "active",
      "billable",
      "budget",
      "hourly_rate",
      "user_id"
    ],
    "method": "POST",
    "operation": "createForProject",
    "path": "/projects/{id}/contracts",
    "queryParameters": [],
    "resource": "project_contracts",
    "source": "project_contracts.md"
  },
  {
    "bodyParameters": [
      "budget"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{id}/contracts/{id}",
    "queryParameters": [],
    "resource": "project_contracts",
    "source": "project_contracts.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{id}/contracts/{id}",
    "queryParameters": [],
    "resource": "project_contracts",
    "source": "project_contracts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForProject",
    "path": "/projects/{id}/expenses",
    "queryParameters": [
      "billable",
      "billed",
      "budget_relevant",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{id}/expenses/{id}",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [
      "billable",
      "budget_relevant",
      "custom_properties",
      "date",
      "description",
      "file",
      "quantity",
      "service_period_from",
      "service_period_to",
      "title",
      "unit",
      "unit_cost",
      "unit_price",
      "user_id"
    ],
    "method": "POST",
    "operation": "createForProject",
    "path": "/projects/{id}/expenses",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [
      "billable",
      "budget_relevant",
      "date",
      "description",
      "quantity",
      "service_period_from",
      "service_period_to",
      "title",
      "unit",
      "unit_cost",
      "unit_price"
    ],
    "method": "POST",
    "operation": "bulkCreate",
    "path": "/projects/{id}/expenses/bulk",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [
      "unit_price"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{id}/expenses/{id}",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{id}/expenses/{id}",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [
      "expense_ids",
      "reason"
    ],
    "method": "POST",
    "operation": "disregard",
    "path": "/projects/{id}/expenses/disregard",
    "queryParameters": [],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/projects/expenses",
    "queryParameters": [
      "billable",
      "billed",
      "budget_relevant",
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "tags",
      "to",
      "updated_after",
      "user_id"
    ],
    "resource": "project_expenses",
    "source": "project_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/projects/groups",
    "queryParameters": [
      "company_id",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "user_id"
    ],
    "resource": "project_groups",
    "source": "project_groups.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/groups/{id}",
    "queryParameters": [],
    "resource": "project_groups",
    "source": "project_groups.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/projects/payment_schedules",
    "queryParameters": [
      "checked",
      "company_id",
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "project_id",
      "sort_by",
      "to",
      "updated_after"
    ],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForProject",
    "path": "/projects/{project_id}/payment_schedules",
    "queryParameters": [
      "checked",
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "to",
      "updated_after"
    ],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{project_id}/payment_schedules/{id}",
    "queryParameters": [],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [
      "checked",
      "date",
      "net_total",
      "title"
    ],
    "method": "POST",
    "operation": "createForProject",
    "path": "/projects/{project_id}/payment_schedules",
    "queryParameters": [],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [
      "checked"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{project_id}/payment_schedules/{id}",
    "queryParameters": [],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{project_id}/payment_schedules/{id}",
    "queryParameters": [],
    "resource": "project_payment_schedules",
    "source": "project_payment_schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/recurring_expenses",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForProject",
    "path": "/projects/{id}/recurring_expenses",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{id}/recurring_expenses/{id}",
    "queryParameters": [],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [
      "billable",
      "budget_relevant",
      "custom_properties",
      "description",
      "finish_date",
      "period",
      "quantity",
      "service_period_direction",
      "start_date",
      "title",
      "unit",
      "unit_cost",
      "unit_price"
    ],
    "method": "POST",
    "operation": "createForProject",
    "path": "/projects/{id}/recurring_expenses",
    "queryParameters": [],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [
      "unit_price"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{id}/recurring_expenses/{id}",
    "queryParameters": [],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "POST",
    "operation": "recur",
    "path": "/projects/{id}/recurring_expenses/{id}/recur",
    "queryParameters": [],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{id}/recurring_expenses/{id}",
    "queryParameters": [],
    "resource": "project_recurring_expenses",
    "source": "project_recurring_expenses.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/projects",
    "queryParameters": [
      "company_id",
      "created_from",
      "created_to",
      "custom_properties",
      "deal_id",
      "identifier",
      "ids",
      "include_archived",
      "include_company",
      "leader_id",
      "page",
      "per_page",
      "project_group_id",
      "retainer",
      "sort_by",
      "tags",
      "updated_after",
      "updated_from",
      "updated_to"
    ],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listAssigned",
    "path": "/projects/assigned",
    "queryParameters": [
      "active",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{id}",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [
      "billing_address",
      "billing_contact_id",
      "billing_email_cc",
      "billing_email_to",
      "billing_notes",
      "billing_variant",
      "budget",
      "budget_expenses",
      "budget_monthly",
      "co_leader_id",
      "contact_id",
      "currency",
      "custom_properties",
      "customer_id",
      "deal_id",
      "finish_date",
      "fixed_price",
      "hourly_rate",
      "identifier",
      "info",
      "leader_id",
      "name",
      "project_group_id",
      "retainer",
      "retainer_billing_date",
      "retainer_billing_description",
      "retainer_billing_title",
      "secondary_contact_id",
      "setting_include_time_report",
      "skip_favorite",
      "start_date",
      "tags"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/projects",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [
      "budget"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{id}",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{id}",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "archive",
    "path": "/projects/{id}/archive",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "unarchive",
    "path": "/projects/{id}/unarchive",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listReport",
    "path": "/projects/{id}/report",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "share",
    "path": "/projects/{id}/share",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "disableShare",
    "path": "/projects/{id}/disable_share",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [
      "project_group_id"
    ],
    "method": "PUT",
    "operation": "assignProjectGroup",
    "path": "/projects/{id}/assign_project_group",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "unassignProjectGroup",
    "path": "/projects/{id}/unassign_project_group",
    "queryParameters": [],
    "resource": "projects",
    "source": "projects.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listForProject",
    "path": "/projects/{id}/tasks",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/projects/{id}/tasks/{id}",
    "queryParameters": [],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [
      "active",
      "billable",
      "budget",
      "description",
      "hourly_rate",
      "name"
    ],
    "method": "POST",
    "operation": "createForProject",
    "path": "/projects/{id}/tasks",
    "queryParameters": [],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [
      "budget",
      "hourly_rate"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/projects/{id}/tasks/{id}",
    "queryParameters": [],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/projects/{id}/tasks/{id}",
    "queryParameters": [],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteDestroyAll",
    "path": "/projects/{id}/tasks/destroy_all",
    "queryParameters": [],
    "resource": "project_tasks",
    "source": "project_tasks.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases/bookkeeping_exports",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "purchase_bookkeeping_exports",
    "source": "purchase_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/purchases/bookkeeping_exports/{id}",
    "queryParameters": [],
    "resource": "purchase_bookkeeping_exports",
    "source": "purchase_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [
      "archive_after_export",
      "comment",
      "purchase_ids",
      "trigger_submission"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/purchases/bookkeeping_exports",
    "queryParameters": [],
    "resource": "purchase_bookkeeping_exports",
    "source": "purchase_bookkeeping_exports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases/budgets",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "year"
    ],
    "resource": "purchase_budgets",
    "source": "purchase_budgets.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases/categories",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "purchase_categories",
    "source": "purchase_categories.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/purchases/categories/{id}",
    "queryParameters": [],
    "resource": "purchase_categories",
    "source": "purchase_categories.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases/drafts",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "purchase_drafts",
    "source": "purchase_drafts.md"
  },
  {
    "bodyParameters": [
      "file",
      "title"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/purchases/drafts",
    "queryParameters": [],
    "resource": "purchase_drafts",
    "source": "purchase_drafts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/purchases/drafts/{id}",
    "queryParameters": [],
    "resource": "purchase_drafts",
    "source": "purchase_drafts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getPdf",
    "path": "/purchases/drafts/{id}.pdf",
    "queryParameters": [],
    "resource": "purchase_drafts",
    "source": "purchase_drafts.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/purchases/drafts/{id}",
    "queryParameters": [],
    "resource": "purchase_drafts",
    "source": "purchase_drafts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases/payments",
    "queryParameters": [
      "custom_properties",
      "date_from",
      "date_to",
      "ids",
      "page",
      "per_page",
      "purchase_id",
      "sort_by",
      "updated_after"
    ],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/purchases/payments/{id}",
    "queryParameters": [],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [
      "date",
      "description",
      "purchase_id",
      "total"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/purchases/payments",
    "queryParameters": [],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [
      "bulk_data",
      "date",
      "description",
      "purchase_id",
      "total"
    ],
    "method": "POST",
    "operation": "bulkCreate",
    "path": "/purchases/payments/bulk",
    "queryParameters": [],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [
      "total"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/purchases/payments/{id}",
    "queryParameters": [],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/purchases/payments/{id}",
    "queryParameters": [],
    "resource": "purchase_payments",
    "source": "purchase_payments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/purchases",
    "queryParameters": [
      "category_id",
      "company_id",
      "custom_properties",
      "date",
      "identifier",
      "ids",
      "not_booked",
      "page",
      "payment_method",
      "per_page",
      "receipt_identifier",
      "sort_by",
      "status",
      "tags",
      "term",
      "unpaid",
      "updated_after"
    ],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/purchases/{id}",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [
      "company_id",
      "currency",
      "custom_property_values",
      "date",
      "due_date",
      "file",
      "iban",
      "info",
      "items",
      "payment_method",
      "receipt_identifier",
      "reference",
      "service_period_from",
      "service_period_to",
      "status",
      "tags",
      "title",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/purchases",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [
      "currency",
      "date",
      "payment_method",
      "receipt_identifier"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/purchases/{id}",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [
      "billable",
      "budget_relevant",
      "expense_id",
      "item_id",
      "notify_project_leader",
      "project_id",
      "surcharge"
    ],
    "method": "POST",
    "operation": "assignToProject",
    "path": "/purchases/{id}/assign_to_project",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [
      "status"
    ],
    "method": "PATCH",
    "operation": "updateStatus",
    "path": "/purchases/{id}/update_status",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [
      "file"
    ],
    "method": "PATCH",
    "operation": "storeDocument",
    "path": "/purchases/{id}/store_document",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/purchases/{id}",
    "queryParameters": [],
    "resource": "purchases",
    "source": "purchases.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/receipts",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "project_id",
      "purchase_category_id",
      "refund_request_id",
      "sort_by",
      "submitted",
      "to",
      "updated_after",
      "user_id"
    ],
    "resource": "receipts",
    "source": "receipts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/receipts/{id}",
    "queryParameters": [],
    "resource": "receipts",
    "source": "receipts.md"
  },
  {
    "bodyParameters": [
      "attachment",
      "billable",
      "currency",
      "date",
      "info",
      "items",
      "project_id",
      "title"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/receipts",
    "queryParameters": [],
    "resource": "receipts",
    "source": "receipts.md"
  },
  {
    "bodyParameters": [
      "attachment",
      "base64",
      "currency",
      "date",
      "filename",
      "gross_total",
      "items",
      "title",
      "vat_code_id"
    ],
    "method": "PATCH",
    "operation": "update",
    "path": "/receipts/{id}",
    "queryParameters": [],
    "resource": "receipts",
    "source": "receipts.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/receipts/{id}",
    "queryParameters": [],
    "resource": "receipts",
    "source": "receipts.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listAbsence",
    "path": "/report/absences",
    "queryParameters": [
      "active",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "year"
    ],
    "resource": "reports",
    "source": "reports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listCashflow",
    "path": "/report/cashflow",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "term",
      "to",
      "updated_after"
    ],
    "resource": "reports",
    "source": "reports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listFinance",
    "path": "/report/finance",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "term",
      "to",
      "updated_after"
    ],
    "resource": "reports",
    "source": "reports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listPlannedVTracked",
    "path": "/report/planned_vs_tracked",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "to",
      "updated_after"
    ],
    "resource": "reports",
    "source": "reports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listUtilization",
    "path": "/report/utilization",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "to",
      "updated_after"
    ],
    "resource": "reports",
    "source": "reports.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/schedules",
    "queryParameters": [
      "absence_code",
      "absence_request_id",
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "to",
      "updated_after",
      "user_id"
    ],
    "resource": "schedules",
    "source": "schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/schedules/{id}",
    "queryParameters": [],
    "resource": "schedules",
    "source": "schedules.md"
  },
  {
    "bodyParameters": [
      "absence_code",
      "am",
      "comment",
      "date",
      "overwrite",
      "pm",
      "symbol",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/schedules",
    "queryParameters": [],
    "resource": "schedules",
    "source": "schedules.md"
  },
  {
    "bodyParameters": [
      "comment"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/schedules/{id}",
    "queryParameters": [],
    "resource": "schedules",
    "source": "schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/schedules/{id}",
    "queryParameters": [],
    "resource": "schedules",
    "source": "schedules.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/taggings",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "tags/taggings",
    "source": "tags/taggings.md"
  },
  {
    "bodyParameters": [
      "tags"
    ],
    "method": "PATCH",
    "operation": "update",
    "path": "/taggings",
    "queryParameters": [],
    "resource": "tags/taggings",
    "source": "tags/taggings.md"
  },
  {
    "bodyParameters": [
      "tags"
    ],
    "method": "PUT",
    "operation": "updateTaggings",
    "path": "/taggings",
    "queryParameters": [],
    "resource": "tags/taggings",
    "source": "tags/taggings.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/taggings",
    "queryParameters": [],
    "resource": "tags/taggings",
    "source": "tags/taggings.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/tags",
    "queryParameters": [
      "context",
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "tags/tags",
    "source": "tags/tags.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/tags/{id}",
    "queryParameters": [],
    "resource": "tags/tags",
    "source": "tags/tags.md"
  },
  {
    "bodyParameters": [
      "color",
      "context",
      "name"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/tags",
    "queryParameters": [],
    "resource": "tags/tags",
    "source": "tags/tags.md"
  },
  {
    "bodyParameters": [
      "color"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/tags/{id}",
    "queryParameters": [],
    "resource": "tags/tags",
    "source": "tags/tags.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/tags/{id}",
    "queryParameters": [],
    "resource": "tags/tags",
    "source": "tags/tags.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/units",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "units",
    "source": "units.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/units/{id}",
    "queryParameters": [],
    "resource": "units",
    "source": "units.md"
  },
  {
    "bodyParameters": [
      "name"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/units",
    "queryParameters": [],
    "resource": "units",
    "source": "units.md"
  },
  {
    "bodyParameters": [
      "name"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/units/{id}",
    "queryParameters": [],
    "resource": "units",
    "source": "units.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "deleteUser",
    "path": "/users/{id}",
    "queryParameters": [],
    "resource": "units",
    "source": "units.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users/roles",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "user_roles",
    "source": "user_roles.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users",
    "queryParameters": [
      "custom_properties",
      "email",
      "ids",
      "include_archived",
      "page",
      "per_page",
      "sort_by",
      "tags",
      "updated_after"
    ],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/users/{id}",
    "queryParameters": [],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [
      "active",
      "avatar",
      "bday",
      "custom_properties",
      "email",
      "external",
      "firstname",
      "home_address",
      "iban",
      "info",
      "language",
      "lastname",
      "mobile_phone",
      "password",
      "role_id",
      "tags",
      "unit_id",
      "welcome_email",
      "work_phone"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/users",
    "queryParameters": [],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [
      "email",
      "lastname"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/users/{id}",
    "queryParameters": [],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/users/{id}",
    "queryParameters": [],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listPerformanceReport",
    "path": "/users/{id}/performance_report",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after",
      "year"
    ],
    "resource": "users",
    "source": "users.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listVatCodeSale",
    "path": "/vat_code_sales",
    "queryParameters": [
      "active",
      "custom_properties",
      "ids",
      "intra_eu",
      "page",
      "per_page",
      "reverse_charge",
      "sort_by",
      "updated_after"
    ],
    "resource": "vat_codes",
    "source": "vat_codes.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "listVatCodePurchase",
    "path": "/vat_code_purchases",
    "queryParameters": [
      "active",
      "custom_properties",
      "ids",
      "intra_eu",
      "page",
      "per_page",
      "reverse_charge",
      "sort_by",
      "updated_after"
    ],
    "resource": "vat_codes",
    "source": "vat_codes.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getVatCodeSale",
    "path": "/vat_code_sales/{id}",
    "queryParameters": [],
    "resource": "vat_codes",
    "source": "vat_codes.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "getVatCodePurchase",
    "path": "/vat_code_purchases/{id}",
    "queryParameters": [],
    "resource": "vat_codes",
    "source": "vat_codes.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/account/web_hooks",
    "queryParameters": [
      "custom_properties",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "updated_after"
    ],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/account/web_hooks/{id}",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [
      "event",
      "hook",
      "target"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/account/web_hooks",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [
      "hook"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/account/web_hooks/{id}",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "disable",
    "path": "/account/web_hooks/{id}/disable",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [],
    "method": "PUT",
    "operation": "enable",
    "path": "/account/web_hooks/{id}/enable",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/account/web_hooks/{id}",
    "queryParameters": [],
    "resource": "web_hooks",
    "source": "web_hooks.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "list",
    "path": "/users/work_time_adjustments",
    "queryParameters": [
      "custom_properties",
      "from",
      "ids",
      "page",
      "per_page",
      "sort_by",
      "to",
      "updated_after",
      "user_id"
    ],
    "resource": "work_time_adjustments",
    "source": "work_time_adjustments.md"
  },
  {
    "bodyParameters": [],
    "method": "GET",
    "operation": "get",
    "path": "/users/work_time_adjustments/{id}",
    "queryParameters": [],
    "resource": "work_time_adjustments",
    "source": "work_time_adjustments.md"
  },
  {
    "bodyParameters": [
      "date",
      "description",
      "hours",
      "user_id"
    ],
    "method": "POST",
    "operation": "create",
    "path": "/users/work_time_adjustments",
    "queryParameters": [],
    "resource": "work_time_adjustments",
    "source": "work_time_adjustments.md"
  },
  {
    "bodyParameters": [
      "description"
    ],
    "method": "PUT",
    "operation": "update",
    "path": "/users/work_time_adjustments/{id}",
    "queryParameters": [],
    "resource": "work_time_adjustments",
    "source": "work_time_adjustments.md"
  },
  {
    "bodyParameters": [],
    "method": "DELETE",
    "operation": "delete",
    "path": "/users/work_time_adjustments/{id}",
    "queryParameters": [],
    "resource": "work_time_adjustments",
    "source": "work_time_adjustments.md"
  }
] as const satisfies readonly MocoEndpointDefinition[];

export type MocoEndpoint = (typeof MOCO_ENDPOINTS)[number];
export type MocoEndpointPath = MocoEndpoint["path"];
