# MOCO API Coverage

This file is generated from `mocoapp-api-docs/sections` by `npm run generate`.

## Catalog Services

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/catalog_services` | `accountCatalogServices.list()` | `account/catalog_services.md` |
| GET | `/account/catalog_services/{id}` | `accountCatalogServices.get()` | `account/catalog_services.md` |
| POST | `/account/catalog_services` | `accountCatalogServices.create()` | `account/catalog_services.md` |
| PUT | `/account/catalog_services/{id}` | `accountCatalogServices.update()` | `account/catalog_services.md` |
| DELETE | `/account/catalog_services/{id}` | `accountCatalogServices.delete()` | `account/catalog_services.md` |
| GET | `/account/catalog_services/{service_id}/items/{id}` | `accountCatalogServices.getItem()` | `account/catalog_services.md` |
| POST | `/account/catalog_services/{service_id}/items` | `accountCatalogServices.items()` | `account/catalog_services.md` |
| PUT | `/account/catalog_services/{service_id}/items/{id}` | `accountCatalogServices.updateItem()` | `account/catalog_services.md` |
| DELETE | `/account/catalog_services/{service_id}/items/{id}` | `accountCatalogServices.deleteItem()` | `account/catalog_services.md` |

## Custom Properties

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/custom_properties` | `accountCustomProperties.list()` | `account/custom_properties.md` |
| GET | `/account/custom_properties/{id}` | `accountCustomProperties.get()` | `account/custom_properties.md` |
| POST | `/account/custom_properties` | `accountCustomProperties.create()` | `account/custom_properties.md` |
| PATCH | `/account/custom_properties/{id}` | `accountCustomProperties.update()` | `account/custom_properties.md` |
| DELETE | `/account/custom_properties/{id}` | `accountCustomProperties.delete()` | `account/custom_properties.md` |

## Expense Templates

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/expense_templates` | `accountExpenseTemplates.list()` | `account/expense_templates.md` |
| GET | `/account/expense_templates/{id}` | `accountExpenseTemplates.get()` | `account/expense_templates.md` |
| POST | `/account/expense_templates` | `accountExpenseTemplates.create()` | `account/expense_templates.md` |
| PUT | `/account/expense_templates/{id}` | `accountExpenseTemplates.update()` | `account/expense_templates.md` |
| DELETE | `/account/expense_templates/{id}` | `accountExpenseTemplates.delete()` | `account/expense_templates.md` |

## Fixed Costs

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/fixed_costs` | `accountFixedCosts.list()` | `account/fixed_costs.md` |

## Hourly Rates

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/hourly_rates` | `accountHourlyRates.list()` | `account/hourly_rates.md` |

## Internal Hourly Rates

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/internal_hourly_rates` | `accountInternalHourlyRates.list()` | `account/internal_hourly_rates.md` |
| PATCH | `/account/internal_hourly_rates` | `accountInternalHourlyRates.update()` | `account/internal_hourly_rates.md` |

## Task Templates

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/task_templates` | `accountTaskTemplates.list()` | `account/task_templates.md` |
| GET | `/account/task_templates/{id}` | `accountTaskTemplates.get()` | `account/task_templates.md` |
| POST | `/account/task_templates` | `accountTaskTemplates.create()` | `account/task_templates.md` |
| PUT | `/account/task_templates/{id}` | `accountTaskTemplates.update()` | `account/task_templates.md` |
| DELETE | `/account/task_templates/{id}` | `accountTaskTemplates.delete()` | `account/task_templates.md` |

## Activities

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/activities` | `activities.list()` | `activities.md` |
| GET | `/activities/{id}` | `activities.get()` | `activities.md` |
| POST | `/activities` | `activities.create()` | `activities.md` |
| POST | `/activities/bulk` | `activities.bulkCreate()` | `activities.md` |
| PUT | `/activities/{id}` | `activities.update()` | `activities.md` |
| PATCH | `/activities/{id}/billable_seconds` | `activities.updateBillableSeconds()` | `activities.md` |
| PATCH | `/activities/{id}/start_timer` | `activities.startTimer()` | `activities.md` |
| PATCH | `/activities/{id}/stop_timer` | `activities.stopTimer()` | `activities.md` |
| DELETE | `/activities/{id}` | `activities.delete()` | `activities.md` |
| POST | `/activities/disregard` | `activities.disregard()` | `activities.md` |

