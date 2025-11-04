// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExportsAPI from './exports';
import { Exports } from './exports';

export class Reports extends APIResource {
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
}

Reports.Exports = Exports;

export declare namespace Reports {
  export { Exports as Exports };
}
