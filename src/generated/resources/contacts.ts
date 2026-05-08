import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  ContactsCreateBody,
  ContactsDeletePath,
  ContactsGetPath,
  ContactsListQuery,
  ContactsUpdateBody,
  ContactsUpdatePath,
  MocoContact
} from "../types";

export class ContactsApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /contacts/people */
  public list(query?: ContactsListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoContact[]>> {
    return this.client.request<MocoContact[]>({
      method: "GET",
      path: "/contacts/people",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /contacts/people. */
  public listAll(query?: ContactsListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoContact> {
    return this.client.paginate<MocoContact, ContactsListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoContact[]>>,
      query,
    );
  }

  /** GET /contacts/people/{id} */
  public get(path: ContactsGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoContact>> {
    return this.client.request<MocoContact>({
      method: "GET",
      path: "/contacts/people/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** POST /contacts/people */
  public create(body: ContactsCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoContact>> {
    return this.client.request<MocoContact>({
      method: "POST",
      path: "/contacts/people",
      body,
      ...options,
    });
  }

  /** PUT /contacts/people/{id} */
  public update(path: ContactsUpdatePath, body?: ContactsUpdateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoContact>> {
    return this.client.request<MocoContact>({
      method: "PUT",
      path: "/contacts/people/{id}",
      pathParams: [path.id],
      body,
      ...options,
    });
  }

  /** DELETE /contacts/people/{id} */
  public delete(path: ContactsDeletePath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/contacts/people/{id}",
      pathParams: [path.id],
      responseType: "void",
      ...options,
    });
  }
}