## Comments

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/comments` | `comments.list()` | `comments.md` |
| GET | `/comments/{id}` | `comments.get()` | `comments.md` |
| POST | `/comments` | `comments.create()` | `comments.md` |
| POST | `/comments/bulk` | `comments.bulkCreate()` | `comments.md` |
| PUT | `/comments/{id}` | `comments.update()` | `comments.md` |
| DELETE | `/comments/{id}` | `comments.delete()` | `comments.md` |

## Companies

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/companies` | `companies.list()` | `companies.md` |
| GET | `/companies/{id}` | `companies.get()` | `companies.md` |
| POST | `/companies` | `companies.create()` | `companies.md` |
| PUT | `/companies/{id}` | `companies.update()` | `companies.md` |
| DELETE | `/companies/{id}` | `companies.delete()` | `companies.md` |
| PUT | `/companies/{id}/archive` | `companies.archive()` | `companies.md` |
| PUT | `/companies/{id}/unarchive` | `companies.unarchive()` | `companies.md` |

## Contacts

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/contacts/people` | `contacts.list()` | `contacts.md` |
| GET | `/contacts/people/{id}` | `contacts.get()` | `contacts.md` |
| POST | `/contacts/people` | `contacts.create()` | `contacts.md` |
| PUT | `/contacts/people/{id}` | `contacts.update()` | `contacts.md` |
| DELETE | `/contacts/people/{id}` | `contacts.delete()` | `contacts.md` |

## Deal Categories

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/deal_categories` | `dealCategories.list()` | `deal_categories.md` |
| GET | `/deal_categories/{id}` | `dealCategories.get()` | `deal_categories.md` |
| POST | `/deal_categories` | `dealCategories.create()` | `deal_categories.md` |
| PUT | `/deal_categories/{id}` | `dealCategories.update()` | `deal_categories.md` |
| DELETE | `/deal_categories/{id}` | `dealCategories.delete()` | `deal_categories.md` |

## Deals / Leads

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/deals` | `deals.list()` | `deals.md` |
| GET | `/deals/{id}` | `deals.get()` | `deals.md` |
| POST | `/deals` | `deals.create()` | `deals.md` |
| PUT | `/deals/{id}` | `deals.update()` | `deals.md` |
| DELETE | `/deals/{id}` | `deals.delete()` | `deals.md` |

## User Employments

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users/employments` | `employments.list()` | `employments.md` |
| POST | `/users/employments` | `employments.create()` | `employments.md` |
| GET | `/users/employments/{id}` | `employments.get()` | `employments.md` |
| PUT | `/users/employments/{id}` | `employments.update()` | `employments.md` |
| DELETE | `/users/employments/{id}` | `employments.delete()` | `employments.md` |

## User Holidays

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users/holidays` | `holidays.list()` | `holidays.md` |
| GET | `/users/holidays/{id}` | `holidays.get()` | `holidays.md` |
| POST | `/users/holidays` | `holidays.create()` | `holidays.md` |
| PUT | `/users/holidays/{id}` | `holidays.update()` | `holidays.md` |
| DELETE | `/users/holidays/{id}` | `holidays.delete()` | `holidays.md` |

## Invoice Bookkeeping Exports

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/invoices/bookkeeping_exports` | `invoiceBookkeepingExports.list()` | `invoice_bookkeeping_exports.md` |
| GET | `/invoices/bookkeeping_exports/{id}` | `invoiceBookkeepingExports.get()` | `invoice_bookkeeping_exports.md` |
| POST | `/invoices/bookkeeping_exports` | `invoiceBookkeepingExports.create()` | `invoice_bookkeeping_exports.md` |

## Invoice Payments

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/invoices/payments` | `invoicePayments.list()` | `invoice_payments.md` |
| GET | `/invoices/payments/{id}` | `invoicePayments.get()` | `invoice_payments.md` |
| POST | `/invoices/payments` | `invoicePayments.create()` | `invoice_payments.md` |
| POST | `/invoices/payments/bulk` | `invoicePayments.bulkCreate()` | `invoice_payments.md` |
| PUT | `/invoices/payments/{id}` | `invoicePayments.update()` | `invoice_payments.md` |
| DELETE | `/invoices/payments/{id}` | `invoicePayments.delete()` | `invoice_payments.md` |

## Invoice Reminders

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/invoice_reminders` | `invoiceReminders.listInvoiceReminder()` | `invoice_reminders.md` |
| GET | `/invoice_reminders/{id}` | `invoiceReminders.getInvoiceReminder()` | `invoice_reminders.md` |
| POST | `/invoice_reminders` | `invoiceReminders.invoiceReminders()` | `invoice_reminders.md` |
| DELETE | `/invoice_reminders/{id}` | `invoiceReminders.deleteInvoiceReminder()` | `invoice_reminders.md` |
| POST | `/invoice_reminders/{id}/send_email` | `invoiceReminders.invoiceRemindersSendEmail()` | `invoice_reminders.md` |

