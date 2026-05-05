// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *  Virtual mailboxes let you receive, scan, and forward your physical mail
 *  without needing a traditional physical mailbox. Each mailbox is fully
 *  digital, giving you a unique ID, status, and a set of capabilities such as
 *  forwarding mail to another address or viewing envelope scans. This allows you
 *  to manage physical correspondence entirely online.
 *
 *  You can request access to this feature by reaching out to
 *  support@postgrid.com
 */
export class Items extends APIResource {
  /**
   * Create a test item for a virtual mailbox. This is only available in test mode,
   * an error will be returned if you attempt this call in live mode.
   *
   * @example
   * ```ts
   * const item =
   *   await client.printMail.virtualMailboxes.items.create(
   *     'id',
   *     { matchedLetter: 'letter_abcdef1234567890' },
   *   );
   * ```
   */
  create(id: string, body: ItemCreateParams, options?: RequestOptions): APIPromise<ItemCreateResponse> {
    return this._client.post(path`/print-mail/v1/virtual_mailboxes/${id}/items`, { body, ...options });
  }

  /**
   * Retrieves a single item for a virtual mailbox.
   *
   * @example
   * ```ts
   * const item =
   *   await client.printMail.virtualMailboxes.items.retrieve(
   *     'itemID',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    itemID: string,
    params: ItemRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ItemRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/print-mail/v1/virtual_mailboxes/${id}/items/${itemID}`, options);
  }

  /**
   * Lists items for a virtual mailbox.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.printMail.virtualMailboxes.items.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ItemListResponsesSkipLimit, ItemListResponse> {
    return this._client.getAPIList(
      path`/print-mail/v1/virtual_mailboxes/${id}/items`,
      SkipLimit<ItemListResponse>,
      { query, ...options },
    );
  }
}

export type ItemListResponsesSkipLimit = SkipLimit<ItemListResponse>;

/**
 * The virtual mailbox item object.
 */
export interface ItemCreateResponse {
  /**
   * A unique ID prefixed with virtual*mailbox_item*
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
   * Always "virtual_mailbox_item".
   */
  object: 'virtual_mailbox_item';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the virtual mailbox associated with this item.
   */
  virtualMailbox: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * A URL of the envelope scan PDF.
   */
  fileURL?: string;

  /**
   * The ID of the letter this item was matched to.
   */
  matchedLetter?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

/**
 * The virtual mailbox item object.
 */
export interface ItemRetrieveResponse {
  /**
   * A unique ID prefixed with virtual*mailbox_item*
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
   * Always "virtual_mailbox_item".
   */
  object: 'virtual_mailbox_item';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the virtual mailbox associated with this item.
   */
  virtualMailbox: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * A URL of the envelope scan PDF.
   */
  fileURL?: string;

  /**
   * The ID of the letter this item was matched to.
   */
  matchedLetter?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

/**
 * The virtual mailbox item object.
 */
export interface ItemListResponse {
  /**
   * A unique ID prefixed with virtual*mailbox_item*
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
   * Always "virtual_mailbox_item".
   */
  object: 'virtual_mailbox_item';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the virtual mailbox associated with this item.
   */
  virtualMailbox: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * A URL of the envelope scan PDF.
   */
  fileURL?: string;

  /**
   * The ID of the letter this item was matched to.
   */
  matchedLetter?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface ItemCreateParams {
  /**
   * The description of the item.
   */
  description?: string;

  /**
   * The ID of a letter to match this test item to.
   */
  matchedLetter?: string;

  /**
   * The metadata of the item.
   */
  metadata?: { [key: string]: unknown };
}

export interface ItemRetrieveParams {
  id: string;
}

export interface ItemListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace Items {
  export {
    type ItemCreateResponse as ItemCreateResponse,
    type ItemRetrieveResponse as ItemRetrieveResponse,
    type ItemListResponse as ItemListResponse,
    type ItemListResponsesSkipLimit as ItemListResponsesSkipLimit,
    type ItemCreateParams as ItemCreateParams,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
  };
}
