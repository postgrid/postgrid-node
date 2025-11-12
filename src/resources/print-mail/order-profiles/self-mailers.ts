// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BoxesAPI from '../boxes';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SelfMailers extends APIResource {
  /**
   * Creates a new Self-Mailer Profile. Provide either `insideTemplate` and
   * `outsideTemplate` IDs, or upload a 2-page `pdf`. If providing a `pdf`, the
   * request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const selfMailerProfile =
   *   await client.printMail.orderProfiles.selfMailers.create({
   *     size: '8.5x11_bifold',
   *   });
   * ```
   */
  create(params: SelfMailerCreateParams, options?: RequestOptions): APIPromise<SelfMailerProfile> {
    const { expand, ...body } = params;
    return this._client.post('/print-mail/v1/order_profiles/self_mailers', {
      query: { expand },
      body,
      ...options,
    });
  }

  /**
   * Retrieves the details of a specific Self-Mailer Profile.
   *
   * @example
   * ```ts
   * const selfMailerProfile =
   *   await client.printMail.orderProfiles.selfMailers.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: SelfMailerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SelfMailerProfile> {
    return this._client.get(path`/print-mail/v1/order_profiles/self_mailers/${id}`, { query, ...options });
  }

  /**
   * Updates specific fields of an existing Self-Mailer Profile. If providing a
   * `pdf`, the request `Content-Type` must be `multipart/form-data`.
   *
   * @example
   * ```ts
   * const selfMailerProfile =
   *   await client.printMail.orderProfiles.selfMailers.update(
   *     'id',
   *     { size: '8.5x11_bifold' },
   *   );
   * ```
   */
  update(
    id: string,
    params: SelfMailerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SelfMailerProfile> {
    const { expand, ...body } = params;
    return this._client.post(path`/print-mail/v1/order_profiles/self_mailers/${id}`, {
      query: { expand },
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of Self-Mailer Profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const selfMailerProfile of client.printMail.orderProfiles.selfMailers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SelfMailerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SelfMailerProfilesSkipLimit, SelfMailerProfile> {
    return this._client.getAPIList(
      '/print-mail/v1/order_profiles/self_mailers',
      SkipLimit<SelfMailerProfile>,
      { query, ...options },
    );
  }

  /**
   * Deletes a Self-Mailer Profile.
   *
   * @example
   * ```ts
   * const selfMailer =
   *   await client.printMail.orderProfiles.selfMailers.delete(
   *     'id',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SelfMailerDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/order_profiles/self_mailers/${id}`, options);
  }
}

export type SelfMailerProfilesSkipLimit = SkipLimit<SelfMailerProfile>;

/**
 * Represents a Self-Mailer Profile resource.
 */
export interface SelfMailerProfile {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  /**
   * Timestamp when the profile was created.
   */
  createdAt: string;

  /**
   * Indicates if the profile is associated with the live or test environment.
   */
  live: boolean;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';

  /**
   * Enum representing the supported self-mailer sizes.
   */
  size: SelfMailerSize;

  /**
   * Timestamp when the profile was last updated.
   */
  updatedAt: string;

  /**
   * An optional description for the profile. Set to `null` to remove during update.
   */
  description?: string | null;

  /**
   * ID of the template for the inside. Required unless `pdf` is provided.
   */
  insideTemplate?: string;

  /**
   * Mailing class (cannot include extra services for self-mailers).
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * ID of the template for the outside. Required unless `pdf` is provided.
   */
  outsideTemplate?: string;

  /**
   * A temporary, signed URL to view the uploaded PDF, if any.
   */
  uploadedPDF?: string;
}

/**
 * Enum representing the supported self-mailer sizes.
 */
export type SelfMailerSize = '8.5x11_bifold' | '8.5x11_trifold' | '9.5x16_trifold';

export interface SelfMailerDeleteResponse {
  /**
   * Unique identifier for the order profile.
   */
  id: string;

  deleted: true;

  /**
   * Always `self_mailer_profile`.
   */
  object: 'self_mailer_profile';
}

export interface SelfMailerCreateParams {
  /**
   * Body param: Enum representing the supported self-mailer sizes.
   */
  size: SelfMailerSize;

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the inside. Required unless `pdf` is
   * provided.
   */
  insideTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services for self-mailers).
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: ID of the template for the outside. Required unless `pdf` is
   * provided.
   */
  outsideTemplate?: string;

  /**
   * Body param: A 2-page PDF file containing the self-mailer content (inside and
   * outside). Cannot be used with `insideTemplate`/`outsideTemplate`.
   */
  pdf?: string;
}

export interface SelfMailerRetrieveParams {
  /**
   * Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;
}

export interface SelfMailerUpdateParams {
  /**
   * Body param: Enum representing the supported self-mailer sizes.
   */
  size: SelfMailerSize;

  /**
   * Query param: Optional list of related resources to expand in the response.
   */
  expand?: Array<string>;

  /**
   * Body param: An optional description for the profile. Set to `null` to remove
   * during update.
   */
  description?: string | null;

  /**
   * Body param: ID of the template for the inside. Required unless `pdf` is
   * provided.
   */
  insideTemplate?: string;

  /**
   * Body param: Mailing class (cannot include extra services for self-mailers).
   */
  mailingClass?: BoxesAPI.OrderMailingClass;

  /**
   * Body param: Default merge variables for orders created using this profile.
   */
  mergeVariables?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional key-value metadata.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Body param: ID of the template for the outside. Required unless `pdf` is
   * provided.
   */
  outsideTemplate?: string;

  /**
   * Body param: A 2-page PDF file containing the self-mailer content (inside and
   * outside). Cannot be used with `insideTemplate`/`outsideTemplate`.
   */
  pdf?: string;
}

export interface SelfMailerListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace SelfMailers {
  export {
    type SelfMailerProfile as SelfMailerProfile,
    type SelfMailerSize as SelfMailerSize,
    type SelfMailerDeleteResponse as SelfMailerDeleteResponse,
    type SelfMailerProfilesSkipLimit as SelfMailerProfilesSkipLimit,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerRetrieveParams as SelfMailerRetrieveParams,
    type SelfMailerUpdateParams as SelfMailerUpdateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };
}
