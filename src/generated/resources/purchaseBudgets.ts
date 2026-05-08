import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchaseBudget,
  PurchaseBudgetsListQuery
} from "../types";

export class PurchaseBudgetsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases/budgets */
  public list(query?: PurchaseBudgetsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseBudget[]>> {
    return this.client.request<MocoPurchaseBudget[]>({
      method: "GET",
      path: "/purchases/budgets",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases/budgets. */
  public listAll(query?: PurchaseBudgetsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchaseBudget> {
    return this.client.paginate<MocoPurchaseBudget, PurchaseBudgetsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchaseBudget[]>>,
      query,
    );
  }
}
