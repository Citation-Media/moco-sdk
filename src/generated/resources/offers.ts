import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoOffer,
  OffersAssignBody,
  OffersAssignPath,
  OffersAttachmentsBody,
  OffersAttachmentsPath,
  OffersCreateBody,
  OffersDeleteAttachmentPath,
  OffersGetPath,
  OffersGetPdfPath,
  OffersGetPdfQuery,
  OffersListAttachmentPath,
  OffersListAttachmentQuery,
  OffersListQuery,
  OffersSendEmailBody,
  OffersSendEmailPath,
  OffersUpdateStatusBody,
  OffersUpdateStatusPath
} from "../types";

export class OffersApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /offers */
  public list(query?: OffersListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer[]>> {
    return this.client.request<MocoOffer[]>({
      method: "GET",
      path: "/offers",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /offers. */
  public listAll(query?: OffersListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoOffer> {
    return this.client.paginate<MocoOffer, OffersListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoOffer[]>>,
      query,
    );
  }

  /** GET /offers/{id} */
  public get(path: OffersGetPath, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "GET",
      path: "/offers/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** GET /offers/{id}.pdf */
  public getPdf(path: OffersGetPdfPath, query?: OffersGetPdfQuery, options?: MocoOperationOptions): Promise<MocoResponse<ArrayBuffer>> {
    return this.client.request<ArrayBuffer>({
      method: "GET",
      path: "/offers/{id}.pdf",
      pathParams: [path.id],
      query,
      responseType: "arrayBuffer",
      ...options,
    });
  }

  /** POST /offers */
  public create(body: OffersCreateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "POST",
      path: "/offers",
      body,
      ...options,
    });
  }

  /** PUT /offers/{id}/assign */
  public assign(path: OffersAssignPath, body?: OffersAssignBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "PUT",
      path: "/offers/{id}/assign",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }

  /** PUT /offers/{id}/update_status */
  public updateStatus(path: OffersUpdateStatusPath, body?: OffersUpdateStatusBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "PUT",
      path: "/offers/{id}/update_status",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }

  /** POST /offers/{id}/send_email */
  public sendEmail(path: OffersSendEmailPath, body: OffersSendEmailBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "POST",
      path: "/offers/{id}/send_email",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }

  /** GET /offers/{id}/attachments */
  public listAttachment(path: OffersListAttachmentPath, query?: OffersListAttachmentQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer[]>> {
    return this.client.request<MocoOffer[]>({
      method: "GET",
      path: "/offers/{id}/attachments",
      pathParams: [path.offerId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /offers/{id}/attachments. */
  public listAttachmentAll(path: OffersListAttachmentPath, query?: OffersListAttachmentQuery, options?: MocoOperationOptions): AsyncGenerator<MocoOffer> {
    return this.client.paginate<MocoOffer, OffersListAttachmentQuery>(
      (pageQuery) => this.listAttachment(path, pageQuery, options) as Promise<MocoResponse<readonly MocoOffer[]>>,
      query,
    );
  }

  /** POST /offers/{id}/attachments */
  public attachments(path: OffersAttachmentsPath, body?: OffersAttachmentsBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOffer>> {
    return this.client.request<MocoOffer>({
      method: "POST",
      path: "/offers/{id}/attachments",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }

  /** DELETE /offers/{offer_id}/attachments/{id} */
  public deleteAttachment(path: OffersDeleteAttachmentPath, options?: MocoOperationOptions): Promise<MocoResponse<void>> {
    return this.client.request<void>({
      method: "DELETE",
      path: "/offers/{offer_id}/attachments/{id}",
      pathParams: [path.offerId, path.attachmentId],
      responseType: "void",
      ...options,
    });
  }
}
