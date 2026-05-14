// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 *  Snap packs are pressure-sealed mailers that resemble official documents
 *  and encourage higher open rates. They do not require envelopes and are
 *  opened by tearing along perforated edges. The sealed design keeps contents
 *  hidden until opened, making snap packs ideal for sensitive or important
 *  documents such as contracts, forms, or notices.
 *
 *  You can request access to this feature by reaching out to
 *  support@postgrid.com
 */
export class SnapPacks extends APIResource {
  /**
   * Create a snap pack. You can supply one of the following:
   *
   * - HTML content for the inside and outside of the snap pack
   * - Template IDs for the inside and outside of the snap pack
   * - A URL or file upload for a two-page PDF that matches the snap pack layout
   *
   * @example
   * ```ts
   * const snapPack = await client.printMail.snapPacks.create({
   *   from: 'contact_123',
   *   insideHTML: '<html>Inside</html>',
   *   outsideHTML: '<html>Outside</html>',
   *   size: '8.5x11_bifold_v',
   *   to: 'contact_456',
   * });
   * ```
   */
  create(body: SnapPackCreateParams, options?: RequestOptions): APIPromise<SnapPackCreateResponse> {
    return this._client.post('/print-mail/v1/snap_packs', { body, ...options });
  }

  /**
   * Retrieve a snap pack by ID.
   *
   * @example
   * ```ts
   * const snapPack = await client.printMail.snapPacks.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SnapPackRetrieveResponse> {
    return this._client.get(path`/print-mail/v1/snap_packs/${id}`, options);
  }

  /**
   * Get a list of snap packs.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const snapPackListResponse of client.printMail.snapPacks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SnapPackListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SnapPackListResponsesSkipLimit, SnapPackListResponse> {
    return this._client.getAPIList('/print-mail/v1/snap_packs', SkipLimit<SnapPackListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Cancel a snap pack by ID. Note that this operation cannot be undone and that
   * only snap packs with a status of `ready` can be cancelled.
   *
   * @example
   * ```ts
   * const snapPack = await client.printMail.snapPacks.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SnapPackDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/snap_packs/${id}`, options);
  }

  /**
   * Progresses a snap pack's `status` to the next stage. This is only available in
   * test mode and can be used to simulate how a live order would progress through
   * the different statuses.
   *
   * Note: this will fail with an `invalid_progression_error` if the status is one of
   * `completed` or `cancelled`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.snapPacks.progressions('id');
   * ```
   */
  progressions(id: string, options?: RequestOptions): APIPromise<SnapPackProgressionsResponse> {
    return this._client.post(path`/print-mail/v1/snap_packs/${id}/progressions`, options);
  }

  /**
   * Provides sizes and mailing classes available for the destination.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.snapPacks.retrieveCapabilities({
   *     returnCountryCode: 'returnCountryCode',
   *   });
   * ```
   */
  retrieveCapabilities(
    query: SnapPackRetrieveCapabilitiesParams,
    options?: RequestOptions,
  ): APIPromise<SnapPackRetrieveCapabilitiesResponse> {
    return this._client.get('/print-mail/v1/snap_packs/capabilities', { query, ...options });
  }
}

export type SnapPackListResponsesSkipLimit = SkipLimit<SnapPackListResponse>;

export interface SnapPackCreateResponse {
  /**
   * A unique ID prefixed with snap*pack*
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
   * Always `snap_pack`.
   */
  object: 'snap_pack';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported snap pack sizes.
   */
  size: '8.5x11_bifold_v';

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
  cancellation?: SnapPackCreateResponse.Cancellation;

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
   * The HTML content for the inside of the snap pack, when provided instead of a
   * template or PDF.
   */
  insideHTML?: string;

  /**
   * The template ID for the inside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  insideTemplate?: string;

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
   * The HTML content for the outside of the snap pack, when provided instead of a
   * template or PDF.
   */
  outsideHTML?: string;

  /**
   * The template ID for the outside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  outsideTemplate?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * A signed URL to the uploaded PDF provided at creation time, if a PDF was
   * supplied.
   */
  uploadedPDF?: string;

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

export namespace SnapPackCreateResponse {
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

export interface SnapPackRetrieveResponse {
  /**
   * A unique ID prefixed with snap*pack*
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
   * Always `snap_pack`.
   */
  object: 'snap_pack';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported snap pack sizes.
   */
  size: '8.5x11_bifold_v';

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
  cancellation?: SnapPackRetrieveResponse.Cancellation;

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
   * The HTML content for the inside of the snap pack, when provided instead of a
   * template or PDF.
   */
  insideHTML?: string;

  /**
   * The template ID for the inside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  insideTemplate?: string;

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
   * The HTML content for the outside of the snap pack, when provided instead of a
   * template or PDF.
   */
  outsideHTML?: string;

  /**
   * The template ID for the outside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  outsideTemplate?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * A signed URL to the uploaded PDF provided at creation time, if a PDF was
   * supplied.
   */
  uploadedPDF?: string;

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

export namespace SnapPackRetrieveResponse {
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

export interface SnapPackListResponse {
  /**
   * A unique ID prefixed with snap*pack*
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
   * Always `snap_pack`.
   */
  object: 'snap_pack';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported snap pack sizes.
   */
  size: '8.5x11_bifold_v';

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
  cancellation?: SnapPackListResponse.Cancellation;

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
   * The HTML content for the inside of the snap pack, when provided instead of a
   * template or PDF.
   */
  insideHTML?: string;

