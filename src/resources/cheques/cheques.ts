// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from '../contacts';
import * as Shared from '../shared';
import * as URLAPI from './url';
import { URL } from './url';
import * as WithDepositReadyPdfAPI from './with-deposit-ready-pdf';
import { WithDepositReadyPdf } from './with-deposit-ready-pdf';
import { List } from '../../core/pagination';

export class Cheques extends APIResource {
  url: URLAPI.URL = new URLAPI.URL(this._client);
  withDepositReadyPdf: WithDepositReadyPdfAPI.WithDepositReadyPdf =
    new WithDepositReadyPdfAPI.WithDepositReadyPdf(this._client);
}

export type ChequesList = List<Cheque>;

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

Cheques.URL = URL;
Cheques.WithDepositReadyPdf = WithDepositReadyPdf;

export declare namespace Cheques {
  export { type Cheque as Cheque, type ChequeList as ChequeList };

  export { URL as URL };

  export { WithDepositReadyPdf as WithDepositReadyPdf };
}
