// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { List, type ListParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MailingLists extends APIResource {
  /**
   * Create a new mailing list.
   *
   * @example
   * ```ts
   * const mailingList = await client.mailingLists.create({
   *   description: 'Test Mailing List',
   *   metadata: { campaign: 'launch' },
   * });
   * ```
   */
  create(body: MailingListCreateParams, options?: RequestOptions): APIPromise<MailingListCreateResponse> {
    return this._client.post('/mailing_lists', { body, ...options });
  }

  /**
   * Retrieve a specific mailing list by its ID.
   *
   * @example
   * ```ts
   * const mailingList = await client.mailingLists.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MailingListRetrieveResponse> {
    return this._client.get(path`/mailing_lists/${id}`, options);
  }

  /**
   * Update an existing mailing list.
   *
   * @example
   * ```ts
   * const mailingList = await client.mailingLists.update('id', {
   *   description: 'Updated Mailing List Description',
   * });
   * ```
   */
  update(
    id: string,
    body: MailingListUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MailingListUpdateResponse> {
    return this._client.post(path`/mailing_lists/${id}`, { body, ...options });
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
   * for await (const mailingListListResponse of client.mailingLists.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MailingListListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MailingListListResponsesList, MailingListListResponse> {
    return this._client.getAPIList('/mailing_lists', List<MailingListListResponse>, { query, ...options });
  }

  /**
   * Delete a mailing list.
   *
   * This permanently deletes the mailing list and its associations. This operation
   * cannot be undone.
   *
   * @example
   * ```ts
   * const mailingList = await client.mailingLists.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MailingListDeleteResponse> {
    return this._client.delete(path`/mailing_lists/${id}`, options);
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
   * const response = await client.mailingLists.submitJob('id', {
   *   removeMailingListImports: [
   *     'mailing_list_import_123',
   *     'mailing_list_import_456',
   *   ],
   * });
   * ```
   */
  submitJob(
    id: string,
    body: MailingListSubmitJobParams,
    options?: RequestOptions,
  ): APIPromise<MailingListSubmitJobResponse> {
    return this._client.post(path`/mailing_lists/${id}/jobs`, { body, ...options });
  }
}

export type MailingListListResponsesList = List<MailingListListResponse>;

/**
 * Represents a mailing list.
 */
export interface MailingListCreateResponse {
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
  errors?: Array<MailingListCreateResponse.Error>;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace MailingListCreateResponse {
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
 * Represents a mailing list.
 */
export interface MailingListRetrieveResponse {
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
  errors?: Array<MailingListRetrieveResponse.Error>;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace MailingListRetrieveResponse {
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
export interface MailingListUpdateResponse {
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

/**
 * Represents a mailing list.
 */
export interface MailingListListResponse {
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
  errors?: Array<MailingListListResponse.Error>;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace MailingListListResponse {
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

export interface MailingListDeleteResponse {
  /**
   * A unique ID prefixed with mailing*list*
   */
  id: string;

  deleted: true;
}

/**
 * Represents a mailing list.
 */
export interface MailingListSubmitJobResponse {
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
  errors?: Array<MailingListSubmitJobResponse.Error>;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export namespace MailingListSubmitJobResponse {
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

export interface MailingListCreateParams {
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

export interface MailingListListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface MailingListSubmitJobParams {
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
    type MailingListCreateResponse as MailingListCreateResponse,
    type MailingListRetrieveResponse as MailingListRetrieveResponse,
    type MailingListUpdateResponse as MailingListUpdateResponse,
    type MailingListListResponse as MailingListListResponse,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListSubmitJobResponse as MailingListSubmitJobResponse,
    type MailingListListResponsesList as MailingListListResponsesList,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListSubmitJobParams as MailingListSubmitJobParams,
  };
}
