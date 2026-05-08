import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPlanningEntry,
  PlanningEntriesCreateBody,
  PlanningEntriesDeletePath,
  PlanningEntriesGetPath,
  PlanningEntriesListQuery,
  PlanningEntriesUpdateBody,
  PlanningEntriesUpdatePath
} from "../types";

export class PlanningEntriesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /planning_entries */
  public list(query?: PlanningEntriesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPlanningEntry[]>> {
    return this.client.request<MocoPlanningEntry[]>({
      method: "GET",
      path: "/planning_entries",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /planning_entries. */
  public listAll(query?: PlanningEntriesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPlanningEntry> {
    return this.client.paginate<MocoPlanningEntry, PlanningEntriesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPlanningEntry[]>>,
      query,
    );
  }

  /** GET /planning_entries/{id} */
  public get(path: PlanningEntriesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPlanningEntry>> {
    return this.client.request<MocoPlanningEntry>({
      method: "GET",
      path: "/planning_entries/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /planning_entries */
  public create(body: PlanningEntriesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPlanningEntry>> {
    return this.client.request<MocoPlanningEntry>({
      method: "POST",
      path: "/planning_entries",
      body,
      ...options,
    });
  }

  /** PUT /planning_entries/{id} */
  public update(path: PlanningEntriesUpdatePath, body?: PlanningEntriesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPlanningEntry>> {
    return this.client.request<MocoPlanningEntry>({
      method: "PUT",
      path: "/planning_entries/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /planning_entries/{id} */
  public delete(path: PlanningEntriesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/planning_entries/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
