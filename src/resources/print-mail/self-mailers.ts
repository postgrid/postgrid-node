// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import * as ContactsAPI from './contacts';
import * as OrderProfilesSelfMailersAPI from './order-profiles/self-mailers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SelfMailers extends APIResource {
  /**
   * Create a self-mailer. Note that you can supply one of the following:
   *
   * - HTML content for the inside and outside of the self-mailer
   * - A template ID for the inside and outside of the self-mailer
   * - A URL or file for a 2 page PDF where the first page is the outside of the
   *   self-mailer and the second page is the inside
   * - Upload the aforementioned PDF file via a multipart form upload request
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.create({
   *     from: 'contact_123',
   *     insideHTML: '<html>Inside</html>',
   *     outsideHTML: '<html>Outside</html>',
   *     size: '8.5x11_bifold',
   *     to: 'contact_456',
   *   });
   * ```
   */
  create(body: SelfMailerCreateParams, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.post('/print-mail/v1/self_mailers', { body, ...options });
  }

  /**
   * Retrieve a self-mailer by ID.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.get(path`/print-mail/v1/self_mailers/${id}`, options);
  }

  /**
   * Get a list of self-mailers.
   *
   * @example
   * ```ts
   * const selfMailers =
   *   await client.printMail.selfMailers.list();
   * ```
   */
  list(
    query: SelfMailerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SelfMailerListResponse> {
    return this._client.get('/print-mail/v1/self_mailers', { query, ...options });
  }

  /**
   * Cancel a self-mailer by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.selfMailers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SelfMailer> {
    return this._client.delete(path`/print-mail/v1/self_mailers/${id}`, options);
  }

  /**
   * Retrieve a self-mailer preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.selfMailers.retrieveURL('id');
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<SelfMailerRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/self_mailers/${id}/url`, options);
  }
}

export interface SelfMailer {
  /**
   * A unique ID prefixed with self*mailer*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

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
  mailingClass: BoxesAPI.OrderMailingClass;

  /**
   * Always `self_mailer`.
   */
  object: 'self_mailer';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: OrderProfilesSelfMailersAPI.SelfMailerSize;

  /**
   * See `OrderStatus` for more details on the status of this order.
   */
  status: BoxesAPI.OrderStatus;

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
  cancellation?: BoxesAPI.Cancellation;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The last date that the IMB status was updated. See `imbStatus` for more details.
   */
  imbDate?: string;

  /**
   * The Intelligent Mail Barcode (IMB) status of this order. Only populated for
   * US-printed and US-destined orders. This is the most detailed way to track
   * non-express/certified orders.
   */
  imbStatus?: BoxesAPI.OrderImbStatus;

  /**
   * The most recent ZIP code of the USPS facility that the order has been processed
   * through. Only populated when an `imbStatus` is present.
   */
  imbZIPCode?: string;

  /**
   * These will be merged with the variables in the template or HTML you create this
   * order with. The keys in this object should match the variable names in the
   * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
   * PDFs uploaded with the order.
   */
  mergeVariables?: { [key: string]: unknown };

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

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

export interface SelfMailerListResponse {
  data: Array<SelfMailer>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface SelfMailerRetrieveURLResponse {
  /**
   * A unique ID prefixed with self*mailer*
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export type SelfMailerCreateParams =
  | SelfMailerCreateParams.SelfMailerCreateWithHTML
  | SelfMailerCreateParams.SelfMailerCreateWithTemplate
  | SelfMailerCreateParams.SelfMailerCreateWithPdfurl
  | SelfMailerCreateParams.SelfMailerCreateWithPdfFile;

export declare namespace SelfMailerCreateParams {
  export interface SelfMailerCreateWithHTML {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from:
      | SelfMailerCreateWithHTML.ContactCreateWithFirstName
      | SelfMailerCreateWithHTML.ContactCreateWithCompanyName
      | string;

    /**
     * The HTML content for the inside of the self-mailer. You can supply _either_ this
     * or `insideTemplate` but not both.
     */
    insideHTML: string;

    /**
     * The HTML content for the outside of the self-mailer. You can supply _either_
     * this or `outsideTemplate` but not both.
     */
    outsideHTML: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | SelfMailerCreateWithHTML.ContactCreateWithFirstName
      | SelfMailerCreateWithHTML.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
     */
    mailingClass?: BoxesAPI.OrderMailingClass;

    /**
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }

  export namespace SelfMailerCreateWithHTML {
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
  }

  export interface SelfMailerCreateWithTemplate {
    /**
     * The template ID for the inside of the self-mailer. You can supply _either_ this
     * or `insideHTML` but not both.
     */
    insideTemplate: string;

    /**
     * The template ID for the outside of the self-mailer. You can supply _either_ this
     * or `outsideHTML` but not both.
     */
    outsideTemplate: string;
  }

  export interface SelfMailerCreateWithPdfurl {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from:
      | SelfMailerCreateWithPdfurl.ContactCreateWithFirstName
      | SelfMailerCreateWithPdfurl.ContactCreateWithCompanyName
      | string;

    /**
     * A URL pointing to a 2 page PDF file. The first page is the inside of the
     * self-mailer and the second page is the outside (where the address will be
     * stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | SelfMailerCreateWithPdfurl.ContactCreateWithFirstName
      | SelfMailerCreateWithPdfurl.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
     */
    mailingClass?: BoxesAPI.OrderMailingClass;

    /**
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }

  export namespace SelfMailerCreateWithPdfurl {
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
  }

  export interface SelfMailerCreateWithPdfFile {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from:
      | SelfMailerCreateWithPdfFile.ContactCreateWithFirstName
      | SelfMailerCreateWithPdfFile.ContactCreateWithCompanyName
      | string;

    /**
     * A 2 page PDF file. The first page is the inside of the self-mailer and the
     * second page is the outside (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size: OrderProfilesSelfMailersAPI.SelfMailerSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | SelfMailerCreateWithPdfFile.ContactCreateWithFirstName
      | SelfMailerCreateWithPdfFile.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
     */
    mailingClass?: BoxesAPI.OrderMailingClass;

    /**
     * These will be merged with the variables in the template or HTML you create this
     * order with. The keys in this object should match the variable names in the
     * template _exactly_ as they are case-sensitive. Note that these _do not_ apply to
     * PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;
  }

  export namespace SelfMailerCreateWithPdfFile {
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
  }
}

export interface SelfMailerListParams {
  limit?: number;

  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;

  skip?: number;
}

export declare namespace SelfMailers {
  export {
    type SelfMailer as SelfMailer,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
