// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MailingListImportsAPI from './mailing-list-imports';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MailingListImports extends APIResource {
  /**
   * Create a new mailing list import.
   *
   * Initiates the import process for a contact list file. The import enters the
   * `validating` status while contacts are processed and verified.
   *
   * @example
   * ```ts
   * const mailingListImportResponse =
   *   await client.printMail.mailingListImports.create({
   *     file: 'https://signed-upload-url.csv',
   *     fileType: 'csv',
   *     receiverAddressMapping: {
   *       description: 'Description',
   *       firstName: 'First Name',
   *       lastName: 'Last Name',
   *       email: 'Email',
   *       addressLine1: 'Address',
   *       city: 'City',
   *       postalOrZip: 'Postal Code',
   *       provinceOrState: 'State',
   *       countryCode: 'Country',
   *     },
   *   });
   * ```
   */
  create(
    params: MailingListImportCreateParams,
    options?: RequestOptions,
  ): APIPromise<MailingListImportResponse> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post('/print-mail/v1/mailing_list_imports', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a specific mailing list import by its ID.
   *
   * @example
   * ```ts
   * const mailingListImportResponse =
   *   await client.printMail.mailingListImports.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MailingListImportResponse> {
    return this._client.get(path`/print-mail/v1/mailing_list_imports/${id}`, options);
  }

  /**
   * Update an existing mailing list import.
   *
   * @example
   * ```ts
   * const mailingListImportResponse =
   *   await client.printMail.mailingListImports.update('id', {
   *     description: 'Corrected description',
   *     metadata: { batch: 'spring_sale' },
   *   });
   * ```
   */
  update(
    id: string,
    body: MailingListImportUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MailingListImportResponse> {
    return this._client.post(path`/print-mail/v1/mailing_list_imports/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of mailing list imports.
   *
   * Returns a paginated list of imports associated with the authenticated
   * organization, filterable by various parameters.
   *
   * @example
   * ```ts
   * const mailingListImports =
   *   await client.printMail.mailingListImports.list();
   * ```
   */
  list(
    query: MailingListImportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MailingListImportListResponse> {
    return this._client.get('/print-mail/v1/mailing_list_imports', { query, ...options });
  }

  /**
   * Delete a mailing list import.
   *
   * This permanently deletes the import and its associated resources. This operation
   * cannot be undone.
   *
   * @example
   * ```ts
   * const mailingListImport =
   *   await client.printMail.mailingListImports.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MailingListImportDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/mailing_list_imports/${id}`, options);
  }
}

/**
 * Type of file supported for mailing list imports.
 */
export type FileType = 'csv';

/**
 * Read-only view of a MailingListImport
 */
export interface MailingListImportResponse {
  /**
   * A unique ID prefixed with mailing*list_import*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * A list of processing errors encountered, if any. Present when status is
   * 'changes_required'.
   */
  errors: Array<MailingListImportResponse.Error>;

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  file: MailingListImportResponse.File;

  /**
   * Number of invalid rows found in the file.
   */
  invalidRowCount: number;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Additional notes about the import process.
   */
  notes: Array<MailingListImportResponse.Note>;

  /**
   * The organization that owns this import.
   */
  organization: string;

  /**
   * Count of contact verification statuses.
   */
  receiverStatusCount: VerificationStatusCount;

  /**
   * Status of the mailing list import process.
   */
  status: 'validating' | 'completed' | 'changes_required';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * Number of valid rows processed from the file.
   */
  validRowCount: number;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A temporary URL to download the processing report, available once the import is
   * completed.
   */
  reportURL?: string;

  /**
   * Count of contact verification statuses.
   */
  senderStatusCount?: VerificationStatusCount;
}

export namespace MailingListImportResponse {
  /**
   * Details of a specific error encountered during import processing.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered during import processing.
     */
    type:
      | 'no_valid_contacts_error'
      | 'multiple_countries_error'
      | 'invalid_contact_count_error'
      | 'internal_service_error';
  }

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  export interface File {
    /**
     * Type of file supported for mailing list imports.
     */
    fileType: MailingListImportsAPI.FileType;

    /**
     * Mapping of columns for receiver addresses. Contact fields to file columns.
     * Possible Contact fields:
     *
     * - description
     * - firstName
     * - lastName
     * - email
     * - phoneNumber
     * - companyName
     * - addressLine1
     * - addressLine2
     * - jobTitle
     * - city
     * - postalOrZip
     * - provinceOrState
     * - countryCode
     */
    receiverAddressMapping: { [key: string]: string };

    /**
     * The signed URL your controller generates.
     */
    url: string;

    /**
     * Optional mapping of columns for receiver merge variables.
     */
    receiverMergeVariableMapping?: { [key: string]: string };

    /**
     * Optional mapping of columns for sender addresses.
     */
    senderAddressMapping?: { [key: string]: string };

    /**
     * Optional mapping of columns for sender merge variables.
     */
    senderMergeVariableMapping?: { [key: string]: string };
  }

  /**
   * Details about a note in the import process.
   */
  export interface Note {
    /**
     * A human-readable message describing the note.
     */
    message: string;

    /**
     * Type of note attached to the import process.
     */
    type: 'truncated_test_file' | 'skipped_invalid_contacts';
  }
}

/**
 * Count of contact verification statuses.
 */
export interface VerificationStatusCount {
  /**
   * Number of contacts that were corrected during verification.
   */
  correctedCount: number;

  /**
   * Number of contacts that failed verification.
   */
  failedCount: number;

  /**
   * Number of contacts that were verified without changes.
   */
  verifiedCount: number;
}

/**
 * A list of mailing list imports.
 */
export interface MailingListImportListResponse {
  data: Array<MailingListImportResponse>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface MailingListImportDeleteResponse {
  /**
   * A unique ID prefixed with mailing*list_import*
   */
  id: string;

  deleted: true;
}

export interface MailingListImportCreateParams {
  /**
   * Body param: The CSV file for this import.
   */
  file: string;

  /**
   * Body param: Type of file supported for mailing list imports.
   */
  fileType: FileType;

  /**
   * Body param: Mapping of columns for receiver addresses.
   */
  receiverAddressMapping: { [key: string]: string };

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
   * Body param: Optional mapping of columns for receiver merge variables.
   */
  receiverMergeVariableMapping?: { [key: string]: string };

  /**
   * Body param: Optional mapping of columns for sender addresses. If this is
   * present, then all receivers should have a corresponding sender.
   */
  senderAddressMapping?: { [key: string]: string };

  /**
   * Body param: Optional mapping of columns for sender merge variables.
   */
  senderMergeVariableMapping?: { [key: string]: string };

  /**
   * Header param:
   */
  'idempotency-key'?: string;
}

export interface MailingListImportUpdateParams {
  /**
   * An optional description for the import. Set to `null` to remove the existing
   * description.
   */
  description?: string | null;

  /**
   * Optional key-value data associated with the import. Set to `null` to remove
   * existing metadata.
   */
  metadata?: { [key: string]: string } | null;
}

export interface MailingListImportListParams {
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

export declare namespace MailingListImports {
  export {
    type FileType as FileType,
    type MailingListImportResponse as MailingListImportResponse,
    type VerificationStatusCount as VerificationStatusCount,
    type MailingListImportListResponse as MailingListImportListResponse,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };
}
