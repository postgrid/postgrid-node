// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type ListParams, ListResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  BankAccount,
  BankAccountCreateParams,
  BankAccountDeleteResponse,
  BankAccountList,
  BankAccountListParams,
  BankAccounts,
  BankAccountsList,
} from './resources/bank-accounts';
import {
  BoxCancelResponse,
  BoxCreateParams,
  BoxCreateResponse,
  BoxListParams,
  BoxListResponse,
  BoxListResponsesList,
  BoxRetrieveResponse,
  Boxes,
} from './resources/boxes';
import {
  CampaignCreateParams,
  CampaignCreateResponse,
  CampaignDeleteResponse,
  CampaignListParams,
  CampaignListResponse,
  CampaignListResponsesList,
  CampaignRetrieveResponse,
  CampaignSendParams,
  CampaignSendResponse,
  CampaignUpdateParams,
  CampaignUpdateResponse,
  Campaigns,
} from './resources/campaigns';
import {
  Contact,
  ContactCreateParams,
  ContactDeleteResponse,
  ContactListParams,
  Contacts,
  ContactsList,
} from './resources/contacts';
import {
  Letter,
  LetterCreateParams,
  LetterList,
  LetterListParams,
  LetterURLResponse,
  Letters,
  LettersList,
} from './resources/letters';
import {
  MailingListImportCreateParams,
  MailingListImportCreateResponse,
  MailingListImportDeleteResponse,
  MailingListImportListParams,
  MailingListImportListResponse,
  MailingListImportListResponsesList,
  MailingListImportRetrieveResponse,
  MailingListImportUpdateParams,
  MailingListImportUpdateResponse,
  MailingListImports,
} from './resources/mailing-list-imports';
import {
  MailingListCreateParams,
  MailingListCreateResponse,
  MailingListDeleteResponse,
  MailingListListParams,
  MailingListListResponse,
  MailingListListResponsesList,
  MailingListRetrieveResponse,
  MailingListSubmitJobParams,
  MailingListSubmitJobResponse,
  MailingListUpdateParams,
  MailingListUpdateResponse,
  MailingLists,
} from './resources/mailing-lists';
import {
  Postcard,
  PostcardCreateParams,
  PostcardList,
  PostcardListParams,
  PostcardURLResponse,
  Postcards,
  PostcardsList,
} from './resources/postcards';
import {
  SelfMailerCancelResponse,
  SelfMailerCreateParams,
  SelfMailerCreateResponse,
  SelfMailerListParams,
  SelfMailerListResponse,
  SelfMailerListResponsesList,
  SelfMailerRetrievePreviewURLResponse,
  SelfMailerRetrieveResponse,
  SelfMailers,
} from './resources/self-mailers';
import {
  SubOrganizationCreateParams,
  SubOrganizationCreateResponse,
  SubOrganizationListParams,
  SubOrganizationListResponse,
  SubOrganizationListResponsesList,
  SubOrganizationListUsersParams,
  SubOrganizationListUsersResponse,
  SubOrganizationRetrieveResponse,
  SubOrganizations,
} from './resources/sub-organizations';
import {
  Template,
  TemplateCreateParams,
  TemplateDeleteResponse,
  TemplateList,
  TemplateListParams,
  TemplateUpdateParams,
  Templates,
  TemplatesList,
} from './resources/templates';
import {
  Cheque,
  ChequeCreateParams,
  ChequeList,
  ChequeListParams,
  Cheques,
  ChequesList,
} from './resources/cheques/cheques';
import { OrderProfiles } from './resources/order-profiles/order-profiles';
import {
  ReportCreateParams,
  ReportCreateResponse,
  ReportDeleteResponse,
  ReportListParams,
  ReportListResponse,
  ReportListResponsesList,
  ReportRetrieveResponse,
  ReportRunAdHocQueryParams,
  ReportRunAdHocQueryResponse,
  ReportSampleParams,
  ReportSampleResponse,
  ReportUpdateParams,
  ReportUpdateResponse,
  Reports,
} from './resources/reports/reports';

