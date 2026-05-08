import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoTag,
  TagsCreateBody,
  TagsDeletePath,
  TagsGetPath,
  TagsListQuery,
  TagsUpdateBody,
  TagsUpdatePath
} from "../types";

export class TagsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /tags */
  public list(query?: TagsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoTag[]>> {
    return this.client.request<MocoTag[]>({
      method: "GET",
      path: "/tags",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /tags. */
  public listAll(query?: TagsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoTag> {
    return this.client.paginate<MocoTag, TagsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoTag[]>>,
      query,
    );
  }

  /** GET /tags/{id} */
  public get(path: TagsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoTag>> {
    return this.client.request<MocoTag>({
      method: "GET",
      path: "/tags/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /tags */
  public create(body: TagsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoTag>> {
    return this.client.request<MocoTag>({
      method: "POST",
      path: "/tags",
      body,
      ...options,
    });
  }

  /** PUT /tags/{id} */
  public update(path: TagsUpdatePath, body?: TagsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoTag>> {
    return this.client.request<MocoTag>({
      method: "PUT",
      path: "/tags/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /tags/{id} */
  public delete(path: TagsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/tags/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
