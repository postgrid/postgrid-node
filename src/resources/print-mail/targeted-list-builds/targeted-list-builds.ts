// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FiltersAPI from './filters';
import { FilterAutocompleteParams, FilterAutocompleteResponse, Filters } from './filters';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
export class TargetedListBuilds extends APIResource {
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);

  /**
   * Create a new targeted list build. A quote will be generated asynchronously based
   * on the provided filters.
   *
   * @example
   * ```ts
   * const targetedListBuild =
   *   await client.printMail.targetedListBuilds.create({
   *     description: 'Q1 prospecting list',
   *     limit: 1000,
   *     metadata: { campaign: 'q1_prospecting' },
   *     usCompanies: {
   *       postalCodes: ['10001', '10002'],
   *       industries: ['software'],
   *       employeeCount: [10, 500],
   *     },
   *   });
   * ```
   */
  create(
    params: TargetedListBuildCreateParams,
    options?: RequestOptions,
  ): APIPromise<TargetedListBuildCreateResponse> {
    const { 'idempotency-key': idempotencyKey, ...body } = params;
    return this._client.post('/print-mail/v1/targeted_list_builds', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a specific targeted list build by its ID.
   *
   * @example
   * ```ts
   * const targetedListBuild =
   *   await client.printMail.targetedListBuilds.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TargetedListBuildRetrieveResponse> {
    return this._client.get(path`/print-mail/v1/targeted_list_builds/${id}`, options);
  }

  /**
   * Update an existing targeted list build. Only builds that have not yet been
   * confirmed may be updated. Updating the filters or `limit` will reset the build's
   * status back to `generating_quote` and a new quote will be generated.
   *
   * @example
   * ```ts
   * const targetedListBuild =
   *   await client.printMail.targetedListBuilds.update('id', {
   *     limit: 2000,
   *     usCompanies: {
   *       postalCodes: ['10001', '10002', '10003'],
   *       industries: ['software', 'fintech'],
   *       employeeCount: [50, 1000],
   *     },
   *   });
   * ```
   */
  update(
    id: string,
    body: TargetedListBuildUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TargetedListBuildUpdateResponse> {
    return this._client.post(path`/print-mail/v1/targeted_list_builds/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of targeted list builds for the authenticated
   * organization, ordered from most recently updated to least recently updated.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const targetedListBuildListResponse of client.printMail.targetedListBuilds.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TargetedListBuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TargetedListBuildListResponsesSkipLimit, TargetedListBuildListResponse> {
    return this._client.getAPIList(
      '/print-mail/v1/targeted_list_builds',
      SkipLimit<TargetedListBuildListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a targeted list build. List builds can only be deleted before they have
   * been confirmed — once a build has transitioned to `creating_list` or `completed`
   * it cannot be deleted.
   *
   * @example
   * ```ts
   * const targetedListBuild =
   *   await client.printMail.targetedListBuilds.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TargetedListBuildDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/targeted_list_builds/${id}`, options);
  }

  /**
   * Confirm a targeted list build whose quote is ready. This deducts the appropriate
   * amount of list build credits from the organization (in live mode) and kicks off
   * the asynchronous creation of the underlying mailing list.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.targetedListBuilds.confirm('id');
   * ```
   */
  confirm(id: string, options?: RequestOptions): APIPromise<TargetedListBuildConfirmResponse> {
    return this._client.post(path`/print-mail/v1/targeted_list_builds/${id}/confirm`, options);
  }
}

export type TargetedListBuildListResponsesSkipLimit = SkipLimit<TargetedListBuildListResponse>;

/**
 * A targeted list build represents a request to build a new mailing list by
 * targeting US consumers or companies matching the provided filters. Once created,
 * a quote is generated asynchronously. After reviewing the quote and preview
 * records, you may confirm the build, which kicks off the creation of the
 * underlying mailing list.
 */
export interface TargetedListBuildCreateResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the organization that owns this list build.
   */
  organization: string;

  /**
   * Status of a targeted list build.
   */
  status: 'generating_quote' | 'quote_ready' | 'creating_list' | 'completed' | 'failed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * A percentage from 0 to 100 representing how much of the build has completed.
   * Only populated while `status` is `creating_list`.
   */
  buildProgressPercent?: number;

  /**
   * The UTC time at which the build finished successfully. Only present once
   * `status` is `completed`.
   */
  completedAt?: string;

  /**
   * The UTC time at which the build was confirmed, if any.
   */
  confirmedAt?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Any errors encountered while generating a quote or building the list.
   */
  errors?: Array<TargetedListBuildCreateResponse.Error>;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * The ID of the mailing list that was built. Present once `status` is `completed`.
   */
  mailingList?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A small number of masked sample records for the configured filters, populated
   * alongside `quote`.
   */
  previewRecords?: Array<TargetedListBuildCreateResponse.PreviewRecord>;

  /**
   * Details of the quote generated for a targeted list build.
   */
  quote?: TargetedListBuildCreateResponse.Quote;

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildCreateResponse.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildCreateResponse.UsConsumers;
}

