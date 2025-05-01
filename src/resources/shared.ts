// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Cancellation {
  /**
   * The reason for the cancellation.
   */
  reason: 'user_initiated' | 'invalid_content' | 'invalid_order_mailing_class';

  /**
   * The user ID who cancelled the order.
   */
  cancelledByUser?: string;

  /**
   * An optional note provided by the user who cancelled the order.
   */
  note?: string;
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
