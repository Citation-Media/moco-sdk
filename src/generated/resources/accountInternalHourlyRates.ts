import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  AccountInternalHourlyRatesListQuery,
  AccountInternalHourlyRatesUpdateBody,
  MocoAccountInternalHourlyRate
} from "../types";

export class AccountInternalHourlyRatesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/internal_hourly_rates */
  public list(query?: AccountInternalHourlyRatesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountInternalHourlyRate[]>> {
    return this.client.request<MocoAccountInternalHourlyRate[]>({
      method: "GET",
      path: "/account/internal_hourly_rates",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/internal_hourly_rates. */
  public listAll(query?: AccountInternalHourlyRatesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoAccountInternalHourlyRate> {
    return this.client.paginate<MocoAccountInternalHourlyRate, AccountInternalHourlyRatesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoAccountInternalHourlyRate[]>>,
      query,
    );
  }

  /** PATCH /account/internal_hourly_rates */
  public update(body?: AccountInternalHourlyRatesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoAccountInternalHourlyRate>> {
    return this.client.request<MocoAccountInternalHourlyRate>({
      method: "PATCH",
      path: "/account/internal_hourly_rates",
      body,
      ...options,
    });
  }
}
