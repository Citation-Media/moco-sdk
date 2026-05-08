import type { MocoHttpClient, MocoResponse, MocoSession, MocoSessionCredentials } from "../core";

export class AuthApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /**
   * Requests a user-specific API key by email and password.
   */
  public createSession(credentials: MocoSessionCredentials): Promise<MocoResponse<MocoSession>> {
    return this.client.request<MocoSession>({
      body: credentials,
      method: "POST",
      path: "/session",
    });
  }

  /**
   * Verifies that the configured API key is still accepted by MOCO.
   */
  public verifySession(): Promise<MocoResponse<MocoSession>> {
    return this.client.request<MocoSession>({
      method: "GET",
      path: "/session",
    });
  }
}
