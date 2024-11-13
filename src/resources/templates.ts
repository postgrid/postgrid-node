// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { List, type ListParams } from '../pagination';

export class Templates extends APIResource {
  /**
   * Create a template. Note that if you want to create a template that works with
   * our template editor, you must use our dashboard.
   */
  create(body: TemplateCreateParams, options?: Core.RequestOptions): Core.APIPromise<Template> {
    return this._client.post('/templates', { body, ...options });
  }

  /**
   * Retrieve a template by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Template> {
    return this._client.get(`/templates/${id}`, options);
  }

  /**
   * Update a template by ID.
   */
  update(id: string, body: TemplateUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Template> {
    return this._client.post(`/templates/${id}`, { body, ...options });
  }

  /**
   * Get a list of templates.
   */
  list(query?: TemplateListParams, options?: Core.RequestOptions): Core.PagePromise<TemplatesList, Template>;
  list(options?: Core.RequestOptions): Core.PagePromise<TemplatesList, Template>;
  list(
    query: TemplateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TemplatesList, Template> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/templates', TemplatesList, { query, ...options });
  }

  /**
   * Delete a template by ID. Note that this operation cannot be undone.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<TemplateDeleteResponse> {
    return this._client.delete(`/templates/${id}`, options);
  }
}

export class TemplatesList extends List<Template> {}

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
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: Record<string, unknown>;
}

export interface TemplateList {
  data: Array<Template>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
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
  metadata?: Record<string, unknown>;
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
  metadata?: Record<string, unknown>;
}

export interface TemplateListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

Templates.TemplatesList = TemplatesList;

export declare namespace Templates {
  export {
    type Template as Template,
    type TemplateList as TemplateList,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    TemplatesList as TemplatesList,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
