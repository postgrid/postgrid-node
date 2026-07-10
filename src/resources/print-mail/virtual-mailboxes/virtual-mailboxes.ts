// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContactsAPI from '../contacts';
import * as ItemsAPI from './items';
import {
  ItemCreateParams,
  ItemCreateResponse,
  ItemListParams,
  ItemListResponse,
  ItemListResponsesSkipLimit,
  ItemRetrieveParams,
  ItemRetrieveResponse,
  Items,
} from './items';
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
export class VirtualMailboxes extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Creates a new virtual mailbox. In live mode, the virtual mailbox will be pending
   * assignment and cannot be used until it has been assigned and activated by our
   * team. You will be notified via email once the virtual mailbox has been
   * activated. In test mode, the virtual mailbox will be activated immediately upon
   * creation.
   *
   * @example
   * ```ts
   * const virtualMailbox =
   *   await client.printMail.virtualMailboxes.create({
   *     countryCode: 'US',
   *     capabilities: {
   *       envelopeScans: true,
   *       forwardMailTo: 'contact_pxd7wnnD1xY6H6etKNvjb4',
   *     },
   *   });
   * ```
   */
  create(
    body: VirtualMailboxCreateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualMailboxCreateResponse> {
    return this._client.post('/print-mail/v1/virtual_mailboxes', { body, ...options });
  }

  /**
   * Retrieve Virtual Mailbox
   *
   * @example
   * ```ts
   * const virtualMailbox =
   *   await client.printMail.virtualMailboxes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VirtualMailboxRetrieveResponse> {
    return this._client.get(path`/print-mail/v1/virtual_mailboxes/${id}`, options);
  }

  /**
   * Lists virtual mailboxes. You can use the `skip`, `limit`, and `search` query
   * parameters to refine the list.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const virtualMailboxListResponse of client.printMail.virtualMailboxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VirtualMailboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VirtualMailboxListResponsesSkipLimit, VirtualMailboxListResponse> {
    return this._client.getAPIList(
      '/print-mail/v1/virtual_mailboxes',
      SkipLimit<VirtualMailboxListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieves the physical address of the virtual mailbox.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.virtualMailboxes.retrieveAddress(
   *     'id',
   *   );
   * ```
   */
  retrieveAddress(id: string, options?: RequestOptions): APIPromise<VirtualMailboxRetrieveAddressResponse> {
    return this._client.get(path`/print-mail/v1/virtual_mailboxes/${id}/address`, options);
  }
}

export type VirtualMailboxListResponsesSkipLimit = SkipLimit<VirtualMailboxListResponse>;

/**
 * The virtual mailbox object.
 */
export interface VirtualMailboxCreateResponse {
  /**
   * A unique ID prefixed with virtual*mailbox*
   */
  id: string;

  /**
   * All of the capabilities a virtual mailbox may have.
   */
  capabilities: VirtualMailboxCreateResponse.Capabilities;

  /**
   * All of the supported countries for virtual mailboxes.
   */
  countryCode: 'US';

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always "virtual_mailbox".
   */
  object: 'virtual_mailbox';

  /**
   * The possible statuses of virtual mailboxes.
   */
  status: 'active' | 'pending_assignment';

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

export namespace VirtualMailboxCreateResponse {
  /**
   * All of the capabilities a virtual mailbox may have.
   */
  export interface Capabilities {
    /**
     * Indicates if the virtual mailbox can produce scans of envelopes.
     */
    envelopeScans: boolean;

    /**
     * A contact to forward any returned mail to.
     */
    forwardMailTo?: ContactsAPI.Contact;
  }
}

/**
 * The virtual mailbox object.
 */
export interface VirtualMailboxRetrieveResponse {
  /**
   * A unique ID prefixed with virtual*mailbox*
   */
  id: string;

  /**
   * All of the capabilities a virtual mailbox may have.
   */
  capabilities: VirtualMailboxRetrieveResponse.Capabilities;

  /**
   * All of the supported countries for virtual mailboxes.
   */
  countryCode: 'US';

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always "virtual_mailbox".
   */
  object: 'virtual_mailbox';

