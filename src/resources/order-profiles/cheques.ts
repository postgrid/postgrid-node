// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ContactsAPI from '../contacts';
import { List, type ListParams } from '../../pagination';

export class Cheques extends APIResource {
  /**
   * Creates a new Cheque Profile. Requires a `bankAccount` ID. Can optionally
   * include an attached letter via `letterHTML`, `letterTemplate`, or `letterPDF`.
   * If providing `letterPDF` or `logo` (if logo needs upload, though schema suggests
   * URL), use `multipart/form-data`.
   *
   * @example
   * ```ts
   * const cheque = await client.orderProfiles.cheques.create({
   *   bankAccount: 'bankAccount',
   *   size: 'us_letter',
   * });
   * ```
   */
  create(params: ChequeCreateParams, options?: Core.RequestOptions): Core.APIPromise<ChequeCreateResponse> {
    const { expand, ...body } = params;
    return this._client.post('/order_profiles/cheques', { query: { expand }, body, ...options });
  }

  /**
   * Retrieves the details of a specific Cheque Profile.
   *
   * @example
   * ```ts
   * const cheque = await client.orderProfiles.cheques.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query?: ChequeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChequeRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ChequeRetrieveResponse>;
  retrieve(
    id: string,
    query: ChequeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChequeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/order_profiles/cheques/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Cheque Profile. If providing `letterPDF`
   * or `logo`, use `multipart/form-data`.
   *
   * @example
   * ```ts
   * const cheque = await client.orderProfiles.cheques.update(
   *   'id',
   *   { bankAccount: 'bankAccount', size: 'us_letter' },
   * );
   * ```
   */
  update(
    id: string,
    params: ChequeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChequeUpdateResponse> {
    const { expand, ...body } = params;
    return this._client.post(`/order_profiles/cheques/${id}`, { query: { expand }, body, ...options });
  }

  /**
   * Retrieves a list of Cheque Profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chequeListResponse of client.orderProfiles.cheques.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: ChequeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ChequeListResponsesList, ChequeListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<ChequeListResponsesList, ChequeListResponse>;
  list(
    query: ChequeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ChequeListResponsesList, ChequeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/order_profiles/cheques', ChequeListResponsesList, { query, ...options });
  }

  /**
   * Deletes a Cheque Profile.
   *
   * @example
   * ```ts
   * const cheque = await client.orderProfiles.cheques.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ChequeDeleteResponse> {
    return this._client.delete(`/order_profiles/cheques/${id}`, options);
  }
}

export class ChequeListResponsesList extends List<ChequeListResponse> {}

export interface ChequeCreateResponse {
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
  currencyCode: 'CAD' | 'USD';

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
  size: 'us_letter' | 'us_legal';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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

  /**
   * Contact details for redirection (output).
   */
  redirectTo?: ContactsAPI.Contact;
}

export interface ChequeRetrieveResponse {
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
  currencyCode: 'CAD' | 'USD';

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
  size: 'us_letter' | 'us_legal';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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

  /**
   * Contact details for redirection (output).
   */
  redirectTo?: ContactsAPI.Contact;
}

export interface ChequeUpdateResponse {
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
  currencyCode: 'CAD' | 'USD';

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
  size: 'us_letter' | 'us_legal';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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

  /**
   * Contact details for redirection (output).
   */
  redirectTo?: ContactsAPI.Contact;
}

export interface ChequeListResponse {
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
  size: 'us_letter' | 'us_legal';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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

  /**
   * Contact details for redirection (output).
   */
  redirectTo?: ContactsAPI.Contact;
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
  size: 'us_letter' | 'us_legal';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the supported currency codes.
   */
  currencyCode?: 'CAD' | 'USD';

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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
  size: 'us_letter' | 'us_legal';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the supported currency codes.
   */
  currencyCode?: 'CAD' | 'USD';

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: Set explicitly to `null` during an update operation to remove the
   * attached letter.
   */
  letter?: unknown;

  /**
   * Body param: HTML content for an optional attached letter. Cannot be used with
   * `letterTemplate` or `letterPDF`.
   */
  letterHTML?: string;

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
  mailingClass?:
    | 'first_class'
    | 'standard_class'
    | 'express'
    | 'certified'
    | 'certified_return_receipt'
    | 'registered'
    | 'usps_first_class'
    | 'usps_standard_class'
    | 'usps_eddm'
    | 'usps_express_2_day'
    | 'usps_express_3_day'
    | 'usps_first_class_certified'
    | 'usps_first_class_certified_return_receipt'
    | 'usps_first_class_registered'
    | 'usps_express_3_day_signature_confirmation'
    | 'usps_express_3_day_certified'
    | 'usps_express_3_day_certified_return_receipt'
    | 'ca_post_lettermail'
    | 'ca_post_personalized'
    | 'ca_post_neighbourhood_mail'
    | 'ups_express_overnight'
    | 'ups_express_2_day'
    | 'ups_express_3_day'
    | 'royal_mail_first_class'
    | 'royal_mail_second_class'
    | 'au_post_second_class';

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

export interface ChequeListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Cheques.ChequeListResponsesList = ChequeListResponsesList;

export declare namespace Cheques {
  export {
    type ChequeCreateResponse as ChequeCreateResponse,
    type ChequeRetrieveResponse as ChequeRetrieveResponse,
    type ChequeUpdateResponse as ChequeUpdateResponse,
    type ChequeListResponse as ChequeListResponse,
    type ChequeDeleteResponse as ChequeDeleteResponse,
    ChequeListResponsesList as ChequeListResponsesList,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeRetrieveParams as ChequeRetrieveParams,
    type ChequeUpdateParams as ChequeUpdateParams,
    type ChequeListParams as ChequeListParams,
  };
}
