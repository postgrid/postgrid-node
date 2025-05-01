// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ContactsAPI from './contacts';
import * as Shared from './shared';
import { List, type ListParams } from '../pagination';

export class Letters extends APIResource {
  /**
   * Create a letter. Note that you can supply one of the following:
   *
   * - HTML content for the letter
   * - A template ID for the letter
   * - A URL or file for a PDF for the letter
   * - Upload the aforementioned PDF file via a multipart form upload request
   */
  create(body: LetterCreateParams, options?: Core.RequestOptions): Core.APIPromise<Letter> {
    return this._client.post('/letters', { body, ...options });
  }

  /**
   * Retrieve a letter by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Letter> {
    return this._client.get(`/letters/${id}`, options);
  }

  /**
   * Get a list of letters.
   */
  list(query?: LetterListParams, options?: Core.RequestOptions): Core.PagePromise<LettersList, Letter>;
  list(options?: Core.RequestOptions): Core.PagePromise<LettersList, Letter>;
  list(
    query: LetterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LettersList, Letter> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/letters', LettersList, { query, ...options });
  }

  /**
   * Cancel a letter by ID. Note that this operation cannot be undone.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Letter> {
    return this._client.delete(`/letters/${id}`, options);
  }

  /**
   * Retrieve a letter preview URL.
   *
   * This is only available for customers with our document management addon, which
   * offers document generation and hosting capabilities. This endpoint has a much
   * higher rate limit than the regular order retrieval endpoint, so it is suitable
   * for customer-facing use-cases.
   */
  url(id: string, options?: Core.RequestOptions): Core.APIPromise<LetterURLResponse> {
    return this._client.get(`/letters/${id}/url`, options);
  }
}

export class LettersList extends List<Letter> {}

export interface Letter {
  /**
   * A unique ID prefixed with letter\_
   */
  id: string;

  /**
   * Enum representing the placement of the address on the letter.
   */
  addressPlacement: 'top_first_page' | 'insert_blank_page';

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
  size: 'us_letter' | 'a4';

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
  attachedPDF?: Letter.AttachedPdf;

  /**
   * The cancellation details of this order. Populated if the order has been
   * cancelled.
   */
  cancellation?: Shared.Cancellation;

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
  mergeVariables?: Record<string, unknown>;

  /**
   * See the section on Metadata.
   */
  metadata?: Record<string, unknown>;

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
  plasticCard?: Letter.PlasticCard;

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

export interface LetterList {
  data: Array<Letter>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface LetterURLResponse {
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
    mergeVariables?: Record<string, unknown>;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

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
    mergeVariables?: Record<string, unknown>;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

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

Letters.LettersList = LettersList;

export declare namespace Letters {
  export {
    type Letter as Letter,
    type LetterList as LetterList,
    type LetterURLResponse as LetterURLResponse,
    LettersList as LettersList,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };
}