export namespace TargetedListBuildCreateResponse {
  /**
   * Details of an error encountered while processing a targeted list build.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered while generating a quote or building the list.
     */
    type: 'not_enough_info_to_quote' | 'insufficient_credits' | 'internal_service_error';
  }

  /**
   * A single masked preview record returned with a quote so you can sanity check the
   * kind of contacts that will end up in the mailing list before confirming the
   * build.
   */
  export interface PreviewRecord {
    /**
     * The masked, comma-joined formatted address of the contact.
     */
    formattedAddress: string;

    /**
     * The masked name of the contact or business.
     */
    name: string;
  }

  /**
   * Details of the quote generated for a targeted list build.
   */
  export interface Quote {
    /**
     * The number of contacts that will be included in the built mailing list. This
     * accounts for any `limit` that was provided.
     */
    count: number;

    /**
     * The UTC time at which the quote was generated.
     */
    generatedAt: string;

    /**
     * The price per contact, in cents. Multiply by `count` to get the total cost of
     * building the list.
     */
    pricePerContactCents: number;
  }

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

/**
 * A targeted list build represents a request to build a new mailing list by
 * targeting US consumers or companies matching the provided filters. Once created,
 * a quote is generated asynchronously. After reviewing the quote and preview
 * records, you may confirm the build, which kicks off the creation of the
 * underlying mailing list.
 */
export interface TargetedListBuildRetrieveResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the organization that owns this list build.
   */
  organization: string;

  /**
   * Status of a targeted list build.
   */
  status: 'generating_quote' | 'quote_ready' | 'creating_list' | 'completed' | 'failed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * A percentage from 0 to 100 representing how much of the build has completed.
   * Only populated while `status` is `creating_list`.
   */
  buildProgressPercent?: number;

  /**
   * The UTC time at which the build finished successfully. Only present once
   * `status` is `completed`.
   */
  completedAt?: string;

  /**
   * The UTC time at which the build was confirmed, if any.
   */
  confirmedAt?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Any errors encountered while generating a quote or building the list.
   */
  errors?: Array<TargetedListBuildRetrieveResponse.Error>;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * The ID of the mailing list that was built. Present once `status` is `completed`.
   */
  mailingList?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A small number of masked sample records for the configured filters, populated
   * alongside `quote`.
   */
  previewRecords?: Array<TargetedListBuildRetrieveResponse.PreviewRecord>;

  /**
   * Details of the quote generated for a targeted list build.
   */
  quote?: TargetedListBuildRetrieveResponse.Quote;

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildRetrieveResponse.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildRetrieveResponse.UsConsumers;
}

export namespace TargetedListBuildRetrieveResponse {
  /**
   * Details of an error encountered while processing a targeted list build.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered while generating a quote or building the list.
     */
    type: 'not_enough_info_to_quote' | 'insufficient_credits' | 'internal_service_error';
  }

  /**
   * A single masked preview record returned with a quote so you can sanity check the
   * kind of contacts that will end up in the mailing list before confirming the
   * build.
   */
  export interface PreviewRecord {
    /**
     * The masked, comma-joined formatted address of the contact.
     */
    formattedAddress: string;

    /**
     * The masked name of the contact or business.
     */
    name: string;
  }

  /**
   * Details of the quote generated for a targeted list build.
   */
  export interface Quote {
    /**
     * The number of contacts that will be included in the built mailing list. This
     * accounts for any `limit` that was provided.
     */
    count: number;

    /**
     * The UTC time at which the quote was generated.
     */
    generatedAt: string;

    /**
     * The price per contact, in cents. Multiply by `count` to get the total cost of
     * building the list.
     */
    pricePerContactCents: number;
  }

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

/**
 * A targeted list build represents a request to build a new mailing list by
 * targeting US consumers or companies matching the provided filters. Once created,
 * a quote is generated asynchronously. After reviewing the quote and preview
 * records, you may confirm the build, which kicks off the creation of the
 * underlying mailing list.
 */
export interface TargetedListBuildUpdateResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the organization that owns this list build.
   */
  organization: string;

  /**
   * Status of a targeted list build.
   */
  status: 'generating_quote' | 'quote_ready' | 'creating_list' | 'completed' | 'failed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * A percentage from 0 to 100 representing how much of the build has completed.
   * Only populated while `status` is `creating_list`.
   */
  buildProgressPercent?: number;

  /**
   * The UTC time at which the build finished successfully. Only present once
   * `status` is `completed`.
   */
  completedAt?: string;

  /**
   * The UTC time at which the build was confirmed, if any.
   */
  confirmedAt?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Any errors encountered while generating a quote or building the list.
   */
  errors?: Array<TargetedListBuildUpdateResponse.Error>;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * The ID of the mailing list that was built. Present once `status` is `completed`.
   */
  mailingList?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A small number of masked sample records for the configured filters, populated
   * alongside `quote`.
   */
  previewRecords?: Array<TargetedListBuildUpdateResponse.PreviewRecord>;

  /**
   * Details of the quote generated for a targeted list build.
   */
  quote?: TargetedListBuildUpdateResponse.Quote;

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildUpdateResponse.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildUpdateResponse.UsConsumers;
}

export namespace TargetedListBuildUpdateResponse {
  /**
   * Details of an error encountered while processing a targeted list build.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered while generating a quote or building the list.
     */
    type: 'not_enough_info_to_quote' | 'insufficient_credits' | 'internal_service_error';
  }

  /**
   * A single masked preview record returned with a quote so you can sanity check the
   * kind of contacts that will end up in the mailing list before confirming the
   * build.
   */
  export interface PreviewRecord {
    /**
     * The masked, comma-joined formatted address of the contact.
     */
    formattedAddress: string;

    /**
     * The masked name of the contact or business.
     */
    name: string;
  }

  /**
   * Details of the quote generated for a targeted list build.
   */
  export interface Quote {
    /**
     * The number of contacts that will be included in the built mailing list. This
     * accounts for any `limit` that was provided.
     */
    count: number;

    /**
     * The UTC time at which the quote was generated.
     */
    generatedAt: string;

    /**
     * The price per contact, in cents. Multiply by `count` to get the total cost of
     * building the list.
     */
    pricePerContactCents: number;
  }

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

/**
 * A targeted list build represents a request to build a new mailing list by
 * targeting US consumers or companies matching the provided filters. Once created,
 * a quote is generated asynchronously. After reviewing the quote and preview
 * records, you may confirm the build, which kicks off the creation of the
 * underlying mailing list.
 */
export interface TargetedListBuildListResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the organization that owns this list build.
   */
  organization: string;

  /**
   * Status of a targeted list build.
   */
  status: 'generating_quote' | 'quote_ready' | 'creating_list' | 'completed' | 'failed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * A percentage from 0 to 100 representing how much of the build has completed.
   * Only populated while `status` is `creating_list`.
   */
  buildProgressPercent?: number;

  /**
   * The UTC time at which the build finished successfully. Only present once
   * `status` is `completed`.
   */
  completedAt?: string;

  /**
   * The UTC time at which the build was confirmed, if any.
   */
  confirmedAt?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Any errors encountered while generating a quote or building the list.
   */
  errors?: Array<TargetedListBuildListResponse.Error>;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * The ID of the mailing list that was built. Present once `status` is `completed`.
   */
  mailingList?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A small number of masked sample records for the configured filters, populated
   * alongside `quote`.
   */
  previewRecords?: Array<TargetedListBuildListResponse.PreviewRecord>;

  /**
   * Details of the quote generated for a targeted list build.
   */
  quote?: TargetedListBuildListResponse.Quote;

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildListResponse.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildListResponse.UsConsumers;
}

export namespace TargetedListBuildListResponse {
  /**
   * Details of an error encountered while processing a targeted list build.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered while generating a quote or building the list.
     */
    type: 'not_enough_info_to_quote' | 'insufficient_credits' | 'internal_service_error';
  }

  /**
   * A single masked preview record returned with a quote so you can sanity check the
   * kind of contacts that will end up in the mailing list before confirming the
   * build.
   */
  export interface PreviewRecord {
    /**
     * The masked, comma-joined formatted address of the contact.
     */
    formattedAddress: string;

    /**
     * The masked name of the contact or business.
     */
    name: string;
  }

  /**
   * Details of the quote generated for a targeted list build.
   */
  export interface Quote {
    /**
     * The number of contacts that will be included in the built mailing list. This
     * accounts for any `limit` that was provided.
     */
    count: number;

    /**
     * The UTC time at which the quote was generated.
     */
    generatedAt: string;

    /**
     * The price per contact, in cents. Multiply by `count` to get the total cost of
     * building the list.
     */
    pricePerContactCents: number;
  }

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

export interface TargetedListBuildDeleteResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  deleted: true;
}

/**
 * A targeted list build represents a request to build a new mailing list by
 * targeting US consumers or companies matching the provided filters. Once created,
 * a quote is generated asynchronously. After reviewing the quote and preview
 * records, you may confirm the build, which kicks off the creation of the
 * underlying mailing list.
 */
export interface TargetedListBuildConfirmResponse {
  /**
   * A unique ID prefixed with targeted*list_build*
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * The ID of the organization that owns this list build.
   */
  organization: string;

  /**
   * Status of a targeted list build.
   */
  status: 'generating_quote' | 'quote_ready' | 'creating_list' | 'completed' | 'failed';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * A percentage from 0 to 100 representing how much of the build has completed.
   * Only populated while `status` is `creating_list`.
   */
  buildProgressPercent?: number;

  /**
   * The UTC time at which the build finished successfully. Only present once
   * `status` is `completed`.
   */
  completedAt?: string;

  /**
   * The UTC time at which the build was confirmed, if any.
   */
  confirmedAt?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Any errors encountered while generating a quote or building the list.
   */
  errors?: Array<TargetedListBuildConfirmResponse.Error>;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * The ID of the mailing list that was built. Present once `status` is `completed`.
   */
  mailingList?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * A small number of masked sample records for the configured filters, populated
   * alongside `quote`.
   */
  previewRecords?: Array<TargetedListBuildConfirmResponse.PreviewRecord>;

  /**
   * Details of the quote generated for a targeted list build.
   */
  quote?: TargetedListBuildConfirmResponse.Quote;

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildConfirmResponse.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildConfirmResponse.UsConsumers;
}

export namespace TargetedListBuildConfirmResponse {
  /**
   * Details of an error encountered while processing a targeted list build.
   */
  export interface Error {
    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Type of error encountered while generating a quote or building the list.
     */
    type: 'not_enough_info_to_quote' | 'insufficient_credits' | 'internal_service_error';
  }

  /**
   * A single masked preview record returned with a quote so you can sanity check the
   * kind of contacts that will end up in the mailing list before confirming the
   * build.
   */
  export interface PreviewRecord {
    /**
     * The masked, comma-joined formatted address of the contact.
     */
    formattedAddress: string;

    /**
     * The masked name of the contact or business.
     */
    name: string;
  }

  /**
   * Details of the quote generated for a targeted list build.
   */
  export interface Quote {
    /**
     * The number of contacts that will be included in the built mailing list. This
     * accounts for any `limit` that was provided.
     */
    count: number;

    /**
     * The UTC time at which the quote was generated.
     */
    generatedAt: string;

    /**
     * The price per contact, in cents. Multiply by `count` to get the total cost of
     * building the list.
     */
    pricePerContactCents: number;
  }

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

export interface TargetedListBuildCreateParams {
  /**
   * Body param: An optional string describing this resource. Will be visible in the
   * API and the dashboard.
   */
  description?: string;

  /**
   * Body param: Maximum number of contacts to include in the built mailing list. If
   * omitted, all matching contacts are included.
   */
  limit?: number;

  /**
   * Body param: See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildCreateParams.UsCompanies;

  /**
   * Body param: Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildCreateParams.UsConsumers;

  /**
   * Header param
   */
  'idempotency-key'?: string;
}

export namespace TargetedListBuildCreateParams {
  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

export interface TargetedListBuildUpdateParams {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Maximum number of contacts to include in the built mailing list. If omitted, all
   * matching contacts are included.
   */
  limit?: number;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  usCompanies?: TargetedListBuildUpdateParams.UsCompanies;

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  usConsumers?: TargetedListBuildUpdateParams.UsConsumers;
}

export namespace TargetedListBuildUpdateParams {
  /**
   * Filters used to target US companies (B2B) when building a list.
   */
  export interface UsCompanies {
    /**
     * Required list of five-digit US ZIP codes to target.
     */
    postalCodes: Array<string>;

    /**
     * Filter by ownership structure of the company.
     */
    companyTypes?: Array<
      'public' | 'private' | 'educational' | 'government' | 'nonprofit' | 'public_subsidiary'
    >;

    /**
     * Inclusive `[min, max]` range for the number of employees at the company. Values
     * must be between 1 and 1,000,000.
     */
    employeeCount?: Array<number>;

