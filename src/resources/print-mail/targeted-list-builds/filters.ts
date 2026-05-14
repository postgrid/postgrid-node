// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 *  **Beta:** the targeted list builds API is in beta and is subject to
 *  breaking changes. Endpoint shapes, status values, and filter fields may
 *  change without notice.
 *
 *  The targeted list builds API lets you programmatically build mailing
 *  lists of US consumers (B2C) or US companies (B2B) that match a set of
 *  demographic, geographic, and firmographic filters.
 *
 *  The lifecycle of a list build is:
 *
 *  1. Create a list build by supplying either `usConsumers` or `usCompanies`
 *     filters. A quote is generated asynchronously — poll the resource or
 *     wait for its `status` to become `quote_ready`.
 *  2. Review the `quote` (total count and price per contact) and masked
 *     `previewRecords`. Adjust the filters with an update call if needed —
 *     this will regenerate the quote.
 *  3. Confirm the build. This deducts the appropriate amount of list build
 *     credits from your organization (in live mode) and begins constructing
 *     the mailing list. `buildProgressPercent` reflects progress from 0 to
 *     100.
 *  4. Once `status` is `completed`, the ID of the resulting mailing list is
 *     available in the `mailingList` field and can be used like any other
 *     mailing list in the PostGrid API.
 *
 *  Targeted list builds must be enabled on your organization before they
 *  can be used. Contact PostGrid support to request access.
 */
export class Filters extends APIResource {
  /**
   * Return a list of autocomplete suggestions for a given filter field (currently
   * only `industry` is supported). Useful when building a UI around the `industries`
   * company filter.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.targetedListBuilds.filters.autocomplete(
   *     {
   *       field: 'industry',
   *       size: 5,
   *       text: 'soft',
   *     },
   *   );
   * ```
   */
  autocomplete(
    body: FilterAutocompleteParams,
    options?: RequestOptions,
  ): APIPromise<FilterAutocompleteResponse> {
    return this._client.post('/print-mail/v1/targeted_list_builds/filters/autocomplete', {
      body,
      ...options,
    });
  }
}

/**
 * The list of suggestions returned by an autocomplete query.
 */
export interface FilterAutocompleteResponse {
  data: Array<FilterAutocompleteResponse.Data>;

  object: 'list';
}

export namespace FilterAutocompleteResponse {
  /**
   * A single autocomplete suggestion.
   */
  export interface Data {
    /**
     * A field that can be autocompleted when configuring list build filters.
     */
    type: 'industry';

    /**
     * The suggested value (e.g., an industry name).
     */
    value: string;
  }
}

export interface FilterAutocompleteParams {
  /**
   * A field that can be autocompleted when configuring list build filters.
   */
  field: 'industry';

  /**
   * Maximum number of suggestions to return. Between 1 and 100. Defaults to 25 if
   * omitted.
   */
  size?: number;

  /**
   * Optional text prefix to narrow the autocomplete suggestions.
   */
  text?: string;
}

export declare namespace Filters {
  export {
    type FilterAutocompleteResponse as FilterAutocompleteResponse,
    type FilterAutocompleteParams as FilterAutocompleteParams,
  };
}
