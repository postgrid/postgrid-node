// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { List } from '../core/pagination';

export class Contacts extends APIResource {}

export type ContactsList = List<Contact>;

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
   * If `true`, PostGrid will skip running this contact's address through our address
   * verification system.
   */
  skipVerification?: boolean;
}

export declare namespace Contacts {
  export { type Contact as Contact };
}
