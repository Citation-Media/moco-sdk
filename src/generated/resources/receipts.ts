import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoReceipt,
  ReceiptsCreateBody,
  ReceiptsDeletePath,
  ReceiptsGetPath,
  ReceiptsListQuery,
  ReceiptsUpdateBody,
  ReceiptsUpdatePath
} from "../types";

export class ReceiptsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /receipts */
  public list(query?: ReceiptsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoReceipt[]>> {
    return this.client.request<MocoReceipt[]>({
      method: "GET",
      path: "/receipts",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /receipts. */
  public listAll(query?: ReceiptsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoReceipt> {
    return this.client.paginate<MocoReceipt, ReceiptsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoReceipt[]>>,
      query,
    );
  }

  /** GET /receipts/{id} */
  public get(path: ReceiptsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoReceipt>> {
    return this.client.request<MocoReceipt>({
      method: "GET",
      path: "/receipts/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /receipts */
  public create(body: ReceiptsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoReceipt>> {
    return this.client.request<MocoReceipt>({
      method: "POST",
      path: "/receipts",
      body,
      ...options,
    });
  }

  /** PATCH /receipts/{id} */
  public update(path: ReceiptsUpdatePath, body?: ReceiptsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoReceipt>> {
    return this.client.request<MocoReceipt>({
      method: "PATCH",
      path: "/receipts/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /receipts/{id} */
  public delete(path: ReceiptsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/receipts/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
