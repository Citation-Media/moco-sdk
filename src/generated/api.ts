import type { MocoHttpClient } from "../core";
import { AccountCatalogServicesApi } from "./resources/accountCatalogServices";
import { AccountCustomPropertiesApi } from "./resources/accountCustomProperties";
import { AccountExpenseTemplatesApi } from "./resources/accountExpenseTemplates";
import { AccountFixedCostsApi } from "./resources/accountFixedCosts";
import { AccountHourlyRatesApi } from "./resources/accountHourlyRates";
import { AccountInternalHourlyRatesApi } from "./resources/accountInternalHourlyRates";
import { AccountTaskTemplatesApi } from "./resources/accountTaskTemplates";
import { ActivitiesApi } from "./resources/activities";
import { CommentsApi } from "./resources/comments";
import { CompaniesApi } from "./resources/companies";
import { ContactsApi } from "./resources/contacts";
import { DealCategoriesApi } from "./resources/dealCategories";
import { DealsApi } from "./resources/deals";
import { EmploymentsApi } from "./resources/employments";
import { HolidaysApi } from "./resources/holidays";
import { InvoiceBookkeepingExportsApi } from "./resources/invoiceBookkeepingExports";
import { InvoicePaymentsApi } from "./resources/invoicePayments";
import { InvoiceRemindersApi } from "./resources/invoiceReminders";
import { InvoicesApi } from "./resources/invoices";
import { LetterPapersApi } from "./resources/letterPapers";
import { OfferCustomerApprovalApi } from "./resources/offerCustomerApproval";
import { OffersApi } from "./resources/offers";
import { PlanningEntriesApi } from "./resources/planningEntries";
import { PresencesApi } from "./resources/presences";
import { ProfileApi } from "./resources/profile";
import { ProjectContractsApi } from "./resources/projectContracts";
import { ProjectExpensesApi } from "./resources/projectExpenses";
import { ProjectGroupsApi } from "./resources/projectGroups";
import { ProjectPaymentSchedulesApi } from "./resources/projectPaymentSchedules";
import { ProjectRecurringExpensesApi } from "./resources/projectRecurringExpenses";
import { ProjectTasksApi } from "./resources/projectTasks";
import { ProjectsApi } from "./resources/projects";
import { PurchaseBookkeepingExportsApi } from "./resources/purchaseBookkeepingExports";
import { PurchaseBudgetsApi } from "./resources/purchaseBudgets";
import { PurchaseCategoriesApi } from "./resources/purchaseCategories";
import { PurchaseDraftsApi } from "./resources/purchaseDrafts";
import { PurchasePaymentsApi } from "./resources/purchasePayments";
import { PurchasesApi } from "./resources/purchases";
import { ReceiptsApi } from "./resources/receipts";
import { ReportsApi } from "./resources/reports";
import { SchedulesApi } from "./resources/schedules";
import { TaggingsApi } from "./resources/taggings";
import { TagsApi } from "./resources/tags";
import { UnitsApi } from "./resources/units";
import { UserRolesApi } from "./resources/userRoles";
import { UsersApi } from "./resources/users";
import { VatCodesApi } from "./resources/vatCodes";
import { WebHooksApi } from "./resources/webHooks";
import { WorkTimeAdjustmentsApi } from "./resources/workTimeAdjustments";