## Invoices

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/invoices` | `invoices.list()` | `invoices.md` |
| GET | `/invoices/locked` | `invoices.listLocked()` | `invoices.md` |
| GET | `/invoices/{id}` | `invoices.get()` | `invoices.md` |
| GET | `/invoices/{id}.pdf` | `invoices.getPdf()` | `invoices.md` |
| GET | `/invoices/{id}/timesheet` | `invoices.listTimesheet()` | `invoices.md` |
| GET | `/invoices/{id}/timesheet.pdf` | `invoices.getTimesheetPdf()` | `invoices.md` |
| GET | `/invoices/{id}/expenses` | `invoices.listExpense()` | `invoices.md` |
| PUT | `/invoices/{id}/update_status` | `invoices.updateStatus()` | `invoices.md` |
| POST | `/invoices` | `invoices.create()` | `invoices.md` |
| POST | `/invoices/{id}/send_email` | `invoices.sendEmail()` | `invoices.md` |
| DELETE | `/invoices/{id}` | `invoices.delete()` | `invoices.md` |
| GET | `/invoices/{id}/attachments` | `invoices.listAttachment()` | `invoices.md` |
| POST | `/invoices/{invoice_id}/attachments` | `invoices.attachments()` | `invoices.md` |
| DELETE | `/invoices/{invoice_id}/attachments/{id}` | `invoices.deleteAttachment()` | `invoices.md` |

## Letter Papers

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/letter_papers` | `letterPapers.list()` | `letter_papers.md` |

## Offer Customer Approval

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/offers/{id}/customer_approval` | `offerCustomerApproval.listForOffer()` | `offer_customer_approval.md` |
| POST | `/offers/{id}/customer_approval/activate` | `offerCustomerApproval.activate()` | `offer_customer_approval.md` |
| POST | `/offers/{id}/customer_approval/deactivate` | `offerCustomerApproval.deactivate()` | `offer_customer_approval.md` |

## Offers

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/offers` | `offers.list()` | `offers.md` |
| GET | `/offers/{id}` | `offers.get()` | `offers.md` |
| GET | `/offers/{id}.pdf` | `offers.getPdf()` | `offers.md` |
| POST | `/offers` | `offers.create()` | `offers.md` |
| PUT | `/offers/{id}/assign` | `offers.assign()` | `offers.md` |
| PUT | `/offers/{id}/update_status` | `offers.updateStatus()` | `offers.md` |
| POST | `/offers/{id}/send_email` | `offers.sendEmail()` | `offers.md` |
| GET | `/offers/{id}/attachments` | `offers.listAttachment()` | `offers.md` |
| POST | `/offers/{id}/attachments` | `offers.attachments()` | `offers.md` |
| DELETE | `/offers/{offer_id}/attachments/{id}` | `offers.deleteAttachment()` | `offers.md` |

## Planning Entries

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/planning_entries` | `planningEntries.list()` | `planning_entries.md` |
| GET | `/planning_entries/{id}` | `planningEntries.get()` | `planning_entries.md` |
| POST | `/planning_entries` | `planningEntries.create()` | `planning_entries.md` |
| PUT | `/planning_entries/{id}` | `planningEntries.update()` | `planning_entries.md` |
| DELETE | `/planning_entries/{id}` | `planningEntries.delete()` | `planning_entries.md` |

## User Presences

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users/presences` | `presences.list()` | `presences.md` |
| GET | `/users/presences/{id}` | `presences.get()` | `presences.md` |
| POST | `/users/presences` | `presences.create()` | `presences.md` |
| POST | `/users/presences/touch` | `presences.touch()` | `presences.md` |
| PUT | `/users/presences/{id}` | `presences.update()` | `presences.md` |
| DELETE | `/users/presences/{id}` | `presences.delete()` | `presences.md` |

