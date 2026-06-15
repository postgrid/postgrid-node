// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReturnEnvelopesAPI from './return-envelopes';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../../core/pagination';
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
export class Orders extends APIResource {
  /**
   * Creates a batch order of return envelopes. The minimum order quantity is 5000.
   *
   * @example
   * ```ts
   * const returnEnvelopeOrder =
   *   await client.printMail.returnEnvelopes.orders.create(
   *     'id',
   *     {
   *       quantityOrdered: 5000,
   *       description: 'A batch of 5000',
   *     },
   *   );
   * ```
   */
  create(id: string, body: OrderCreateParams, options?: RequestOptions): APIPromise<ReturnEnvelopeOrder> {
    return this._client.post(path`/print-mail/v1/return_envelopes/${id}/orders`, { body, ...options });
  }

  /**
   * Gets a specific return envelope order by return envelope ID as `id` and return
   * envelope order ID as `orderID`.
   *
   * @example
   * ```ts
   * const returnEnvelopeOrder =
   *   await client.printMail.returnEnvelopes.orders.retrieve(
   *     'orderID',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    orderID: string,
    params: OrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReturnEnvelopeOrder> {
    const { id, ...query } = params;
    return this._client.get(path`/print-mail/v1/return_envelopes/${id}/orders/${orderID}`, {
      query,
      ...options,
    });
  }

  /**
   * Gets a list of orders for the return envelope by `id`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const returnEnvelopeOrder of client.printMail.returnEnvelopes.orders.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReturnEnvelopeOrdersSkipLimit, ReturnEnvelopeOrder> {
    return this._client.getAPIList(
      path`/print-mail/v1/return_envelopes/${id}/orders`,
      SkipLimit<ReturnEnvelopeOrder>,
      { query, ...options },
    );
  }

  /**
   * Cancels the return envelope order by `orderID` for the return envelope by `id`.
   * Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const returnEnvelopeOrder =
   *   await client.printMail.returnEnvelopes.orders.cancel(
   *     'orderID',
   *     { id: 'id' },
   *   );
   * ```
   */
  cancel(
    orderID: string,
    params: OrderCancelParams,
    options?: RequestOptions,
  ): APIPromise<ReturnEnvelopeOrder> {
    const { id, expand } = params;
    return this._client.delete(path`/print-mail/v1/return_envelopes/${id}/orders/${orderID}`, {
      query: { expand },
      ...options,
    });
  }

  /**
   * Fills the return envelope order by `orderID` for the return envelope by `id`.
   * This is only available in test mode and can be used to simulate how a live order
   * would be filled.
   *
   * Note: this will fail with a `return_envelope_order_cannot_fill_error` if the
   * order's status is not `placed`.
   *
   * @example
   * ```ts
   * const returnEnvelopeOrder =
   *   await client.printMail.returnEnvelopes.orders.fill(
   *     'orderID',
   *     { id: 'id' },
   *   );
   * ```
   */
  fill(orderID: string, params: OrderFillParams, options?: RequestOptions): APIPromise<ReturnEnvelopeOrder> {
    const { id } = params;
    return this._client.post(path`/print-mail/v1/return_envelopes/${id}/orders/${orderID}/fills`, options);
  }
}

export type ReturnEnvelopeOrdersSkipLimit = SkipLimit<ReturnEnvelopeOrder>;

export interface ReturnEnvelopeOrder {
  /**
   * A unique ID prefixed with return*envelope_order*
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
   * Always `return_envelope_order`.
   */
  object: 'return_envelope_order';

  /**
   * The quantity of return envelopes ordered. Minimum 5000.
   */
  quantityOrdered: number;

  /**
   * The ID of the return envelope that this order replenishes. Expanded into the
   * full return envelope object on the individual order retrieval and cancellation
   * endpoints when `expand[]=returnEnvelope` is supplied.
   */
  returnEnvelope: string | ReturnEnvelopesAPI.ReturnEnvelope;

  /**
   * The status of a return envelope order.
   */
  status: 'placed' | 'filled' | 'cancelled';

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

  /**
   * The quantity of return envelopes that were filled for this order. Only returned
   * once the order's status is `filled`.
   */
  quantityFilled?: number;
}

export interface OrderCreateParams {
  /**
   * The quantity of return envelopes ordered. Minimum 5000.
   */
  quantityOrdered: number;

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

export interface OrderRetrieveParams {
  /**
   * Path param: The ID of the return envelope.
   */
  id: string;

  /**
   * Query param: Pass `expand[]=returnEnvelope` to expand the order's
   * `returnEnvelope` field into the full return envelope object.
   */
  expand?: Array<'returnEnvelope'>;
}

export interface OrderListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface OrderCancelParams {
  /**
   * Path param: The ID of the return envelope.
   */
  id: string;

  /**
   * Query param: Pass `expand[]=returnEnvelope` to expand the order's
   * `returnEnvelope` field into the full return envelope object.
   */
  expand?: Array<'returnEnvelope'>;
}

export interface OrderFillParams {
  /**
   * The ID of the return envelope.
   */
  id: string;
}

export declare namespace Orders {
  export {
    type ReturnEnvelopeOrder as ReturnEnvelopeOrder,
    type ReturnEnvelopeOrdersSkipLimit as ReturnEnvelopeOrdersSkipLimit,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
    type OrderFillParams as OrderFillParams,
  };
}
