// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BoxesAPI from '../boxes';
import * as ChequesAPI from '../cheques';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cheques extends APIResource {
  /**
   * Creates a new Cheque Profile. Requires a `bankAccount` ID. Can optionally
   * include an attached letter via `letterHTML`, `letterTemplate`, or `letterPDF`.
   * If providing `letterPDF` or `logo` (if logo needs upload, though schema suggests
   * URL), use `multipart/form-data`.
   *
   * @example
   * ```ts
   * const chequeProfile =
   *   await client.printMail.orderProfiles.cheques.create({
   *     bankAccount: 'bankAccount',
   *     size: 'us_letter',
   *   });
   * ```
   */
  create(params: ChequeCreateParams, options?: RequestOptions): APIPromise<ChequeProfile> {
    const { expand, ...body } = params;
    return this._client.post('/print-mail/v1/order_profiles/cheques', {
      query: { expand },
      body,
      ...options,
    });
  }

  /**
   * Retrieves the details of a specific Cheque Profile.
   *
   * @example
   * ```ts
   * const chequeProfile =
   *   await client.printMail.orderProfiles.cheques.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ChequeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChequeProfile> {
    return this._client.get(path`/print-mail/v1/order_profiles/cheques/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Cheque Profile. If providing `letterPDF`
   * or `logo`, use `multipart/form-data`.
   *
   * @example
   * ```ts
   * const chequeProfile =
   *   await client.printMail.orderProfiles.cheques.update(
   *     'id',
   *     { bankAccount: 'bankAccount', size: 'us_letter' },
   *   );
   * ```
   */
  update(id: string, params: ChequeUpdateParams, options?: RequestOptions): APIPromise<ChequeProfile> {
    const { expand, ...body } = params;
    return this._client.post(path`/print-mail/v1/order_profiles/cheques/${id}`, {
      query: { expand },
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of Cheque Profiles.
   *
   * @example
   * ```ts
   * const cheques =
   *   await client.printMail.orderProfiles.cheques.list();
   * ```
   */
  list(
    query: ChequeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChequeListResponse> {
    return this._client.get('/print-mail/v1/order_profiles/cheques', { query, ...options });
  }

  /**
   * Deletes a Cheque Profile.
   *
   * @example
   * ```ts
   * const cheque =
   *   await client.printMail.orderProfiles.cheques.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ChequeDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/order_profiles/cheques/${id}`, options);
  }
}

export interface ChequeProfile {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * ID of the bank account to use for the cheque. Required for creation.
   */
  bankAccount: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Enum representing the supported currency codes.
   */
  currencyCode: CurrencyCode;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `cheque_profile`.
   */
  object: 'cheque_profile';

  /**
   * Enum representing the supported cheque sizes.
   */
  size: ChequesAPI.ChequeSize;

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of a template for an optional attached letter. Cannot be used with
   * `letterHTML` or `letterPDF`.
   */
  letterTemplate?: string;

  /**
   * A temporary, signed URL to view the attached letter PDF, if any. Output only.
   */
  letterUploadedPDF?: string;

  /**
   * A publicly accessible URL for the logo to print on the cheque. Set to `null` to
   * remove during update.
   */
  logo?: string | null;

  /**
   * Mailing class. Generally must be first class (or equivalent for destination
   * country) for cheques.
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Memo line text for the cheque. Set to `null` to remove during update.
   */
  memo?: string | null;

  /**
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Message included on the cheque stub. Set to `null` to remove during update.
   */
  message?: string | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;
}

/**
 * Enum representing the supported currency codes.
 */
export type CurrencyCode = 'CAD' | 'USD';

/**
 * Represents a list of Cheque Profiles.
 */
export interface ChequeListResponse {
  data: Array<ChequeListResponse.Data>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export namespace ChequeListResponse {
  export interface Data {
    /**
     * Unique identifier for the order profile.
     */
    id: string;

    /**
     * ID of the bank account to use for the cheque. Required for creation.
     */
    bankAccount: string;

    /**
     * Timestamp when the profile was created.
     */
    createdAt: string;

    /**
     * Indicates if the profile is associated with the live or test environment.
     */
    live: boolean;

    /**
     * Always `cheque_profile`.
     */
    object: 'cheque_profile';

    /**
     * Enum representing the supported cheque sizes.
     */
    size: ChequesAPI.ChequeSize;

    /**
     * Timestamp when the profile was last updated.
     */
    updatedAt: string;

    /**
     * An optional description for the profile. Set to `null` to remove during update.
     */
    description?: string | null;

    /**
     * ID of a template for an optional attached letter. Cannot be used with
     * `letterHTML` or `letterPDF`.
     */
    letterTemplate?: string;

    /**
     * A temporary, signed URL to view the attached letter PDF, if any. Output only.
     */
    letterUploadedPDF?: string;

    /**
     * A publicly accessible URL for the logo to print on the cheque. Set to `null` to
     * remove during update.
     */
    logo?: string | null;

    /**
     * Mailing class. Generally must be first class (or equivalent for destination
     * country) for cheques.
     */
    mailingClass?: BoxesAPI.OrderMailingClass;

    /**
     * Memo line text for the cheque. Set to `null` to remove during update.
     */
    memo?: string | null;

    /**
     * Default merge variables for orders created using this profile.
     */
    mergeVariables?: { [key: string]: unknown } | null;

    /**
     * Message included on the cheque stub. Set to `null` to remove during update.
     */
    message?: string | null;

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string } | null;
  }
}

export interface ChequeDeleteResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  deleted: true;

  /**
   * Always `cheque_profile`.
   */
  object: 'cheque_profile';
}

export interface ChequeCreateParams {
  /**
   * Body param: ID of the bank account to use for the cheque. Required for creation.
   */
  bankAccount: string;

  /**
   * Body param: Enum representing the supported cheque sizes.
   */
  size: ChequesAPI.ChequeSize;

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the supported currency codes.
   */
  currencyCode?: CurrencyCode;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: PDF file for an optional attached letter. Cannot be used with
   * `letterHTML` or `letterTemplate`. Input only.
   */
  letterPDF?: string;

  /**
   * Body param: ID of a template for an optional attached letter. Cannot be used
   * with `letterHTML` or `letterPDF`.
   */
  letterTemplate?: string;

  /**
   * Body param: A publicly accessible URL for the logo to print on the cheque. Set
   * to `null` to remove during update.
   */
  logo?: string | null;

  /**
   * Body param: Mailing class. Generally must be first class (or equivalent for
   * destination country) for cheques.
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Body param: Memo line text for the cheque. Set to `null` to remove during
   * update.
   */
  memo?: string | null;

  /**
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Message included on the cheque stub. Set to `null` to remove during
   * update.
   */
  message?: string | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;
}

export interface ChequeRetrieveParams {
  /**
   * Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;
}

export interface ChequeUpdateParams {
  /**
   * Body param: ID of the bank account to use for the cheque. Required for creation.
   */
  bankAccount: string;

  /**
   * Body param: Enum representing the supported cheque sizes.
   */
  size: ChequesAPI.ChequeSize;

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the supported currency codes.
   */
  currencyCode?: CurrencyCode;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: PDF file for an optional attached letter. Cannot be used with
   * `letterHTML` or `letterTemplate`. Input only.
   */
  letterPDF?: string;

  /**
   * Body param: ID of a template for an optional attached letter. Cannot be used
   * with `letterHTML` or `letterPDF`.
   */
  letterTemplate?: string;

  /**
   * Body param: A publicly accessible URL for the logo to print on the cheque. Set
   * to `null` to remove during update.
   */
  logo?: string | null;

  /**
   * Body param: Mailing class. Generally must be first class (or equivalent for
   * destination country) for cheques.
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Body param: Memo line text for the cheque. Set to `null` to remove during
   * update.
   */
  memo?: string | null;

  /**
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Message included on the cheque stub. Set to `null` to remove during
   * update.
   */
  message?: string | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;
}

export interface ChequeListParams {
  limit?: number;

  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;

  skip?: number;
}

export declare namespace Cheques {
  export {
    type ChequeProfile as ChequeProfile,
    type CurrencyCode as CurrencyCode,
    type ChequeListResponse as ChequeListResponse,
    type ChequeDeleteResponse as ChequeDeleteResponse,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeRetrieveParams as ChequeRetrieveParams,
    type ChequeUpdateParams as ChequeUpdateParams,
    type ChequeListParams as ChequeListParams,
  };
}
