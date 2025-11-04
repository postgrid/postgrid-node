// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Postgrid } from '../client';

export abstract class APIResource {
  protected _client: Postgrid;

  constructor(client: Postgrid) {
    this._client = client;
  }
}
