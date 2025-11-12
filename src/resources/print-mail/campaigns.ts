// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Create a new campaign.
   *
   * A campaign links a mailing list with a specific mail piece profile (letter,
   * postcard, cheque, or self-mailer) to send bulk mail. Upon creation, the campaign
   * enters the `drafting` status while assets are validated.
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
   * The ID of the cheque profile used for this campaign, if applicable.
   */
  chequeProfile?: string;

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
   * The ID of the letter profile used for this campaign, if applicable.
   */
  letterProfile?: string;

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
   * The ID of the postcard profile used for this campaign, if applicable.
   */
  postcardProfile?: string;

  /**
   * A temporary URL to download the processing report, available once the campaign
   * is in the `ready` status.
   */
  reportURL?: string;

  /**
   * The ID of the self-mailer profile used for this campaign, if applicable.
   */
  selfMailerProfile?: string;

  /**
   * The scheduled date and time for the campaign to be sent.
   */
  sendDate?: string;
}

export namespace Campaign {
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
   * Body param: The ID of the cheque profile used for this campaign, if applicable.
   */
  chequeProfile?: string;

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
   * Body param: The ID of the letter profile used for this campaign, if applicable.
   */
  letterProfile?: string;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: The ID of the postcard profile used for this campaign, if
   * applicable.
   */
  postcardProfile?: string;

  /**
   * Body param: The ID of the self-mailer profile used for this campaign, if
   * applicable.
   */
  selfMailerProfile?: string;

  /**
   * Body param: The scheduled date and time for the campaign to be sent.
   */
  sendDate?: string;

  /**
   * Header param:
   */
  'idempotency-key'?: string;
}

export interface CampaignUpdateParams {
  /**
   * The ID of the cheque profile to use. Setting this will remove other profile
   * types. Set to `null` to remove.
   */
  chequeProfile?: string | null;

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
   * The ID of the letter profile to use. Setting this will remove other profile
   * types. Set to `null` to remove.
   */
  letterProfile?: string | null;

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
   * The ID of the postcard profile to use. Setting this will remove other profile
   * types. Set to `null` to remove.
   */
  postcardProfile?: string | null;

  /**
   * The ID of the self-mailer profile to use. Setting this will remove other profile
   * types. Set to `null` to remove.
   */
  selfMailerProfile?: string | null;
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
