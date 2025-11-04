// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExportsAPI from './exports';
import {
  ExportCreateParams,
  ExportCreateResponse,
  ExportDeleteParams,
  ExportDeleteResponse,
  ExportRetrieveParams,
  ExportRetrieveResponse,
  Exports,
} from './exports';
import { APIPromise } from '../../core/api-promise';
import { List, type ListParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);

  /**
   * Create a new saved report definition. Saved reports are SQL queries that can be
   * executed later to generate full exports or samples.
   *
   * If you just want to do ad-hoc queries, you should use the `/reports/samples`
   * endpoint.
   *
   * @example
   * ```ts
   * const report = await client.reports.create({
   *   sqlQuery:
   *     'SELECT id, status FROM orders WHERE created_at > ?',
   *   description: 'Recent Orders',
   *   metadata: { team: 'Sales' },
   * });
   * ```
   */
  create(body: ReportCreateParams, options?: RequestOptions): APIPromise<ReportCreateResponse> {
    return this._client.post('/reports/', { body, ...options });
  }

  /**
   * Retrieve the details of a specific saved report by its ID.
   *
   * @example
   * ```ts
   * const report = await client.reports.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/reports/${id}`, options);
  }

  /**
   * Update an existing saved report definition. You can change the query,
   * description, or metadata.
   *
   * @example
   * ```ts
   * const report = await client.reports.update('id', {
   *   description: 'Recent Orders (Updated)',
   * });
   * ```
   */
  update(id: string, body: ReportUpdateParams, options?: RequestOptions): APIPromise<ReportUpdateResponse> {
    return this._client.post(path`/reports/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of saved reports for your organization.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reportListResponse of client.reports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReportListResponsesList, ReportListResponse> {
    return this._client.getAPIList('/reports/', List<ReportListResponse>, { query, ...options });
  }

  /**
   * Delete a saved report definition. This action cannot be undone. Associated
   * exports are not automatically deleted.
   *
   * @example
   * ```ts
   * const report = await client.reports.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ReportDeleteResponse> {
    return this._client.delete(path`/reports/${id}`, options);
  }

  /**
   * Run an ad-hoc SQL query against your data lake and get a sample of the results.
   * This is useful for quickly testing queries without saving them as a report. The
   * query execution time and result size are limited.
   *
   * @example
   * ```ts
   * const response = await client.reports.runAdHocQuery({
   *   sqlQuery: 'SELECT id FROM contacts LIMIT 5',
   *   limit: 5,
   *   params: [],
   * });
   * ```
   */
  runAdHocQuery(
    body: ReportRunAdHocQueryParams,
    options?: RequestOptions,
  ): APIPromise<ReportRunAdHocQueryResponse> {
    return this._client.post('/reports/samples', { body, ...options });
  }

  /**
   * Run the query associated with a saved report and get a sample of the results.
   * This allows getting up to 1000 rows of resutls but the runtime of the query is
   * limited to 30 seconds. If you need more rows or longer runtime, you should
   * create an export from this report.
   *
   * @example
   * ```ts
   * const response = await client.reports.sample('id', {
   *   limit: 10,
   *   params: ['2023-10-01T00:00:00Z'],
   * });
   * ```
   */
  sample(id: string, body: ReportSampleParams, options?: RequestOptions): APIPromise<ReportSampleResponse> {
    return this._client.post(path`/reports/${id}/samples`, { body, ...options });
  }
}

export type ReportListResponsesList = List<ReportListResponse>;

/**
 * Represents a saved Report definition.
 */
export interface ReportCreateResponse {
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
 * Represents a saved Report definition.
 */
export interface ReportRetrieveResponse {
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
 * Represents a saved Report definition.
 */
export interface ReportUpdateResponse {
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
 * Represents a saved Report definition.
 */
export interface ReportListResponse {
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
 * Generic response for delete operations.
 */
export interface ReportDeleteResponse {
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
 * Represents the result of a report sample query.
 */
export interface ReportRunAdHocQueryResponse {
  /**
   * Unique identifier for the sample query result.
   */
  id: string;

  /**
   * The actual data records returned by the sample query.
   */
  records: Array<{ [key: string]: unknown }>;

  /**
   * The ID of the report this sample was generated from, or null for ad-hoc samples.
   */
  report: string | null;
}

/**
 * Represents the result of a report sample query.
 */
export interface ReportSampleResponse {
  /**
   * Unique identifier for the sample query result.
   */
  id: string;

  /**
   * The actual data records returned by the sample query.
   */
  records: Array<{ [key: string]: unknown }>;

  /**
   * The ID of the report this sample was generated from, or null for ad-hoc samples.
   */
  report: string | null;
}

export interface ReportCreateParams {
  /**
   * The SQL query defining the report.
   */
  sqlQuery: string;

  /**
   * An optional user-friendly description for the report.
   */
  description?: string;

  /**
   * Optional key-value metadata associated with the report.
   */
  metadata?: { [key: string]: string };
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

export interface ReportListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface ReportRunAdHocQueryParams {
  /**
   * The SQL query to execute for the sample.
   */
  sqlQuery: string;

  /**
   * Maximum number of rows to return in the sample.
   */
  limit?: number;

  /**
   * Optional parameters to bind to the SQL query (e.g., for placeholders like ? or
   * $1).
   */
  params?: Array<string>;
}

export interface ReportSampleParams {
  /**
   * Maximum number of rows to return in the sample.
   */
  limit?: number;

  /**
   * Optional parameters to bind to the SQL query (e.g., for placeholders like ? or
   * $1).
   */
  params?: Array<string>;
}

Reports.Exports = Exports;

export declare namespace Reports {
  export {
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportUpdateResponse as ReportUpdateResponse,
    type ReportListResponse as ReportListResponse,
    type ReportDeleteResponse as ReportDeleteResponse,
    type ReportRunAdHocQueryResponse as ReportRunAdHocQueryResponse,
    type ReportSampleResponse as ReportSampleResponse,
    type ReportListResponsesList as ReportListResponsesList,
    type ReportCreateParams as ReportCreateParams,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportListParams as ReportListParams,
    type ReportRunAdHocQueryParams as ReportRunAdHocQueryParams,
    type ReportSampleParams as ReportSampleParams,
  };

  export {
    Exports as Exports,
    type ExportCreateResponse as ExportCreateResponse,
    type ExportRetrieveResponse as ExportRetrieveResponse,
    type ExportDeleteResponse as ExportDeleteResponse,
    type ExportCreateParams as ExportCreateParams,
    type ExportRetrieveParams as ExportRetrieveParams,
    type ExportDeleteParams as ExportDeleteParams,
  };
}
