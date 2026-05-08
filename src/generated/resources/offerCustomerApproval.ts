import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoOfferCustomerApproval,
  OfferCustomerApprovalActivateBody,
  OfferCustomerApprovalActivatePath,
  OfferCustomerApprovalDeactivateBody,
  OfferCustomerApprovalDeactivatePath,
  OfferCustomerApprovalListForOfferPath,
  OfferCustomerApprovalListForOfferQuery
} from "../types";

export class OfferCustomerApprovalApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /offers/{id}/customer_approval */
  public listForOffer(path: OfferCustomerApprovalListForOfferPath, query?: OfferCustomerApprovalListForOfferQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoOfferCustomerApproval[]>> {
    return this.client.request<MocoOfferCustomerApproval[]>({
      method: "GET",
      path: "/offers/{id}/customer_approval",
      pathParams: [path.offerId],
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /offers/{id}/customer_approval. */
  public listForOfferAll(path: OfferCustomerApprovalListForOfferPath, query?: OfferCustomerApprovalListForOfferQuery, options?: MocoOperationOptions): AsyncGenerator<MocoOfferCustomerApproval> {
    return this.client.paginate<MocoOfferCustomerApproval, OfferCustomerApprovalListForOfferQuery>(
      (pageQuery) => this.listForOffer(path, pageQuery, options) as Promise<MocoResponse<readonly MocoOfferCustomerApproval[]>>,
      query,
    );
  }

  /** POST /offers/{id}/customer_approval/activate */
  public activate(path: OfferCustomerApprovalActivatePath, body?: OfferCustomerApprovalActivateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOfferCustomerApproval>> {
    return this.client.request<MocoOfferCustomerApproval>({
      method: "POST",
      path: "/offers/{id}/customer_approval/activate",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }

  /** POST /offers/{id}/customer_approval/deactivate */
  public deactivate(path: OfferCustomerApprovalDeactivatePath, body?: OfferCustomerApprovalDeactivateBody, options?: MocoOperationOptions): Promise<MocoResponse<MocoOfferCustomerApproval>> {
    return this.client.request<MocoOfferCustomerApproval>({
      method: "POST",
      path: "/offers/{id}/customer_approval/deactivate",
      pathParams: [path.offerId],
      body,
      ...options,
    });
  }
}
