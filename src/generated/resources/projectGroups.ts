import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProjectGroup,
  ProjectGroupsGetPath,
  ProjectGroupsListQuery
} from "../types";

export class ProjectGroupsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /projects/groups */
  public list(query?: ProjectGroupsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectGroup[]>> {
    return this.client.request<MocoProjectGroup[]>({
      method: "GET",
      path: "/projects/groups",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /projects/groups. */
  public listAll(query?: ProjectGroupsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoProjectGroup> {
    return this.client.paginate<MocoProjectGroup, ProjectGroupsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoProjectGroup[]>>,
      query,
    );
  }

  /** GET /projects/groups/{id} */
  public get(path: ProjectGroupsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoProjectGroup>> {
    return this.client.request<MocoProjectGroup>({
      method: "GET",
      path: "/projects/groups/{id}",
      pathParams: [path.id],
      ...options,
    });
  }
}