  /**
   * The possible statuses of virtual mailboxes.
   */
  status: 'active' | 'pending_assignment';

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

export namespace VirtualMailboxRetrieveResponse {
  /**
   * All of the capabilities a virtual mailbox may have.
   */
  export interface Capabilities {
    /**
     * Indicates if the virtual mailbox can produce scans of envelopes.
     */
    envelopeScans: boolean;

    /**
     * A contact to forward any returned mail to.
     */
    forwardMailTo?: ContactsAPI.Contact;
  }
}

/**
 * The virtual mailbox object.
 */
export interface VirtualMailboxListResponse {
  /**
   * A unique ID prefixed with virtual*mailbox*
   */
  id: string;

  /**
   * All of the capabilities a virtual mailbox may have.
   */
  capabilities: VirtualMailboxListResponse.Capabilities;

  /**
   * All of the supported countries for virtual mailboxes.
   */
  countryCode: 'US';

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always "virtual_mailbox".
   */
  object: 'virtual_mailbox';

  /**
   * The possible statuses of virtual mailboxes.
   */
  status: 'active' | 'pending_assignment';

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

export namespace VirtualMailboxListResponse {
  /**
   * All of the capabilities a virtual mailbox may have.
   */
  export interface Capabilities {
    /**
     * Indicates if the virtual mailbox can produce scans of envelopes.
     */
    envelopeScans: boolean;

    /**
     * A contact to forward any returned mail to.
     */
    forwardMailTo?: ContactsAPI.Contact;
  }
}

/**
 * The address information for a mailbox.
 */
export interface VirtualMailboxRetrieveAddressResponse {
  /**
   * The address line 1 of the mailbox.
   */
  addressLine1: string;

  /**
   * All of the supported countries for virtual mailboxes.
   */
  countryCode: 'US';

  /**
   * The address line 2 of the mailbox.
   */
  addressLine2?: string;

  /**
   * The city of the mailbox.
   */
  city?: string;

  /**
   * The postal or ZIP code of the mailbox.
   */
  postalOrZip?: string;

  /**
   * The province or state of the mailbox.
   */
  provinceOrState?: string;
}

export interface VirtualMailboxCreateParams {
  /**
   * All of the supported countries for virtual mailboxes.
   */
  countryCode: 'US';

  /**
   * The capabilities the virtual mailbox should support.
   */
  capabilities?: VirtualMailboxCreateParams.Capabilities;
}

export namespace VirtualMailboxCreateParams {
  /**
   * The capabilities the virtual mailbox should support.
   */
  export interface Capabilities {
    /**
     * If the virtual mailbox should support envelope scans or not.
     */
    envelopeScans: boolean;

    /**
     * A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    forwardMailTo?:
      | ContactsAPI.ContactCreateWithFirstName
      | ContactsAPI.ContactCreateWithCompanyName
      | string;
  }
}

export interface VirtualMailboxListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

VirtualMailboxes.Items = Items;

export declare namespace VirtualMailboxes {
  export {
    type VirtualMailboxCreateResponse as VirtualMailboxCreateResponse,
    type VirtualMailboxRetrieveResponse as VirtualMailboxRetrieveResponse,
    type VirtualMailboxListResponse as VirtualMailboxListResponse,
    type VirtualMailboxRetrieveAddressResponse as VirtualMailboxRetrieveAddressResponse,
    type VirtualMailboxListResponsesSkipLimit as VirtualMailboxListResponsesSkipLimit,
    type VirtualMailboxCreateParams as VirtualMailboxCreateParams,
    type VirtualMailboxListParams as VirtualMailboxListParams,
  };

  export {
    Items as Items,
    type ItemCreateResponse as ItemCreateResponse,
    type ItemRetrieveResponse as ItemRetrieveResponse,
    type ItemListResponse as ItemListResponse,
    type ItemListResponsesSkipLimit as ItemListResponsesSkipLimit,
    type ItemCreateParams as ItemCreateParams,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
  };
}
