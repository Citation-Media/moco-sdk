import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoUserRole,
  UserRolesListQuery
} from "../types";

export class UserRolesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users/roles */
  public list(query?: UserRolesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoUserRole[]>> {
    return this.client.request<MocoUserRole[]>({
      method: "GET",
      path: "/users/roles",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/roles. */
  public listAll(query?: UserRolesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoUserRole> {
    return this.client.paginate<MocoUserRole, UserRolesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoUserRole[]>>,
      query,
    );
  }
}
