// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { List, type ListParams } from '../pagination';

export class MailingListImports extends APIResource {
  /**
   * Create a new mailing list import.
   *
   * Initiates the import process for a contact list file. The import enters the
   * `validating` status while contacts are processed and verified.
   *
   * @example
   * ```ts
   * const mailingListImport =
   *   await client.mailingListImports.create({
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
    body: MailingListImportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MailingListImportCreateResponse> {
    return this._client.post('/mailing_list_imports', { body, ...options });
  }

  /**
   * Retrieve a specific mailing list import by its ID.
   *
   * @example
   * ```ts
   * const mailingListImport =
   *   await client.mailingListImports.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MailingListImportRetrieveResponse> {
    return this._client.get(`/mailing_list_imports/${id}`, options);
  }

  /**
   * Update an existing mailing list import.
   *
   * @example
   * ```ts
   * const mailingListImport =
   *   await client.mailingListImports.update('id', {
   *     description: 'Corrected description',
   *     metadata: { batch: 'spring_sale' },
   *   });
   * ```
   */
  update(
    id: string,
    body: MailingListImportUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MailingListImportUpdateResponse> {
    return this._client.post(`/mailing_list_imports/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of mailing list imports.
   *
   * Returns a paginated list of imports associated with the authenticated
   * organization, filterable by various parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mailingListImportListResponse of client.mailingListImports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: MailingListImportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MailingListImportListResponsesList, MailingListImportListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MailingListImportListResponsesList, MailingListImportListResponse>;
  list(
    query: MailingListImportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MailingListImportListResponsesList, MailingListImportListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/mailing_list_imports', MailingListImportListResponsesList, {
      query,
      ...options,
    });
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
   *   await client.mailingListImports.delete('id');
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<MailingListImportDeleteResponse> {
    return this._client.delete(`/mailing_list_imports/${id}`, options);
  }
}

export class MailingListImportListResponsesList extends List<MailingListImportListResponse> {}

/**
 * Read-only view of a MailingListImport
 */
export interface MailingListImportCreateResponse {
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
  errors: Array<MailingListImportCreateResponse.Error>;

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  file: MailingListImportCreateResponse.File;

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
  notes: Array<MailingListImportCreateResponse.Note>;

  /**
   * The organization that owns this import.
   */
  organization: string;

  /**
   * Count of contact verification statuses.
   */
  receiverStatusCount: MailingListImportCreateResponse.ReceiverStatusCount;

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
  metadata?: Record<string, unknown>;

  /**
   * A temporary URL to download the processing report, available once the import is
   * completed.
   */
  reportURL?: string;

  /**
   * Count of contact verification statuses.
   */
  senderStatusCount?: MailingListImportCreateResponse.SenderStatusCount;
}

export namespace MailingListImportCreateResponse {
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
    fileType: 'csv';

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
    receiverAddressMapping: Record<string, string>;

    /**
     * The signed URL your controller generates.
     */
    url: string;

    /**
     * Optional mapping of columns for receiver merge variables.
     */
    receiverMergeVariableMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender addresses.
     */
    senderAddressMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender merge variables.
     */
    senderMergeVariableMapping?: Record<string, string>;
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

  /**
   * Count of contact verification statuses.
   */
  export interface ReceiverStatusCount {
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
   * Count of contact verification statuses.
   */
  export interface SenderStatusCount {
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
}

/**
 * Read-only view of a MailingListImport
 */
export interface MailingListImportRetrieveResponse {
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
  errors: Array<MailingListImportRetrieveResponse.Error>;

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  file: MailingListImportRetrieveResponse.File;

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
  notes: Array<MailingListImportRetrieveResponse.Note>;

  /**
   * The organization that owns this import.
   */
  organization: string;

  /**
   * Count of contact verification statuses.
   */
  receiverStatusCount: MailingListImportRetrieveResponse.ReceiverStatusCount;

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
  metadata?: Record<string, unknown>;

  /**
   * A temporary URL to download the processing report, available once the import is
   * completed.
   */
  reportURL?: string;

  /**
   * Count of contact verification statuses.
   */
  senderStatusCount?: MailingListImportRetrieveResponse.SenderStatusCount;
}

export namespace MailingListImportRetrieveResponse {
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
    fileType: 'csv';

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
    receiverAddressMapping: Record<string, string>;

    /**
     * The signed URL your controller generates.
     */
    url: string;

    /**
     * Optional mapping of columns for receiver merge variables.
     */
    receiverMergeVariableMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender addresses.
     */
    senderAddressMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender merge variables.
     */
    senderMergeVariableMapping?: Record<string, string>;
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

  /**
   * Count of contact verification statuses.
   */
  export interface ReceiverStatusCount {
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
   * Count of contact verification statuses.
   */
  export interface SenderStatusCount {
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
}

/**
 * Read-only view of a MailingListImport
 */
export interface MailingListImportUpdateResponse {
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
  errors: Array<MailingListImportUpdateResponse.Error>;

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  file: MailingListImportUpdateResponse.File;

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
  notes: Array<MailingListImportUpdateResponse.Note>;

  /**
   * The organization that owns this import.
   */
  organization: string;

  /**
   * Count of contact verification statuses.
   */
  receiverStatusCount: MailingListImportUpdateResponse.ReceiverStatusCount;

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
  metadata?: Record<string, unknown>;

  /**
   * A temporary URL to download the processing report, available once the import is
   * completed.
   */
  reportURL?: string;

  /**
   * Count of contact verification statuses.
   */
  senderStatusCount?: MailingListImportUpdateResponse.SenderStatusCount;
}

export namespace MailingListImportUpdateResponse {
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
    fileType: 'csv';

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
    receiverAddressMapping: Record<string, string>;

    /**
     * The signed URL your controller generates.
     */
    url: string;

    /**
     * Optional mapping of columns for receiver merge variables.
     */
    receiverMergeVariableMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender addresses.
     */
    senderAddressMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender merge variables.
     */
    senderMergeVariableMapping?: Record<string, string>;
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

  /**
   * Count of contact verification statuses.
   */
  export interface ReceiverStatusCount {
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
   * Count of contact verification statuses.
   */
  export interface SenderStatusCount {
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
}

/**
 * Read-only view of a MailingListImport
 */
export interface MailingListImportListResponse {
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
  errors: Array<MailingListImportListResponse.Error>;

  /**
   * The file object your controller returns: all the mappings plus a signed URL.
   */
  file: MailingListImportListResponse.File;

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
  notes: Array<MailingListImportListResponse.Note>;

  /**
   * The organization that owns this import.
   */
  organization: string;

  /**
   * Count of contact verification statuses.
   */
  receiverStatusCount: MailingListImportListResponse.ReceiverStatusCount;

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
  metadata?: Record<string, unknown>;

  /**
   * A temporary URL to download the processing report, available once the import is
   * completed.
   */
  reportURL?: string;

  /**
   * Count of contact verification statuses.
   */
  senderStatusCount?: MailingListImportListResponse.SenderStatusCount;
}

export namespace MailingListImportListResponse {
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
    fileType: 'csv';

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
    receiverAddressMapping: Record<string, string>;

    /**
     * The signed URL your controller generates.
     */
    url: string;

    /**
     * Optional mapping of columns for receiver merge variables.
     */
    receiverMergeVariableMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender addresses.
     */
    senderAddressMapping?: Record<string, string>;

    /**
     * Optional mapping of columns for sender merge variables.
     */
    senderMergeVariableMapping?: Record<string, string>;
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

  /**
   * Count of contact verification statuses.
   */
  export interface ReceiverStatusCount {
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
   * Count of contact verification statuses.
   */
  export interface SenderStatusCount {
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
   * The CSV file for this import.
   */
  file: string;

  /**
   * Type of file supported for mailing list imports.
   */
  fileType: 'csv';

  /**
   * Mapping of columns for receiver addresses.
   */
  receiverAddressMapping: Record<string, string>;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: Record<string, unknown>;

  /**
   * Optional mapping of columns for receiver merge variables.
   */
  receiverMergeVariableMapping?: Record<string, string>;

  /**
   * Optional mapping of columns for sender addresses. If this is present, then all
   * receivers should have a corresponding sender.
   */
  senderAddressMapping?: Record<string, string>;

  /**
   * Optional mapping of columns for sender merge variables.
   */
  senderMergeVariableMapping?: Record<string, string>;
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
  metadata?: Record<string, string> | null;
}

export interface MailingListImportListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

MailingListImports.MailingListImportListResponsesList = MailingListImportListResponsesList;

export declare namespace MailingListImports {
  export {
    type MailingListImportCreateResponse as MailingListImportCreateResponse,
    type MailingListImportRetrieveResponse as MailingListImportRetrieveResponse,
    type MailingListImportUpdateResponse as MailingListImportUpdateResponse,
    type MailingListImportListResponse as MailingListImportListResponse,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    MailingListImportListResponsesList as MailingListImportListResponsesList,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };
}
