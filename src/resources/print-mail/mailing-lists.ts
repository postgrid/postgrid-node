// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MailingLists extends APIResource {
  /**
   * Create a new mailing list.
   *
   * @example
   * ```ts
   * const mailingList =
   *   await client.printMail.mailingLists.create({
   *     description: 'Test Mailing List',
   *     metadata: { campaign: 'launch' },
   *   });
   * ```
   */
  create(params: MailingListCreateParams, options?: RequestOptions): APIPromise<MailingList> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post('/print-mail/v1/mailing_lists', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a specific mailing list by its ID.
   *
   * @example
   * ```ts
   * const mailingList =
   *   await client.printMail.mailingLists.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MailingList> {
    return this._client.get(path`/print-mail/v1/mailing_lists/${id}`, options);
  }

  /**
   * Update an existing mailing list.
   *
   * @example
   * ```ts
   * const mailingListUpdate =
   *   await client.printMail.mailingLists.update('id', {
   *     description: 'Updated Mailing List Description',
   *   });
   * ```
   */
  update(id: string, body: MailingListUpdateParams, options?: RequestOptions): APIPromise<MailingListUpdate> {
    return this._client.post(path`/print-mail/v1/mailing_lists/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of mailing lists.
   *
   * Returns a paginated list of mailing lists associated with the authenticated
   * organization, filterable by various parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mailingList of client.printMail.mailingLists.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MailingListListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MailingListsSkipLimit, MailingList> {
    return this._client.getAPIList('/print-mail/v1/mailing_lists', SkipLimit<MailingList>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a mailing list.
   *
   * This permanently deletes the mailing list and its associations. This operation
   * cannot be undone.
   *
   * @example
   * ```ts
   * const mailingList =
   *   await client.printMail.mailingLists.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MailingListDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/mailing_lists/${id}`, options);
  }

  /**
   * Runs a mailing list job. Mailing list jobs allow you to add or remove contacts
   * to your mailing list from mailing list imports or directly with contact IDs.
   * Only one job can be ran at a time and jobs are only able to be ran while the
   * mailing list has a `status` of "completed".
   *
   * Once a job as successfully been kicked off, the mailing list will have a
   * `status` of either `creating_contacts` or `removing_contacts` depending on which
   * job was ran. After the job has finished, the mailing list will go back into the
   * `completed` state where more jobs can be ran. If there are any errors while
   * running a job, the `errors` field on the mailing list will contain a list of
   * error objects which describe the errors.
   *
   * @example
   * ```ts
   * const mailingList =
   *   await client.printMail.mailingLists.jobs('id', {
   *     removeMailingListImports: [
   *       'mailing_list_import_123',
   *       'mailing_list_import_456',
   *     ],
   *   });
   * ```
   */
  jobs(id: string, body: MailingListJobsParams, options?: RequestOptions): APIPromise<MailingList> {
    return this._client.post(path`/print-mail/v1/mailing_lists/${id}/jobs`, { body, ...options });
  }
}

export type MailingListsSkipLimit = SkipLimit<MailingList>;

/**
 * Represents a mailing list.
 */
export interface MailingList {
  /**
   * A unique ID prefixed with mailing*list*
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
   * Status of the mailing list processing.
   */
  status: 'creating_contacts' | 'removing_contacts' | 'counting_recipient_country_codes' | 'completed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * A list of processing errors encountered, if any.
   */
  errors?: Array<MailingList.Error>;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace MailingList {
  /**
   * Details of a specific error encountered during processing.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered during mailing list processing.
     */
    type:
      | 'mailing_list_imports_not_found_error'
      | 'download_file_error'
      | 'operational_error'
      | 'internal_service_error';
  }
}

/**
 * Parameters for updating an existing mailing list.
 */
export interface MailingListUpdate {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface MailingListDeleteResponse {
  /**
   * A unique ID prefixed with mailing*list*
   */
  id: string;

  deleted: true;
}

export interface MailingListCreateParams {
  /**
   * Body param: An optional string describing this resource. Will be visible in the
   * API and the dashboard.
   */
  description?: string;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Header param:
   */
  'idempotency-key'?: string;
}

export interface MailingListUpdateParams {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface MailingListListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface MailingListJobsParams {
  /**
   * List of contact IDs to add to the mailing list. Cannot be used with other
   * operations.
   */
  addContacts?: Array<string>;

  /**
   * List of mailing list import IDs to add to the mailing list. Cannot be used with
   * other operations.
   */
  addMailingListImports?: Array<string>;

  /**
   * List of contact IDs to remove from the mailing list. Cannot be used with other
   * operations.
   */
  removeContacts?: Array<string>;

  /**
   * List of mailing list import IDs to remove from the mailing list. Cannot be used
   * with other operations.
   */
  removeMailingListImports?: Array<string>;
}

export declare namespace MailingLists {
  export {
    type MailingList as MailingList,
    type MailingListUpdate as MailingListUpdate,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListsSkipLimit as MailingListsSkipLimit,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListJobsParams as MailingListJobsParams,
  };
}
