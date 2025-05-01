// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ContactsAPI from './contacts';
import * as Shared from './shared';
import { List, type ListParams } from '../pagination';

export class Postcards extends APIResource {
  /**
   * Create a postcard. Note that you can supply one of the following:
   *
   * - HTML content for the front and back of the postcard
   * - A template ID for the front and back of the postcard
   * - A URL or file for a 2 page PDF where the first page is the front of the
   *   postcard and the second page is the back
   * - Upload the aforementioned PDF file via a multipart form upload request
   */
  create(body: PostcardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Postcard> {
    return this._client.post('/postcards', { body, ...options });
  }

  /**
   * Retrieve a postcard by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Postcard> {
    return this._client.get(`/postcards/${id}`, options);
  }

  /**
   * Get a list of postcards.
   */
  list(query?: PostcardListParams, options?: Core.RequestOptions): Core.PagePromise<PostcardsList, Postcard>;
  list(options?: Core.RequestOptions): Core.PagePromise<PostcardsList, Postcard>;
  list(
    query: PostcardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PostcardsList, Postcard> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/postcards', PostcardsList, { query, ...options });
  }

  /**
   * Cancel a postcard by ID. Note that this operation cannot be undone.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Postcard> {
    return this._client.delete(`/postcards/${id}`, options);
  }

  /**
   * Retrieve a postcard preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   */
  url(id: string, options?: Core.RequestOptions): Core.APIPromise<PostcardURLResponse> {
    return this._client.get(`/postcards/${id}/url`, options);
  }
}

export class PostcardsList extends List<Postcard> {}

export interface Postcard {
  /**
   * A unique ID prefixed with postcard\_
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The mailing class of this order. This determines the speed and cost of delivery.
   * See `OrderMailingClass` for more details.
   */
  mailingClass:
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
   * Always `postcard`.
   */
  object: 'postcard';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported postcard sizes.
   */
  size: '6x4' | '9x6' | '11x6';

  /**
   * See `OrderStatus` for more details on the status of this order.
   */
  status: 'ready' | 'printing' | 'processed_for_delivery' | 'completed' | 'cancelled';

  /**
   * The recipient of this order. This will be provided even if you delete the
   * underlying contact.
   */
  to: ContactsAPI.Contact;

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * The cancellation details of this order. Populated if the order has been
   * cancelled.
   */
  cancellation?: Shared.Cancellation;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The contact information of the sender.
   */
  from?: ContactsAPI.Contact;

  /**
   * The last date that the IMB status was updated. See `imbStatus` for more details.
   */
  imbDate?: string;

  /**
   * The Intelligent Mail Barcode (IMB) status of this order. Only populated for
   * US-printed and US-destined orders. This is the most detailed way to track
   * non-express/certified orders.
   */
  imbStatus?: 'entered_mail_stream' | 'out_for_delivery' | 'returned_to_sender';

  /**
   * The most recent ZIP code of the USPS facility that the order has been processed
   * through. Only populated when an `imbStatus` is present.
   */
  imbZIPCode?: string;

  /**
   * These will be merged with the variables in the template or HTML you create this
   * order with. The keys in this object should match the variable names in the
   * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
   * PDFs uploaded with the order.
   */
  mergeVariables?: Record<string, unknown>;

  /**
   * See the section on Metadata.
   */
  metadata?: Record<string, unknown>;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * PostGrid renders a PDF preview for all orders. This should be inspected to
   * ensure that the order is correct before it is sent out because it shows what
   * will be printed and mailed to the recipient. Once the PDF preview is generated,
   * this field will be returned by all `GET` endpoints which produce this order.
   *
   * This URL is a signed link to the PDF preview. It will expire after a short
   * period of time. If you need to access this URL after it has expired, you can
   * regenerate it by calling the `GET` endpoint again.
   */
  url?: string;
}

export interface PostcardList {
  data: Array<Postcard>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface PostcardURLResponse {
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
    mergeVariables?: Record<string, unknown>;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

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
    mergeVariables?: Record<string, unknown>;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

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
    mergeVariables?: Record<string, unknown>;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

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

Postcards.PostcardsList = PostcardsList;

export declare namespace Postcards {
  export {
    type Postcard as Postcard,
    type PostcardList as PostcardList,
    type PostcardURLResponse as PostcardURLResponse,
    PostcardsList as PostcardsList,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };
}
