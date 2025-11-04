// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ExportsAPI from './exports';
import {
  ExportCreateParams,
  ExportDeleteParams,
  ExportRetrieveParams,
  Exports,
  ReportExport,
} from './exports';
import * as SamplesAPI from './samples';
import { ReportSample, ReportSampleCreateBase, SampleCreateParams, Samples } from './samples';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Reports extends APIResource {
  samples: SamplesAPI.Samples = new SamplesAPI.Samples(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);

  /**
   * Retrieve the details of a specific saved report by its ID.
   *
   * @example
   * ```ts
   * const report = await client.printMail.reports.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Report> {
    return this._client.get(path`/print-mail/v1/reports/${id}`, options);
  }

  /**
   * Update an existing saved report definition. You can change the query,
   * description, or metadata.
   *
   * @example
   * ```ts
   * const report = await client.printMail.reports.update('id', {
   *   description: 'Recent Orders (Updated)',
   * });
   * ```
   */
  update(id: string, body: ReportUpdateParams, options?: RequestOptions): APIPromise<Report> {
    return this._client.post(path`/print-mail/v1/reports/${id}`, { body, ...options });
  }

  /**
   * Delete a saved report definition. This action cannot be undone. Associated
   * exports are not automatically deleted.
   *
   * @example
   * ```ts
   * const deletedResponse =
   *   await client.printMail.reports.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DeletedResponse> {
    return this._client.delete(path`/print-mail/v1/reports/${id}`, options);
  }

  /**
   * Retrieve a list of saved reports for your organization.
   *
   * @example
   * ```ts
   * const response = await client.printMail.reports.retrieve();
   * ```
   */
  retrieve(
    query: ReportRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveResponse> {
    return this._client.get('/print-mail/v1/reports/', { query, ...options });
  }
}

/**
 * Generic response for delete operations.
 */
export interface DeletedResponse {
  /**
   * The ID of the deleted resource.
   */
  id: string;

  /**
   * Indicates the resource was successfully deleted.
   */
  deleted: true;
}

/**
 * Represents a saved Report definition.
 */
export interface Report {
  /**
   * Unique identifier for the report.
   */
  id: string;

  /**
   * Timestamp when the report was created.
   */
  createdAt: string;

  /**
   * Indicates if the report is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `report`.
   */
  object: 'report';

  /**
   * The SQL query defining the report.
   */
  sqlQuery: string;

  /**
   * Timestamp when the report was last updated.
   */
  updatedAt: string;

  /**
   * An optional user-friendly description for the report.
   */
  description?: string;

  /**
   * Optional key-value metadata associated with the report.
   */
  metadata?: { [key: string]: string };
}

/**
 * Represents a list of Reports.
 */
export interface ReportRetrieveResponse {
  data: Array<Report>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface ReportUpdateParams {
  /**
   * An optional user-friendly description for the report. Set to null to remove.
   */
  description?: string | null;

  /**
   * Optional key-value metadata associated with the report. Set to null to remove.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The SQL query defining the report.
   */
  sqlQuery?: string;
}

export interface ReportRetrieveParams {
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

Reports.Samples = Samples;
Reports.Exports = Exports;

export declare namespace Reports {
  export {
    type DeletedResponse as DeletedResponse,
    type Report as Report,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
  };

  export {
    Samples as Samples,
    type ReportSample as ReportSample,
    type ReportSampleCreateBase as ReportSampleCreateBase,
    type SampleCreateParams as SampleCreateParams,
  };

  export {
    Exports as Exports,
    type ReportExport as ReportExport,
    type ExportCreateParams as ExportCreateParams,
    type ExportRetrieveParams as ExportRetrieveParams,
    type ExportDeleteParams as ExportDeleteParams,
  };
}
