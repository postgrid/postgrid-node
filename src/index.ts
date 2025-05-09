// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
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
  SelfMailerRetrieveResponse,
  SelfMailers,
} from './resources/self-mailers';
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

const environments = {
  pm_production: 'https://api.postgrid.com/print-mail/v1',
  av_production: 'https://api.postgrid.com/v1',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['POSTGRID_PM_API_KEY'].
   */
  pmAPIKey?: string | null | undefined;

  /**
   * Defaults to process.env['POSTGRID_AV_API_KEY'].
   */
  avAPIKey?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `pm_production` corresponds to `https://api.postgrid.com/print-mail/v1`
   * - `av_production` corresponds to `https://api.postgrid.com/v1`
   */
  environment?: Environment | undefined;

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
  pmAPIKey: string | null;
  avAPIKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the PostGrid API.
   *
   * @param {string | null | undefined} [opts.pmAPIKey=process.env['POSTGRID_PM_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.avAPIKey=process.env['POSTGRID_AV_API_KEY'] ?? null]
   * @param {Environment} [opts.environment=pm_production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['POSTGRID_BASE_URL'] ?? https://api.postgrid.com/print-mail/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('POSTGRID_BASE_URL'),
    pmAPIKey = Core.readEnv('POSTGRID_PM_API_KEY') ?? null,
    avAPIKey = Core.readEnv('POSTGRID_AV_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      pmAPIKey,
      avAPIKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'pm_production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.PostGridError(
        'Ambiguous URL; The `baseURL` option (or POSTGRID_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'pm_production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.pmAPIKey = pmAPIKey;
    this.avAPIKey = avAPIKey;
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

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.pmAPIKey && headers['x-api-key']) {
      return;
    }
    if (customHeaders['x-api-key'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the pmAPIKey to be set. Or for the "X-API-Key" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.pmAPIKey == null) {
      return {};
    }
    return { 'X-API-Key': this.pmAPIKey };
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
    SelfMailerListResponsesList as SelfMailerListResponsesList,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
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
