// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChequesAPI from './cheques';
import * as LettersAPI from './letters';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 *  The campaigns API enables you to send out large volumes of fully
 *  personalized mail to a mailing list.
 */
export class Campaigns extends APIResource {
  /**
   * Create a new campaign.
   *
   * A campaign links a mailing list with a specific mail piece configuration
   * (letter, postcard, cheque, self-mailer, or snap pack) to send bulk mail. Only
   * one collateral type can be set per campaign.
   *
   * Upon creation, the campaign enters the `drafting` status while assets are
   * validated.
   *
   * @example
   * ```ts
   * const campaign = await client.printMail.campaigns.create({
   *   mailingList: 'mailingList',
   * });
   * ```
   */
  create(params: CampaignCreateParams, options?: RequestOptions): APIPromise<Campaign> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post('/print-mail/v1/campaigns', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a specific campaign by its ID.
   *
   * @example
   * ```ts
   * const campaign = await client.printMail.campaigns.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.get(path`/print-mail/v1/campaigns/${id}`, options);
  }

  /**
   * Update an existing campaign.
   *
   * Campaigns can only be updated if they are in the `draft` or `changes_required`
   * status. Updating a campaign will trigger reprocessing and set its status back to
   * `drafting`.
   *
   * @example
   * ```ts
   * const campaign = await client.printMail.campaigns.update(
   *   'id',
   * );
   * ```
   */
  update(id: string, body: CampaignUpdateParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/print-mail/v1/campaigns/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of campaigns.
   *
   * Returns a paginated list of campaigns associated with the authenticated
   * organization, filterable by various parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const campaign of client.printMail.campaigns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CampaignsSkipLimit, Campaign> {
    return this._client.getAPIList('/print-mail/v1/campaigns', SkipLimit<Campaign>, { query, ...options });
  }

  /**
   * Delete a campaign.
   *
   * Campaigns can only be deleted if they are in `draft`, `changes_required`, or
   * `ready` status. This also permanently deletes associated resources. This
   * operation cannot be undone.
   *
   * @example
   * ```ts
   * const campaign = await client.printMail.campaigns.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CampaignDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/campaigns/${id}`, options);
  }

  /**
   * Send a campaign for processing.
   *
   * This action transitions a campaign from the `draft` status to `creating_orders`.
   * You can optionally specify a future `sendDate`. Once sent, the campaign cannot
   * be updated.
   *
   * @example
   * ```ts
   * const campaign = await client.printMail.campaigns.send(
   *   'id',
   * );
   * ```
   */
  send(id: string, body: CampaignSendParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/print-mail/v1/campaigns/${id}/send`, { body, ...options });
  }
}

export type CampaignsSkipLimit = SkipLimit<Campaign>;

/**
 * Represents a bulk mail campaign.
 */
export interface Campaign {
  /**
   * A unique ID prefixed with campaign\_
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * The number of orders successfully created for this campaign.
   */
  createdCount: number;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the mailing list associated with this campaign.
   */
  mailingList: string;

  /**
   * Status of the campaign lifecycle.
   */
  status:
    | 'drafting'
    | 'changes_required'
    | 'creating_orders'
    | 'draft'
    | 'ready'
    | 'printing'
    | 'processed_for_delivery';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * Inline cheque configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  cheque?: Campaign.Cheque;

  /**
   * The ID of the default sender contact to use for orders if not specified per
   * recipient.
   */
  defaultSenderContact?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * A list of processing errors encountered, if any. Present when status is
   * 'changes_required'.
   */
  errors?: Array<Campaign.Error>;

  /**
   * Inline letter configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  letter?: Campaign.Letter;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A temporary URL to preview the first rendered order, available once the campaign
   * status is 'draft' or later.
   */
  orderPreviewURL?: string;

  /**
   * Inline postcard configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  postcard?: Campaign.Postcard;

  /**
   * A temporary URL to download the processing report, available once the campaign
   * is in the `ready` status.
   */
  reportURL?: string;

