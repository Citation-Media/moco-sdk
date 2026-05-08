import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountHourlyRatesListQuery,
  MocoAccountHourlyRate
} from "../types";

export class AccountHourlyRatesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/hourly_rates */
  public list(query?: AccountHourlyRatesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountHourlyRate[]>> {
    return this.client.request<MocoAccountHourlyRate[]>({
      method: "GET",
      path: "/account/hourly_rates",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/hourly_rates. */
  public listAll(query?: AccountHourlyRatesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountHourlyRate> {
    return this.client.paginate<MocoAccountHourlyRate, AccountHourlyRatesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountHourlyRate[]>>,
      query,
    );
  }
}
