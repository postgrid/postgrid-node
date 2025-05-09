// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { List, type ListParams } from '../../pagination';

export class SelfMailers extends APIResource {
  /**
   * Creates a new Self-Mailer Profile. Provide either `insideTemplate` and
   * `outsideTemplate` IDs, or upload a 2-page `pdf`. If providing a `pdf`, the
   * request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.orderProfiles.selfMailers.create({
   *     size: '8.5x11_bifold',
   *   });
   * ```
   */
  create(
    params: SelfMailerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SelfMailerCreateResponse> {
    const { expand, ...body } = params;
    return this._client.post('/order_profiles/self_mailers', { query: { expand }, body, ...options });
  }

  /**
   * Retrieves the details of a specific Self-Mailer Profile.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.orderProfiles.selfMailers.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query?: SelfMailerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SelfMailerRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SelfMailerRetrieveResponse>;
  retrieve(
    id: string,
    query: SelfMailerRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SelfMailerRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/order_profiles/self_mailers/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Self-Mailer Profile. If providing a
   * `pdf`, the request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.orderProfiles.selfMailers.update('id', {
   *     size: '8.5x11_bifold',
   *   });
   * ```
   */
  update(
    id: string,
    params: SelfMailerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SelfMailerUpdateResponse> {
    const { expand, ...body } = params;
    return this._client.post(`/order_profiles/self_mailers/${id}`, { query: { expand }, body, ...options });
  }

  /**
   * Retrieves a list of Self-Mailer Profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const selfMailerListResponse of client.orderProfiles.selfMailers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: SelfMailerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SelfMailerListResponsesList, SelfMailerListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<SelfMailerListResponsesList, SelfMailerListResponse>;
  list(
    query: SelfMailerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SelfMailerListResponsesList, SelfMailerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/order_profiles/self_mailers', SelfMailerListResponsesList, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Self-Mailer Profile.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.orderProfiles.selfMailers.delete('id');
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<SelfMailerDeleteResponse> {
    return this._client.delete(`/order_profiles/self_mailers/${id}`, options);
  }
}

export class SelfMailerListResponsesList extends List<SelfMailerListResponse> {}

/**
 * Represents a Self-Mailer Profile resource.
 */
export interface SelfMailerCreateResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the inside. Required unless `pdf` is provided.
   */
  insideTemplate?: string;

  /**
   * Mailing class (cannot include extra services for self-mailers).
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
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * ID of the template for the outside. Required unless `pdf` is provided.
   */
  outsideTemplate?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

/**
 * Represents a Self-Mailer Profile resource.
 */
export interface SelfMailerRetrieveResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the inside. Required unless `pdf` is provided.
   */
  insideTemplate?: string;

  /**
   * Mailing class (cannot include extra services for self-mailers).
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
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * ID of the template for the outside. Required unless `pdf` is provided.
   */
  outsideTemplate?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

/**
 * Represents a Self-Mailer Profile resource.
 */
export interface SelfMailerUpdateResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the inside. Required unless `pdf` is provided.
   */
  insideTemplate?: string;

  /**
   * Mailing class (cannot include extra services for self-mailers).
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
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * ID of the template for the outside. Required unless `pdf` is provided.
   */
  outsideTemplate?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

/**
 * Represents a Self-Mailer Profile resource.
 */
export interface SelfMailerListResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the inside. Required unless `pdf` is provided.
   */
  insideTemplate?: string;

  /**
   * Mailing class (cannot include extra services for self-mailers).
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
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * ID of the template for the outside. Required unless `pdf` is provided.
   */
  outsideTemplate?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

export interface SelfMailerDeleteResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  deleted: true;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';
}

export interface SelfMailerCreateParams {
  /**
   * Body param: Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the inside. Required unless `pdf` is
   * provided.
   */
  insideTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services for self-mailers).
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
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * Body param: ID of the template for the outside. Required unless `pdf` is
   * provided.
   */
  outsideTemplate?: string;

  /**
   * Body param: A 2-page PDF file containing the self-mailer content (inside and
   * outside). Cannot be used with `insideTemplate`/`outsideTemplate`.
   */
  pdf?: string;
}

export interface SelfMailerRetrieveParams {
  /**
   * Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;
}

export interface SelfMailerUpdateParams {
  /**
   * Body param: Enum representing the supported self-mailer sizes.
   */
  size: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the inside. Required unless `pdf` is
   * provided.
   */
  insideTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services for self-mailers).
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
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: Record<string, unknown> | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: Record<string, string> | null;

  /**
   * Body param: ID of the template for the outside. Required unless `pdf` is
   * provided.
   */
  outsideTemplate?: string;

  /**
   * Body param: A 2-page PDF file containing the self-mailer content (inside and
   * outside). Cannot be used with `insideTemplate`/`outsideTemplate`.
   */
  pdf?: string;
}

export interface SelfMailerListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

SelfMailers.SelfMailerListResponsesList = SelfMailerListResponsesList;

export declare namespace SelfMailers {
  export {
    type SelfMailerCreateResponse as SelfMailerCreateResponse,
    type SelfMailerRetrieveResponse as SelfMailerRetrieveResponse,
    type SelfMailerUpdateResponse as SelfMailerUpdateResponse,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerDeleteResponse as SelfMailerDeleteResponse,
    SelfMailerListResponsesList as SelfMailerListResponsesList,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerRetrieveParams as SelfMailerRetrieveParams,
    type SelfMailerUpdateParams as SelfMailerUpdateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
