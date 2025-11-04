// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LettersAPI from '../../letters';
import { LettersList } from '../../letters';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { List, type ListParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Letters extends APIResource {
  /**
   * Create a letter. Note that you can supply one of the following:
   *
   * - HTML content for the letter
   * - A template ID for the letter
   * - A URL or file for a PDF for the letter
   * - Upload the aforementioned PDF file via a multipart form upload request
   *
   * @example
   * ```ts
   * const letter = await client.printMail.v1.letters.create({
   *   from: 'contact_123',
   *   html: '<html>Content</html>',
   *   to: 'contact_123',
   * });
   * ```
   */
  create(body: LetterCreateParams, options?: RequestOptions): APIPromise<LettersAPI.Letter> {
    return this._client.post('/print-mail/v1/letters', { body, ...options });
  }

  /**
   * Retrieve a letter by ID.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.v1.letters.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LettersAPI.Letter> {
    return this._client.get(path`/print-mail/v1/letters/${id}`, options);
  }

  /**
   * Get a list of letters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const letter of client.printMail.v1.letters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LetterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LettersList, LettersAPI.Letter> {
    return this._client.getAPIList('/print-mail/v1/letters', List<LettersAPI.Letter>, { query, ...options });
  }

  /**
   * Cancel a letter by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const letter = await client.printMail.v1.letters.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<LettersAPI.Letter> {
    return this._client.delete(path`/print-mail/v1/letters/${id}`, options);
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
   * const response =
   *   await client.printMail.v1.letters.retrieveURL('id');
   * ```
   */
  retrieveURL(id: string, options?: RequestOptions): APIPromise<LetterRetrieveURLResponse> {
    return this._client.get(path`/print-mail/v1/letters/${id}/url`, options);
  }
}

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
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * The HTML content for the letter. You can supply _either_ this or `template` but
     * not both.
     */
    html: string;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * Enum representing the placement of the address on the letter.
     */
    addressPlacement?: 'top_first_page' | 'insert_blank_page';

    /**
     * Model representing an attached PDF.
     */
    attachedPDF?: LetterCreateWithHTML.AttachedPdf;

    /**
     * Indicates if the letter is in color.
     */
    color?: boolean;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * Indicates if the letter is double-sided.
     */
    doubleSided?: boolean;

    /**
     * The envelope (ID) for the letter. You can either specify a custom envelope ID or
     * use the default `standard` envelope.
     */
    envelope?: string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
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
     * If specified, indicates which letter page is perforated. Currently, only the
     * first page can be perforated.
     */
    perforatedPage?: 1;

    /**
     * Model representing a plastic card.
     */
    plasticCard?: LetterCreateWithHTML.PlasticCard;

    /**
     * The return envelope (ID) sent out with the letter, if any.
     */
    returnEnvelope?: string;

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;

    /**
     * Enum representing the supported letter sizes.
     */
    size?: 'us_letter' | 'a4';
  }

  export namespace LetterCreateWithHTML {
    /**
     * Model representing an attached PDF.
     */
    export interface AttachedPdf {
      /**
       * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
       */
      file: string;

      /**
       * Enum representing the placement of the attached PDF.
       */
      placement: 'before_template' | 'after_template';
    }

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
        pdf?: string;
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
        pdf?: string;

        /**
         * The template ID for the single-sided plastic card.
         */
        template?: string;
      }
    }
  }

  export interface LetterCreateWithTemplate {
    /**
     * The template ID for the letter. You can supply _either_ this or `html` but not
     * both.
     */
    template: string;
  }

  export interface LetterCreateWithPdf {
    /**
     * The contact information of the sender. You can pass contact information inline
     * here just like you can for the `to`.
     */
    from: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * A URL pointing to a PDF file for the letter or the PDF file itself.
     */
    pdf: string;

    /**
     * The recipient of this order. You can either supply the contact information
     * inline here or provide a contact ID. PostGrid will automatically deduplicate
     * contacts regardless of whether you provide the information inline here or call
     * the contact creation endpoint.
     */
    to: Shared.ContactCreateWithFirstName | Shared.ContactCreateWithCompanyName | string;

    /**
     * Enum representing the placement of the address on the letter.
     */
    addressPlacement?: 'top_first_page' | 'insert_blank_page';

    /**
     * Model representing an attached PDF.
     */
    attachedPDF?: LetterCreateWithPdf.AttachedPdf;

    /**
     * Indicates if the letter is in color.
     */
    color?: boolean;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * Indicates if the letter is double-sided.
     */
    doubleSided?: boolean;

    /**
     * The envelope (ID) for the letter. You can either specify a custom envelope ID or
     * use the default `standard` envelope.
     */
    envelope?: string;

    /**
     * The mailing class of this order. If not provided, automatically set to
     * `first_class`.
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
     * If specified, indicates which letter page is perforated. Currently, only the
     * first page can be perforated.
     */
    perforatedPage?: 1;

    /**
     * Model representing a plastic card.
     */
    plasticCard?: LetterCreateWithPdf.PlasticCard;

    /**
     * The return envelope (ID) sent out with the letter, if any.
     */
    returnEnvelope?: string;

    /**
     * This order will transition from `ready` to `printing` on the day after this
     * date. You can use this parameter to schedule orders for a future date.
     */
    sendDate?: string;

    /**
     * Enum representing the supported letter sizes.
     */
    size?: 'us_letter' | 'a4';
  }

  export namespace LetterCreateWithPdf {
    /**
     * Model representing an attached PDF.
     */
    export interface AttachedPdf {
      /**
       * The file (multipart form upload) or URL pointing to a PDF for the attached PDF.
       */
      file: string;

      /**
       * Enum representing the placement of the attached PDF.
       */
      placement: 'before_template' | 'after_template';
    }

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
        pdf?: string;
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
        pdf?: string;

        /**
         * The template ID for the single-sided plastic card.
         */
        template?: string;
      }
    }
  }
}

export interface LetterListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace Letters {
  export {
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };
}

export { type LettersList };
