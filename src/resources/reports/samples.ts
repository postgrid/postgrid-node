// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Samples extends APIResource {
  /**
   * Run an ad-hoc SQL query against your data lake and get a sample of the results.
   * This is useful for quickly testing queries without saving them as a report. The
   * query execution time and result size are limited.
   */
  run(body: SampleRunParams, options?: Core.RequestOptions): Core.APIPromise<SampleRunResponse> {
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
    body: SampleSampleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SampleSampleResponse> {
    return this._client.post(`/reports/${id}/samples`, { body, ...options });
  }
}

/**
 * Represents the result of a report sample query.
 */
export interface SampleRunResponse {
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
export interface SampleSampleResponse {
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

export interface SampleRunParams {
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

export interface SampleSampleParams {
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

export declare namespace Samples {
  export {
    type SampleRunResponse as SampleRunResponse,
    type SampleSampleResponse as SampleSampleResponse,
    type SampleRunParams as SampleRunParams,
    type SampleSampleParams as SampleSampleParams,
  };
}
