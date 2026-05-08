import type {
  MocoHttpClient,
  MocoOperationOptions,
  MocoResponse
} from "../../core";
import type {
  LetterPapersListQuery,
  MocoLetterPaper
} from "../types";

export class LetterPapersApi {
  public constructor(private readonly client: MocoHttpClient) {}

  /** GET /letter_papers */
  public list(query?: LetterPapersListQuery, options?: MocoOperationOptions): Promise<MocoResponse<MocoLetterPaper[]>> {
    return this.client.request<MocoLetterPaper[]>({
      method: "GET",
      path: "/letter_papers",
      query,
      ...options,
    });
  }

  /** Iterates through every page for GET /letter_papers. */
  public listAll(query?: LetterPapersListQuery, options?: MocoOperationOptions): AsyncGenerator<MocoLetterPaper> {
    return this.client.paginate<MocoLetterPaper, LetterPapersListQuery>(
      (pageQuery) => this.list(pageQuery, options) as Promise<MocoResponse<readonly MocoLetterPaper[]>>,
      query,
    );
  }
}
