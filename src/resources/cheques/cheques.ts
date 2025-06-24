// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ContactsAPI from '../contacts';
import * as Shared from '../shared';
import * as URLAPI from './url';
import { URL, URLRetrieveResponse } from './url';
import * as WithDepositReadyPdfAPI from './with-deposit-ready-pdf';
import { WithDepositReadyPdf } from './with-deposit-ready-pdf';
import { List, type ListParams } from '../../pagination';

export class Cheques extends APIResource {
  url: URLAPI.URL = new URLAPI.URL(this._client);
  withDepositReadyPdf: WithDepositReadyPdfAPI.WithDepositReadyPdf =
    new WithDepositReadyPdfAPI.WithDepositReadyPdf(this._client);

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
   * const cheque = await client.cheques.create({
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
  create(body: ChequeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Cheque> {
    return this._client.post('/cheques', { body, ...options });
  }

  /**
   * Retrieve a cheque by ID.
   *
   * @example
   * ```ts
   * const cheque = await client.cheques.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Cheque> {
    return this._client.get(`/cheques/${id}`, options);
  }

  /**
   * Get a list of cheques.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cheque of client.cheques.list()) {
   *   // ...
   * }
   * ```
   */
  list(query?: ChequeListParams, options?: Core.RequestOptions): Core.PagePromise<ChequesList, Cheque>;
  list(options?: Core.RequestOptions): Core.PagePromise<ChequesList, Cheque>;
  list(
    query: ChequeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ChequesList, Cheque> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/cheques', ChequesList, { query, ...options });
  }

  /**
   * Cancel a cheque by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const cheque = await client.cheques.cancel('id');
   * ```
   */
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<Cheque> {
    return this._client.delete(`/cheques/${id}`, options);
  }
}

export class ChequesList extends List<Cheque> {}

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
  size: 'us_letter' | 'us_legal';

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
  digitalOnly?: Cheque.DigitalOnly;

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

export namespace Cheque {
  /**
   * The digitalOnly object contains data for digital-only cheques. A watermark must
   * be provided.
   */
  export interface DigitalOnly {
    /**
     * Text to be displayed as a watermark on the digital cheque.
     */
    watermark: string;
  }
}

export interface ChequeList {
  data: Array<Cheque>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
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
  from: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

  /**
   * The recipient of this order. You can either supply the contact information
   * inline here or provide a contact ID. PostGrid will automatically deduplicate
   * contacts regardless of whether you provide the information inline here or call
   * the contact creation endpoint.
   */
  to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

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
  digitalOnly?: ChequeCreateParams.DigitalOnly;

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
  redirectTo?: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. You can use this parameter to schedule orders for a future date.
   */
  sendDate?: string;

  /**
   * Enum representing the supported cheque sizes.
   */
  size?: 'us_letter' | 'us_legal';
}

export namespace ChequeCreateParams {
  /**
   * The digitalOnly object contains data for digital-only cheques. A watermark must
   * be provided.
   */
  export interface DigitalOnly {
    /**
     * Text to be displayed as a watermark on the digital cheque.
     */
    watermark: string;
  }
}

export interface ChequeListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Cheques.ChequesList = ChequesList;
Cheques.URL = URL;
Cheques.WithDepositReadyPdf = WithDepositReadyPdf;

export declare namespace Cheques {
  export {
    type Cheque as Cheque,
    type ChequeList as ChequeList,
    ChequesList as ChequesList,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };

  export { URL as URL, type URLRetrieveResponse as URLRetrieveResponse };

  export { WithDepositReadyPdf as WithDepositReadyPdf };
}
