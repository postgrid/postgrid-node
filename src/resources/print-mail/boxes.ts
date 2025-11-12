// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import * as ContactsAPI from './contacts';
import * as PrintMailAPI from './print-mail';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Boxes extends APIResource {
  /**
   * This endpoint allows you to create a box containing up to 100 cheques. A Box is
   * mailed to a single destination.
   *
   * To create a box. You must specify:
   *
   * - `to`: The recipient (contact or contact ID)
   * - `from`: The sender (contact or contact ID)
   * - `cheques`: An array of cheques to go in the box
   *
   * For each cheque You must specify:
   *
   * - `to`: The recipient (contact or contact ID)
   * - `from`: The sender (contact or contact ID)
   * - `bankAccount`: The bank account ID
   * - `amount`: The amount to be sent
   * - `number`: The cheque number
   *
   * @example
   * ```ts
   * const box = await client.printMail.boxes.create({
   *   cheques: [
   *     {
   *       from: 'contact_456',
   *       to: 'contact_123',
   *       bankAccount: 'bank_abc',
   *       amount: 5000,
   *       number: 1042,
   *     },
   *   ],
   *   from: 'contact_456',
   *   to: 'contact_123',
   * });
   * ```
   */
  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<Box> {
    return this._client.post('/print-mail/v1/boxes', { body, ...options });
  }

  /**
   * Retrieve a box by ID.
   *
   * @example
   * ```ts
   * const box = await client.printMail.boxes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Box> {
    return this._client.get(path`/print-mail/v1/boxes/${id}`, options);
  }

  /**
   * List all boxes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const box of client.printMail.boxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BoxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BoxesSkipLimit, Box> {
    return this._client.getAPIList('/print-mail/v1/boxes', SkipLimit<Box>, { query, ...options });
  }

  /**
   * Cancel a box by ID (cannot be undone).
   *
   * @example
   * ```ts
   * const box = await client.printMail.boxes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Box> {
    return this._client.delete(path`/print-mail/v1/boxes/${id}`, options);
  }
}

export type BoxesSkipLimit = SkipLimit<Box>;

export interface Box {
  /**
   * A unique ID prefixed with box\_
   */
  id: string;

  /**
   * The cheques inside this box (in read mode).
   */
  cheques: Array<Box.Cheque>;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * The contact of the 'from' field in read mode should be a fully expanded Contact.
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
  mailingClass: OrderMailingClass;

  /**
   * Always "box".
   */
  object: 'box';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * See `OrderStatus` for more details on the status of this order.
   */
  status: OrderStatus;

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
  cancellation?: Cancellation;

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
  imbStatus?: OrderImbStatus;

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

export namespace Box {
  /**
   * Model representing a single cheque in "read" mode.
   *
   * - The "from" and "to" should be fully expanded Contact objects once created.
   */
  export interface Cheque extends BoxesAPI.BoxChequeBase {
    from: ContactsAPI.Contact;

    to: ContactsAPI.Contact;
  }
}

/**
 * Base fields that both reading and creating a cheque might share.
 */
export interface BoxChequeBase {
  /**
   * The amount on the cheque.
   */
  amount: number;

  /**
   * The bank account (ID or reference) from which the cheque amount is drawn.
   */
  bankAccount: string;

  /**
   * The cheque number.
   */
  number: number;

  /**
   * A URL to a logo for the cheque (optional).
   */
  logoURL?: string;

  /**
   * The memo text on the cheque (optional).
   */
  memo?: string;

  /**
   * A set of dynamic merge variables for customizing the cheque or accompanying
   * documents (optional).
   */
  mergeVariables?: { [key: string]: unknown };

  /**
   * An optional message template to be printed on or with the cheque.
   */
  messageTemplate?: string;
}

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

export type OrderImbStatus = 'entered_mail_stream' | 'out_for_delivery' | 'returned_to_sender';

export type OrderMailingClass =
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

export type OrderStatus = 'ready' | 'printing' | 'processed_for_delivery' | 'completed' | 'cancelled';

export interface BoxCreateParams {
  /**
   * The cheques to be mailed in the box. Only 100 cheques can be included in a box
   * at a time.
   */
  cheques: Array<BoxCreateParams.Cheque>;

  /**
   * The 'from' (sender) of the entire box. Accepts inline ContactCreate or a
   * contactID.
   */
  from: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

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
  mailingClass?: OrderMailingClass;

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

export namespace BoxCreateParams {
  /**
   * Model representing a single cheque in "create" mode.
   *
   * - The "from" and "to" can be ContactCreate objects (inline) or string
   *   contactIDs.
   */
  export interface Cheque extends BoxesAPI.BoxChequeBase {
    from: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

    to: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;
  }
}

export interface BoxListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace Boxes {
  export {
    type Box as Box,
    type BoxChequeBase as BoxChequeBase,
    type Cancellation as Cancellation,
    type OrderImbStatus as OrderImbStatus,
    type OrderMailingClass as OrderMailingClass,
    type OrderStatus as OrderStatus,
    type BoxesSkipLimit as BoxesSkipLimit,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
  };
}
