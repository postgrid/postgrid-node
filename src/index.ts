// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type ListParams, ListResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Contact,
  ContactCreateParams,
  ContactDeleteResponse,
  ContactListParams,
  Contacts,
  ContactsList,
} from './resources/contacts';
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

export interface ClientOptions {
  /**
   * API Key for accessing the PostGrid Print & Mail API
   */
  apiKey?: string | undefined;

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
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
   * @param {string | undefined} [opts.apiKey=process.env['POSTGRID_API_KEY'] ?? undefined]
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
    apiKey = Core.readEnv('POSTGRID_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.PostGridError(
        "The POSTGRID_API_KEY environment variable is missing or empty; either provide it, or instantiate the PostGrid client with an apiKey option, like new PostGrid({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.postgrid.com/print-mail/v1`,
    };

    super({
      baseURL: options.baseURL!,
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

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-Key': this.apiKey };
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
}

export { toFile, fileFromPath } from 'postgrid/uploads';
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
} from 'postgrid/error';

export default PostGrid;
