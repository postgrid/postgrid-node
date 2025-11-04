// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class URL extends APIResource {
  /**
   * Retrieve a cheque preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const url = await client.cheques.url.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<URLRetrieveResponse> {
    return this._client.get(path`/cheques/${id}/url`, options);
  }
}

export interface URLRetrieveResponse {
  /**
   * A unique ID prefixed with cheque\_
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export declare namespace URL {
  export { type URLRetrieveResponse as URLRetrieveResponse };
}