export interface ClientOptions {
  apiKey: string;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['POSTGRID_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the PostGrid API.
 */
export class PostGrid extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the PostGrid API.
   *
   * @param {string} opts.apiKey
   * @param {string} [opts.baseURL=process.env['POSTGRID_BASE_URL'] ?? https://api.postgrid.com/print-mail/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('POSTGRID_BASE_URL'), apiKey, ...opts }: ClientOptions) {
    if (apiKey === undefined) {
      throw new Errors.PostGridError(
        "Missing required client option apiKey; you need to instantiate the PostGrid client with an apiKey option, like new PostGrid({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.postgrid.com/print-mail/v1`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.postgrid.com/print-mail/v1' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.apiKey = apiKey;
  }

  contacts: API.Contacts = new API.Contacts(this);
  templates: API.Templates = new API.Templates(this);
  bankAccounts: API.BankAccounts = new API.BankAccounts(this);
  cheques: API.Cheques = new API.Cheques(this);
  letters: API.Letters = new API.Letters(this);
  postcards: API.Postcards = new API.Postcards(this);
  boxes: API.Boxes = new API.Boxes(this);
  campaigns: API.Campaigns = new API.Campaigns(this);
  reports: API.Reports = new API.Reports(this);
  selfMailers: API.SelfMailers = new API.SelfMailers(this);
  mailingListImports: API.MailingListImports = new API.MailingListImports(this);
  mailingLists: API.MailingLists = new API.MailingLists(this);
  orderProfiles: API.OrderProfiles = new API.OrderProfiles(this);
  subOrganizations: API.SubOrganizations = new API.SubOrganizations(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.postgrid.com/print-mail/v1';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static PostGrid = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static PostGridError = Errors.PostGridError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

PostGrid.Contacts = Contacts;
PostGrid.ContactsList = ContactsList;
PostGrid.Templates = Templates;
PostGrid.TemplatesList = TemplatesList;
PostGrid.BankAccounts = BankAccounts;
PostGrid.BankAccountsList = BankAccountsList;
PostGrid.Cheques = Cheques;
PostGrid.ChequesList = ChequesList;
PostGrid.Letters = Letters;
PostGrid.LettersList = LettersList;
PostGrid.Postcards = Postcards;
PostGrid.PostcardsList = PostcardsList;
PostGrid.Boxes = Boxes;
PostGrid.BoxListResponsesList = BoxListResponsesList;
PostGrid.Campaigns = Campaigns;
PostGrid.CampaignListResponsesList = CampaignListResponsesList;
PostGrid.Reports = Reports;
PostGrid.ReportListResponsesList = ReportListResponsesList;
PostGrid.SelfMailers = SelfMailers;
PostGrid.SelfMailerListResponsesList = SelfMailerListResponsesList;
PostGrid.MailingListImports = MailingListImports;
PostGrid.MailingListImportListResponsesList = MailingListImportListResponsesList;
PostGrid.MailingLists = MailingLists;
PostGrid.MailingListListResponsesList = MailingListListResponsesList;
PostGrid.OrderProfiles = OrderProfiles;
PostGrid.SubOrganizations = SubOrganizations;
PostGrid.SubOrganizationListResponsesList = SubOrganizationListResponsesList;

export declare namespace PostGrid {
  export type RequestOptions = Core.RequestOptions;

  export import List = Pagination.List;
  export { type ListParams as ListParams, type ListResponse as ListResponse };

  export {
    Contacts as Contacts,
    type Contact as Contact,
    type ContactDeleteResponse as ContactDeleteResponse,
    ContactsList as ContactsList,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Templates as Templates,
    type Template as Template,
    type TemplateList as TemplateList,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    TemplatesList as TemplatesList,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };

  export {
    BankAccounts as BankAccounts,
    type BankAccount as BankAccount,
    type BankAccountList as BankAccountList,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    BankAccountsList as BankAccountsList,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };

  export {
    Cheques as Cheques,
    type Cheque as Cheque,
    type ChequeList as ChequeList,
    ChequesList as ChequesList,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Letters as Letters,
    type Letter as Letter,
    type LetterList as LetterList,
    type LetterURLResponse as LetterURLResponse,
    LettersList as LettersList,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    Postcards as Postcards,
    type Postcard as Postcard,
    type PostcardList as PostcardList,
    type PostcardURLResponse as PostcardURLResponse,
    PostcardsList as PostcardsList,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    Boxes as Boxes,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxCancelResponse as BoxCancelResponse,
    BoxListResponsesList as BoxListResponsesList,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignUpdateResponse as CampaignUpdateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignSendResponse as CampaignSendResponse,
    CampaignListResponsesList as CampaignListResponsesList,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };

  export {
    Reports as Reports,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportUpdateResponse as ReportUpdateResponse,
    type ReportListResponse as ReportListResponse,
    type ReportDeleteResponse as ReportDeleteResponse,
    type ReportRunAdHocQueryResponse as ReportRunAdHocQueryResponse,
    type ReportSampleResponse as ReportSampleResponse,
    ReportListResponsesList as ReportListResponsesList,
    type ReportCreateParams as ReportCreateParams,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportListParams as ReportListParams,
    type ReportRunAdHocQueryParams as ReportRunAdHocQueryParams,
    type ReportSampleParams as ReportSampleParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailerCreateResponse as SelfMailerCreateResponse,
    type SelfMailerRetrieveResponse as SelfMailerRetrieveResponse,
    type SelfMailerListResponse as SelfMailerListResponse,
    type SelfMailerCancelResponse as SelfMailerCancelResponse,
    type SelfMailerRetrievePreviewURLResponse as SelfMailerRetrievePreviewURLResponse,
    SelfMailerListResponsesList as SelfMailerListResponsesList,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };

  export {
    MailingListImports as MailingListImports,
    type MailingListImportCreateResponse as MailingListImportCreateResponse,
    type MailingListImportRetrieveResponse as MailingListImportRetrieveResponse,
    type MailingListImportUpdateResponse as MailingListImportUpdateResponse,
    type MailingListImportListResponse as MailingListImportListResponse,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    MailingListImportListResponsesList as MailingListImportListResponsesList,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };

  export {
    MailingLists as MailingLists,
    type MailingListCreateResponse as MailingListCreateResponse,
    type MailingListRetrieveResponse as MailingListRetrieveResponse,
    type MailingListUpdateResponse as MailingListUpdateResponse,
    type MailingListListResponse as MailingListListResponse,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListSubmitJobResponse as MailingListSubmitJobResponse,
    MailingListListResponsesList as MailingListListResponsesList,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListSubmitJobParams as MailingListSubmitJobParams,
  };

  export { OrderProfiles as OrderProfiles };

  export {
    SubOrganizations as SubOrganizations,
    type SubOrganizationCreateResponse as SubOrganizationCreateResponse,
    type SubOrganizationRetrieveResponse as SubOrganizationRetrieveResponse,
    type SubOrganizationListResponse as SubOrganizationListResponse,
    type SubOrganizationListUsersResponse as SubOrganizationListUsersResponse,
    SubOrganizationListResponsesList as SubOrganizationListResponsesList,
    type SubOrganizationCreateParams as SubOrganizationCreateParams,
    type SubOrganizationListParams as SubOrganizationListParams,
    type SubOrganizationListUsersParams as SubOrganizationListUsersParams,
  };

  export type Cancellation = API.Cancellation;
  export type ContactCreateWithCompanyName = API.ContactCreateWithCompanyName;
  export type ContactCreateWithFirstName = API.ContactCreateWithFirstName;
}

export { toFile, fileFromPath } from './uploads';
export {
  PostGridError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default PostGrid;