  /**
   * The template ID for the inside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  insideTemplate?: string;

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
   * The HTML content for the outside of the snap pack, when provided instead of a
   * template or PDF.
   */
  outsideHTML?: string;

  /**
   * The template ID for the outside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  outsideTemplate?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * A signed URL to the uploaded PDF provided at creation time, if a PDF was
   * supplied.
   */
  uploadedPDF?: string;

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

export namespace SnapPackListResponse {
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

export interface SnapPackDeleteResponse {
  /**
   * A unique ID prefixed with snap*pack*
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
   * Always `snap_pack`.
   */
  object: 'snap_pack';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported snap pack sizes.
   */
  size: '8.5x11_bifold_v';

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
  cancellation?: SnapPackDeleteResponse.Cancellation;

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
   * The HTML content for the inside of the snap pack, when provided instead of a
   * template or PDF.
   */
  insideHTML?: string;

  /**
   * The template ID for the inside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  insideTemplate?: string;

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
   * The HTML content for the outside of the snap pack, when provided instead of a
   * template or PDF.
   */
  outsideHTML?: string;

  /**
   * The template ID for the outside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  outsideTemplate?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * A signed URL to the uploaded PDF provided at creation time, if a PDF was
   * supplied.
   */
  uploadedPDF?: string;

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

export namespace SnapPackDeleteResponse {
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

export interface SnapPackProgressionsResponse {
  /**
   * A unique ID prefixed with snap*pack*
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
   * Always `snap_pack`.
   */
  object: 'snap_pack';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported snap pack sizes.
   */
  size: '8.5x11_bifold_v';

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
  cancellation?: SnapPackProgressionsResponse.Cancellation;

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
   * The HTML content for the inside of the snap pack, when provided instead of a
   * template or PDF.
   */
  insideHTML?: string;

  /**
   * The template ID for the inside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  insideTemplate?: string;

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
   * The HTML content for the outside of the snap pack, when provided instead of a
   * template or PDF.
   */
  outsideHTML?: string;

  /**
   * The template ID for the outside of the snap pack, when provided instead of HTML
   * or PDF.
   */
  outsideTemplate?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * A signed URL to the uploaded PDF provided at creation time, if a PDF was
   * supplied.
   */
  uploadedPDF?: string;

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

export namespace SnapPackProgressionsResponse {
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

export interface SnapPackRetrieveCapabilitiesResponse {
  mailingClasses: Array<
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
    | 'au_post_second_class'
  >;

  sizes: Array<'8.5x11_bifold_v'>;
}

export type SnapPackCreateParams =
  | SnapPackCreateParams.SnapPackCreateWithHTML
  | SnapPackCreateParams.SnapPackCreateWithTemplate
  | SnapPackCreateParams.SnapPackCreateWithPdf;

export declare namespace SnapPackCreateParams {
  export interface SnapPackCreateWithHTML {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to` contact.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * The HTML content for the inside of the snap pack. You can supply _either_ this
     * or `insideTemplate` but not both.
     */
    insideHTML: string;

    /**
     * The HTML content for the outside of the snap pack. You can supply _either_ this
     * or `outsideTemplate` but not both.
     */
    outsideHTML: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size: '8.5x11_bifold_v';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

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

  export interface SnapPackCreateWithTemplate {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to` contact.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * The template ID for the inside of the snap pack. You can supply _either_ this or
     * `insideHTML` but not both.
     */
    insideTemplate: string;

    /**
     * The template ID for the outside of the snap pack. You can supply _either_ this
     * or `outsideHTML` but not both.
     */
    outsideTemplate: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size: '8.5x11_bifold_v';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

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

  export interface SnapPackCreateWithPdf {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to` contact.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * A URL or a multipart-uploaded two-page PDF (first page is the outside, second
     * page is the inside) that matches the selected snap pack size.
     */
    pdf: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size: '8.5x11_bifold_v';

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

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

export interface SnapPackListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface SnapPackRetrieveCapabilitiesParams {
  /**
   * The country code where mail may be returned to.
   */
  returnCountryCode: string;

  /**
   * The country code of where the snap pack will be sent to. One of `mailingList` or
   * `destinationCountryCode` must be supplied but not both.
   */
  destinationCountryCode?: string;

  /**
   * Sources destination countries from the provided mailing list. One of
   * `mailingList` or `destinationCountryCode` must be supplied but not both.
   */
  mailingList?: string;
}

export declare namespace SnapPacks {
  export {
    type SnapPackCreateResponse as SnapPackCreateResponse,
    type SnapPackRetrieveResponse as SnapPackRetrieveResponse,
    type SnapPackListResponse as SnapPackListResponse,
    type SnapPackDeleteResponse as SnapPackDeleteResponse,
    type SnapPackProgressionsResponse as SnapPackProgressionsResponse,
    type SnapPackRetrieveCapabilitiesResponse as SnapPackRetrieveCapabilitiesResponse,
    type SnapPackListResponsesSkipLimit as SnapPackListResponsesSkipLimit,
    type SnapPackCreateParams as SnapPackCreateParams,
    type SnapPackListParams as SnapPackListParams,
    type SnapPackRetrieveCapabilitiesParams as SnapPackRetrieveCapabilitiesParams,
  };
}