    /**
     * Inclusive `[min, max]` range for the year the company was founded. Values must
     * be between 1600 and 2100.
     */
    foundedYear?: Array<number>;

    /**
     * Filter by free-form industry names (see the autocomplete endpoint).
     */
    industries?: Array<string>;

    /**
     * Filter by six-digit [NAICS](https://www.census.gov/naics/) industry codes.
     */
    naicsCodes?: Array<string>;

    /**
     * Filter by free-form company tags (e.g., `"saas"`, `"b2b"`).
     */
    tags?: Array<string>;
  }

  /**
   * Filters used to target US consumers (B2C) when building a list.
   *
   * The geographic filters (`zipCodesAround`, `cityStates`, `zipCodes`) are mutually
   * exclusive — you may supply at most one of them.
   */
  export interface UsConsumers {
    /**
     * Inclusive `[min, max]` age range. Values must be between 18 and 80.
     */
    ageRange?: Array<number>;

    /**
     * A list of `"City, ST"` strings (e.g. `"New York, NY"`) to target.
     */
    cityStates?: Array<string>;

    /**
     * Filter by highest level of education completed.
     */
    educationLevels?: Array<'high_school' | 'college' | 'grad_school' | 'vocational_training'>;

    /**
     * Gender filter for US consumer list builds.
     */
    gender?: 'male' | 'female';

    /**
     * Inclusive `[min, max]` home value range, in US dollars. Values must be between 0
     * and 1,000,000.
     */
    homeValueRange?: Array<number>;

    /**
     * Inclusive `[min, max]` annual household income range, in US dollars. Values must
     * be between 0 and 200,000.
     */
    incomeRange?: Array<number>;

    /**
     * Inclusive `[min, max]` number of children in the household. Values must be
     * between 0 and 8.
     */
    numChildrenRange?: Array<number>;

    /**
     * Filter by occupation classification.
     */
    occupations?: Array<
      | 'professional_technical'
      | 'administration_management'
      | 'sales_service'
      | 'clerical_white_collar'
      | 'craftsmen_blue_collar'
      | 'student'
      | 'homemaker'
      | 'retired'
      | 'farmer'
      | 'military'
      | 'religious'
      | 'self_employed'
      | 'self_employed_professional_technical'
      | 'self_employed_administration_management'
      | 'self_employed_sales_service'
      | 'self_employed_clerical_white_collar'
      | 'self_employed_craftsmen_blue_collar'
      | 'self_employed_student'
      | 'self_employed_homemaker'
      | 'self_employed_retired'
      | 'self_employed_other'
      | 'educator'
      | 'financial_professional'
      | 'legal_professional'
      | 'medical_professional'
      | 'other'
    >;

    /**
     * A list of five-digit US ZIP codes to target.
     */
    zipCodes?: Array<string>;

    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    zipCodesAround?: UsConsumers.ZipCodesAround;
  }

  export namespace UsConsumers {
    /**
     * A geographic filter that selects all ZIP codes within a given radius of a center
     * ZIP code.
     */
    export interface ZipCodesAround {
      /**
       * The radius in miles around `zipCode` to include. Between 0.1 and 100.
       */
      radiusInMiles: number;

      /**
       * The five-digit ZIP code at the center of the search circle.
       */
      zipCode: string;
    }
  }
}

export interface TargetedListBuildListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

TargetedListBuilds.Filters = Filters;

export declare namespace TargetedListBuilds {
  export {
    type TargetedListBuildCreateResponse as TargetedListBuildCreateResponse,
    type TargetedListBuildRetrieveResponse as TargetedListBuildRetrieveResponse,
    type TargetedListBuildUpdateResponse as TargetedListBuildUpdateResponse,
    type TargetedListBuildListResponse as TargetedListBuildListResponse,
    type TargetedListBuildDeleteResponse as TargetedListBuildDeleteResponse,
    type TargetedListBuildConfirmResponse as TargetedListBuildConfirmResponse,
    type TargetedListBuildListResponsesSkipLimit as TargetedListBuildListResponsesSkipLimit,
    type TargetedListBuildCreateParams as TargetedListBuildCreateParams,
    type TargetedListBuildUpdateParams as TargetedListBuildUpdateParams,
    type TargetedListBuildListParams as TargetedListBuildListParams,
  };

  export {
    Filters as Filters,
    type FilterAutocompleteResponse as FilterAutocompleteResponse,
    type FilterAutocompleteParams as FilterAutocompleteParams,
  };
}
