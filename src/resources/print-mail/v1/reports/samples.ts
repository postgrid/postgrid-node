// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Samples extends APIResource {
  /**
   * Run the query associated with a saved report and get a sample of the results.
   * This allows getting up to 1000 rows of resutls but the runtime of the query is
   * limited to 30 seconds. If you need more rows or longer runtime, you should
   * create an export from this report.
   *
   * @example
   * ```ts
   * const sample =
   *   await client.printMail.v1.reports.samples.create('id', {
   *     limit: 10,
   *     params: ['2023-10-01T00:00:00Z'],
   *   });
   * ```
   */
  create(id: string, body: SampleCreateParams, options?: RequestOptions): APIPromise<SampleCreateResponse> {
    return this._client.post(path`/print-mail/v1/reports/${id}/samples`, { body, ...options });
  }
}

/**
 * Represents the result of a report sample query.
 */
export interface SampleCreateResponse {
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
  export { type SampleCreateResponse as SampleCreateResponse, type SampleCreateParams as SampleCreateParams };
}
