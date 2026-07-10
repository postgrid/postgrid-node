// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContactsAPI from './contacts';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 *  Create and manage letter orders.
 */
export class Letters extends APIResource {
  /**
   * Create a letter. Note that you can supply one of the following:
   *
   * - HTML content for the letter
   * - A template ID for the letter
   * - A URL for a PDF for the letter Create a letter via a multipart/form-data
   *   request. Accepts the same fields as the JSON create body (nested objects are
   *   bracket-encoded form fields, e.g. `to[firstName]`); use this content type to
   *   upload the PDF file directly.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.letters.create({
   *   from: 'contact_123',
   *   html: '<html>Content</html>',
   *   to: 'contact_123',
   *   paper: 'standard',
   * });
   * ```
   */
  create(params: LetterCreateParams, options?: RequestOptions): APIPromise<LetterCreateResponse> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post(
      '/print-mail/v1/letters',
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([
            { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }

  /**
   * Retrieve a letter by ID.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.letters.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Letter> {
    return this._client.get(path`/print-mail/v1/letters/${id}`, options);
  }

  /**
   * Get a list of letters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const letter of client.printMail.letters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LetterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LettersSkipLimit, Letter> {
    return this._client.getAPIList('/print-mail/v1/letters', SkipLimit<Letter>, { query, ...options });
  }

  /**
   * Cancel a letter by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.letters.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Letter> {
    return this._client.delete(path`/print-mail/v1/letters/${id}`, options);
  }

  /**
   * Cancel a letter by ID with a note. Note that this operation cannot be undone and
   * that only letters with a status of `ready` can be cancelled.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.letters.cancel('id', {
   *   note: 'Cancelling this letter',
   * });
   * ```
   */
  cancel(id: string, body: LetterCancelParams, options?: RequestOptions): APIPromise<Letter> {
    return this._client.post(path`/print-mail/v1/letters/${id}/cancellation`, { body, ...options });
  }

  /**
   * Progresses a letter's `status` to the next stage. This is only available in test
   * mode and can be used to simulate how a live order would progress through the
   * different statuses.
   *
   * Note: this will fail with an `invalid_progression_error` if the status is one of
   * `completed` or `cancelled`.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.letters.progress(
   *   'id',
   * );
   * ```
   */
  progress(id: string, options?: RequestOptions): APIPromise<Letter> {
    return this._client.post(path`/print-mail/v1/letters/${id}/progressions`, options);
  }

  /**
   * Retrieve a letter preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   *
   * @example
   * ```ts
   * const response = await client.printMail.letters.retrieveURL(
   *   'id',
   * );
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<LetterRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/letters/${id}/url`, options);
  }
}

export type LettersSkipLimit = SkipLimit<Letter>;

/**
 * Enum representing the placement of the address on the letter.
 */
export type AddressPlacement = 'top_first_page' | 'insert_blank_page';

/**
 * Model representing an attached PDF.
 */
export interface AttachedPdf {
  /**
   * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
   */
  file: string | Uploadable;

  /**
   * Enum representing the placement of the attached PDF.
   */
  placement: 'before_template' | 'after_template';
}

export interface Letter {
  /**
   * A unique ID prefixed with letter\_
   */
  id: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement: AddressPlacement;

  /**
   * Indicates if the letter is in color.
   */
  color: boolean;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * Indicates if the letter is double-sided.
   */
  doubleSided: boolean;

  /**
   * The envelope (ID) for the letter or the default `standard` envelope.
   */
  envelope: string;

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
  mailingClass:
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
   * Always `letter`.
   */
  object: 'letter';

  /**
   * This order will transition from `ready` to `printing` on the day after this
   * date. For example, if this is a date on Tuesday, the order will transition to
   * `printing` on Wednesday at midnight eastern time.
   */
  sendDate: string;

  /**
   * Enum representing the supported letter sizes.
   */
  size: LetterSize;

  /**
   * See `OrderStatus` for more details on the status of this order.
   */
  status: 'ready' | 'printing' | 'processed_for_delivery' | 'completed' | 'cancelled';

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
   * Model representing an attached PDF.
   */
  attachedPDF?: AttachedPdf;

  /**
   * The cancellation details of this order. Populated if the order has been
   * cancelled.
   */
  cancellation?: Letter.Cancellation;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The HTML content for the letter. You can supply _either_ this or `template` but
   * not both.
   */
  html?: string;

  /**
   * The last date that the IMB status was updated. See `imbStatus` for more details.
   */
  imbDate?: string;

  /**
   * The Intelligent Mail Barcode (IMB) status of this order. Only populated for
   * US-printed and US-destined orders. This is the most detailed way to track
   * non-express/certified orders.
   */
  imbStatus?: 'entered_mail_stream' | 'out_for_delivery' | 'returned_to_sender';

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
   * Premium paper selection used for this letter.
   *
   * Available values include:
   *
   * - `standard`
   * - `premium_paper_letter_standard_white_70lb`
   * - `premium_paper_letter_standard_white_80lb`
   *
   * Not all premium paper options are enabled for all organizations. If omitted, the
   * organization default letter paper is used when configured; otherwise `standard`.
   */
  paper?:
    | 'standard'
    | 'premium_paper_letter_standard_white_70lb'
    | 'premium_paper_letter_standard_white_80lb'
    | (string & {});

  /**
   * The ID of the PDF workflow run that created the letter, if any.
   */
  pdfWorkflowRun?: string;

  /**
   * If specified, indicates which letter page is perforated. Currently, only the
   * first page can be perforated.
   */
  perforatedPage?: 1;

  /**
   * Model representing a plastic card.
   */
  plasticCard?: PlasticCard;

  /**
   * The return envelope (ID) sent out with the letter, if any.
   */
  returnEnvelope?: string;

  /**
   * The template ID used for the letter. You can supply _either_ this or `html` but
   * not both.
   */
  template?: string;

  /**
   * The tracking number of this order. Populated after an express/certified order
   * has been processed for delivery.
   */
  trackingNumber?: string;

  /**
   * If a PDF was uploaded for the letter, this will contain the signed link to the
   * uploaded PDF.
   */
  uploadedPDF?: string;

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

export namespace Letter {
  /**
   * The cancellation details of this order. Populated if the order has been
   * cancelled.
   */
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
}

/**
 * Enum representing the supported letter sizes.
 */
export type LetterSize = 'us_letter' | 'a4';

/**
 * Model representing a plastic card.
 */
export interface PlasticCard {
  /**
   * Enum representing the size of the plastic card.
   */
  size: 'standard';

  /**
   * Model representing a double-sided plastic card.
   */
  doubleSided?: PlasticCard.DoubleSided;

  /**
   * Model representing a single-sided plastic card.
   */
  singleSided?: PlasticCard.SingleSided;
}

export namespace PlasticCard {
  /**
   * Model representing a double-sided plastic card.
   */
  export interface DoubleSided {
    /**
     * The HTML content for the back side of the double-sided plastic card.
     */
    backHTML?: string;

    /**
     * The template ID for the back side of the double-sided plastic card.
     */
    backTemplate?: string;

    /**
     * The HTML content for the front side of the double-sided plastic card.
     */
    frontHTML?: string;

    /**
     * The template ID for the front side of the double-sided plastic card.
     */
    frontTemplate?: string;

    /**
     * A URL pointing to a PDF file for the double-sided plastic card or the file
     * itself.
     */
    pdf?: string | Uploadable;
  }

  /**
   * Model representing a single-sided plastic card.
   */
  export interface SingleSided {
    /**
     * The HTML content for the single-sided plastic card. Can specify one of this,
     * `template`, or `pdf`.
     */
    html?: string;

    /**
     * A URL pointing to a PDF file for the single-sided plastic card or the PDF file
     * itself.
     */
    pdf?: string | Uploadable;

    /**
     * The template ID for the single-sided plastic card.
     */
    template?: string;
  }
}

export type LetterCreateResponse = Letter | Letter;

export interface LetterRetrieveURLResponse {
  /**
   * A unique ID prefixed with letter\_
   */
  id: string;

  object: string;

  /**
   * A signed URL linking to the order preview PDF. The link remains valid for 15
   * minutes from the time of the API call.
   */
  url: string;
}

export type LetterCreateParams =
  | LetterCreateParams.LetterCreateWithHTML
  | LetterCreateParams.LetterCreateWithTemplate
  | LetterCreateParams.LetterCreateWithPdf;

export declare namespace LetterCreateParams {
  export interface LetterCreateWithHTML {
    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: The HTML content for the letter. You can supply _either_ this or
     * `template` but not both.
     */
    html: string;

    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: Enum representing the placement of the address on the letter.
     */
    addressPlacement?: AddressPlacement;

    /**
     * Body param: Model representing an attached PDF.
     */
    attachedPDF?: AttachedPdf;

    /**
     * Body param: Indicates if the letter is in color.
     */
    color?: boolean;

    /**
     * Body param: An optional string describing this resource. Will be visible in the
     * API and the dashboard.
     */
    description?: string;

    /**
     * Body param: Indicates if the letter is double-sided.
     */
    doubleSided?: boolean;

    /**
     * Body param: The envelope (ID) for the letter. You can either specify a custom
     * envelope ID or use the default `standard` envelope.
     */
    envelope?: string;

    /**
     * Body param: The mailing class of this order. If not provided, automatically set
     * to `first_class`.
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
     * Body param: These will be merged with the variables in the template or HTML you
     * create this order with. The keys in this object should match the variable names
     * in the template _exactly_ as they are case-sensitive. Note that these _do not_
     * apply to PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Body param: See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Body param: Premium paper selection used for this letter.
     *
     * Available values include:
     *
     * - `standard`
     * - `premium_paper_letter_standard_white_70lb`
     * - `premium_paper_letter_standard_white_80lb`
     *
     * Not all premium paper options are enabled for all organizations. If omitted, the
     * organization default letter paper is used when configured; otherwise `standard`.
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * Body param: If specified, indicates which letter page is perforated. Currently,
     * only the first page can be perforated.
     */
    perforatedPage?: 1;

    /**
     * Body param: Model representing a plastic card.
     */
    plasticCard?: PlasticCard;

    /**
     * Body param: The return envelope (ID) sent out with the letter, if any.
     */
    returnEnvelope?: string;

    /**
     * Body param: This order will transition from `ready` to `printing` on the day
     * after this date. You can use this parameter to schedule orders for a future
     * date.
     */
    sendDate?: string;

    /**
     * Body param: Enum representing the supported letter sizes.
     */
    size?: LetterSize;

    /**
     * Header param
     */
    'idempotency-key'?: string;
  }

  export interface LetterCreateWithTemplate {
    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: The template ID for the letter. You can supply _either_ this or
     * `html` but not both.
     */
    template: string;

    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: Enum representing the placement of the address on the letter.
     */
    addressPlacement?: AddressPlacement;

    /**
     * Body param: Model representing an attached PDF.
     */
    attachedPDF?: AttachedPdf;

    /**
     * Body param: Indicates if the letter is in color.
     */
    color?: boolean;

    /**
     * Body param: An optional string describing this resource. Will be visible in the
     * API and the dashboard.
     */
    description?: string;

    /**
     * Body param: Indicates if the letter is double-sided.
     */
    doubleSided?: boolean;

    /**
     * Body param: The envelope (ID) for the letter. You can either specify a custom
     * envelope ID or use the default `standard` envelope.
     */
    envelope?: string;

    /**
     * Body param: The mailing class of this order. If not provided, automatically set
     * to `first_class`.
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
     * Body param: These will be merged with the variables in the template or HTML you
     * create this order with. The keys in this object should match the variable names
     * in the template _exactly_ as they are case-sensitive. Note that these _do not_
     * apply to PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Body param: See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Body param: Premium paper selection used for this letter.
     *
     * Available values include:
     *
     * - `standard`
     * - `premium_paper_letter_standard_white_70lb`
     * - `premium_paper_letter_standard_white_80lb`
     *
     * Not all premium paper options are enabled for all organizations. If omitted, the
     * organization default letter paper is used when configured; otherwise `standard`.
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * Body param: If specified, indicates which letter page is perforated. Currently,
     * only the first page can be perforated.
     */
    perforatedPage?: 1;

    /**
     * Body param: Model representing a plastic card.
     */
    plasticCard?: PlasticCard;

    /**
     * Body param: The return envelope (ID) sent out with the letter, if any.
     */
    returnEnvelope?: string;

    /**
     * Body param: This order will transition from `ready` to `printing` on the day
     * after this date. You can use this parameter to schedule orders for a future
     * date.
     */
    sendDate?: string;

    /**
     * Body param: Enum representing the supported letter sizes.
     */
    size?: LetterSize;

    /**
     * Header param
     */
    'idempotency-key'?: string;
  }

  export interface LetterCreateWithPdf {
    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    from: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: A URL pointing to a PDF file for the letter or the PDF file itself.
     */
    pdf: string | Uploadable;

    /**
     * Body param: A contact provided in one of two ways:
     *
     * - an **inline contact body** with the same fields you would use to create a
     *   contact (there is no need to create the contact first), or
     * - the **ID of an existing contact** (e.g. `contact_123`).
     *
     * You never send the full stored contact object (with `id`, `object`,
     * `addressStatus`, `createdAt`, etc.) here — that shape is only ever returned in
     * responses.
     */
    to: ContactsAPI.ContactCreateWithFirstName | ContactsAPI.ContactCreateWithCompanyName | string;

    /**
     * Body param: Enum representing the placement of the address on the letter.
     */
    addressPlacement?: AddressPlacement;

    /**
     * Body param: Model representing an attached PDF.
     */
    attachedPDF?: AttachedPdf;

    /**
     * Body param: Indicates if the letter is in color.
     */
    color?: boolean;

    /**
     * Body param: An optional string describing this resource. Will be visible in the
     * API and the dashboard.
     */
    description?: string;

    /**
     * Body param: Indicates if the letter is double-sided.
     */
    doubleSided?: boolean;

    /**
     * Body param: The envelope (ID) for the letter. You can either specify a custom
     * envelope ID or use the default `standard` envelope.
     */
    envelope?: string;

    /**
     * Body param: The mailing class of this order. If not provided, automatically set
     * to `first_class`.
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
     * Body param: These will be merged with the variables in the template or HTML you
     * create this order with. The keys in this object should match the variable names
     * in the template _exactly_ as they are case-sensitive. Note that these _do not_
     * apply to PDFs uploaded with the order.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Body param: See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

    /**
     * Body param: Premium paper selection used for this letter.
     *
     * Available values include:
     *
     * - `standard`
     * - `premium_paper_letter_standard_white_70lb`
     * - `premium_paper_letter_standard_white_80lb`
     *
     * Not all premium paper options are enabled for all organizations. If omitted, the
     * organization default letter paper is used when configured; otherwise `standard`.
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * Body param: If specified, indicates which letter page is perforated. Currently,
     * only the first page can be perforated.
     */
    perforatedPage?: 1;

    /**
     * Body param: Model representing a plastic card.
     */
    plasticCard?: PlasticCard;

    /**
     * Body param: The return envelope (ID) sent out with the letter, if any.
     */
    returnEnvelope?: string;

    /**
     * Body param: This order will transition from `ready` to `printing` on the day
     * after this date. You can use this parameter to schedule orders for a future
     * date.
     */
    sendDate?: string;

    /**
     * Body param: Enum representing the supported letter sizes.
     */
    size?: LetterSize;

    /**
     * Header param
     */
    'idempotency-key'?: string;
  }
}

export interface LetterListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface LetterCancelParams {
  note: string;
}

export declare namespace Letters {
  export {
    type AddressPlacement as AddressPlacement,
    type AttachedPdf as AttachedPdf,
    type Letter as Letter,
    type LetterSize as LetterSize,
    type PlasticCard as PlasticCard,
    type LetterCreateResponse as LetterCreateResponse,
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LettersSkipLimit as LettersSkipLimit,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
    type LetterCancelParams as LetterCancelParams,
  };
}
