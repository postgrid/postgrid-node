// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { List, type ListParams } from '../pagination';

export class BankAccounts extends APIResource {
  /**
   * Create a bank account. A US bank account is created by setting `bankCountryCode`
   * to `US` and providing `accountNumber` and `routingNumber`. A canadian bank
   * account can be created by specifying `bankCountryCode` as `CA` and setting
   * `accountNumber`, `routeNumber`, and `transitNumber` accordingly.
   *
   * You must specify _either_ `signatureImage` or `signatureText`. The image can be
   * supplied as either a URL or a multipart file upload.
   */
  create(body: BankAccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<BankAccount> {
    return this._client.post('/bank_accounts', { body, ...options });
  }

  /**
   * Retrieve a bank account by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BankAccount> {
    return this._client.get(`/bank_accounts/${id}`, options);
  }

  /**
   * Get a list of bank accounts.
   */
  list(
    query?: BankAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BankAccountsList, BankAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<BankAccountsList, BankAccount>;
  list(
    query: BankAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BankAccountsList, BankAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/bank_accounts', BankAccountsList, { query, ...options });
  }

  /**
   * Delete a bank account by ID. Note that this operation cannot be undone.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<BankAccountDeleteResponse> {
    return this._client.delete(`/bank_accounts/${id}`, options);
  }
}

export class BankAccountsList extends List<BankAccount> {}

export interface BankAccount {
  /**
   * A unique ID prefixed with bank*account*
   */
  id: string;

  /**
   * The account number of the bank account.
   */
  accountNumber: string;

  /**
   * Countries typically have different bank account formats and standards. These are
   * the countries which PostGrid's bank accounts API supports.
   */
  bankCountryCode: 'CA' | 'US';

  /**
   * The name of the bank.
   */
  bankName: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always `bank_account`.
   */
  object: 'bank_account';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * The primary address line of the bank.
   */
  bankPrimaryLine?: string;

  /**
   * The secondary address line of the bank.
   */
  bankSecondaryLine?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: Record<string, unknown>;

  /**
   * The route number of the bank account (for CA).
   */
  routeNumber?: string;

  /**
   * The routing number of the bank account (for US).
   */
  routingNumber?: string;

  /**
   * A signed link to the signature image uploaded when this bank account was
   * created. This is omitted if `signatureText` is present.
   */
  signatureImage?: string;

  /**
   * The signature text PostGrid uses to generate a signature for cheques created
   * using this bank account. This is omitted if `signatureImage` is present.
   */
  signatureText?: string;

  /**
   * The transit number of the bank account (for CA).
   */
  transitNumber?: string;
}

export interface BankAccountList {
  data: Array<BankAccount>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export interface BankAccountDeleteResponse {
  /**
   * A unique ID prefixed with bank*account*
   */
  id: string;

  deleted: true;

  /**
   * Always `bank_account`.
   */
  object: 'bank_account';
}

export type BankAccountCreateParams =
  | BankAccountCreateParams.BankAccountCreateSignatureText
  | BankAccountCreateParams.BankAccountCreateSignatureImageURL
  | BankAccountCreateParams.BankAccountCreateSignatureImageFile;

export declare namespace BankAccountCreateParams {
  export interface BankAccountCreateSignatureText {
    /**
     * The account number of the bank account.
     */
    accountNumber: string;

    /**
     * Countries typically have different bank account formats and standards. These are
     * the countries which PostGrid's bank accounts API supports.
     */
    bankCountryCode: 'CA' | 'US';

    /**
     * The name of the bank.
     */
    bankName: string;

    /**
     * The signature text of the bank account.
     */
    signatureText: string;

    /**
     * The primary address line of the bank.
     */
    bankPrimaryLine?: string;

    /**
     * The secondary address line of the bank.
     */
    bankSecondaryLine?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

    /**
     * The route number of the bank account (for CA).
     */
    routeNumber?: string;

    /**
     * The routing number of the bank account (for US).
     */
    routingNumber?: string;

    /**
     * The transit number of the bank account (for CA).
     */
    transitNumber?: string;
  }

  export interface BankAccountCreateSignatureImageURL {
    /**
     * The account number of the bank account.
     */
    accountNumber: string;

    /**
     * Countries typically have different bank account formats and standards. These are
     * the countries which PostGrid's bank accounts API supports.
     */
    bankCountryCode: 'CA' | 'US';

    /**
     * The name of the bank.
     */
    bankName: string;

    /**
     * Link to signature image which PostGrid will download and apply to cheques
     * created with this bank account.
     */
    signatureImage: string;

    /**
     * The primary address line of the bank.
     */
    bankPrimaryLine?: string;

    /**
     * The secondary address line of the bank.
     */
    bankSecondaryLine?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

    /**
     * The route number of the bank account (for CA).
     */
    routeNumber?: string;

    /**
     * The routing number of the bank account (for US).
     */
    routingNumber?: string;

    /**
     * The transit number of the bank account (for CA).
     */
    transitNumber?: string;
  }

  export interface BankAccountCreateSignatureImageFile {
    /**
     * The account number of the bank account.
     */
    accountNumber: string;

    /**
     * Countries typically have different bank account formats and standards. These are
     * the countries which PostGrid's bank accounts API supports.
     */
    bankCountryCode: 'CA' | 'US';

    /**
     * The name of the bank.
     */
    bankName: string;

    /**
     * A PNG or JPEG file which PostGrid will apply to checks created with this bank
     * account.
     */
    signatureImage: string;

    /**
     * The primary address line of the bank.
     */
    bankPrimaryLine?: string;

    /**
     * The secondary address line of the bank.
     */
    bankSecondaryLine?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: Record<string, unknown>;

    /**
     * The route number of the bank account (for CA).
     */
    routeNumber?: string;

    /**
     * The routing number of the bank account (for US).
     */
    routingNumber?: string;

    /**
     * The transit number of the bank account (for CA).
     */
    transitNumber?: string;
  }
}

export interface BankAccountListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

BankAccounts.BankAccountsList = BankAccountsList;

export declare namespace BankAccounts {
  export {
    type BankAccount as BankAccount,
    type BankAccountList as BankAccountList,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    BankAccountsList as BankAccountsList,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };
}
