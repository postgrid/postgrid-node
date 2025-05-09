// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { List, type ListParams } from '../pagination';

export class SubOrganizations extends APIResource {
  /**
   * When creating a user through the API, the verifiedEmail field will automatically
   * be set to true. However, if public signups are used, the email will need to be
   * verified by the user.
   *
   * @example
   * ```ts
   * const subOrganization =
   *   await client.subOrganizations.create({
   *     countryCode: 'CA',
   *     email: 'suborg@postgrid.com',
   *     name: 'Calvin',
   *     organizationName: 'PostGrid',
   *     password: 'very-strong-password',
   *     phoneNumber: '9059059059',
   *   });
   * ```
   */
  create(
    body: SubOrganizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubOrganizationCreateResponse> {
    return this._client.post('/sub_organizations/', { body, ...options });
  }

  /**
   * Get a sub-organization.
   *
   * @example
   * ```ts
   * const subOrganization =
   *   await client.subOrganizations.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SubOrganizationRetrieveResponse> {
    return this._client.get(`/sub_organizations/${id}`, options);
  }

  /**
   * List sub-organizations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subOrganizationListResponse of client.subOrganizations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: SubOrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubOrganizationListResponsesList, SubOrganizationListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubOrganizationListResponsesList, SubOrganizationListResponse>;
  list(
    query: SubOrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubOrganizationListResponsesList, SubOrganizationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/sub_organizations/', SubOrganizationListResponsesList, {
      query,
      ...options,
    });
  }

  /**
   * List users for a sub-organization.
   *
   * @example
   * ```ts
   * const response = await client.subOrganizations.listUsers(
   *   'id',
   * );
   * ```
   */
  listUsers(
    id: string,
    query?: SubOrganizationListUsersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubOrganizationListUsersResponse>;
  listUsers(id: string, options?: Core.RequestOptions): Core.APIPromise<SubOrganizationListUsersResponse>;
  listUsers(
    id: string,
    query: SubOrganizationListUsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubOrganizationListUsersResponse> {
    if (isRequestOptions(query)) {
      return this.listUsers(id, {}, query);
    }
    return this._client.get(`/sub_organizations/${id}/users`, { query, ...options });
  }
}

export class SubOrganizationListResponsesList extends List<SubOrganizationListResponse> {}

export interface SubOrganizationCreateResponse {
  /**
   * The Sub-Organization object.
   */
  subOrganization: SubOrganizationCreateResponse.SubOrganization;

  /**
   * The user object.
   */
  user: SubOrganizationCreateResponse.User;
}

export namespace SubOrganizationCreateResponse {
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
    emailPreferences?: User.EmailPreferences;

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

    /**
     * A set of preferences for how a user should receive emails.
     */
    export interface EmailPreferences {
      /**
       * The list of preferences for receiving order preview emails.
       */
      orderPreviewSendPreference?: 'do_not_send' | 'send_live_only' | 'send_live_and_test';
    }
  }
}

/**
 * The Sub-Organization object.
 */
export interface SubOrganizationRetrieveResponse {
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

/**
 * The Sub-Organization object.
 */
export interface SubOrganizationListResponse {
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

export type SubOrganizationListUsersResponse =
  Array<SubOrganizationListUsersResponse.SubOrganizationListUsersResponseItem>;

export namespace SubOrganizationListUsersResponse {
  /**
   * The user object.
   */
  export interface SubOrganizationListUsersResponseItem {
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
    emailPreferences?: SubOrganizationListUsersResponseItem.EmailPreferences;

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

  export namespace SubOrganizationListUsersResponseItem {
    /**
     * A set of preferences for how a user should receive emails.
     */
    export interface EmailPreferences {
      /**
       * The list of preferences for receiving order preview emails.
       */
      orderPreviewSendPreference?: 'do_not_send' | 'send_live_only' | 'send_live_and_test';
    }
  }
}

export interface SubOrganizationCreateParams {
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

export interface SubOrganizationListParams extends ListParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface SubOrganizationListUsersParams {
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

SubOrganizations.SubOrganizationListResponsesList = SubOrganizationListResponsesList;

export declare namespace SubOrganizations {
  export {
    type SubOrganizationCreateResponse as SubOrganizationCreateResponse,
    type SubOrganizationRetrieveResponse as SubOrganizationRetrieveResponse,
    type SubOrganizationListResponse as SubOrganizationListResponse,
    type SubOrganizationListUsersResponse as SubOrganizationListUsersResponse,
    SubOrganizationListResponsesList as SubOrganizationListResponsesList,
    type SubOrganizationCreateParams as SubOrganizationCreateParams,
    type SubOrganizationListParams as SubOrganizationListParams,
    type SubOrganizationListUsersParams as SubOrganizationListUsersParams,
  };
}
