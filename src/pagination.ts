// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ListResponse<Item> {
  data: Array<Item>;

  totalCount: number;

  limit: number;
}

export interface ListParams {
  /**
   * The number of elements to skip.
   */
  skip?: number;

  /**
   * The maximum number of elements to fetch.
   */
  limit?: number;
}

export class List<Item> extends AbstractPage<Item> implements ListResponse<Item> {
  data: Array<Item>;

  totalCount: number;

  limit: number;

  constructor(client: APIClient, response: Response, body: ListResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.totalCount = body.totalCount || 0;
    this.limit = body.limit || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.limit;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.totalCount;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return { params: { skip: currentCount } };
    }

    return null;
  }
}
