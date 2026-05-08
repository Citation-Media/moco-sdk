import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  CommentsBulkCreateBody,
  CommentsCreateBody,
  CommentsDeletePath,
  CommentsGetPath,
  CommentsListQuery,
  CommentsUpdateBody,
  CommentsUpdatePath,
  MocoComment
} from "../types";

export class CommentsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /comments */
  public list(query?: CommentsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoComment[]>> {
    return this.client.request<MocoComment[]>({
      method: "GET",
      path: "/comments",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /comments. */
  public listAll(query?: CommentsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoComment> {
    return this.client.paginate<MocoComment, CommentsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoComment[]>>,
      query,
    );
  }

  /** GET /comments/{id} */
  public get(path: CommentsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoComment>> {
    return this.client.request<MocoComment>({
      method: "GET",
      path: "/comments/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /comments */
  public create(body: CommentsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoComment>> {
    return this.client.request<MocoComment>({
      method: "POST",
      path: "/comments",
      body,
      ...options,
    });
  }

  /** POST /comments/bulk */
  public bulkCreate(body: CommentsBulkCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoComment>> {
    return this.client.request<MocoComment>({
      method: "POST",
      path: "/comments/bulk",
      body,
      ...options,
    });
  }

  /** PUT /comments/{id} */
  public update(path: CommentsUpdatePath, body?: CommentsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoComment>> {
    return this.client.request<MocoComment>({
      method: "PUT",
      path: "/comments/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /comments/{id} */
  public delete(path: CommentsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/comments/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
