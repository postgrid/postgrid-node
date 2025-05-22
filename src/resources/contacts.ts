// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { List, type ListParams } from '../pagination';

export class Contacts extends APIResource {
  /**
   * Creates a contact. This will also verify the contact's address **if you create
   * it using a live API key**. To sucessfully create a contact, either a
   * `firstName`, a `companyName`, or both are required. You can supply both, but you
   * **cannot** supply neither.
   *
   * You have the option to supply the entire address (except for `countryCode`) via
   * `addressLine1`, in which case PostGrid will parse it automatically. However,
   * this is **not guaranteed to be correct**, so we recommend passing along the
   * structured address fields (`city`, `provinceOrState`, etc) if you have them.
   *
   * _Note that if you create a contact that has identical information to another
   * contact, this will simply update the description of the existing contact and
   * return it. This avoids creating duplicate contacts._
   *
   * @example
   * ```ts
   * const contact = await client.contacts.create({
   *   addressLine1: '90 Canal St Suite 600, Boston MA 90210',
   *   countryCode: 'US',
   *   firstName: 'Kevin',
   *   companyName: 'PostGrid',
   * });
   * ```
   */
  create(body: ContactCreateParams, options?: Core.RequestOptions): Core.APIPromise<Contact> {
    return this._client.post('/contacts', { body, ...options });
  }

  /**
   * Retrieve a contact.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Contact> {
    return this._client.get(`/contacts/${id}`, options);
  }

  /**
   * Get a list of contacts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contact of client.contacts.list()) {
   *   // ...
   * }
   * ```
   */
  list(query?: ContactListParams, options?: Core.RequestOptions): Core.PagePromise<ContactsList, Contact>;
  list(options?: Core.RequestOptions): Core.PagePromise<ContactsList, Contact>;
  list(
    query: ContactListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContactsList, Contact> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/contacts', ContactsList, { query, ...options });
  }

  /**
   * Delete a contact. Note that this will not affect orders that were sent to this
   * contact.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.delete('id');
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ContactDeleteResponse> {
    return this._client.delete(`/contacts/${id}`, options);
  }
}

export class ContactsList extends List<Contact> {}

export interface Contact {
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
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always `contact`.
   */
  object: 'contact';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

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
  metadata?: Record<string, unknown>;

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
   * If `true`, PostGrid will skip running this contact's address through our address
   * verification system.
   */
  skipVerification?: boolean;
}

export interface ContactDeleteResponse {
  /**
   * A unique ID prefixed with contact\_
   */
  id: string;

  deleted: true;

  /**
   * Always `contact`.
   */
  object: 'contact';
}

export type ContactCreateParams =
  | ContactCreateParams.ContactCreateWithFirstName
  | ContactCreateParams.ContactCreateWithCompanyName;

export declare namespace ContactCreateParams {
  export interface ContactCreateWithFirstName {
    /**
     * The first line of the contact's address.
     */
    addressLine1: string;

    /**
     * The ISO 3611-1 country code of the contact's address.
     */
    countryCode: string;

    firstName: string;

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
    metadata?: Record<string, unknown>;

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
     * If `true`, PostGrid will skip running this contact's address through our address
     * verification system.
     */
    skipVerification?: boolean;
  }

  export interface ContactCreateWithCompanyName {
    /**
     * The first line of the contact's address.
     */
    addressLine1: string;

    companyName: string;

    /**
     * The ISO 3611-1 country code of the contact's address.
     */
    countryCode: string;

    /**
     * Second line of the contact's address, if applicable.
     */
    addressLine2?: string;

    /**
     * The city of the contact's address.
     */
    city?: string;

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
    metadata?: Record<string, unknown>;

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
     * If `true`, PostGrid will skip running this contact's address through our address
     * verification system.
     */
    skipVerification?: boolean;
  }
}

export interface ContactListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Contacts.ContactsList = ContactsList;

export declare namespace Contacts {
  export {
    type Contact as Contact,
    type ContactDeleteResponse as ContactDeleteResponse,
    ContactsList as ContactsList,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };
}
