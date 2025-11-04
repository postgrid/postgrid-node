// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChequesAPI from './cheques';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WithDepositReadyPdf extends APIResource {
  /**
   * Retrieve the deposit-ready PDF for a digital-only cheque. The endpoint can only
   * be called by users with 'Admin' role. In test mode, the preview PDF of the
   * digitalOnly cheque and the deposit-ready PDF are the same. In live mode, the
   * deposit-ready will have the full account number.
   *
   * @example
   * ```ts
   * const cheque =
   *   await client.cheques.withDepositReadyPdf.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ChequesAPI.Cheque> {
    return this._client.get(path`/cheques/${id}/with_deposit_ready_pdf`, options);
  }
}
