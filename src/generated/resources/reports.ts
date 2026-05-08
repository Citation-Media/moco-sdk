import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoReport,
  ReportsListAbsenceQuery,
  ReportsListCashflowQuery,
  ReportsListFinanceQuery,
  ReportsListPlannedVTrackedQuery,
  ReportsListUtilizationQuery
} from "../types";

export class ReportsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /report/absences */
  public listAbsence(query?: ReportsListAbsenceQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReport[]>> {
    return this.client.request<MocoReport[]>({
      method: "GET",
      path: "/report/absences",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /report/absences. */
  public listAbsenceAll(query?: ReportsListAbsenceQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReport> {
    return this.client.paginate<MocoReport, ReportsListAbsenceQuery>(
      (pageQuery) => this.listAbsence(pageQuery, options) as Promise<MocoResponse<readonly MocoReport[]>>,
      query,
    );
  }

  /** GET /report/cashflow */
  public listCashflow(query?: ReportsListCashflowQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReport[]>> {
    return this.client.request<MocoReport[]>({
      method: "GET",
      path: "/report/cashflow",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /report/cashflow. */
  public listCashflowAll(query?: ReportsListCashflowQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReport> {
    return this.client.paginate<MocoReport, ReportsListCashflowQuery>(
      (pageQuery) => this.listCashflow(pageQuery, options) as Promise<MocoResponse<readonly MocoReport[]>>,
      query,
    );
  }

  /** GET /report/finance */
  public listFinance(query?: ReportsListFinanceQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReport[]>> {
    return this.client.request<MocoReport[]>({
      method: "GET",
      path: "/report/finance",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /report/finance. */
  public listFinanceAll(query?: ReportsListFinanceQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReport> {
    return this.client.paginate<MocoReport, ReportsListFinanceQuery>(
      (pageQuery) => this.listFinance(pageQuery, options) as Promise<MocoResponse<readonly MocoReport[]>>,
      query,
    );
  }

  /** GET /report/planned_vs_tracked */
  public listPlannedVTracked(query?: ReportsListPlannedVTrackedQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReport[]>> {
    return this.client.request<MocoReport[]>({
      method: "GET",
      path: "/report/planned_vs_tracked",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /report/planned_vs_tracked. */
  public listPlannedVTrackedAll(query?: ReportsListPlannedVTrackedQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReport> {
    return this.client.paginate<MocoReport, ReportsListPlannedVTrackedQuery>(
      (pageQuery) => this.listPlannedVTracked(pageQuery, options) as Promise<MocoResponse<readonly MocoReport[]>>,
      query,
    );
  }

  /** GET /report/utilization */
  public listUtilization(query?: ReportsListUtilizationQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReport[]>> {
    return this.client.request<MocoReport[]>({
      method: "GET",
      path: "/report/utilization",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /report/utilization. */
  public listUtilizationAll(query?: ReportsListUtilizationQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReport> {
    return this.client.paginate<MocoReport, ReportsListUtilizationQuery>(
      (pageQuery) => this.listUtilization(pageQuery, options) as Promise<MocoResponse<readonly MocoReport[]>>,
      query,
    );
  }
}
