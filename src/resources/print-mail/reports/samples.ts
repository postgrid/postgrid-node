// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *  The reports API lets you run SQL queries against a data lake with all of your PostGrid data. You can use this to run ad-hoc SQL queries or save them as reports. You can bulk export data from these reports to fit all of your reporting needs.
 *  Note that the data this API provides may be up to 2 hours behind your current PostGrid environment.
 *  Your test and live data lakes are fully segregated, so you'll need a live API key to run queries against your live data.
 *
 *  You can request access to this to this feature by reaching out to support@postgrid.com
 */
export class Samples extends APIResource {
  /**
   * Run the query associated with a saved report and get a sample of the results.
   * This allows getting up to 1000 rows of resutls but the runtime of the query is
   * limited to 30 seconds. If you need more rows or longer runtime, you should
   * create an export from this report.
   *
   * @example
   * ```ts
   * const reportSample =
   *   await client.printMail.reports.samples.create('id', {
   *     limit: 10,
   *     params: ['2023-10-01T00:00:00Z'],
   *   });
   * ```
   */
  create(id: string, body: SampleCreateParams, options?: RequestOptions): APIPromise<ReportSample> {
    return this._client.post(path`/print-mail/v1/reports/${id}/samples`, { body, ...options });
  }
}

/**
 * Represents the result of a report sample query.
 */
export interface ReportSample {
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
 * Base properties for creating a report sample.
 */
export interface ReportSampleCreateBase {
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

export interface SampleCreateParams {
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
    type ReportSample as ReportSample,
    type ReportSampleCreateBase as ReportSampleCreateBase,
    type SampleCreateParams as SampleCreateParams
  };
}
