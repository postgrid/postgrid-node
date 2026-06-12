// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BulkVerificationAPI from './bulk-verification';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

/**
 *  **Note: For verifying batches of addresses in real-time via JSON, please use
 *  the "Batch Verify Addresses" endpoint.**
 *
 *  The bulk verification API allows you to submit CSV files to be processed
 *  through our address verification engine. Each file can contain up to 250,000
 *  addresses, and the output lines up with what is returned from our batch
 *  verification API.
 *
 *  Note that you will be invoiced for every list that processes successfully.
 *  You can pre-purchase bulk verification credits from our
 *  [dashboard](https://app.postgrid.com/dashboard/upgrade) to prevent this.
 *  However, these cannot be used for geocoded lists, and you must individually
 *  pay for every list that you process with those flags.
 *
 *  **Also note that in order to access bulk geocoding you must contact**
 *  [support@postgrid.com](mailto:support@postgrid.com) **to enable the feature.**
 */
export class BulkVerification extends APIResource {
  /**
   * Retrieve a single bulk verification list by ID, including its processing status
   * and — once processed — a link to the output CSV.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BulkVerificationRetrieveResponse> {
    return this._client.get(path`/v1/addver_lists/${id}`, options);
  }

  /**
   * Retrieve a list of your bulk verification lists.
   */
  list(
    query: BulkVerificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BulkVerificationListResponse> {
    return this._client.get('/v1/addver_lists', { query, ...options });
  }

  /**
   * Upload a CSV file of addresses to be verified in bulk. Supply a `mappings`
   * object describing which CSV columns correspond to which address fields.
   */
  upload(
    body: BulkVerificationUploadParams,
    options?: RequestOptions,
  ): APIPromise<BulkVerificationUploadResponse> {
    return this._client.post(
      '/v1/addver_lists',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * A bulk address verification list — an uploaded CSV file of addresses and its
 * processing state.
 */
export interface AddverList {
  /**
   * A unique ID prefixed with `addver_list_`.
   */
  id: string;

  /**
   * The cost charged for processing this list.
   */
  cost: number;

  /**
   * The number of addresses in the uploaded file.
   */
  count: number;

  /**
   * The UTC time at which this list was created.
   */
  createdAt: string;

  /**
   * A signed URL to the uploaded input CSV file.
   */
  file: string;

  /**
   * The mapping of your CSV column names to PostGrid address fields. Each value is
   * the name of a column in your uploaded file.
   */
  mappings: AddverList.Mappings;

  /**
   * The name supplied for the list. This only affects what is displayed in the
   * dashboard.
   */
  name: string;

  /**
   * The ID of the organization that owns this list.
   */
  organization: string;

  /**
   * The processing status of the list, e.g. `pending`, `processing`, or `processed`.
   */
  status: string;

  /**
   * The UTC time at which this list was last updated.
   */
  updatedAt: string;

  /**
   * Whether geocoding (latitude/longitude) output was requested.
   */
  useGeocode: boolean;

  /**
   * Whether international (outside US & Canada) verification was requested.
   */
  useIntlVerification: boolean;

  /**
   * Whether Proper Case output was requested.
   */
  useProperCase: boolean;

  /**
   * The ID of the user that created this list.
   */
  user: string;

  /**
   * The ISO 2-letter country code used as the fallback when a row is missing a
   * country. Not returned for lists uploaded without one, e.g. lists which map the
   * entire address into `line1`.
   */
  defaultCountry?: string;

  /**
   * Additional metadata about the list, including a count of each status.
   */
  metadata?: AddverList.Metadata;

  /**
   * The number of invalid or skipped rows in the uploaded file. May be omitted on
   * lists created before this field was introduced.
   */
  numInvalidRows?: number;

  /**
   * A signed URL to the processed output CSV file. Present once the list has
   * finished processing.
   */
  result?: string;

  /**
   * Whether CCOA (Canada Post change of address) was requested. May be omitted on
   * lists created before COA support was introduced.
   */
  runCCOA?: boolean;

  /**
   * Whether NCOA (US National Change of Address) was requested. May be omitted on
   * lists created before COA support was introduced.
   */
  runNCOA?: boolean;
}

export namespace AddverList {
  /**
   * The mapping of your CSV column names to PostGrid address fields. Each value is
   * the name of a column in your uploaded file.
   */
  export interface Mappings {
    /**
     * The column containing the first line of each address. If your entire address is
     * in a single column, specify only this mapping.
     */
    line1: string;

    /**
     * The column containing the city of each address.
     */
    city?: string;

    /**
     * The column containing the 2-letter ISO country code of each address (e.g. `US`,
     * not `United States`).
     */
    country?: string;

    /**
     * The column containing the first name of the person at each address. Only used
     * when NCOA is run.
     */
    firstName?: string;

    /**
     * The column containing the full name of the person at each address. Can be
     * supplied instead of `firstName` and `lastName`. Only used when NCOA or CCOA is
     * run.
     */
    fullName?: string;

    /**
     * The column containing the last name of the person at each address. Only used
     * when NCOA is run.
     */
    lastName?: string;

    /**
     * The column containing the second line of each address.
     */
    line2?: string;

    /**
     * The column containing the postal or ZIP code of each address.
     */
    postalOrZip?: string;

    /**
     * The column containing the province or state of each address.
     */
    provinceOrState?: string;
  }

  /**
   * Additional metadata about the list, including a count of each status.
   */
  export interface Metadata {
    /**
     * The number of addresses by resulting verification status.
     */
    statusCount?: Metadata.StatusCount;
  }

  export namespace Metadata {
    /**
     * The number of addresses by resulting verification status.
     */
    export interface StatusCount {
      corrected?: number;

      failed?: number;

      verified?: number;
    }
  }
}

export interface BulkVerificationRetrieveResponse {
  /**
   * A bulk address verification list — an uploaded CSV file of addresses and its
   * processing state.
   */
  data: AddverList;

  message: string;

  status: 'success' | 'error';
}

export interface BulkVerificationListResponse {
  /**
   * A list of bulk verification lists.
   */
  data: BulkVerificationListResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace BulkVerificationListResponse {
  /**
   * A list of bulk verification lists.
   */
  export interface Data {
    /**
     * The total number of lists.
     */
    count: number;

    /**
     * The requested lists.
     */
    data: Array<BulkVerificationAPI.AddverList>;
  }
}

export interface BulkVerificationUploadResponse {
  /**
   * A bulk address verification list — an uploaded CSV file of addresses and its
   * processing state.
   */
  data: AddverList;

  message: string;

  status: 'success' | 'error';
}

export interface BulkVerificationListParams {
  /**
   * The maximum number of lists to return.
   */
  limit?: number;

  /**
   * The number of lists to skip past, for pagination.
   */
  skip?: number;
}

export interface BulkVerificationUploadParams {
  file: Uploadable;

  /**
   * The mapping of your CSV column names to PostGrid address fields. Each value is
   * the name of a column in your uploaded file.
   */
  mappings: BulkVerificationUploadParams.Mappings;

  /**
   * A name for the uploaded list. This only affects what is displayed in the
   * dashboard.
   */
  name: string;

  /**
   * An ISO 2-letter country code used as the fallback when a row is missing a value
   * in the `country` column.
   */
  defaultCountry?: string;

  /**
   * Whether to run CCOA (Canada Post change of address) on the list. Note that a
   * list cannot run both NCOA and CCOA — split mixed US/Canadian files into separate
   * lists.
   */
  runCCOA?: boolean;

  /**
   * Whether to run NCOA (US National Change of Address) on the list.
   */
  runNCOA?: boolean;

  /**
   * Whether to append geographical location information (latitude, longitude) to
   * your output. Bulk geocoding must be enabled by contacting support.
   */
  useGeocode?: boolean;

  /**
   * Whether to perform international (outside US & Canada) verification.
   */
  useIntlVerification?: boolean;

  /**
   * Whether to return addresses in Proper Case.
   */
  useProperCase?: boolean;
}

export namespace BulkVerificationUploadParams {
  /**
   * The mapping of your CSV column names to PostGrid address fields. Each value is
   * the name of a column in your uploaded file.
   */
  export interface Mappings {
    /**
     * The column containing the first line of each address. If your entire address is
     * in a single column, specify only this mapping.
     */
    line1: string;

    /**
     * The column containing the city of each address.
     */
    city?: string;

    /**
     * The column containing the 2-letter ISO country code of each address (e.g. `US`,
     * not `United States`).
     */
    country?: string;

    /**
     * The column containing the first name of the person at each address. Only used
     * when NCOA is run.
     */
    firstName?: string;

    /**
     * The column containing the full name of the person at each address. Can be
     * supplied instead of `firstName` and `lastName`. Only used when NCOA or CCOA is
     * run.
     */
    fullName?: string;

    /**
     * The column containing the last name of the person at each address. Only used
     * when NCOA is run.
     */
    lastName?: string;

    /**
     * The column containing the second line of each address.
     */
    line2?: string;

    /**
     * The column containing the postal or ZIP code of each address.
     */
    postalOrZip?: string;

    /**
     * The column containing the province or state of each address.
     */
    provinceOrState?: string;
  }
}

export declare namespace BulkVerification {
  export {
    type AddverList as AddverList,
    type BulkVerificationRetrieveResponse as BulkVerificationRetrieveResponse,
    type BulkVerificationListResponse as BulkVerificationListResponse,
    type BulkVerificationUploadResponse as BulkVerificationUploadResponse,
    type BulkVerificationListParams as BulkVerificationListParams,
    type BulkVerificationUploadParams as BulkVerificationUploadParams,
  };
}
