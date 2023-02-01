import path from "path";

import type { PostGrid, PostGridOptions, PostGridError } from "./";
import type { Contact } from "./contact";
import { NO_MAIL_API_KEY } from "./";

export interface ReturnEnvelope {
  id: string;
  object: string;
  live: boolean;
  available: number;
  to: Contact;
}

export interface ReturnEnvelopeList {
  object: string;
  limit: number;
  skip: number;
  totalCount: number;
  data: ReturnEnvelope[];
}

export class ReturnEnvelopeApi {
  client: PostGrid;
  baseRoute: string;

  constructor(client: PostGrid, options?: PostGridOptions) {
    // eslint-disable-line no-unused-vars
    this.client = client;
    this.baseRoute = "print-mail/v1/";
  }

  async create(to: string): Promise<{
    success: boolean;
    returnEnvelope?: ReturnEnvelope;
    error?: PostGridError;
  }> {
    // make sure we have the API Key for this call
    if (!this.client.apiKeys.mail) {
      return NO_MAIL_API_KEY;
    }
    // ...and now we can make the call...
    const resp = await this.client.fire(
      "POST",
      path.join(this.baseRoute, "return_envelopes"),
      { "x-api-key": this.client.apiKeys.mail, body: { to } }
    );
    if (resp?.response?.status >= 400) {
      return {
        success: false,
        error: resp?.payload?.error,
      };
    }
    return {
      success: resp && !resp.payload?.error,
      returnEnvelope: resp.payload,
    };
  }

  async get(id: string): Promise<{
    success: boolean;
    returnEnvelope?: ReturnEnvelope;
    error?: PostGridError;
  }> {
    // make sure we have the API Key for this call
    if (!this.client.apiKeys.mail) {
      return NO_MAIL_API_KEY;
    }
    // ...and now we can make the call...
    const resp = await this.client.fire(
      "GET",
      path.join(this.baseRoute, "return_envelopes", id),
      { "x-api-key": this.client.apiKeys.mail }
    );
    if (resp?.response?.status >= 400) {
      return {
        success: false,
        error: resp?.payload?.error,
      };
    }
    return {
      success: resp && !resp.payload?.error,
      returnEnvelope: resp.payload,
    };
  }

  async list(
    limit?: number,
    skip?: number,
    search?: string
  ): Promise<{
    success: boolean;
    returnEnvelopeList?: ReturnEnvelopeList;
    error?: PostGridError;
  }> {
    // make sure we have the API Key for this call
    if (!this.client.apiKeys.mail) {
      return NO_MAIL_API_KEY;
    }
    // ...and now we can make the call...
    const resp = await this.client.fire(
      "GET",
      path.join(this.baseRoute, "return_envelopes"),
      { "x-api-key": this.client.apiKeys.mail },
      { skip: skip, limit: limit, search: search }
    );
    if (resp?.response?.status >= 400) {
      return {
        success: false,
        error: resp?.payload?.error,
      };
    }
    return {
      success: resp && !resp.payload?.error,
      returnEnvelopeList: resp.payload,
    };
  }
}
