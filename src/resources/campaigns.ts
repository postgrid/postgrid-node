// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { List, type ListParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Create a new campaign.
   *
   * A campaign links a mailing list with a specific mail piece profile (letter,
   * postcard, cheque, or self-mailer) to send bulk mail. Upon creation, the campaign
   * enters the `drafting` status while assets are validated.
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<CampaignCreateResponse> {
    return this._client.post('/campaigns', { body, ...options });
  }

  /**
   * Retrieve a specific campaign by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.get(path`/campaigns/${id}`, options);
  }

  /**
   * Update an existing campaign.
   *
   * Campaigns can only be updated if they are in the `draft` or `changes_required`
   * status. Updating a campaign will trigger reprocessing and set its status back to
   * `drafting`.
   */
  update(
    id: string,
    body: CampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignUpdateResponse> {
    return this._client.post(path`/campaigns/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of campaigns.
   *
   * Returns a paginated list of campaigns associated with the authenticated
   * organization, filterable by various parameters.
   */
  list(
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CampaignListResponsesList, CampaignListResponse> {
    return this._client.getAPIList('/campaigns', List<CampaignListResponse>, { query, ...options });
  }

  /**
   * Delete a campaign.
   *
   * Campaigns can only be deleted if they are in `draft`, `changes_required`, or
   * `ready` status. This also permanently deletes associated resources. This
   * operation cannot be undone.
   */
  delete(id: string, options?: RequestOptions): APIPromise<CampaignDeleteResponse> {
    return this._client.delete(path`/campaigns/${id}`, options);
  }

  /**
   * Send a campaign for processing.
   *
   * This action transitions a campaign from the `draft` status to `creating_orders`.
   * You can optionally specify a future `sendDate`. Once sent, the campaign cannot
   * be updated.
   */
  send(id: string, body: CampaignSendParams, options?: RequestOptions): APIPromise<CampaignSendResponse> {
    return this._client.post(path`/campaigns/${id}/send`, { body, ...options });
  }
}

export type CampaignListResponsesList = List<CampaignListResponse>;

/**
 * Represents a bulk mail campaign.
 */
export interface CampaignCreateResponse {
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
  errors?: Array<CampaignCreateResponse.Error>;

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

export namespace CampaignCreateResponse {
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

/**
 * Represents a bulk mail campaign.
 */
export interface CampaignRetrieveResponse {
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
  errors?: Array<CampaignRetrieveResponse.Error>;

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

export namespace CampaignRetrieveResponse {
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

/**
 * Represents a bulk mail campaign.
 */
export interface CampaignUpdateResponse {
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
  errors?: Array<CampaignUpdateResponse.Error>;

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

export namespace CampaignUpdateResponse {
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

/**
 * Represents a bulk mail campaign.
 */
export interface CampaignListResponse {
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
  errors?: Array<CampaignListResponse.Error>;

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

export namespace CampaignListResponse {
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

/**
 * Represents a bulk mail campaign.
 */
export interface CampaignSendResponse {
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
  errors?: Array<CampaignSendResponse.Error>;

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

export namespace CampaignSendResponse {
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

export interface CampaignCreateParams {
  /**
   * The ID of the mailing list associated with this campaign.
   */
  mailingList: string;

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
   * The ID of the letter profile used for this campaign, if applicable.
   */
  letterProfile?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The ID of the postcard profile used for this campaign, if applicable.
   */
  postcardProfile?: string;

  /**
   * The ID of the self-mailer profile used for this campaign, if applicable.
   */
  selfMailerProfile?: string;

  /**
   * The scheduled date and time for the campaign to be sent.
   */
  sendDate?: string;
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

export interface CampaignListParams extends ListParams {
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
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignUpdateResponse as CampaignUpdateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignSendResponse as CampaignSendResponse,
    type CampaignListResponsesList as CampaignListResponsesList,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };
}
