// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { List } from '../core/pagination';

export class BankAccounts extends APIResource {}

export type BankAccountsList = List<BankAccount>;

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

export interface BankAccountList {
  data: Array<BankAccount>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export declare namespace BankAccounts {
  export { type BankAccount as BankAccount, type BankAccountList as BankAccountList };
}
