import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoPurchaseDraft,
  PurchaseDraftsCreateBody,
  PurchaseDraftsDeletePath,
  PurchaseDraftsGetPath,
  PurchaseDraftsGetPdfPath,
  PurchaseDraftsListQuery
} from "../types";

export class PurchaseDraftsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /purchases/drafts */
  public list(query?: PurchaseDraftsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseDraft[]>> {
    return this.client.request<MocoPurchaseDraft[]>({
      method: "GET",
      path: "/purchases/drafts",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /purchases/drafts. */
  public listAll(query?: PurchaseDraftsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoPurchaseDraft> {
    return this.client.paginate<MocoPurchaseDraft, PurchaseDraftsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoPurchaseDraft[]>>,
      query,
    );
  }

  /** POST /purchases/drafts */
  public create(body?: PurchaseDraftsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseDraft>> {
    return this.client.request<MocoPurchaseDraft>({
      method: "POST",
      path: "/purchases/drafts",
      body,
      ...options,
    });
  }

  /** GET /purchases/drafts/{id} */
  public get(path: PurchaseDraftsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoPurchaseDraft>> {
    return this.client.request<MocoPurchaseDraft>({
      method: "GET",
      path: "/purchases/drafts/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** GET /purchases/drafts/{id}.pdf */
  public getPdf(path: PurchaseDraftsGetPdfPath, options?: MocoOperationOptions): Promise<MocoResponse<ArrayBuffer>> {
    return this.client.request<ArrayBuffer>({
      method: "GET",
      path: "/purchases/drafts/{id}.pdf",
      pathParams: [path.id],
      responseType: "arrayBuffer",
      ...options,
    });
  }

  /** DELETE /purchases/drafts/{id} */
  public delete(path: PurchaseDraftsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/purchases/drafts/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