## Profile

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/profile` | `profile.list()` | `profile.md` |

## Project Contracts

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects/{id}/contracts` | `projectContracts.listForProject()` | `project_contracts.md` |
| GET | `/projects/{id}/contracts/{id}` | `projectContracts.get()` | `project_contracts.md` |
| POST | `/projects/{id}/contracts` | `projectContracts.createForProject()` | `project_contracts.md` |
| PUT | `/projects/{id}/contracts/{id}` | `projectContracts.update()` | `project_contracts.md` |
| DELETE | `/projects/{id}/contracts/{id}` | `projectContracts.delete()` | `project_contracts.md` |

## Project Expenses

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects/{id}/expenses` | `projectExpenses.listForProject()` | `project_expenses.md` |
| GET | `/projects/{id}/expenses/{id}` | `projectExpenses.get()` | `project_expenses.md` |
| POST | `/projects/{id}/expenses` | `projectExpenses.createForProject()` | `project_expenses.md` |
| POST | `/projects/{id}/expenses/bulk` | `projectExpenses.bulkCreate()` | `project_expenses.md` |
| PUT | `/projects/{id}/expenses/{id}` | `projectExpenses.update()` | `project_expenses.md` |
| DELETE | `/projects/{id}/expenses/{id}` | `projectExpenses.delete()` | `project_expenses.md` |
| POST | `/projects/{id}/expenses/disregard` | `projectExpenses.disregard()` | `project_expenses.md` |
| GET | `/projects/expenses` | `projectExpenses.list()` | `project_expenses.md` |

## Project Group

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects/groups` | `projectGroups.list()` | `project_groups.md` |
| GET | `/projects/groups/{id}` | `projectGroups.get()` | `project_groups.md` |

## Project Payment Schedules

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects/payment_schedules` | `projectPaymentSchedules.list()` | `project_payment_schedules.md` |
| GET | `/projects/{project_id}/payment_schedules` | `projectPaymentSchedules.listForProject()` | `project_payment_schedules.md` |
| GET | `/projects/{project_id}/payment_schedules/{id}` | `projectPaymentSchedules.get()` | `project_payment_schedules.md` |
| POST | `/projects/{project_id}/payment_schedules` | `projectPaymentSchedules.createForProject()` | `project_payment_schedules.md` |
| PUT | `/projects/{project_id}/payment_schedules/{id}` | `projectPaymentSchedules.update()` | `project_payment_schedules.md` |
| DELETE | `/projects/{project_id}/payment_schedules/{id}` | `projectPaymentSchedules.delete()` | `project_payment_schedules.md` |

## Project Recurring Expenses

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/recurring_expenses` | `projectRecurringExpenses.list()` | `project_recurring_expenses.md` |
| GET | `/projects/{id}/recurring_expenses` | `projectRecurringExpenses.listForProject()` | `project_recurring_expenses.md` |
| GET | `/projects/{id}/recurring_expenses/{id}` | `projectRecurringExpenses.get()` | `project_recurring_expenses.md` |
| POST | `/projects/{id}/recurring_expenses` | `projectRecurringExpenses.createForProject()` | `project_recurring_expenses.md` |
| PUT | `/projects/{id}/recurring_expenses/{id}` | `projectRecurringExpenses.update()` | `project_recurring_expenses.md` |
| POST | `/projects/{id}/recurring_expenses/{id}/recur` | `projectRecurringExpenses.recur()` | `project_recurring_expenses.md` |
| DELETE | `/projects/{id}/recurring_expenses/{id}` | `projectRecurringExpenses.delete()` | `project_recurring_expenses.md` |