export interface MocoGeneratedApis {
  accountCatalogServices: AccountCatalogServicesApi;
  accountCustomProperties: AccountCustomPropertiesApi;
  accountExpenseTemplates: AccountExpenseTemplatesApi;
  accountFixedCosts: AccountFixedCostsApi;
  accountHourlyRates: AccountHourlyRatesApi;
  accountInternalHourlyRates: AccountInternalHourlyRatesApi;
  accountTaskTemplates: AccountTaskTemplatesApi;
  activities: ActivitiesApi;
  comments: CommentsApi;
  companies: CompaniesApi;
  contacts: ContactsApi;
  dealCategories: DealCategoriesApi;
  deals: DealsApi;
  employments: EmploymentsApi;
  holidays: HolidaysApi;
  invoiceBookkeepingExports: InvoiceBookkeepingExportsApi;
  invoicePayments: InvoicePaymentsApi;
  invoiceReminders: InvoiceRemindersApi;
  invoices: InvoicesApi;
  letterPapers: LetterPapersApi;
  offerCustomerApproval: OfferCustomerApprovalApi;
  offers: OffersApi;
  planningEntries: PlanningEntriesApi;
  presences: PresencesApi;
  profile: ProfileApi;
  projectContracts: ProjectContractsApi;
  projectExpenses: ProjectExpensesApi;
  projectGroups: ProjectGroupsApi;
  projectPaymentSchedules: ProjectPaymentSchedulesApi;
  projectRecurringExpenses: ProjectRecurringExpensesApi;
  projectTasks: ProjectTasksApi;
  projects: ProjectsApi;
  purchaseBookkeepingExports: PurchaseBookkeepingExportsApi;
  purchaseBudgets: PurchaseBudgetsApi;
  purchaseCategories: PurchaseCategoriesApi;
  purchaseDrafts: PurchaseDraftsApi;
  purchasePayments: PurchasePaymentsApi;
  purchases: PurchasesApi;
  receipts: ReceiptsApi;
  reports: ReportsApi;
  schedules: SchedulesApi;
  taggings: TaggingsApi;
  tags: TagsApi;
  units: UnitsApi;
  userRoles: UserRolesApi;
  users: UsersApi;
  vatCodes: VatCodesApi;
  webHooks: WebHooksApi;
  workTimeAdjustments: WorkTimeAdjustmentsApi;
}

export function createGeneratedApis(client: MocoHttpClient): MocoGeneratedApis {
  return {
  accountCatalogServices: new AccountCatalogServicesApi(client),
  accountCustomProperties: new AccountCustomPropertiesApi(client),
  accountExpenseTemplates: new AccountExpenseTemplatesApi(client),
  accountFixedCosts: new AccountFixedCostsApi(client),
  accountHourlyRates: new AccountHourlyRatesApi(client),
  accountInternalHourlyRates: new AccountInternalHourlyRatesApi(client),
  accountTaskTemplates: new AccountTaskTemplatesApi(client),
  activities: new ActivitiesApi(client),
  comments: new CommentsApi(client),
  companies: new CompaniesApi(client),
  contacts: new ContactsApi(client),
  dealCategories: new DealCategoriesApi(client),
  deals: new DealsApi(client),
  employments: new EmploymentsApi(client),
  holidays: new HolidaysApi(client),
  invoiceBookkeepingExports: new InvoiceBookkeepingExportsApi(client),
  invoicePayments: new InvoicePaymentsApi(client),
  invoiceReminders: new InvoiceRemindersApi(client),
  invoices: new InvoicesApi(client),
  letterPapers: new LetterPapersApi(client),
  offerCustomerApproval: new OfferCustomerApprovalApi(client),
  offers: new OffersApi(client),
  planningEntries: new PlanningEntriesApi(client),
  presences: new PresencesApi(client),
  profile: new ProfileApi(client),
  projectContracts: new ProjectContractsApi(client),
  projectExpenses: new ProjectExpensesApi(client),
  projectGroups: new ProjectGroupsApi(client),
  projectPaymentSchedules: new ProjectPaymentSchedulesApi(client),
  projectRecurringExpenses: new ProjectRecurringExpensesApi(client),
  projectTasks: new ProjectTasksApi(client),
  projects: new ProjectsApi(client),
  purchaseBookkeepingExports: new PurchaseBookkeepingExportsApi(client),
  purchaseBudgets: new PurchaseBudgetsApi(client),
  purchaseCategories: new PurchaseCategoriesApi(client),
  purchaseDrafts: new PurchaseDraftsApi(client),
  purchasePayments: new PurchasePaymentsApi(client),
  purchases: new PurchasesApi(client),
  receipts: new ReceiptsApi(client),
  reports: new ReportsApi(client),
  schedules: new SchedulesApi(client),
  taggings: new TaggingsApi(client),
  tags: new TagsApi(client),
  units: new UnitsApi(client),
  userRoles: new UserRolesApi(client),
  users: new UsersApi(client),
  vatCodes: new VatCodesApi(client),
  webHooks: new WebHooksApi(client),
  workTimeAdjustments: new WorkTimeAdjustmentsApi(client),
  };
}
