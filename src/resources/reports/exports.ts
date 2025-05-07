// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Exports extends APIResource {
  /**
   * Create a new export job for a saved report. This runs the report's query
   * asynchronously and generates a downloadable CSV file with the full results. Your
   * queries can run for up to 13 minutes the resulting file can be up to 100mb
   * large.
   *
   * @example
   * ```ts
   * const _export = await client.reports.exports.create(
   *   'reportID',
   *   {
   *     description: 'October Orders Export',
   *     params: ['2023-10-01T00:00:00Z'],
   *   },
   * );
   * ```
   */
  create(
    reportId: string,
    body: ExportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExportCreateResponse> {
    return this._client.post(`/reports/${reportId}/exports`, { body, ...options });
  }

  /**
   * Retrieve the status and details of a specific report export job. Check the
   * `outputURL` property for the download link once generation is complete.
   *
   * @example
   * ```ts
   * const _export = await client.reports.exports.retrieve(
   *   'reportID',
   *   'exportID',
   * );
   * ```
   */
  retrieve(
    reportId: string,
    exportId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExportRetrieveResponse> {
    return this._client.get(`/reports/${reportId}/exports/${exportId}`, options);
  }

  /**
   * Delete a completed or failed report export job and its associated output file
   * (if any). This action cannot be undone. You cannot delete an export that is
   * still generating.
   *
   * @example
   * ```ts
   * const _export = await client.reports.exports.delete(
   *   'reportID',
   *   'exportID',
   * );
   * ```
   */
  delete(
    reportId: string,
    exportId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExportDeleteResponse> {
    return this._client.delete(`/reports/${reportId}/exports/${exportId}`, options);
  }
}

/**
 * Represents a report export job and its results.
 */
export interface ExportCreateResponse {
  /**
   * Unique identifier for the report export.
   */
  id: string;

  /**
   * Timestamp when the export was created.
   */
  createdAt: string;

  /**
   * Indicates if the export is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `report_export`.
   */
  object: 'report_export';

  /**
   * Details of the report this export was generated from.
   */
  report: ExportCreateResponse.Report;

  /**
   * Timestamp when the export was last updated (e.g., finished generation).
   */
  updatedAt: string;

  /**
   * An optional user-friendly description for the export.
   */
  description?: string;

  /**
   * If export generation failed, this contains the error message.
   */
  failureMessage?: string;

  /**
   * Optional key-value metadata associated with the export.
   */
  metadata?: Record<string, string>;

  /**
   * A signed URL to download the exported data (CSV format). Available when
   * generation is complete and successful.
   */
  outputURL?: string;

  /**
   * Optional parameters to bind to the SQL query of the associated report.
   */
  params?: Array<string>;

  /**
   * The number of rows in the exported data.
   */
  rowCount?: number;

  /**
   * The size of the generated export file in bytes.
   */
  sizeInBytes?: number;

  /**
   * If the output was truncated, indicates the byte limit reached.
   */
  truncatedToBytes?: number;
}

export namespace ExportCreateResponse {
  /**
   * Details of the report this export was generated from.
   */
  export interface Report {
    /**
     * The ID of the report.
     */
    id: string;

    /**
     * The SQL query used for this export (snapshotted at creation time).
     */
    sqlQuery: string;
  }
}

/**
 * Represents a report export job and its results.
 */
export interface ExportRetrieveResponse {
  /**
   * Unique identifier for the report export.
   */
  id: string;

  /**
   * Timestamp when the export was created.
   */
  createdAt: string;

  /**
   * Indicates if the export is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `report_export`.
   */
  object: 'report_export';

  /**
   * Details of the report this export was generated from.
   */
  report: ExportRetrieveResponse.Report;

  /**
   * Timestamp when the export was last updated (e.g., finished generation).
   */
  updatedAt: string;

  /**
   * An optional user-friendly description for the export.
   */
  description?: string;

  /**
   * If export generation failed, this contains the error message.
   */
  failureMessage?: string;

  /**
   * Optional key-value metadata associated with the export.
   */
  metadata?: Record<string, string>;

  /**
   * A signed URL to download the exported data (CSV format). Available when
   * generation is complete and successful.
   */
  outputURL?: string;

  /**
   * Optional parameters to bind to the SQL query of the associated report.
   */
  params?: Array<string>;

  /**
   * The number of rows in the exported data.
   */
  rowCount?: number;

  /**
   * The size of the generated export file in bytes.
   */
  sizeInBytes?: number;

  /**
   * If the output was truncated, indicates the byte limit reached.
   */
  truncatedToBytes?: number;
}

export namespace ExportRetrieveResponse {
  /**
   * Details of the report this export was generated from.
   */
  export interface Report {
    /**
     * The ID of the report.
     */
    id: string;

    /**
     * The SQL query used for this export (snapshotted at creation time).
     */
    sqlQuery: string;
  }
}

/**
 * Generic response for delete operations.
 */
export interface ExportDeleteResponse {
  /**
   * The ID of the deleted resource.
   */
  id: string;

  /**
   * Indicates the resource was successfully deleted.
   */
  deleted: true;
}

export interface ExportCreateParams {
  /**
   * An optional user-friendly description for the export.
   */
  description?: string;

  /**
   * Optional key-value metadata associated with the export.
   */
  metadata?: Record<string, string>;

  /**
   * Optional parameters to bind to the SQL query of the associated report.
   */
  params?: Array<string>;
}

export declare namespace Exports {
  export {
    type ExportCreateResponse as ExportCreateResponse,
    type ExportRetrieveResponse as ExportRetrieveResponse,
    type ExportDeleteResponse as ExportDeleteResponse,
    type ExportCreateParams as ExportCreateParams,
  };
}
