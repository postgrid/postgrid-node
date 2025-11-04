// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ChequesAPI from '../../cheques/cheques';
import { ChequesList } from '../../cheques/cheques';
import { APIPromise } from '../../../core/api-promise';
import { List, type ListParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
   * const cheque = await client.printMail.v1.cheques.create({
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
  create(body: ChequeCreateParams, options?: RequestOptions): APIPromise<ChequesAPI.Cheque> {
    return this._client.post('/print-mail/v1/cheques', { body, ...options });
  }

  /**
   * Retrieve a cheque by ID.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.v1.cheques.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ChequesAPI.Cheque> {
    return this._client.get(path`/print-mail/v1/cheques/${id}`, options);
  }

  /**
   * Get a list of cheques.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cheque of client.printMail.v1.cheques.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChequeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ChequesList, ChequesAPI.Cheque> {
    return this._client.getAPIList('/print-mail/v1/cheques', List<ChequesAPI.Cheque>, { query, ...options });
  }

  /**
   * Cancel a cheque by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const cheque = await client.printMail.v1.cheques.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ChequesAPI.Cheque> {
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
   * const response =
   *   await client.printMail.v1.cheques.retrieveURL('id');
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
   *   await client.printMail.v1.cheques.retrieveWithDepositReadyPdf(
   *     'id',
   *   );
   * ```
   */
  retrieveWithDepositReadyPdf(id: string, options?: RequestOptions): APIPromise<ChequesAPI.Cheque> {
    return this._client.get(path`/print-mail/v1/cheques/${id}/with_deposit_ready_pdf`, options);
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

export declare namespace Cheques {
  export {
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };
}

export { type ChequesList };