## Projects

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects` | `projects.list()` | `projects.md` |
| GET | `/projects/assigned` | `projects.listAssigned()` | `projects.md` |
| GET | `/projects/{id}` | `projects.get()` | `projects.md` |
| POST | `/projects` | `projects.create()` | `projects.md` |
| PUT | `/projects/{id}` | `projects.update()` | `projects.md` |
| DELETE | `/projects/{id}` | `projects.delete()` | `projects.md` |
| PUT | `/projects/{id}/archive` | `projects.archive()` | `projects.md` |
| PUT | `/projects/{id}/unarchive` | `projects.unarchive()` | `projects.md` |
| GET | `/projects/{id}/report` | `projects.listReport()` | `projects.md` |
| PUT | `/projects/{id}/share` | `projects.share()` | `projects.md` |
| PUT | `/projects/{id}/disable_share` | `projects.disableShare()` | `projects.md` |
| PUT | `/projects/{id}/assign_project_group` | `projects.assignProjectGroup()` | `projects.md` |
| PUT | `/projects/{id}/unassign_project_group` | `projects.unassignProjectGroup()` | `projects.md` |

## Project Tasks

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/projects/{id}/tasks` | `projectTasks.listForProject()` | `project_tasks.md` |
| GET | `/projects/{id}/tasks/{id}` | `projectTasks.get()` | `project_tasks.md` |
| POST | `/projects/{id}/tasks` | `projectTasks.createForProject()` | `project_tasks.md` |
| PUT | `/projects/{id}/tasks/{id}` | `projectTasks.update()` | `project_tasks.md` |
| DELETE | `/projects/{id}/tasks/{id}` | `projectTasks.delete()` | `project_tasks.md` |
| DELETE | `/projects/{id}/tasks/destroy_all` | `projectTasks.deleteDestroyAll()` | `project_tasks.md` |

## Purchase Bookkeeping Exports

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases/bookkeeping_exports` | `purchaseBookkeepingExports.list()` | `purchase_bookkeeping_exports.md` |
| GET | `/purchases/bookkeeping_exports/{id}` | `purchaseBookkeepingExports.get()` | `purchase_bookkeeping_exports.md` |
| POST | `/purchases/bookkeeping_exports` | `purchaseBookkeepingExports.create()` | `purchase_bookkeeping_exports.md` |

## Purchase Budgets

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases/budgets` | `purchaseBudgets.list()` | `purchase_budgets.md` |

## Purchase Categories

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases/categories` | `purchaseCategories.list()` | `purchase_categories.md` |
| GET | `/purchases/categories/{id}` | `purchaseCategories.get()` | `purchase_categories.md` |

## Purchase Drafts

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases/drafts` | `purchaseDrafts.list()` | `purchase_drafts.md` |
| POST | `/purchases/drafts` | `purchaseDrafts.create()` | `purchase_drafts.md` |
| GET | `/purchases/drafts/{id}` | `purchaseDrafts.get()` | `purchase_drafts.md` |
| GET | `/purchases/drafts/{id}.pdf` | `purchaseDrafts.getPdf()` | `purchase_drafts.md` |
| DELETE | `/purchases/drafts/{id}` | `purchaseDrafts.delete()` | `purchase_drafts.md` |

## Purchase Payments

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases/payments` | `purchasePayments.list()` | `purchase_payments.md` |
| GET | `/purchases/payments/{id}` | `purchasePayments.get()` | `purchase_payments.md` |
| POST | `/purchases/payments` | `purchasePayments.create()` | `purchase_payments.md` |
| POST | `/purchases/payments/bulk` | `purchasePayments.bulkCreate()` | `purchase_payments.md` |
| PUT | `/purchases/payments/{id}` | `purchasePayments.update()` | `purchase_payments.md` |
| DELETE | `/purchases/payments/{id}` | `purchasePayments.delete()` | `purchase_payments.md` |

## Purchases

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/purchases` | `purchases.list()` | `purchases.md` |
| GET | `/purchases/{id}` | `purchases.get()` | `purchases.md` |
| POST | `/purchases` | `purchases.create()` | `purchases.md` |
| PUT | `/purchases/{id}` | `purchases.update()` | `purchases.md` |
| POST | `/purchases/{id}/assign_to_project` | `purchases.assignToProject()` | `purchases.md` |
| PATCH | `/purchases/{id}/update_status` | `purchases.updateStatus()` | `purchases.md` |
| PATCH | `/purchases/{id}/store_document` | `purchases.storeDocument()` | `purchases.md` |
| DELETE | `/purchases/{id}` | `purchases.delete()` | `purchases.md` |

## Receipts

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/receipts` | `receipts.list()` | `receipts.md` |
| GET | `/receipts/{id}` | `receipts.get()` | `receipts.md` |
| POST | `/receipts` | `receipts.create()` | `receipts.md` |
| PATCH | `/receipts/{id}` | `receipts.update()` | `receipts.md` |
| DELETE | `/receipts/{id}` | `receipts.delete()` | `receipts.md` |

## Reports

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/report/absences` | `reports.listAbsence()` | `reports.md` |
| GET | `/report/cashflow` | `reports.listCashflow()` | `reports.md` |
| GET | `/report/finance` | `reports.listFinance()` | `reports.md` |
| GET | `/report/planned_vs_tracked` | `reports.listPlannedVTracked()` | `reports.md` |
| GET | `/report/utilization` | `reports.listUtilization()` | `reports.md` |

