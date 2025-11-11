// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import * as ContactsAPI from './contacts';
import * as PrintMailAPI from './print-mail';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Cheques extends APIResource {
  /**
   * Create a cheque.
   *
   * This endpoint allows you to create a new cheque with the specified details.
   *
   * If you would like to create a digitalOnly cheque, the digitalOnly object with
   * the watermark will need to be passed in. Feature is available on request, e-mail
   * support@postgrid.com for access.
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
  create(body: ChequeCreateParams, options?: RequestOptions): APIPromise<Cheque> {
    return this._client.post('/print-mail/v1/cheques', { body, ...options });
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
   * const cheques = await client.printMail.cheques.list();
   * ```
   */
  list(
    query: ChequeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChequeListResponse> {
    return this._client.get('/print-mail/v1/cheques', { query, ...options });
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
  mailingClass: BoxesAPI.OrderMailingClass;

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
  status: BoxesAPI.OrderStatus;

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
  cancellation?: BoxesAPI.Cancellation;

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
  imbStatus?: BoxesAPI.OrderImbStatus;

  /**
   * The most recent ZIP code of the USPS facility that the order has been processed
   * through. Only populated when an `imbStatus` is present.
   */
  imbZIPCode?: string;

  /**
   * An optional logo URL for the cheque. This will be placed next to the recipient
   * address at the top left corner of the cheque. This needs to be a public link to
   * an image file (e.g. a PNG or JPEG file).
   */
  logoURL?: string;

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

/**
 * Enum representing the supported cheque sizes.
 */
export type ChequeSize = 'us_letter' | 'us_legal';

export interface DigitalOnly {
  /**
   * Text to be displayed as a watermark on the digital cheque.
   */
  watermark: string;
}

export interface ChequeListResponse {
  data: Array<Cheque>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
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
   * The amount of the cheque in cents.
   */
  amount: number;

  /**
   * The bank account (ID) associated with the cheque.
   */
  bankAccount: string;

  /**
   * The contact information of the sender. You can pass contact information inline
   * here just like you can for the `to`.
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
   * The currency code of the cheque. This will be set to the default currency of the
   * bank account (`USD` for US bank accounts and `CAD` for Canadian bank accounts)
   * if not provided. You can set this value to `USD` if you want to draw USD from a
   * Canadian bank account or vice versa.
   */
  currencyCode?: 'USD' | 'CAD';

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
   * An optional logo URL for the cheque. This will be placed next to the recipient
   * address at the top left corner of the cheque. This needs to be a public link to
   * an image file (e.g. a PNG or JPEG file).
   */
  logoURL?: string;

  /**
   * The mailing class of this order. If not provided, automatically set to
   * `first_class`.
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

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
   * Providing this inserts a blank page at the start of the cheque with the
   * recipient you provide here. This leaves the cheque that follows intact, which
   * means you can use this to intercept at cheque at the redirected address and then
   * mail it forward to the final recipient yourself. One use case for this is
   * signing cheques at your office before mailing them out yourself.
   */
  redirectTo?: PrintMailAPI.ContactCreateWithFirstName | PrintMailAPI.ContactCreateWithCompanyName | string;

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. You can use this parameter to schedule orders for a future date.
   */
  sendDate?: string;

  /**
   * Enum representing the supported cheque sizes.
   */
  size?: ChequeSize;
}

export interface ChequeListParams {
  limit?: number;

  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;

  skip?: number;
}

export declare namespace Cheques {
  export {
    type Cheque as Cheque,
    type ChequeSize as ChequeSize,
    type DigitalOnly as DigitalOnly,
    type ChequeListResponse as ChequeListResponse,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };
}
