// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ExportsAPI from './exports';
import {
  ExportCreateParams,
  ExportCreateResponse,
  ExportDeleteResponse,
  ExportRetrieveResponse,
  Exports,
} from './exports';
import * as SamplesAPI from './samples';
import {
  SampleRunParams,
  SampleRunResponse,
  SampleSampleParams,
  SampleSampleResponse,
  Samples,
} from './samples';
import { List, type ListParams } from '../../pagination';

export class Reports extends APIResource {
  samples: SamplesAPI.Samples = new SamplesAPI.Samples(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);

  /**
   * Create a new saved report definition. Saved reports are SQL queries that can be
   * executed later to generate full exports or samples.
   *
   * If you just want to do ad-hoc queries, you should use the `/reports/samples`
   * endpoint.
   */
  create(body: ReportCreateParams, options?: Core.RequestOptions): Core.APIPromise<ReportCreateResponse> {
    return this._client.post('/reports/', { body, ...options });
  }

  /**
   * Retrieve the details of a specific saved report by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ReportRetrieveResponse> {
    return this._client.get(`/reports/${id}`, options);
  }

  /**
   * Update an existing saved report definition. You can change the query,
   * description, or metadata.
   */
  update(
    id: string,
    body: ReportUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportUpdateResponse> {
    return this._client.post(`/reports/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of saved reports for your organization.
   */
  list(
    query?: ReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReportListResponsesList, ReportListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<ReportListResponsesList, ReportListResponse>;
  list(
    query: ReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReportListResponsesList, ReportListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/reports/', ReportListResponsesList, { query, ...options });
  }

  /**
   * Delete a saved report definition. This action cannot be undone. Associated
   * exports are not automatically deleted.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ReportDeleteResponse> {
    return this._client.delete(`/reports/${id}`, options);
  }

  /**
   * Run an ad-hoc SQL query against your data lake and get a sample of the results.
   * This is useful for quickly testing queries without saving them as a report. The
   * query execution time and result size are limited.
   */
  runAdHocQuery(
    body: ReportRunAdHocQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportRunAdHocQueryResponse> {
    return this._client.post('/reports/samples', { body, ...options });
  }

  /**
   * Run the query associated with a saved report and get a sample of the results.
   * This allows getting up to 1000 rows of resutls but the runtime of the query is
   * limited to 30 seconds. If you need more rows or longer runtime, you should
   * create an export from this report.
   */
  sample(
    id: string,
    body: ReportSampleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSampleResponse> {
    return this._client.post(`/reports/${id}/samples`, { body, ...options });
  }
}

export class ReportListResponsesList extends List<ReportListResponse> {}

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
  metadata?: Record<string, string>;
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
  metadata?: Record<string, string>;
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
  metadata?: Record<string, string>;
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
  metadata?: Record<string, string>;
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
  records: Array<Record<string, unknown>>;

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
  records: Array<Record<string, unknown>>;

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
  metadata?: Record<string, string>;
}

export interface ReportUpdateParams {
  /**
   * An optional user-friendly description for the report. Set to null to remove.
   */
  description?: string | null;

  /**
   * Optional key-value metadata associated with the report. Set to null to remove.
   */
  metadata?: Record<string, string> | null;

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

Reports.ReportListResponsesList = ReportListResponsesList;
Reports.Samples = Samples;
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
    ReportListResponsesList as ReportListResponsesList,
    type ReportCreateParams as ReportCreateParams,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportListParams as ReportListParams,
    type ReportRunAdHocQueryParams as ReportRunAdHocQueryParams,
    type ReportSampleParams as ReportSampleParams,
  };

  export {
    Samples as Samples,
    type SampleRunResponse as SampleRunResponse,
    type SampleSampleResponse as SampleSampleResponse,
    type SampleRunParams as SampleRunParams,
    type SampleSampleParams as SampleSampleParams,
  };

  export {
    Exports as Exports,
    type ExportCreateResponse as ExportCreateResponse,
    type ExportRetrieveResponse as ExportRetrieveResponse,
    type ExportDeleteResponse as ExportDeleteResponse,
    type ExportCreateParams as ExportCreateParams,
  };
}
