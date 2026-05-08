import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoWebHook,
  WebHooksCreateBody,
  WebHooksDeletePath,
  WebHooksDisableBody,
  WebHooksDisablePath,
  WebHooksEnableBody,
  WebHooksEnablePath,
  WebHooksGetPath,
  WebHooksListQuery,
  WebHooksUpdateBody,
  WebHooksUpdatePath
} from "../types";

export class WebHooksApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /account/web_hooks */
  public list(query?: WebHooksListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook[]>> {
    return this.client.request<MocoWebHook[]>({
      method: "GET",
      path: "/account/web_hooks",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /account/web_hooks. */
  public listAll(query?: WebHooksListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoWebHook> {
    return this.client.paginate<MocoWebHook, WebHooksListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoWebHook[]>>,
      query,
    );
  }

  /** GET /account/web_hooks/{id} */
  public get(path: WebHooksGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook>> {
    return this.client.request<MocoWebHook>({
      method: "GET",
      path: "/account/web_hooks/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /account/web_hooks */
  public create(body: WebHooksCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook>> {
    return this.client.request<MocoWebHook>({
      method: "POST",
      path: "/account/web_hooks",
      body,
      ...options,
    });
  }

  /** PUT /account/web_hooks/{id} */
  public update(path: WebHooksUpdatePath, body?: WebHooksUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook>> {
    return this.client.request<MocoWebHook>({
      method: "PUT",
      path: "/account/web_hooks/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** PUT /account/web_hooks/{id}/disable */
  public disable(path: WebHooksDisablePath, body?: WebHooksDisableBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook>> {
    return this.client.request<MocoWebHook>({
      method: "PUT",
      path: "/account/web_hooks/{id}/disable",
      pathParams: [path.webHookId],
      body,
      ...options,
    });
  }

  /** PUT /account/web_hooks/{id}/enable */
  public enable(path: WebHooksEnablePath, body?: WebHooksEnableBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoWebHook>> {
    return this.client.request<MocoWebHook>({
      method: "PUT",
      path: "/account/web_hooks/{id}/enable",
      pathParams: [path.webHookId],
      body,
      ...options,
    });
  }

  /** DELETE /account/web_hooks/{id} */
  public delete(path: WebHooksDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/account/web_hooks/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
