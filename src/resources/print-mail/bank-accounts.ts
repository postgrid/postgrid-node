// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BankAccounts extends APIResource {
  /**
   * Create a bank account. A US bank account is created by setting `bankCountryCode`
   * to `US` and providing `accountNumber` and `routingNumber`. A canadian bank
   * account can be created by specifying `bankCountryCode` as `CA` and setting
   * `accountNumber`, `routeNumber`, and `transitNumber` accordingly.
   *
   * You must specify _either_ `signatureImage` or `signatureText`. The image can be
   * supplied as either a URL or a multipart file upload.
   *
   * @example
   * ```ts
   * const bankAccount =
   *   await client.printMail.bankAccounts.create({
   *     accountNumber: '1234567',
   *     bankCountryCode: 'US',
   *     bankName: 'Test Bank',
   *     signatureText: 'Example',
   *     bankPrimaryLine: '145 mulberry st',
   *     bankSecondaryLine: 'new york ny 10013',
   *     routingNumber: '123456789',
   *   });
   * ```
   */
  create(body: BankAccountCreateParams, options?: RequestOptions): APIPromise<BankAccount> {
    return this._client.post('/print-mail/v1/bank_accounts', { body, ...options });
  }

  /**
   * Retrieve a bank account by ID.
   *
   * @example
   * ```ts
   * const bankAccount =
   *   await client.printMail.bankAccounts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BankAccount> {
    return this._client.get(path`/print-mail/v1/bank_accounts/${id}`, options);
  }

  /**
   * Get a list of bank accounts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bankAccount of client.printMail.bankAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BankAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BankAccountsSkipLimit, BankAccount> {
    return this._client.getAPIList('/print-mail/v1/bank_accounts', SkipLimit<BankAccount>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a bank account by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const bankAccount =
   *   await client.printMail.bankAccounts.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<BankAccountDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/bank_accounts/${id}`, options);
  }
}

export type BankAccountsSkipLimit = SkipLimit<BankAccount>;

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
  bankCountryCode: BankAccountCountryCode;

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
   * The designation number of the bank account (for CA).
   */
  caDesignationNumber?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

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

/**
 * Countries typically have different bank account formats and standards. These are
 * the countries which PostGrid's bank accounts API supports.
 */
export type BankAccountCountryCode = 'CA' | 'US';

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
    bankCountryCode: BankAccountCountryCode;

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
     * The designation number of the bank account (for CA).
     */
    caDesignationNumber?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

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
    bankCountryCode: BankAccountCountryCode;

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
     * The designation number of the bank account (for CA).
     */
    caDesignationNumber?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

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
    bankCountryCode: BankAccountCountryCode;

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
     * The designation number of the bank account (for CA).
     */
    caDesignationNumber?: string;

    /**
     * An optional string describing this resource. Will be visible in the API and the
     * dashboard.
     */
    description?: string;

    /**
     * See the section on Metadata.
     */
    metadata?: { [key: string]: unknown };

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

export interface BankAccountListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace BankAccounts {
  export {
    type BankAccount as BankAccount,
    type BankAccountCountryCode as BankAccountCountryCode,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    type BankAccountsSkipLimit as BankAccountsSkipLimit,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };
}