  /**
   * Inline self-mailer configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  selfMailer?: Campaign.SelfMailer;

  /**
   * The scheduled date and time for the campaign to be sent.
   */
  sendDate?: string;

  /**
   * Inline snap pack configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  snapPack?: Campaign.SnapPack;
}

export namespace Campaign {
  /**
   * Inline cheque configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Cheque {
    /**
     * ID of the bank account to use for the cheque.
     */
    bankAccount?: string;

    /**
     * Enum representing the supported currency codes.
     */
    currencyCode?: 'CAD' | 'USD';

    /**
     * An optional description.
     */
    description?: string;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * Settings for the attached letter (e.g., color printing).
     */
    letterSettings?: Cheque.LetterSettings;

    /**
     * ID of a template for an optional attached letter. Cannot be used with
     * `letterPDF`.
     */
    letterTemplate?: string;

    /**
     * A signed URL to the attached letter PDF, if any.
     */
    letterUploadedPDF?: string;

    /**
     * A publicly accessible URL for the logo to print on the cheque.
     */
    logo?: string;

    /**
     * Mailing class for the cheque.
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
     * Memo line text for the cheque.
     */
    memo?: string;

    /**
     * Default merge variables for the cheque.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Message included on the cheque stub.
     */
    message?: string;

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported cheque sizes.
     */
    size?: ChequesAPI.ChequeSize;
  }

  export namespace Cheque {
    /**
     * Settings for the attached letter (e.g., color printing).
     */
    export interface LetterSettings {
      /**
       * Whether to print the attached letter in color.
       */
      color?: boolean;
    }
  }

  /**
   * Details of a specific error encountered during campaign processing.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered during campaign processing.
     */
    type: 'processing_error' | 'internal_error';
  }

  /**
   * Inline letter configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Letter {
    /**
     * Enum representing the placement of the address on the letter.
     */
    addressPlacement?: LettersAPI.AddressPlacement;

    /**
     * Model representing an attached PDF.
     */
    attachedPDF?: LettersAPI.AttachedPdf;

    /**
     * Whether to print in color.
     */
    color?: boolean;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * Whether to print on both sides of the paper.
     */
    doubleSided?: boolean;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * The type of envelope used for the letter.
     */
    envelopeType?: 'standard_double_window' | 'flat';

    /**
     * Mailing class for the letter.
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
     * Default merge variables for the letter.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * Which page number should be perforated (if any).
     */
    perforatedPage?: 1;

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported letter sizes.
     */
    size?: LettersAPI.LetterSize;

    /**
     * ID of a template for the letter content. Cannot be used with `pdf`.
     */
    template?: string;

    /**
     * A signed URL to the uploaded PDF, if any.
     */
    uploadedPDF?: string;
  }

  /**
   * Inline postcard configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Postcard {
    /**
     * ID of the template for the back side. Cannot be used with `pdf`.
     */
    backTemplate?: string;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the front side. Cannot be used with `pdf`.
     */
    frontTemplate?: string;

    /**
     * Mailing class for the postcard.
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
     * Default merge variables for the postcard.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_heavy_1_glossy'
      | 'premium_paper_postcard_uv_glossy_ss'
      | 'premium_paper_postcard_uv_glossy_ss_120lb'
      | 'premium_paper_postcard_satin_ds'
      | (string & {});

    /**
     * Enum representing the supported postcard sizes.
     */
    size?: '6x4' | '9x6' | '11x6';

    /**
     * A signed URL to the uploaded PDF, if any.
     */
    uploadedPDF?: string;
  }

  /**
   * Inline self-mailer configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SelfMailer {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the self-mailer.
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
     * Default merge variables for the self-mailer.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size?: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

    /**
     * A signed URL to the uploaded PDF, if any.
     */
    uploadedPDF?: string;
  }

  /**
   * Inline snap pack configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SnapPack {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the snap pack.
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
     * Default merge variables for the snap pack.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size?: '8.5x11_bifold_v';

    /**
     * A signed URL to the uploaded PDF, if any.
     */
    uploadedPDF?: string;
  }
}

