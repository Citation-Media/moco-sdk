import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountFixedCostsListQuery,
  MocoAccountFixedCost
} from "../types";

export class AccountFixedCostsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/fixed_costs */
  public list(query?: AccountFixedCostsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountFixedCost[]>> {
    return this.client.request<MocoAccountFixedCost[]>({
      method: "GET",
      path: "/account/fixed_costs",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/fixed_costs. */
  public listAll(query?: AccountFixedCostsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountFixedCost> {
    return this.client.paginate<MocoAccountFixedCost, AccountFixedCostsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountFixedCost[]>>,
      query,
    );
  }
}
