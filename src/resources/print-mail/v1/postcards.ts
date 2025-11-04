// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PostcardsAPI from '../../postcards';
import { PostcardsList } from '../../postcards';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { List, type ListParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Postcards extends APIResource {
  /**
   * Create a postcard. Note that you can supply one of the following:
   *
   * - HTML content for the front and back of the postcard
   * - A template ID for the front and back of the postcard
   * - A URL or file for a 2 page PDF where the first page is the front of the
   *   postcard and the second page is the back
   * - Upload the aforementioned PDF file via a multipart form upload request
   *
   * @example
   * ```ts
   * const postcard = await client.printMail.v1.postcards.create(
   *   {
   *     backHTML: '<html>Back</html>',
   *     frontHTML: '<html>Front</html>',
   *     size: '6x4',
   *     to: 'contact_456',
   *     from: 'contact_123',
   *   },
   * );
   * ```
   */
  create(body: PostcardCreateParams, options?: RequestOptions): APIPromise<PostcardsAPI.Postcard> {
    return this._client.post('/print-mail/v1/postcards', { body, ...options });
  }

  /**
   * Retrieve a postcard by ID.
   *
   * @example
   * ```ts
   * const postcard =
   *   await client.printMail.v1.postcards.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PostcardsAPI.Postcard> {
    return this._client.get(path`/print-mail/v1/postcards/${id}`, options);
  }

  /**
   * Get a list of postcards.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const postcard of client.printMail.v1.postcards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PostcardListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PostcardsList, PostcardsAPI.Postcard> {
    return this._client.getAPIList('/print-mail/v1/postcards', List<PostcardsAPI.Postcard>, {
      query,
      ...options,
    });
  }

  /**
   * Cancel a postcard by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const postcard = await client.printMail.v1.postcards.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PostcardsAPI.Postcard> {
    return this._client.delete(path`/print-mail/v1/postcards/${id}`, options);
  }

  /**
   * Retrieve a postcard preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.v1.postcards.retrieveURL('id');
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<PostcardRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/postcards/${id}/url`, options);
  }
}

export interface PostcardRetrieveURLResponse {
  /**
   * A unique ID prefixed with postcard\_
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export type PostcardCreateParams =
  | PostcardCreateParams.PostcardCreateWithHTML
  | PostcardCreateParams.PostcardCreateWithTemplate
  | PostcardCreateParams.PostcardCreateWithPdfurl
  | PostcardCreateParams.PostcardCreateWithPdfFile;

export declare namespace PostcardCreateParams {
  export interface PostcardCreateWithHTML {
    /**
     * The HTML content for the back of the postcard. You can supply _either_ this or
     * `backTemplate` but not both.
     */
    backHTML: string;

    /**
     * The HTML content for the front of the postcard. You can supply _either_ this or
     * `frontTemplate` but not both.
     */
    frontHTML: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: '6x4' | '9x6' | '11x6';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
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
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }

  export interface PostcardCreateWithTemplate {
    /**
     * The template ID for the back of the postcard. You can supply _either_ this or
     * `backHTML` but not both.
     */
    backTemplate: string;

    /**
     * The template ID for the front of the postcard. You can supply _either_ this or
     * `frontHTML` but not both.
     */
    frontTemplate: string;
  }

  export interface PostcardCreateWithPdfurl {
    /**
     * A URL pointing to a 2 page PDF file. The first page is the front of the postcard
     * and the second page is the back (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: '6x4' | '9x6' | '11x6';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
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
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }

  export interface PostcardCreateWithPdfFile {
    /**
     * A 2 page PDF file. The first page is the front of the postcard and the second
     * page is the back (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: '6x4' | '9x6' | '11x6';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
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
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }
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

export declare namespace Postcards {
  export {
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };
}

export { type PostcardsList };
