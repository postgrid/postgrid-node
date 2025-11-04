// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import * as ContactsAPI from './contacts';
import * as OrderProfilesPostcardsAPI from './order-profiles/postcards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Postcards extends APIResource {
  /**
   * Create a postcard. Note that you can supply one of the following:
   *
   * - HTML content for the front and back of the postcard
   * - A template ID for the front and back of the postcard
   * - A URL or file for a 2 page PDF where the first page is the front of the
   *   postcard and the second page is the back
   * - Upload the aforementioned PDF file via a multipart form upload request
   *
   * @example
   * ```ts
   * const postcard = await client.printMail.postcards.create({
   *   backHTML: '<html>Back</html>',
   *   frontHTML: '<html>Front</html>',
   *   size: '6x4',
   *   to: 'contact_456',
   *   from: 'contact_123',
   * });
   * ```
   */
  create(body: PostcardCreateParams, options?: RequestOptions): APIPromise<Postcard> {
    return this._client.post('/print-mail/v1/postcards', { body, ...options });
  }

  /**
   * Retrieve a postcard by ID.
   *
   * @example
   * ```ts
   * const postcard = await client.printMail.postcards.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Postcard> {
    return this._client.get(path`/print-mail/v1/postcards/${id}`, options);
  }

  /**
   * Get a list of postcards.
   *
   * @example
   * ```ts
   * const postcards = await client.printMail.postcards.list();
   * ```
   */
  list(
    query: PostcardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostcardListResponse> {
    return this._client.get('/print-mail/v1/postcards', { query, ...options });
  }

  /**
   * Cancel a postcard by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const postcard = await client.printMail.postcards.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Postcard> {
    return this._client.delete(path`/print-mail/v1/postcards/${id}`, options);
  }

  /**
   * Retrieve a postcard preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.postcards.retrieveURL('id');
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<PostcardRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/postcards/${id}/url`, options);
  }
}

export interface Postcard {
  /**
   * A unique ID prefixed with postcard\_
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
   * The mailing class of this order. This determines the speed and cost of delivery.
   * See `OrderMailingClass` for more details.
   */
  mailingClass: BoxesAPI.OrderMailingClass;

  /**
   * Always `postcard`.
   */
  object: 'postcard';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported postcard sizes.
   */
  size: OrderProfilesPostcardsAPI.PostcardSize;

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
   * The contact information of the sender.
   */
  from?: ContactsAPI.Contact;

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

export interface PostcardListResponse {
  data: Array<Postcard>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface PostcardRetrieveURLResponse {
  /**
   * A unique ID prefixed with postcard\_
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export type PostcardCreateParams =
  | PostcardCreateParams.PostcardCreateWithHTML
  | PostcardCreateParams.PostcardCreateWithTemplate
  | PostcardCreateParams.PostcardCreateWithPdfurl
  | PostcardCreateParams.PostcardCreateWithPdfFile;

export declare namespace PostcardCreateParams {
  export interface PostcardCreateWithHTML {
    /**
     * The HTML content for the back of the postcard. You can supply _either_ this or
     * `backTemplate` but not both.
     */
    backHTML: string;

    /**
     * The HTML content for the front of the postcard. You can supply _either_ this or
     * `frontTemplate` but not both.
     */
    frontHTML: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: OrderProfilesPostcardsAPI.PostcardSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | PostcardCreateWithHTML.ContactCreateWithFirstName
      | PostcardCreateWithHTML.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?:
      | PostcardCreateWithHTML.ContactCreateWithFirstName
      | PostcardCreateWithHTML.ContactCreateWithCompanyName
      | string;

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

  export namespace PostcardCreateWithHTML {
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

  export interface PostcardCreateWithTemplate {
    /**
     * The template ID for the back of the postcard. You can supply _either_ this or
     * `backHTML` but not both.
     */
    backTemplate: string;

    /**
     * The template ID for the front of the postcard. You can supply _either_ this or
     * `frontHTML` but not both.
     */
    frontTemplate: string;
  }

  export interface PostcardCreateWithPdfurl {
    /**
     * A URL pointing to a 2 page PDF file. The first page is the front of the postcard
     * and the second page is the back (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: OrderProfilesPostcardsAPI.PostcardSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | PostcardCreateWithPdfurl.ContactCreateWithFirstName
      | PostcardCreateWithPdfurl.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?:
      | PostcardCreateWithPdfurl.ContactCreateWithFirstName
      | PostcardCreateWithPdfurl.ContactCreateWithCompanyName
      | string;

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

  export namespace PostcardCreateWithPdfurl {
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

  export interface PostcardCreateWithPdfFile {
    /**
     * A 2 page PDF file. The first page is the front of the postcard and the second
     * page is the back (where the address will be stamped on).
     */
    pdf: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size: OrderProfilesPostcardsAPI.PostcardSize;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to:
      | PostcardCreateWithPdfFile.ContactCreateWithFirstName
      | PostcardCreateWithPdfFile.ContactCreateWithCompanyName
      | string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`. Unlike other order types, the sender
     * address is optional for postcards.
     */
    from?:
      | PostcardCreateWithPdfFile.ContactCreateWithFirstName
      | PostcardCreateWithPdfFile.ContactCreateWithCompanyName
      | string;

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

  export namespace PostcardCreateWithPdfFile {
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

export interface PostcardListParams {
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

export declare namespace Postcards {
  export {
    type Postcard as Postcard,
    type PostcardListResponse as PostcardListResponse,
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };
}
