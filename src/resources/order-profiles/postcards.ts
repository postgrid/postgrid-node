// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { List, type ListParams } from '../../pagination';

export class Postcards extends APIResource {
  /**
   * Creates a new Postcard Profile. Provide either `frontTemplate` and
   * `backTemplate` IDs, or upload a 2-page `pdf`. If providing a `pdf`, the request
   * `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const postcard =
   *   await client.orderProfiles.postcards.create({
   *     size: '6x4',
   *   });
   * ```
   */
  create(
    params: PostcardCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostcardCreateResponse> {
    const { expand, ...body } = params;
    return this._client.post('/order_profiles/postcards', { query: { expand }, body, ...options });
  }

  /**
   * Retrieves the details of a specific Postcard Profile.
   *
   * @example
   * ```ts
   * const postcard =
   *   await client.orderProfiles.postcards.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query?: PostcardRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostcardRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PostcardRetrieveResponse>;
  retrieve(
    id: string,
    query: PostcardRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostcardRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/order_profiles/postcards/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Postcard Profile. If providing a `pdf`,
   * the request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const postcard =
   *   await client.orderProfiles.postcards.update('id');
   * ```
   */
  update(
    id: string,
    params: PostcardUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostcardUpdateResponse> {
    const { expand, ...body } = params;
    return this._client.post(`/order_profiles/postcards/${id}`, { query: { expand }, body, ...options });
  }

  /**
   * Retrieves a list of Postcard Profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const postcardListResponse of client.orderProfiles.postcards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: PostcardListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PostcardListResponsesList, PostcardListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<PostcardListResponsesList, PostcardListResponse>;
  list(
    query: PostcardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PostcardListResponsesList, PostcardListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/order_profiles/postcards', PostcardListResponsesList, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Postcard Profile.
   *
   * @example
   * ```ts
   * const postcard =
   *   await client.orderProfiles.postcards.delete('id');
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<PostcardDeleteResponse> {
    return this._client.delete(`/order_profiles/postcards/${id}`, options);
  }
}

export class PostcardListResponsesList extends List<PostcardListResponse> {}

export interface PostcardCreateResponse {
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
   * Always `postcard_profile`.
   */
  object: 'postcard_profile';

  /**
   * Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * ID of the template for the back side. Required unless `pdf` is provided.
   */
  backTemplate?: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the front side. Required unless `pdf` is provided.
   */
  frontTemplate?: string;

  /**
   * Mailing class (cannot include extra services like `certified` or `registered`
   * for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * A temporary, signed URL to view the uploaded PDF content, if any.
   */
  uploadedPDF?: string;
}

export interface PostcardRetrieveResponse {
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
   * Always `postcard_profile`.
   */
  object: 'postcard_profile';

  /**
   * Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * ID of the template for the back side. Required unless `pdf` is provided.
   */
  backTemplate?: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the front side. Required unless `pdf` is provided.
   */
  frontTemplate?: string;

  /**
   * Mailing class (cannot include extra services like `certified` or `registered`
   * for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * A temporary, signed URL to view the uploaded PDF content, if any.
   */
  uploadedPDF?: string;
}

export interface PostcardUpdateResponse {
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
   * Always `postcard_profile`.
   */
  object: 'postcard_profile';

  /**
   * Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * ID of the template for the back side. Required unless `pdf` is provided.
   */
  backTemplate?: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the front side. Required unless `pdf` is provided.
   */
  frontTemplate?: string;

  /**
   * Mailing class (cannot include extra services like `certified` or `registered`
   * for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * A temporary, signed URL to view the uploaded PDF content, if any.
   */
  uploadedPDF?: string;
}

export interface PostcardListResponse {
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
   * Always `postcard_profile`.
   */
  object: 'postcard_profile';

  /**
   * Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * ID of the template for the back side. Required unless `pdf` is provided.
   */
  backTemplate?: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the front side. Required unless `pdf` is provided.
   */
  frontTemplate?: string;

  /**
   * Mailing class (cannot include extra services like `certified` or `registered`
   * for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * A temporary, signed URL to view the uploaded PDF content, if any.
   */
  uploadedPDF?: string;
}

export interface PostcardDeleteResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  deleted: true;

  /**
   * Always `postcard_profile`.
   */
  object: 'postcard_profile';
}

export interface PostcardCreateParams {
  /**
   * Body param: Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: ID of the template for the back side. Required unless `pdf` is
   * provided.
   */
  backTemplate?: string;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the front side. Required unless `pdf` is
   * provided.
   */
  frontTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services like `certified` or
   * `registered` for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: A 2-page PDF file containing the postcard content (front and back).
   * Cannot be used with `frontTemplate`/`backTemplate`.
   */
  pdf?: string;
}

export interface PostcardRetrieveParams {
  /**
   * Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;
}

export interface PostcardUpdateParams {
  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: ID of the template for the back side. Required unless `pdf` is
   * provided.
   */
  backTemplate?: string;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the front side. Required unless `pdf` is
   * provided.
   */
  frontTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services like `certified` or
   * `registered` for postcards, though).
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
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: A 2-page PDF file containing the postcard content (front and back).
   * Cannot be used with `frontTemplate`/`backTemplate`.
   */
  pdf?: string;
}

export interface PostcardListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Postcards.PostcardListResponsesList = PostcardListResponsesList;

export declare namespace Postcards {
  export {
    type PostcardCreateResponse as PostcardCreateResponse,
    type PostcardRetrieveResponse as PostcardRetrieveResponse,
    type PostcardUpdateResponse as PostcardUpdateResponse,
    type PostcardListResponse as PostcardListResponse,
    type PostcardDeleteResponse as PostcardDeleteResponse,
    PostcardListResponsesList as PostcardListResponsesList,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardRetrieveParams as PostcardRetrieveParams,
    type PostcardUpdateParams as PostcardUpdateParams,
    type PostcardListParams as PostcardListParams,
  };
}
