// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { List, type ListParams } from '../../pagination';

export class Letters extends APIResource {
  /**
   * Creates a new Letter Profile. You must provide either a `template` ID or upload
   * a `pdf` file for the content. If providing PDF files (`pdf` or
   * `attachedPDFFile`), the request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const letter = await client.orderProfiles.letters.create({
   *   size: 'us_letter',
   *   color: true,
   *   description: 'Monthly Newsletter Profile',
   *   mailingClass: 'first_class',
   *   mergeVariables: { salutation: 'Valued Customer' },
   *   metadata: { campaign: 'Q1 Newsletter' },
   *   template: 'template_abc',
   * });
   * ```
   */
  create(params: LetterCreateParams, options?: Core.RequestOptions): Core.APIPromise<LetterCreateResponse> {
    const { expand, ...body } = params;
    return this._client.post('/order_profiles/letters', { query: { expand }, body, ...options });
  }

  /**
   * Retrieves the details of a specific Letter Profile by its ID.
   *
   * @example
   * ```ts
   * const letter = await client.orderProfiles.letters.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query?: LetterRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LetterRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LetterRetrieveResponse>;
  retrieve(
    id: string,
    query: LetterRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LetterRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/order_profiles/letters/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Letter Profile. Only the fields provided
   * in the request body will be updated. If providing PDF files (`pdf` or
   * `attachedPDFFile`), the request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const letter = await client.orderProfiles.letters.update(
   *   'id',
   *   { description: 'Updated Newsletter Profile' },
   * );
   * ```
   */
  update(
    id: string,
    params: LetterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LetterUpdateResponse> {
    const { expand, ...body } = params;
    return this._client.post(`/order_profiles/letters/${id}`, { query: { expand }, body, ...options });
  }

  /**
   * Retrieves a list of Letter Profiles. The profiles are returned sorted by
   * creation date, with the most recent appearing first.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const letterListResponse of client.orderProfiles.letters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: LetterListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LetterListResponsesList, LetterListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<LetterListResponsesList, LetterListResponse>;
  list(
    query: LetterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LetterListResponsesList, LetterListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/order_profiles/letters', LetterListResponsesList, { query, ...options });
  }

  /**
   * Deletes a Letter Profile. This action cannot be undone. Orders previously
   * created using this profile are not affected.
   *
   * @example
   * ```ts
   * const letter = await client.orderProfiles.letters.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<LetterDeleteResponse> {
    return this._client.delete(`/order_profiles/letters/${id}`, options);
  }
}

export class LetterListResponsesList extends List<LetterListResponse> {}

export interface LetterCreateResponse {
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
   * Always `letter_profile`.
   */
  object: 'letter_profile';

  /**
   * Enum representing the supported letter sizes.
   */
  size: 'us_letter' | 'a4';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Model representing an attached PDF.
   */
  attachedPDF?: LetterCreateResponse.AttachedPdf;

  /**
   * Specifies whether to print in color (true) or black and white (false).
   */
  color?: boolean;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Mailing class.
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
   * Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * ID of a template to use for the letter content. Cannot be used with `pdf`.
   */
  template?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

export namespace LetterCreateResponse {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterRetrieveResponse {
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
   * Always `letter_profile`.
   */
  object: 'letter_profile';

  /**
   * Enum representing the supported letter sizes.
   */
  size: 'us_letter' | 'a4';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Model representing an attached PDF.
   */
  attachedPDF?: LetterRetrieveResponse.AttachedPdf;

  /**
   * Specifies whether to print in color (true) or black and white (false).
   */
  color?: boolean;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Mailing class.
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
   * Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * ID of a template to use for the letter content. Cannot be used with `pdf`.
   */
  template?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

export namespace LetterRetrieveResponse {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterUpdateResponse {
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
   * Always `letter_profile`.
   */
  object: 'letter_profile';

  /**
   * Enum representing the supported letter sizes.
   */
  size: 'us_letter' | 'a4';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Model representing an attached PDF.
   */
  attachedPDF?: LetterUpdateResponse.AttachedPdf;

  /**
   * Specifies whether to print in color (true) or black and white (false).
   */
  color?: boolean;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Mailing class.
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
   * Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * ID of a template to use for the letter content. Cannot be used with `pdf`.
   */
  template?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

export namespace LetterUpdateResponse {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterListResponse {
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
   * Always `letter_profile`.
   */
  object: 'letter_profile';

  /**
   * Enum representing the supported letter sizes.
   */
  size: 'us_letter' | 'a4';

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Model representing an attached PDF.
   */
  attachedPDF?: LetterListResponse.AttachedPdf;

  /**
   * Specifies whether to print in color (true) or black and white (false).
   */
  color?: boolean;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Mailing class.
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
   * Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * ID of a template to use for the letter content. Cannot be used with `pdf`.
   */
  template?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

export namespace LetterListResponse {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterDeleteResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  deleted: true;

  /**
   * Always `letter_profile`.
   */
  object: 'letter_profile';
}

export interface LetterCreateParams {
  /**
   * Body param: Enum representing the supported letter sizes.
   */
  size: 'us_letter' | 'a4';

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Body param: Model representing an attached PDF.
   */
  attachedPDF?: LetterCreateParams.AttachedPdf;

  /**
   * Body param: Specifies whether to print in color (true) or black and white
   * (false).
   */
  color?: boolean;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * Body param: ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Body param: Mailing class.
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
   * Body param: A PDF file containing the letter content. Cannot be used with
   * `template`.
   */
  pdf?: string;

  /**
   * Body param: Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * Body param: ID of a return envelope to include.
   */
  returnEnvelope?: string;

  /**
   * Body param: ID of a template to use for the letter content. Cannot be used with
   * `pdf`.
   */
  template?: string;
}

export namespace LetterCreateParams {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterRetrieveParams {
  /**
   * Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;
}

export interface LetterUpdateParams {
  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: Enum representing the placement of the address on the letter.
   */
  addressPlacement?: 'top_first_page' | 'insert_blank_page';

  /**
   * Body param: Model representing an attached PDF.
   */
  attachedPDF?: LetterUpdateParams.AttachedPdf;

  /**
   * Body param: Specifies whether to print in color (true) or black and white
   * (false).
   */
  color?: boolean;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: Specifies whether to print on both sides of the paper.
   */
  doubleSided?: boolean;

  /**
   * Body param: ID of a custom envelope to use.
   */
  envelope?: string;

  /**
   * Body param: Mailing class.
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
   * Body param: A PDF file containing the letter content. Cannot be used with
   * `template`.
   */
  pdf?: string;

  /**
   * Body param: Specifies which page number should be perforated (if any).
   */
  perforatedPage?: 1;

  /**
   * Body param: ID of a return envelope to include.
   */
  returnEnvelope?: string;

  /**
   * Body param: ID of a template to use for the letter content. Cannot be used with
   * `pdf`.
   */
  template?: string;
}

export namespace LetterUpdateParams {
  /**
   * Model representing an attached PDF.
   */
  export interface AttachedPdf {
    /**
     * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
     */
    file: string;

    /**
     * Enum representing the placement of the attached PDF.
     */
    placement: 'before_template' | 'after_template';
  }
}

export interface LetterListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Letters.LetterListResponsesList = LetterListResponsesList;

export declare namespace Letters {
  export {
    type LetterCreateResponse as LetterCreateResponse,
    type LetterRetrieveResponse as LetterRetrieveResponse,
    type LetterUpdateResponse as LetterUpdateResponse,
    type LetterListResponse as LetterListResponse,
    type LetterDeleteResponse as LetterDeleteResponse,
    LetterListResponsesList as LetterListResponsesList,
    type LetterCreateParams as LetterCreateParams,
    type LetterRetrieveParams as LetterRetrieveParams,
    type LetterUpdateParams as LetterUpdateParams,
    type LetterListParams as LetterListParams,
  };
}
