import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoVatCode,
  VatCodesGetVatCodePurchasePath,
  VatCodesGetVatCodeSalePath,
  VatCodesListVatCodePurchaseQuery,
  VatCodesListVatCodeSaleQuery
} from "../types";

export class VatCodesApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /vat_code_sales */
  public listVatCodeSale(query?: VatCodesListVatCodeSaleQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoVatCode[]>> {
    return this.client.request<MocoVatCode[]>({
      method: "GET",
      path: "/vat_code_sales",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /vat_code_sales. */
  public listVatCodeSaleAll(query?: VatCodesListVatCodeSaleQuery, options?: MocoOperationOptions): AsyncGenerator<MocoVatCode> {
    return this.client.paginate<MocoVatCode, VatCodesListVatCodeSaleQuery>(
      (pageQuery) => this.listVatCodeSale(pageQuery, options) as Promise<MocoResponse<readonly MocoVatCode[]>>,
      query,
    );
  }

  /** GET /vat_code_purchases */
  public listVatCodePurchase(query?: VatCodesListVatCodePurchaseQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoVatCode[]>> {
    return this.client.request<MocoVatCode[]>({
      method: "GET",
      path: "/vat_code_purchases",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /vat_code_purchases. */
  public listVatCodePurchaseAll(query?: VatCodesListVatCodePurchaseQuery, options?: MocoOperationOptions): AsyncGenerator<MocoVatCode> {
    return this.client.paginate<MocoVatCode, VatCodesListVatCodePurchaseQuery>(
      (pageQuery) => this.listVatCodePurchase(pageQuery, options) as Promise<MocoResponse<readonly MocoVatCode[]>>,
      query,
    );
  }

  /** GET /vat_code_sales/{id} */
  public getVatCodeSale(path: VatCodesGetVatCodeSalePath, options?: MocoOperationOptions): Promise<MocoResponse<MocoVatCode>> {
    return this.client.request<MocoVatCode>({
      method: "GET",
      path: "/vat_code_sales/{id}",
      pathParams: [path.id],
      ...options,
    });
  }

  /** GET /vat_code_purchases/{id} */
  public getVatCodePurchase(path: VatCodesGetVatCodePurchasePath, options?: MocoOperationOptions): Promise<MocoResponse<MocoVatCode>> {
    return this.client.request<MocoVatCode>({
      method: "GET",
      path: "/vat_code_purchases/{id}",
      pathParams: [path.id],
      ...options,
    });
  }
}