export interface CampaignDeleteResponse {
  /**
   * A unique ID prefixed with campaign\_
   */
  id: string;

  deleted: true;
}

export interface CampaignCreateParams {
  /**
   * Body param: The ID of the mailing list associated with this campaign.
   */
  mailingList: string;

  /**
   * Body param: Inline cheque configuration for a campaign. All fields are optional
   * since campaigns may be in a partial state during drafting.
   */
  cheque?: CampaignCreateParams.Cheque;

  /**
   * Body param: The ID of the default sender contact to use for orders if not
   * specified per recipient.
   */
  defaultSenderContact?: string;

  /**
   * Body param: An optional string describing this resource. Will be visible in the
   * API and the dashboard.
   */
  description?: string;

  /**
   * Body param: Inline letter configuration for a campaign. All fields are optional
   * since campaigns may be in a partial state during drafting.
   */
  letter?: CampaignCreateParams.Letter;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Inline postcard configuration for a campaign. All fields are
   * optional since campaigns may be in a partial state during drafting.
   */
  postcard?: CampaignCreateParams.Postcard;

  /**
   * Body param: Inline self-mailer configuration for a campaign. All fields are
   * optional since campaigns may be in a partial state during drafting.
   */
  selfMailer?: CampaignCreateParams.SelfMailer;

  /**
   * Body param: The scheduled date and time for the campaign to be sent.
   */
  sendDate?: string;

  /**
   * Body param: Inline snap pack configuration for a campaign. All fields are
   * optional since campaigns may be in a partial state during drafting.
   */
  snapPack?: CampaignCreateParams.SnapPack;

  /**
   * Header param
   */
  'idempotency-key'?: string;
}

export namespace CampaignCreateParams {
  /**
   * Inline cheque configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Cheque {
    /**
     * ID of the bank account to use for the cheque.
     */
    bankAccount?: string;

    /**
     * Enum representing the supported currency codes.
     */
    currencyCode?: 'CAD' | 'USD';

    /**
     * An optional description.
     */
    description?: string;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * PDF file for an optional attached letter. Cannot be used with `letterTemplate`.
     */
    letterPDF?: string;

    /**
     * Settings for the attached letter (e.g., color printing).
     */
    letterSettings?: Cheque.LetterSettings;

    /**
     * ID of a template for an optional attached letter. Cannot be used with
     * `letterPDF`.
     */
    letterTemplate?: string;

    /**
     * A publicly accessible URL for the logo to print on the cheque.
     */
    logo?: string;

    /**
     * Mailing class for the cheque.
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
     * Memo line text for the cheque.
     */
    memo?: string;

