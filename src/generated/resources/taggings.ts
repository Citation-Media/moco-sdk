import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoTagging,
  TaggingsListQuery,
  TaggingsUpdateBody,
  TaggingsUpdateTaggingsBody
} from "../types";

export class TaggingsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /taggings */
  public list(query?: TaggingsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoTagging[]>> {
    return this.client.request<MocoTagging[]>({
      method: "GET",
      path: "/taggings",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /taggings. */
  public listAll(query?: TaggingsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoTagging> {
    return this.client.paginate<MocoTagging, TaggingsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoTagging[]>>,
      query,
    );
  }

  /** PATCH /taggings */
  public update(body?: TaggingsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoTagging>> {
    return this.client.request<MocoTagging>({
      method: "PATCH",
      path: "/taggings",
      body,
      ...options,
    });
  }

  /** PUT /taggings */
  public updateTaggings(body?: TaggingsUpdateTaggingsBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoTagging>> {
    return this.client.request<MocoTagging>({
      method: "PUT",
      path: "/taggings",
      body,
      ...options,
    });
  }

  /** DELETE /taggings */
  public delete(options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/taggings",
      responseType: "void",
      ...options,
    });
  }
}
