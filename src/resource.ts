// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PostGrid } from './index';

export abstract class APIResource {
  protected _client: PostGrid;

  constructor(client: PostGrid) {
    this._client = client;
  }
}
