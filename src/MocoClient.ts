import { AuthApi } from "./auth";
import { MocoHttpClient, type MocoClientConfig, type MocoId, type MocoRequestOptions, type MocoResponse } from "./core";
import { createGeneratedApis, type MocoGeneratedApis } from "./generated";

export class MocoClient implements MocoGeneratedApis {
  public readonly auth: AuthApi;
  public readonly http: MocoHttpClient;

  public readonly accountCatalogServices!: MocoGeneratedApis["accountCatalogServices"];
  public readonly accountCustomProperties!: MocoGeneratedApis["accountCustomProperties"];
  public readonly accountExpenseTemplates!: MocoGeneratedApis["accountExpenseTemplates"];
  public readonly accountFixedCosts!: MocoGeneratedApis["accountFixedCosts"];
  public readonly accountHourlyRates!: MocoGeneratedApis["accountHourlyRates"];
  public readonly accountInternalHourlyRates!: MocoGeneratedApis["accountInternalHourlyRates"];
  public readonly accountTaskTemplates!: MocoGeneratedApis["accountTaskTemplates"];
  public readonly activities!: MocoGeneratedApis["activities"];
  public readonly comments!: MocoGeneratedApis["comments"];
  public readonly companies!: MocoGeneratedApis["companies"];
  public readonly contacts!: MocoGeneratedApis["contacts"];
  public readonly dealCategories!: MocoGeneratedApis["dealCategories"];
  public readonly deals!: MocoGeneratedApis["deals"];
  public readonly employments!: MocoGeneratedApis["employments"];
  public readonly holidays!: MocoGeneratedApis["holidays"];
  public readonly invoiceBookkeepingExports!: MocoGeneratedApis["invoiceBookkeepingExports"];
  public readonly invoicePayments!: MocoGeneratedApis["invoicePayments"];
  public readonly invoiceReminders!: MocoGeneratedApis["invoiceReminders"];
  public readonly invoices!: MocoGeneratedApis["invoices"];
  public readonly letterPapers!: MocoGeneratedApis["letterPapers"];
  public readonly offerCustomerApproval!: MocoGeneratedApis["offerCustomerApproval"];
  public readonly offers!: MocoGeneratedApis["offers"];
  public readonly planningEntries!: MocoGeneratedApis["planningEntries"];
  public readonly presences!: MocoGeneratedApis["presences"];
  public readonly profile!: MocoGeneratedApis["profile"];
  public readonly projectContracts!: MocoGeneratedApis["projectContracts"];
  public readonly projectExpenses!: MocoGeneratedApis["projectExpenses"];
  public readonly projectGroups!: MocoGeneratedApis["projectGroups"];
  public readonly projectPaymentSchedules!: MocoGeneratedApis["projectPaymentSchedules"];
  public readonly projectRecurringExpenses!: MocoGeneratedApis["projectRecurringExpenses"];
  public readonly projectTasks!: MocoGeneratedApis["projectTasks"];
  public readonly projects!: MocoGeneratedApis["projects"];
  public readonly purchaseBookkeepingExports!: MocoGeneratedApis["purchaseBookkeepingExports"];
  public readonly purchaseBudgets!: MocoGeneratedApis["purchaseBudgets"];
  public readonly purchaseCategories!: MocoGeneratedApis["purchaseCategories"];
  public readonly purchaseDrafts!: MocoGeneratedApis["purchaseDrafts"];
  public readonly purchasePayments!: MocoGeneratedApis["purchasePayments"];
  public readonly purchases!: MocoGeneratedApis["purchases"];
  public readonly receipts!: MocoGeneratedApis["receipts"];
  public readonly reports!: MocoGeneratedApis["reports"];
  public readonly schedules!: MocoGeneratedApis["schedules"];
  public readonly taggings!: MocoGeneratedApis["taggings"];
  public readonly tags!: MocoGeneratedApis["tags"];
  public readonly units!: MocoGeneratedApis["units"];
  public readonly userRoles!: MocoGeneratedApis["userRoles"];
  public readonly users!: MocoGeneratedApis["users"];
  public readonly vatCodes!: MocoGeneratedApis["vatCodes"];
  public readonly webHooks!: MocoGeneratedApis["webHooks"];
  public readonly workTimeAdjustments!: MocoGeneratedApis["workTimeAdjustments"];

  private readonly config: MocoClientConfig;

  public constructor(config: MocoClientConfig) {
    this.config = { ...config };
    this.http = new MocoHttpClient(config);
    this.auth = new AuthApi(this.http);

    Object.assign(this, createGeneratedApis(this.http));
  }

  public withConfig(config: Partial<MocoClientConfig>): MocoClient {
    return new MocoClient({
      ...this.config,
      ...config,
    });
  }

  public withImpersonation(userId: MocoId | null): MocoClient {
    return this.withConfig({ impersonateUserId: userId ?? undefined });
  }

  public request<T = unknown>(options: MocoRequestOptions): Promise<MocoResponse<T>> {
    return this.http.request<T>(options);
  }
}
