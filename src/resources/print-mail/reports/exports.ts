// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReportsAPI from './reports';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Exports extends APIResource {
  /**
   * Create a new export job for a saved report. This runs the report's query
   * asynchronously and generates a downloadable CSV file with the full results. Your
   * queries can run for up to 13 minutes the resulting file can be up to 100mb
   * large.
   *
   * @example
   * ```ts
   * const reportExport =
   *   await client.printMail.reports.exports.create(
   *     'reportID',
   *     {
   *       description: 'October Orders Export',
   *       params: ['2023-10-01T00:00:00Z'],
   *     },
   *   );
   * ```
   */
  create(reportID: string, body: ExportCreateParams, options?: RequestOptions): APIPromise<ReportExport> {
    return this._client.post(path`/print-mail/v1/reports/${reportID}/exports`, { body, ...options });
  }

  /**
   * Retrieve the status and details of a specific report export job. Check the
   * `outputURL` property for the download link once generation is complete.
   *
   * @example
   * ```ts
   * const reportExport =
   *   await client.printMail.reports.exports.retrieve(
   *     'exportID',
   *     { reportID: 'reportID' },
   *   );
   * ```
   */
  retrieve(
    exportID: string,
    params: ExportRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReportExport> {
    const { reportID } = params;
    return this._client.get(path`/print-mail/v1/reports/${reportID}/exports/${exportID}`, options);
  }

  /**
   * Delete a completed or failed report export job and its associated output file
   * (if any). This action cannot be undone. You cannot delete an export that is
   * still generating.
   *
   * @example
   * ```ts
   * const deletedResponse =
   *   await client.printMail.reports.exports.delete(
   *     'exportID',
   *     { reportID: 'reportID' },
   *   );
   * ```
   */
  delete(
    exportID: string,
    params: ExportDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ReportsAPI.DeletedResponse> {
    const { reportID } = params;
    return this._client.delete(path`/print-mail/v1/reports/${reportID}/exports/${exportID}`, options);
  }
}

/**
 * Represents a report export job and its results.
 */
export interface ReportExport {
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
  report: ReportExport.Report;

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
  metadata?: { [key: string]: string };

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

export namespace ReportExport {
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

export interface ExportCreateParams {
  /**
   * An optional user-friendly description for the export.
   */
  description?: string;

  /**
   * Optional key-value metadata associated with the export.
   */
  metadata?: { [key: string]: string };

  /**
   * Optional parameters to bind to the SQL query of the associated report.
   */
  params?: Array<string>;
}

export interface ExportRetrieveParams {
  /**
   * The ID of the report the export belongs to.
   */
  reportID: string;
}

export interface ExportDeleteParams {
  /**
   * The ID of the report the export belongs to.
   */
  reportID: string;
}

export declare namespace Exports {
  export {
    type ReportExport as ReportExport,
    type ExportCreateParams as ExportCreateParams,
    type ExportRetrieveParams as ExportRetrieveParams,
    type ExportDeleteParams as ExportDeleteParams,
  };
}
