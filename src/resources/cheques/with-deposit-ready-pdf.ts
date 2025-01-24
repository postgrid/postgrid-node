// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChequesAPI from './cheques';

export class WithDepositReadyPdf extends APIResource {
  /**
   * Retrieve the deposit-ready PDF for a digital-only cheque. The endpoint can only
   * be called by users with 'Admin' role. In test mode, the preview PDF of the
   * digitalOnly cheque and the deposit-ready PDF are the same. In live mode, the
   * deposit-ready will have the full account number.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ChequesAPI.Cheque> {
    return this._client.get(`/cheques/${id}/with_deposit_ready_pdf`, options);
  }
}
