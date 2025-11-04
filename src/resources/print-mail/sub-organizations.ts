// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubOrganizationsAPI from './sub-organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubOrganizations extends APIResource {
  /**
   * Get a sub-organization.
   *
   * @example
   * ```ts
   * const subOrganization =
   *   await client.printMail.subOrganizations.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SubOrganization> {
    return this._client.get(path`/print-mail/v1/sub_organizations/${id}`, options);
  }

  /**
   * When creating a user through the API, the verifiedEmail field will automatically
   * be set to true. However, if public signups are used, the email will need to be
   * verified by the user.
   *
   * @example
   * ```ts
   * const subOrganization =
   *   await client.printMail.subOrganizations.update({
   *     countryCode: 'CA',
   *     email: 'suborg@postgrid.com',
   *     name: 'Calvin',
   *     organizationName: 'PostGrid',
   *     password: 'very-strong-password',
   *     phoneNumber: '9059059059',
   *   });
   * ```
   */
  update(
    body: SubOrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubOrganizationUpdateResponse> {
    return this._client.post('/print-mail/v1/sub_organizations/', { body, ...options });
  }

  /**
   * List sub-organizations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.subOrganizations.retrieve();
   * ```
   */
  retrieve(
    query: SubOrganizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubOrganizationRetrieveResponse> {
    return this._client.get('/print-mail/v1/sub_organizations/', { query, ...options });
  }

  /**
   * List users for a sub-organization.
   *
   * @example
   * ```ts
   * const response =
   *   await client.printMail.subOrganizations.retrieveUsers(
   *     'id',
   *   );
   * ```
   */
  retrieveUsers(
    id: string,
    query: SubOrganizationRetrieveUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubOrganizationRetrieveUsersResponse> {
    return this._client.get(path`/print-mail/v1/sub_organizations/${id}/users`, { query, ...options });
  }
}

/**
 * A set of preferences for how a user should receive emails.
 */
export interface EmailPreferences {
  /**
   * The list of preferences for receiving order preview emails.
   */
  orderPreviewSendPreference?: 'do_not_send' | 'send_live_only' | 'send_live_and_test';
}

/**
 * The Sub-Organization object.
 */
export interface SubOrganization {
  /**
   * A unique ID prefixed with `sub_org_`.
   */
  id: string;

  /**
   * The country code of the sub-organization.
   */
  countryCode: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * The limit of mailings the sub-organization can send before being charged
   * overages for the month.
   */
  limit: number;

  /**
   * The name of the sub-organization.
   */
  name: string;

  /**
   * Always `sub_org`.
   */
  object: 'sub_org';

  /**
   * The current rolling charge for the sub-organization for the month, in cents.
   */
  spend: number;

  /**
   * The UTC time at which this resource was last update.
   */
  updatedAt: string;

  /**
   * The amount of mail the sub-organization has sent out this month.
   */
  usage: number;
}

export interface SubOrganizationUpdateResponse {
  /**
   * The Sub-Organization object.
   */
  subOrganization: SubOrganization;

  /**
   * The user object.
   */
  user: SubOrganizationUpdateResponse.User;
}

export namespace SubOrganizationUpdateResponse {
  /**
   * The user object.
   */
  export interface User {
    /**
     * A unique ID prefixed with `user_`.
     */
    id: string;

    /**
     * The user's API keys. Contains live and test mode API keys.
     */
    apiKeys: Array<User.APIKey>;

    /**
     * The email of the user.
     */
    email: string;

    /**
     * The name of the user.
     */
    name: string;

    /**
     * A unique ID prefixed with `user_`.
     */
    organization: string;

    /**
     * Indicates if the user has a pending invite.
     */
    pendingInvite: boolean;

    /**
     * The roles given to the user. Roles can be used to restrict access for users.
     */
    roles: Array<string>;

    /**
     * Indicates if the user has a verified email or not.
     */
    verifiedEmail: boolean;

    /**
     * A set of preferences for how a user should receive emails.
     */
    emailPreferences?: SubOrganizationsAPI.EmailPreferences;

    /**
     * The date and time at which the user last logged in.
     */
    lastLoginTime?: string;

    /**
     * The phone number of the user.
     */
    phoneNumber?: string;

    /**
     * A list of emails the user has previously had. If a user has changed their email
     * before, this list will be populated with all of the emails they once had.
     */
    previousEmails?: Array<string>;
  }

  export namespace User {
    /**
     * An API key.
     */
    export interface APIKey {
      /**
       * The value of the API key.
       */
      value: string;

      /**
       * An optional date which the API key is active until. After this date, the API key
       * will no longer be valid.
       */
      activeUntil?: string;
    }
  }
}

export interface SubOrganizationRetrieveResponse {
  data: Array<SubOrganization>;

  limit: number;

  object: 'list';

  skip: number;

  totalCount: number;
}

export type SubOrganizationRetrieveUsersResponse =
  Array<SubOrganizationRetrieveUsersResponse.SubOrganizationRetrieveUsersResponseItem>;

export namespace SubOrganizationRetrieveUsersResponse {
  /**
   * The user object.
   */
  export interface SubOrganizationRetrieveUsersResponseItem {
    /**
     * A unique ID prefixed with `user_`.
     */
    id: string;

    /**
     * The email of the user.
     */
    email: string;

    /**
     * The name of the user.
     */
    name: string;

    /**
     * A unique ID prefixed with `user_`.
     */
    organization: string;

    /**
     * Indicates if the user has a pending invite.
     */
    pendingInvite: boolean;

    /**
     * The roles given to the user. Roles can be used to restrict access for users.
     */
    roles: Array<string>;

    /**
     * Indicates if the user has a verified email or not.
     */
    verifiedEmail: boolean;

    /**
     * A set of preferences for how a user should receive emails.
     */
    emailPreferences?: SubOrganizationsAPI.EmailPreferences;

    /**
     * The date and time at which the user last logged in.
     */
    lastLoginTime?: string;

    /**
     * The phone number of the user.
     */
    phoneNumber?: string;

    /**
     * A list of emails the user has previously had. If a user has changed their email
     * before, this list will be populated with all of the emails they once had.
     */
    previousEmails?: Array<string>;
  }
}

export interface SubOrganizationUpdateParams {
  /**
   * The country code of the sub-organization.
   */
  countryCode: string;

  /**
   * The email of the user to be created alongside the sub-organization.
   */
  email: string;

  /**
   * The name of the user to be created alongside the sub-organization.
   */
  name: string;

  /**
   * The name of the sub-organization.
   */
  organizationName: string;

  /**
   * The password of the user to be created alongside the sub-organization.
   */
  password: string;

  /**
   * The phone number of the user to be created alongside the sub-organization.
   */
  phoneNumber?: string;
}

export interface SubOrganizationRetrieveParams {
  limit?: number;

  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;

  skip?: number;
}

export interface SubOrganizationRetrieveUsersParams {
  limit?: number;

  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;

  skip?: number;
}

export declare namespace SubOrganizations {
  export {
    type EmailPreferences as EmailPreferences,
    type SubOrganization as SubOrganization,
    type SubOrganizationUpdateResponse as SubOrganizationUpdateResponse,
    type SubOrganizationRetrieveResponse as SubOrganizationRetrieveResponse,
    type SubOrganizationRetrieveUsersResponse as SubOrganizationRetrieveUsersResponse,
    type SubOrganizationUpdateParams as SubOrganizationUpdateParams,
    type SubOrganizationRetrieveParams as SubOrganizationRetrieveParams,
    type SubOrganizationRetrieveUsersParams as SubOrganizationRetrieveUsersParams,
  };
}
