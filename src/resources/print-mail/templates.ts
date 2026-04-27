// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Create a template. Note that if you want to create a template that works with
   * our template editor, you must use our dashboard.
   *
   * @example
   * ```ts
   * const template = await client.printMail.templates.create({
   *   description: 'Test',
   *   html: '<b>Hello</b> {{to.firstName}}',
   * });
   * ```
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<Template> {
    return this._client.post('/print-mail/v1/templates', { body, ...options });
  }

  /**
   * Retrieve a template by ID.
   *
   * @example
   * ```ts
   * const template = await client.printMail.templates.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Template> {
    return this._client.get(path`/print-mail/v1/templates/${id}`, options);
  }

  /**
   * Update a template by ID.
   *
   * @example
   * ```ts
   * const template = await client.printMail.templates.update(
   *   'id',
   *   {
   *     description: 'Test',
   *     html: '<b>Hello</b> {{to.firstName}}!',
   *   },
   * );
   * ```
   */
  update(id: string, body: TemplateUpdateParams, options?: RequestOptions): APIPromise<Template> {
    return this._client.post(path`/print-mail/v1/templates/${id}`, { body, ...options });
  }

  /**
   * Get a list of templates.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const template of client.printMail.templates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TemplatesSkipLimit, Template> {
    return this._client.getAPIList('/print-mail/v1/templates', SkipLimit<Template>, { query, ...options });
  }

  /**
   * Delete a template by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const template = await client.printMail.templates.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TemplateDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/templates/${id}`, options);
  }
}

export type TemplatesSkipLimit = SkipLimit<Template>;

export interface Template {
  /**
   * A unique ID prefixed with template\_
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
   * Always `template`.
   */
  object: 'template';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The HTML content of this template.
   */
  html?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface TemplateDeleteResponse {
  /**
   * A unique ID prefixed with template\_
   */
  id: string;

  deleted: true;

  /**
   * Always `template`.
   */
  object: 'template';
}

export interface TemplateCreateParams {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The HTML content of this template.
   */
  html?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface TemplateUpdateParams {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * The HTML content of this template.
   */
  html?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };
}

export interface TemplateListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace Templates {
  export {
    type Template as Template,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplatesSkipLimit as TemplatesSkipLimit,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
