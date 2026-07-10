// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 *  Create and manage cheque orders.
 */
export class Cheques extends APIResource {
  /**
   * Create a cheque.
   *
   * This endpoint allows you to create a new cheque with the specified details.
   *
   * If you would like to create a digitalOnly cheque, the digitalOnly object with
   * the watermark will need to be passed in. Feature is available on request, e-mail
   * support@postgrid.com for access. Digital-only cheques are not sent out — they
   * are created with a `cancelled` status and a cancellation reason of
   * `digital_only`.
   *
   * Example request body:
   *
   * ```json
   * {
   *   "from": "contact_123",
   *   "bankAccount": "bank_123",
   *   "amount": 1000,
   *   "currencyCode": "USD",
   *   "number": 123456,
   *   "size": "us_letter",
   *   "digitalOnly": {
   *     "watermark": "VOID"
   *   }
   * }
   * ```
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.cheques.create({
   *   amount: 1000,
   *   bankAccount: 'bank_123',
   *   from: 'contact_123',
   *   to: 'contact_123',
   *   currencyCode: 'USD',
   *   number: 123456,
   *   size: 'us_letter',
   * });
   * ```
   */
  create(params: ChequeCreateParams, options?: RequestOptions): APIPromise<Cheque> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post(
      '/print-mail/v1/cheques',
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([
            { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }

  /**
   * Retrieve a cheque by ID.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.cheques.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.get(path`/print-mail/v1/cheques/${id}`, options);
  }

  /**
   * Get a list of cheques.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cheque of client.printMail.cheques.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChequeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ChequesSkipLimit, Cheque> {
    return this._client.getAPIList('/print-mail/v1/cheques', SkipLimit<Cheque>, { query, ...options });
  }

  /**
   * Cancel a cheque by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.cheques.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.delete(path`/print-mail/v1/cheques/${id}`, options);
  }

  /**
   * Cancel a cheque by ID with a note. Note that this operation cannot be undone and
   * that only cheques with a status of `ready` can be cancelled.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.cheques.cancel('id', {
   *   note: 'Cancelling this cheque',
   * });
   * ```
   */
  cancel(id: string, body: ChequeCancelParams, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.post(path`/print-mail/v1/cheques/${id}/cancellation`, { body, ...options });
  }

  /**
   * Progresses a cheque's `status` to the next stage. This is only available in test
   * mode and can be used to simulate how a live order would progress through the
   * different statuses.
   *
   * Note: this will fail with an `invalid_progression_error` if the status is one of
   * `completed` or `cancelled`.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.cheques.progress(
   *   'id',
   * );
   * ```
   */
  progress(id: string, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.post(path`/print-mail/v1/cheques/${id}/progressions`, options);
  }

  /**
   * Retrieve a cheque preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response = await client.printMail.cheques.retrieveURL(
   *   'id',
   * );
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<ChequeRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/cheques/${id}/url`, options);
  }

  /**
   * Retrieve the deposit-ready PDF for a digital-only cheque. The endpoint can only
   * be called by users with 'Admin' role. In test mode, the preview PDF of the
   * digitalOnly cheque and the deposit-ready PDF are the same. In live mode, the
   * deposit-ready will have the full account number.
   *
   * @example
   * ```ts
   * const cheque =
   *   await client.printMail.cheques.retrieveWithDepositReadyPdf(
   *     'id',
   *   );
   * ```
   */
  retrieveWithDepositReadyPdf(id: string, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.get(path`/print-mail/v1/cheques/${id}/with_deposit_ready_pdf`, options);
  }
}

export type ChequesSkipLimit = SkipLimit<Cheque>;

export interface Cheque {
  /**
   * A unique ID prefixed with cheque\_
   */
  id: string;

  /**
   * The amount of the cheque in cents.
   */
  amount: number;

  /**
   * The bank account (ID) associated with the cheque.
   */
  bankAccount: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * The currency code of the cheque. This can be `USD` even if drawing from a
   * Canadian bank account and vice versa. Defaults to the currency of the bank
   * account country if not otherwise specified.
   */
  currencyCode: 'USD' | 'CAD';

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
   * Always `cheque`.
   */
  object: 'cheque';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported cheque sizes.
   */
  size: ChequeSize;

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
  cancellation?: Cheque.Cancellation;

  /**
   * A link to the deposit-ready PDF for a digital-only cheque, returned if requested
   * and available.
   */
  depositReadyPDFURL?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The digitalOnly object contains data for digital-only cheques. A watermark must
   * be provided.
   */
  digitalOnly?: DigitalOnly;

  /**
   * The envelope of the cheque. If a custom envelope ID is not specified, defaults
   * to `standard`.
   */
  envelope?: 'standard' | (string & {});

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
   * The raw HTML content for a letter attached to the cheque, if any. You can supply
   * _either_ this, `letterTemplate`, or `letterPDF`, but not more than one.
   */
  letterHTML?: string;

  /**
   * A Template ID for the letter attached to the cheque, if any.
   */
  letterTemplate?: string;

  /**
   * A signed URL pointing to the original PDF of the letter attached to the cheque,
   * if any.
   */
  letterUploadedPDF?: string;

  /**
   * An optional logo URL for the cheque. This will be placed next to the recipient
   * address at the top left corner of the cheque. This needs to be a public link to
   * an image file (e.g. a PNG or JPEG file).
   */
  logo?: string;

  /**
   * The memo of the cheque.
   */
  memo?: string;

  /**
   * These will be merged with the variables in the template or HTML you create this
   * order with. The keys in this object should match the variable names in the
   * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
   * PDFs uploaded with the order.
   */
  mergeVariables?: { [key: string]: unknown };

  /**
   * The message of the cheque.
   */
  message?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The number of the cheque. If you don't provide this, it will automatically be
   * set to an incrementing number starting from 1 across your entire account,
   * ensuring that every cheque has a unique number.
   */
  number?: number;

  /**
   * The return envelope (ID) sent out with the cheque, if any. Note that you must
   * first order return envelopes using the Return Envelopes API.
   */
  returnEnvelope?: string;

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

export namespace Cheque {
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

/**
 * Enum representing the supported cheque sizes.
 */
export type ChequeSize = 'us_letter' | 'us_legal';

export interface DigitalOnly {
  /**
   * Text to be displayed as a watermark on the digital cheque.
   */
  watermark: string;

  /**
   * The payee of the digital cheque. Supplying `payee.name` lets you create a
   * digital-only cheque without a `to` contact — when it is provided, the top-level
   * `to` field may be omitted.
   */
  payee?: DigitalOnly.Payee;
}

export namespace DigitalOnly {
  /**
   * The payee of the digital cheque. Supplying `payee.name` lets you create a
   * digital-only cheque without a `to` contact — when it is provided, the top-level
   * `to` field may be omitted.
   */
  export interface Payee {
    /**
     * The name of the payee.
     */
    name: string;
  }
}

export interface ChequeRetrieveURLResponse {
  /**
   * A unique ID prefixed with cheque\_
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export interface ChequeCreateParams {
  /**
   * Body param: The amount of the cheque in cents.
   */
  amount: number;

  /**
   * Body param: The bank account (ID) associated with the cheque.
   */
  bankAccount: string;

  /**
   * Body param: A contact provided in one of two ways:
   *
   * - an **inline contact body** with the same fields you would use to create a
   *   contact (there is no need to create the contact first), or
   * - the **ID of an existing contact** (e.g. `contact_123`).
   *
   * You never send the full stored contact object (with `id`, `object`,
   * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
   * responses.
   */
  from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

  /**
   * Body param: A contact provided in one of two ways:
   *
   * - an **inline contact body** with the same fields you would use to create a
   *   contact (there is no need to create the contact first), or
   * - the **ID of an existing contact** (e.g. `contact_123`).
   *
   * You never send the full stored contact object (with `id`, `object`,
   * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
   * responses.
   */
  to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

  /**
   * Body param: The currency code of the cheque. This will be set to the default
   * currency of the bank account (`USD` for US bank accounts and `CAD` for Canadian
   * bank accounts) if not provided. You can set this value to `USD` if you want to
   * draw USD from a Canadian bank account or vice versa.
   */
  currencyCode?: 'USD' | 'CAD';

  /**
   * Body param: An optional string describing this resource. Will be visible in the
   * API and the dashboard.
   */
  description?: string;

  /**
   * Body param: The digitalOnly object contains data for digital-only cheques. A
   * watermark must be provided.
   */
  digitalOnly?: DigitalOnly;

  /**
   * Body param: The envelope of the cheque. If a custom envelope ID is not
   * specified, defaults to `standard`.
   */
  envelope?: 'standard' | (string & {});

  /**
   * Body param: The raw HTML content for a letter attached to the cheque, if any.
   * You can supply _either_ this, `letterTemplate`, or `letterPDF`, but not more
   * than one.
   */
  letterHTML?: string;

  /**
   * Body param: A URL pointing to a PDF for the letter attached to the cheque, or
   * the PDF file itself when uploaded via a multipart form request. You can supply
   * _either_ this, `letterHTML`, or `letterTemplate`, but not more than one.
   */
  letterPDF?: string | Uploadable;

  /**
   * Body param: Settings for a letter attached to a cheque.
   */
  letterSettings?: ChequeCreateParams.LetterSettings;

  /**
   * Body param: A Template ID for the letter attached to the cheque, if any.
   */
  letterTemplate?: string;

  /**
   * Body param: An optional logo URL for the cheque. This will be placed next to the
   * recipient address at the top left corner of the cheque. This needs to be a
   * public link to an image file (e.g. a PNG or JPEG file).
   */
  logo?: string;

  /**
   * Body param: The mailing class of this order. If not provided, automatically set
   * to `first_class`.
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
   * Body param: The memo of the cheque.
   */
  memo?: string;

  /**
   * Body param: These will be merged with the variables in the template or HTML you
   * create this order with. The keys in this object should match the variable names
   * in the template _exactly_ as they are case-sensitive. Note that these _do not_
   * apply to PDFs uploaded with the order.
   */
  mergeVariables?: { [key: string]: unknown };

  /**
   * Body param: The message of the cheque.
   */
  message?: string;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: The number of the cheque. If you don't provide this, it will
   * automatically be set to an incrementing number starting from 1 across your
   * entire account, ensuring that every cheque has a unique number.
   */
  number?: number;

  /**
   * Body param: A contact provided in one of two ways:
   *
   * - an **inline contact body** with the same fields you would use to create a
   *   contact (there is no need to create the contact first), or
   * - the **ID of an existing contact** (e.g. `contact_123`).
   *
   * You never send the full stored contact object (with `id`, `object`,
   * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
   * responses.
   */
  redirectTo?: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

  /**
   * Body param: The return envelope (ID) sent out with the cheque, if any. Note that
   * you must first order return envelopes using the Return Envelopes API.
   */
  returnEnvelope?: string;

  /**
   * Body param: This order will transition from `ready` to `printing` on the day
   * after this date. You can use this parameter to schedule orders for a future
   * date.
   */
  sendDate?: string;

  /**
   * Body param: Enum representing the supported cheque sizes.
   */
  size?: ChequeSize;

  /**
   * Header param
   */
  'idempotency-key'?: string;
}

export namespace ChequeCreateParams {
  /**
   * Settings for a letter attached to a cheque.
   */
  export interface LetterSettings {
    /**
     * Enum representing where a letter attached to a cheque is placed relative to the
     * cheque page.
     */
    placement?: 'before_cheque' | 'after_cheque';
  }
}

export interface ChequeListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface ChequeCancelParams {
  note: string;
}

export declare namespace Cheques {
  export {
    type Cheque as Cheque,
    type ChequeSize as ChequeSize,
    type DigitalOnly as DigitalOnly,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequesSkipLimit as ChequesSkipLimit,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
    type ChequeCancelParams as ChequeCancelParams,
  };
}
