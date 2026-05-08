import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  MocoProfile
} from "../types";

export class ProfileApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /profile */
  public list(options?: MocoOperationOptions): Promise<MocoResponse<MocoProfile>> {
    return this.client.request<MocoProfile>({
      method: "GET",
      path: "/profile",
      ...options,
    });
  }
}