    /**
     * Default merge variables for the cheque.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Message included on the cheque stub.
     */
    message?: string;

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported cheque sizes.
     */
    size?: ChequesAPI.ChequeSize;
  }

  export namespace Cheque {
    /**
     * Settings for the attached letter (e.g., color printing).
     */
    export interface LetterSettings {
      /**
       * Whether to print the attached letter in color.
       */
      color?: boolean;
    }
  }

  /**
   * Inline letter configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Letter {
    /**
     * Enum representing the placement of the address on the letter.
     */
    addressPlacement?: LettersAPI.AddressPlacement;

    /**
     * Model representing an attached PDF.
     */
    attachedPDF?: LettersAPI.AttachedPdf;

    /**
     * Whether to print in color.
     */
    color?: boolean;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * Whether to print on both sides of the paper.
     */
    doubleSided?: boolean;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * The type of envelope used for the letter.
     */
    envelopeType?: 'standard_double_window' | 'flat';

    /**
     * Mailing class for the letter.
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
     * Default merge variables for the letter.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * A PDF file or URL for the letter content. Cannot be used with `template`.
     */
    pdf?: string;

    /**
     * Which page number should be perforated (if any).
     */
    perforatedPage?: 1;

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported letter sizes.
     */
    size?: LettersAPI.LetterSize;

    /**
     * ID of a template for the letter content. Cannot be used with `pdf`.
     */
    template?: string;
  }

  /**
   * Inline postcard configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Postcard {
    /**
     * ID of the template for the back side. Cannot be used with `pdf`.
     */
    backTemplate?: string;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the front side. Cannot be used with `pdf`.
     */
    frontTemplate?: string;

    /**
     * Mailing class for the postcard.
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
     * Default merge variables for the postcard.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_heavy_1_glossy'
      | 'premium_paper_postcard_uv_glossy_ss'
      | 'premium_paper_postcard_uv_glossy_ss_120lb'
      | 'premium_paper_postcard_satin_ds'
      | (string & {});

    /**
     * A 2-page PDF file for the postcard content (front and back). Cannot be used with
     * `frontTemplate`/`backTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size?: '6x4' | '9x6' | '11x6';
  }

  /**
   * Inline self-mailer configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SelfMailer {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the self-mailer.
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
     * Default merge variables for the self-mailer.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * A 2-page PDF file for the self-mailer content. Cannot be used with
     * `insideTemplate`/`outsideTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size?: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';
  }

  /**
   * Inline snap pack configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SnapPack {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the snap pack.
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
     * Default merge variables for the snap pack.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * A 2-page PDF file for the snap pack content. Cannot be used with
     * `insideTemplate`/`outsideTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size?: '8.5x11_bifold_v';
  }
}

export interface CampaignUpdateParams {
  /**
   * Inline cheque configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  cheque?: CampaignUpdateParams.Cheque | null;

  /**
   * The ID of the default sender contact. Set to `null` to remove.
   */
  defaultSenderContact?: string | null;

  /**
   * An optional description for the campaign. Set to `null` to remove the existing
   * description.
   */
  description?: string | null;

  /**
   * Inline letter configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  letter?: CampaignUpdateParams.Letter | null;

  /**
   * The ID of the mailing list to associate with this campaign.
   */
  mailingList?: string;

  /**
   * Optional key-value data associated with the campaign. Set to `null` to remove
   * existing metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Inline postcard configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  postcard?: CampaignUpdateParams.Postcard | null;

  /**
   * Inline self-mailer configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  selfMailer?: CampaignUpdateParams.SelfMailer | null;

  /**
   * Inline snap pack configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  snapPack?: CampaignUpdateParams.SnapPack | null;
}

export namespace CampaignUpdateParams {
  /**
   * Inline cheque configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Cheque {
    /**
     * ID of the bank account to use for the cheque.
     */
    bankAccount?: string;

    /**
     * Enum representing the supported currency codes.
     */
    currencyCode?: 'CAD' | 'USD';

    /**
     * An optional description.
     */
    description?: string;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * PDF file for an optional attached letter. Cannot be used with `letterTemplate`.
     */
    letterPDF?: string;

    /**
     * Settings for the attached letter (e.g., color printing).
     */
    letterSettings?: Cheque.LetterSettings;

    /**
     * ID of a template for an optional attached letter. Cannot be used with
     * `letterPDF`.
     */
    letterTemplate?: string;

    /**
     * A publicly accessible URL for the logo to print on the cheque.
     */
    logo?: string;

    /**
     * Mailing class for the cheque.
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
     * Memo line text for the cheque.
     */
    memo?: string;

    /**
     * Default merge variables for the cheque.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Message included on the cheque stub.
     */
    message?: string;

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported cheque sizes.
     */
    size?: ChequesAPI.ChequeSize;
  }

  export namespace Cheque {
    /**
     * Settings for the attached letter (e.g., color printing).
     */
    export interface LetterSettings {
      /**
       * Whether to print the attached letter in color.
       */
      color?: boolean;
    }
  }

  /**
   * Inline letter configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Letter {
    /**
     * Enum representing the placement of the address on the letter.
     */
    addressPlacement?: LettersAPI.AddressPlacement;

    /**
     * Model representing an attached PDF.
     */
    attachedPDF?: LettersAPI.AttachedPdf;

    /**
     * Whether to print in color.
     */
    color?: boolean;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * Whether to print on both sides of the paper.
     */
    doubleSided?: boolean;

    /**
     * The custom envelope ID or `"standard"`.
     */
    envelope?: string;

    /**
     * The type of envelope used for the letter.
     */
    envelopeType?: 'standard_double_window' | 'flat';

    /**
     * Mailing class for the letter.
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
     * Default merge variables for the letter.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_letter_standard_white_70lb'
      | 'premium_paper_letter_standard_white_80lb'
      | (string & {});

    /**
     * A PDF file or URL for the letter content. Cannot be used with `template`.
     */
    pdf?: string;

    /**
     * Which page number should be perforated (if any).
     */
    perforatedPage?: 1;

    /**
     * ID of a return envelope to include.
     */
    returnEnvelope?: string;

    /**
     * Enum representing the supported letter sizes.
     */
    size?: LettersAPI.LetterSize;

    /**
     * ID of a template for the letter content. Cannot be used with `pdf`.
     */
    template?: string;
  }

  /**
   * Inline postcard configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface Postcard {
    /**
     * ID of the template for the back side. Cannot be used with `pdf`.
     */
    backTemplate?: string;

    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the front side. Cannot be used with `pdf`.
     */
    frontTemplate?: string;

    /**
     * Mailing class for the postcard.
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
     * Default merge variables for the postcard.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * Premium paper selection ("standard" or a premium paper ID). If omitted, org
     * default is used when configured; otherwise "standard".
     */
    paper?:
      | 'standard'
      | 'premium_paper_heavy_1_glossy'
      | 'premium_paper_postcard_uv_glossy_ss'
      | 'premium_paper_postcard_uv_glossy_ss_120lb'
      | 'premium_paper_postcard_satin_ds'
      | (string & {});

    /**
     * A 2-page PDF file for the postcard content (front and back). Cannot be used with
     * `frontTemplate`/`backTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported postcard sizes.
     */
    size?: '6x4' | '9x6' | '11x6';
  }

  /**
   * Inline self-mailer configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SelfMailer {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the self-mailer.
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
     * Default merge variables for the self-mailer.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * A 2-page PDF file for the self-mailer content. Cannot be used with
     * `insideTemplate`/`outsideTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported self-mailer sizes.
     */
    size?: '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';
  }

  /**
   * Inline snap pack configuration for a campaign. All fields are optional since
   * campaigns may be in a partial state during drafting.
   */
  export interface SnapPack {
    /**
     * An optional description.
     */
    description?: string;

    /**
     * ID of the template for the inside. Cannot be used with `pdf`.
     */
    insideTemplate?: string;

    /**
     * Mailing class for the snap pack.
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
     * Default merge variables for the snap pack.
     */
    mergeVariables?: { [key: string]: unknown };

    /**
     * Optional key-value metadata.
     */
    metadata?: { [key: string]: string };

    /**
     * ID of the template for the outside. Cannot be used with `pdf`.
     */
    outsideTemplate?: string;

    /**
     * A 2-page PDF file for the snap pack content. Cannot be used with
     * `insideTemplate`/`outsideTemplate`.
     */
    pdf?: string;

    /**
     * Enum representing the supported snap pack sizes.
     */
    size?: '8.5x11_bifold_v';
  }
}

export interface CampaignListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface CampaignSendParams {
  /**
   * The date and time the campaign should be sent. Must be in the future. If
   * omitted, defaults to the earliest possible processing date.
   */
  sendDate?: (string & {}) | string;
}

export declare namespace Campaigns {
  export {
    type Campaign as Campaign,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignsSkipLimit as CampaignsSkipLimit,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };
}
