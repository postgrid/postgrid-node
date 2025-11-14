// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import * as PrintMailAPI from './print-mail';
import * as OrderProfilesSelfMailersAPI from './order-profiles/self-mailers';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SelfMailers extends APIResource {
  /**
   * Create a self-mailer. Note that you can supply one of the following:
   *
   * - HTML content for the inside and outside of the self-mailer
   * - A template ID for the inside and outside of the self-mailer
   * - A URL or file for a 2 page PDF where the first page is the outside of the
   *   self-mailer and the second page is the inside
   * - Upload the aforementioned PDF file via a multipart form upload request
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.create({
   *     from: 'contact_123',
   *     insideHTML: '<html>Inside</html>',
   *     outsideHTML: '<html>Outside</html>',
   *     size: '8.5x11_bifold',
   *     to: 'contact_456',
   *   });
   * ```
   */
  create(body: SelfMailerCreateParams, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.post('/print-mail/v1/self_mailers', { body, ...options });
  }

  /**
   * Retrieve a self-mailer by ID.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.get(path`/print-mail/v1/self_mailers/${id}`, options);
  }

  /**
   * Get a list of self-mailers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const selfMailer of client.printMail.selfMailers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SelfMailerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SelfMailersSkipLimit, SelfMailer> {
    return this._client.getAPIList('/print-mail/v1/self_mailers', SkipLimit<SelfMailer>, {
      query,
      ...options,
    });
  }

  /**
   * Cancel a self-mailer by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.delete(path`/print-mail/v1/self_mailers/${id}`, options);
  }

  /**
   * Retrieve a self-mailer preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.selfMailers.retrieveURL('id');
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<SelfMailerRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/self_mailers/${id}/url`, options);
  }
}

export type SelfMailersSkipLimit = SkipLimit<SelfMailer>;

export interface SelfMailer {
  /**
   * A unique ID prefixed with self*mailer*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * The contact information of the sender.
   */
  from: ContactsAPI.Contact;

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
   * Always `self_mailer`.
   */
  object: 'self_mailer';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: OrderProfilesSelfMailersAPI.SelfMailerSize;

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
  cancellation?: SelfMailer.Cancellation;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

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
  mergeVariables?: { [key: string]: unknown };

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

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

export namespace SelfMailer {
  /**
   * The cancellation details of this order. Populated if the order has been
   * cancelled.
   */
  export interface Cancellation {
    /**
     * The reason for the cancellation.
     */
    reason: 'user_initiated' | 'invalid_content' | 'invalid_order_mailing_class';

    /**
     * The user ID who cancelled the order.
     */
    cancelledByUser?: string;

    /**
     * An optional note provided by the user who cancelled the order.
     */
    note?: string;
  }
}

export interface SelfMailerRetrieveURLResponse {
  /**
   * A unique ID prefixed with self*mailer*
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export type SelfMailerCreateParams =
  | SelfMailerCreateParams.SelfMailerCreateWithHTML
  | SelfMailerCreateParams.SelfMailerCreateWithTemplate
  | SelfMailerCreateParams.SelfMailerCreateWithPdfurl
  | SelfMailerCreateParams.SelfMailerCreateWithPdfFile;

export declare namespace SelfMailerCreateParams {
  export interface SelfMailerCreateWithHTML {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * The HTML content for the inside of the self-mailer. You can supply _either_ this
     * or `insideTemplate` but not both.
     */
    insideHTML: string;

    /**
     * The HTML content for the outside of the self-mailer. You can supply _either_
     * this or `outsideTemplate` but not both.
     */
    outsideHTML: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

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

  export interface SelfMailerCreateWithTemplate {
    /**
     * The template ID for the inside of the self-mailer. You can supply _either_ this
     * or `insideHTML` but not both.
     */
    insideTemplate: string;

    /**
     * The template ID for the outside of the self-mailer. You can supply _either_ this
     * or `outsideHTML` but not both.
     */
    outsideTemplate: string;
  }

  export interface SelfMailerCreateWithPdfurl {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * A URL pointing to a 2 page PDF file. The first page is the inside of the
     * self-mailer and the second page is the outside (where the address will be
     * stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

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

  export interface SelfMailerCreateWithPdfFile {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * A 2 page PDF file. The first page is the inside of the self-mailer and the
     * second page is the outside (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

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

export interface SelfMailerListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace SelfMailers {
  export {
    type SelfMailer as SelfMailer,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailersSkipLimit as SelfMailersSkipLimit,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
