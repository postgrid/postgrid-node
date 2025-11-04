// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { List } from '../core/pagination';

export class Templates extends APIResource {}

export type TemplatesList = List<Template>;

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

export interface TemplateList {
  data: Array<Template>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export declare namespace Templates {
  export { type Template as Template, type TemplateList as TemplateList };
}