## Schedules

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/schedules` | `schedules.list()` | `schedules.md` |
| GET | `/schedules/{id}` | `schedules.get()` | `schedules.md` |
| POST | `/schedules` | `schedules.create()` | `schedules.md` |
| PUT | `/schedules/{id}` | `schedules.update()` | `schedules.md` |
| DELETE | `/schedules/{id}` | `schedules.delete()` | `schedules.md` |

## Taggings (tag associations)

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/taggings` | `taggings.list()` | `tags/taggings.md` |
| PATCH | `/taggings` | `taggings.update()` | `tags/taggings.md` |
| PUT | `/taggings` | `taggings.updateTaggings()` | `tags/taggings.md` |
| DELETE | `/taggings` | `taggings.delete()` | `tags/taggings.md` |

## Tags

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/tags` | `tags.list()` | `tags/tags.md` |
| GET | `/tags/{id}` | `tags.get()` | `tags/tags.md` |
| POST | `/tags` | `tags.create()` | `tags/tags.md` |
| PUT | `/tags/{id}` | `tags.update()` | `tags/tags.md` |
| DELETE | `/tags/{id}` | `tags.delete()` | `tags/tags.md` |

## Units / Teams

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/units` | `units.list()` | `units.md` |
| GET | `/units/{id}` | `units.get()` | `units.md` |
| POST | `/units` | `units.create()` | `units.md` |
| PUT | `/units/{id}` | `units.update()` | `units.md` |
| DELETE | `/users/{id}` | `units.deleteUser()` | `units.md` |

## User permission roles

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users/roles` | `userRoles.list()` | `user_roles.md` |

## Users

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users` | `users.list()` | `users.md` |
| GET | `/users/{id}` | `users.get()` | `users.md` |
| POST | `/users` | `users.create()` | `users.md` |
| PUT | `/users/{id}` | `users.update()` | `users.md` |
| DELETE | `/users/{id}` | `users.delete()` | `users.md` |
| GET | `/users/{id}/performance_report` | `users.listPerformanceReport()` | `users.md` |

## VAT Codes

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/vat_code_sales` | `vatCodes.listVatCodeSale()` | `vat_codes.md` |
| GET | `/vat_code_purchases` | `vatCodes.listVatCodePurchase()` | `vat_codes.md` |
| GET | `/vat_code_sales/{id}` | `vatCodes.getVatCodeSale()` | `vat_codes.md` |
| GET | `/vat_code_purchases/{id}` | `vatCodes.getVatCodePurchase()` | `vat_codes.md` |

## Web Hooks

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/account/web_hooks` | `webHooks.list()` | `web_hooks.md` |
| GET | `/account/web_hooks/{id}` | `webHooks.get()` | `web_hooks.md` |
| POST | `/account/web_hooks` | `webHooks.create()` | `web_hooks.md` |
| PUT | `/account/web_hooks/{id}` | `webHooks.update()` | `web_hooks.md` |
| PUT | `/account/web_hooks/{id}/disable` | `webHooks.disable()` | `web_hooks.md` |
| PUT | `/account/web_hooks/{id}/enable` | `webHooks.enable()` | `web_hooks.md` |
| DELETE | `/account/web_hooks/{id}` | `webHooks.delete()` | `web_hooks.md` |

## User Work Time Adjustments

| Method | Path | SDK method | Source |
| --- | --- | --- | --- |
| GET | `/users/work_time_adjustments` | `workTimeAdjustments.list()` | `work_time_adjustments.md` |
| GET | `/users/work_time_adjustments/{id}` | `workTimeAdjustments.get()` | `work_time_adjustments.md` |
| POST | `/users/work_time_adjustments` | `workTimeAdjustments.create()` | `work_time_adjustments.md` |
| PUT | `/users/work_time_adjustments/{id}` | `workTimeAdjustments.update()` | `work_time_adjustments.md` |
| DELETE | `/users/work_time_adjustments/{id}` | `workTimeAdjustments.delete()` | `work_time_adjustments.md` |

