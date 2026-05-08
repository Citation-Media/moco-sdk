import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPresence,
  PresencesCreateBody,
  PresencesDeletePath,
  PresencesGetPath,
  PresencesListQuery,
  PresencesTouchBody,
  PresencesUpdateBody,
  PresencesUpdatePath
} from "../types";

export class PresencesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /users/presences */
  public list(query?: PresencesListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPresence[]>> {
    return this.client.request<MocoPresence[]>({
      method: "GET",
      path: "/users/presences",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /users/presences. */
  public listAll(query?: PresencesListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPresence> {
    return this.client.paginate<MocoPresence, PresencesListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPresence[]>>,
      query,
    );
  }

  /** GET /users/presences/{id} */
  public get(path: PresencesGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPresence>> {
    return this.client.request<MocoPresence>({
      method: "GET",
      path: "/users/presences/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /users/presences */
  public create(body: PresencesCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPresence>> {
    return this.client.request<MocoPresence>({
      method: "POST",
      path: "/users/presences",
      body,
      ...options,
    });
  }

  /** POST /users/presences/touch */
  public touch(body?: PresencesTouchBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPresence>> {
    return this.client.request<MocoPresence>({
      method: "POST",
      path: "/users/presences/touch",
      body,
      ...options,
    });
  }

  /** PUT /users/presences/{id} */
  public update(path: PresencesUpdatePath, body?: PresencesUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPresence>> {
    return this.client.request<MocoPresence>({
      method: "PUT",
      path: "/users/presences/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /users/presences/{id} */
  public delete(path: PresencesDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/users/presences/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
