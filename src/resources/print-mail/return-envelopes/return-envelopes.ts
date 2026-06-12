// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContactsAPI from '../contacts';
import * as OrdersAPI from './orders';
import {
  OrderCancelParams,
  OrderCreateParams,
  OrderFillParams,
  OrderListParams,
  OrderRetrieveParams,
  Orders,
  ReturnEnvelopeOrder,
  ReturnEnvelopeOrdersSkipLimit,
} from './orders';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *  You can use the return envelopes API to create and manage return envelopes.
 *  These are envelopes that are sent along with your mail (if specified) and
 *  allow your recipients to send mail to a particular address without having to
 *  purchase their own envelopes/stamps.
 *
 *  Note that you must order return envelopes and wait for the order to be
 *  filled before you can use them. You can manage these return envelope orders
 *  via the API as well as the dashboard.
 */
export class ReturnEnvelopes extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * Creates a new return envelope. Note that if there is already a return envelope
   * for the destination contact, this will fail with a
   * `return_envelope_already_exists_error`.
   *
   * @example
   * ```ts
   * const returnEnvelope =
   *   await client.printMail.returnEnvelopes.create({
   *     to: 'contact_kFjQtFqJtRXgahx5vgc9mA',
   *   });
   * ```
   */
  create(params: ReturnEnvelopeCreateParams, options?: RequestOptions): APIPromise<ReturnEnvelope> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post('/print-mail/v1/return_envelopes', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Gets the information for a return envelope by `id`. This should be a unique
   * identifying string starting with `return_envelope_`.
   *
   * @example
   * ```ts
   * const returnEnvelope =
   *   await client.printMail.returnEnvelopes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReturnEnvelope> {
    return this._client.get(path`/print-mail/v1/return_envelopes/${id}`, options);
  }

  /**
   * Gets a list of return envelopes for the user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const returnEnvelope of client.printMail.returnEnvelopes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReturnEnvelopeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReturnEnvelopesSkipLimit, ReturnEnvelope> {
    return this._client.getAPIList('/print-mail/v1/return_envelopes', SkipLimit<ReturnEnvelope>, {
      query,
      ...options,
    });
  }
}

export type ReturnEnvelopesSkipLimit = SkipLimit<ReturnEnvelope>;

export interface ReturnEnvelope {
  /**
   * A unique ID prefixed with return*envelope*
   */
  id: string;

  /**
   * The number of return envelopes available to use in your orders immediately. This
   * increases when a return envelope order is filled and decreases as you send
   * orders which include this return envelope.
   */
  available: number;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always `return_envelope`.
   */
  object: 'return_envelope';

  /**
   * The contact denormalized onto a return envelope when it is created. Unlike a
   * full contact it is not a standalone resource, so it has no `object`, `live`,
   * `createdAt`, or `updatedAt` fields.
   */
  to: ReturnEnvelope.To;

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace ReturnEnvelope {
  /**
   * The contact denormalized onto a return envelope when it is created. Unlike a
   * full contact it is not a standalone resource, so it has no `object`, `live`,
   * `createdAt`, or `updatedAt` fields.
   */
  export interface To {
    /**
     * A unique ID prefixed with contact\_
     */
    id: string;

    /**
     * The first line of the contact's address.
     */
    addressLine1: string;

    /**
     * One of `verified`, `corrected`, or `failed`.
     */
    addressStatus: 'verified' | 'corrected' | 'failed';

    /**
     * The ISO 3611-1 country code of the contact's address.
     */
    countryCode: string;

    /**
     * A series of human-readable errors/warnings that were raised when running the
     * provided address through our address verification.
     */
    addressErrors?: string;

    /**
     * Second line of the contact's address, if applicable.
     */
    addressLine2?: string;

    /**
     * The city of the contact's address.
     */
    city?: string;

    /**
     * Company name of the contact.
     */
    companyName?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * Email of the contact.
     */
    email?: string;

    /**
     * First name of the contact.
     */
    firstName?: string;

    /**
     * If `true`, PostGrid will force this contact to have an `addressStatus` of
     * `verified` even if our address verification system says otherwise.
     */
    forceVerifiedStatus?: boolean;

    /**
     * Job title of the contact.
     */
    jobTitle?: string;

    /**
     * Last name of the contact.
     */
    lastName?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Phone number of the contact.
     */
    phoneNumber?: string;

    /**
     * The postal or ZIP code of the contact's address.
     */
    postalOrZip?: string;

    /**
     * Province or state of the contact's address.
     */
    provinceOrState?: string;

    /**
     * If `true`, the contact's details are hidden from the dashboard and API responses
     * apart from the final print. The contact ID can then be used as a token for
     * sending mail without giving access to the underlying data.
     */
    secret?: boolean;

    /**
     * If `true`, PostGrid will skip running this contact's address through our address
     * verification system.
     */
    skipVerification?: boolean;
  }
}

export interface ReturnEnvelopeCreateParams {
  /**
   * Body param: A contact ID or a contact object containing the address that will be
   * printed onto the return envelope.
   */
  to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

  /**
   * Body param: An optional string describing this resource. Will be visible in the
   * API and the dashboard.
   */
  description?: string;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Header param
   */
  'idempotency-key'?: string;
}

export interface ReturnEnvelopeListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

ReturnEnvelopes.Orders = Orders;

export declare namespace ReturnEnvelopes {
  export {
    type ReturnEnvelope as ReturnEnvelope,
    type ReturnEnvelopesSkipLimit as ReturnEnvelopesSkipLimit,
    type ReturnEnvelopeCreateParams as ReturnEnvelopeCreateParams,
    type ReturnEnvelopeListParams as ReturnEnvelopeListParams,
  };

  export {
    Orders as Orders,
    type ReturnEnvelopeOrder as ReturnEnvelopeOrder,
    type ReturnEnvelopeOrdersSkipLimit as ReturnEnvelopeOrdersSkipLimit,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderFillParams as OrderFillParams,
  };
}
