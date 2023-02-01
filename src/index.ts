import fetch from "node-fetch";
import FormData = require("formdata");
import path from "path";
import camelCaseKeys from "camelcase-keys";

import { ContactApi } from "./contact";
import { TemplateApi } from "./template";
import { LetterApi } from "./letter";
import { PostcardApi } from "./postcard";
import { BankAccountApi } from "./bank-account";
import { CheckApi } from "./check";
import { WebhookApi } from "./webhook";
import { AddressApi } from "./address";
import { ReturnEnvelopeApi } from "./return-envelope";
import { ReturnEnvelopeOrderApi } from "./return-envelope-order";

const ClientVersion = require("../package.json").version;
const PROTOCOL = "https";
const POSTGRID_HOST = "api.postgrid.com";

/*
 * PostGrid has two different internal systems that have not - as yet - been
 * brought together under one roof. So it's possible to have an API Key for
 * just the print-mail part, or just the address part, or both. So we need
 * to have a way to handle these two keys, and apply the right one at the
 * right time.
 */
export interface PostGridApiKeys {
  mail?: string;
  addr?: string;
}

/*
 * These are the acceptable options to the creation of the Client:
 *
 *   {
 *     webhookUrl: "https://my.service.com/postgrid/webhook"
 *   }
 *
 * and the construction of the Client will set the webhook to this URL
 * regardless of it's previous value.
 */
export interface PostGridOptions {
  host?: string;
  apiKeys: PostGridApiKeys;
  webhookUrl?: string;
  webhookSecret?: string;
  webhookEvents?: string[];
}

/*
 * These are the standard error objects from PostGrid - and will be returned
 * from PostGrid for any bad condition. We will allow these - as well as just
 * strings in the errors being returned from the calls.
 */
export interface PostGridError {
  type: string;
  message: string;
}

/*
 * This is the main constructor of the PostGrid Client, and will be called
 * with something like:
 *
 *   import { PostGrid } from "postgrid-node-client"
 */
export class PostGrid {
  host: string;
  apiKeys: PostGridApiKeys;
  webhookUrl?: string;
  webhookSecret?: string;
  webhookEvents?: string[];
  contact: ContactApi;
  template: TemplateApi;
  letter: LetterApi;
  postcard: PostcardApi;
  bankAccount: BankAccountApi;
  check: CheckApi;
  webhook: WebhookApi;
  address: AddressApi;
  returnEnvelope: ReturnEnvelopeApi;
  returnEnvelopeOrder: ReturnEnvelopeOrderApi;

  constructor(apiKeys: PostGridApiKeys | string, options?: PostGridOptions) {
    this.host = options?.host || POSTGRID_HOST;
    // see if we support the legacy usage of just the one Print-Mail key
    if (typeof apiKeys === "string") {
      this.apiKeys = { mail: apiKeys };
    } else {
      this.apiKeys = apiKeys;
    }
    this.webhookUrl = options?.webhookUrl;
    this.webhookSecret = options?.webhookSecret;
    this.webhookEvents = options?.webhookEvents;
    // now construct all the specific domain objects
    this.contact = new ContactApi(this, options);
    this.template = new TemplateApi(this, options);
    this.letter = new LetterApi(this, options);
    this.postcard = new PostcardApi(this, options);
    this.bankAccount = new BankAccountApi(this, options);
    this.check = new CheckApi(this, options);
    this.webhook = new WebhookApi(this, options);
    this.address = new AddressApi(this, options);
    this.returnEnvelope = new ReturnEnvelopeApi(this, options);
    this.returnEnvelopeOrder = new ReturnEnvelopeOrderApi(this, options);

    // if we have a webhook, then create that now
    if (this.webhookUrl) {
      this.webhook.create({
        url: this.webhookUrl,
        secret: this.webhookSecret,
        enabledEvents: this.webhookEvents!,
      });
    }
  }

  /*
   * Function to fire off a GET, PUT, POST, (method) to the uri, preceeded
   * by the host, with the optional query params, and optional body, and
   * puts the 'apiKey' into the headers for the call, and fires off the call
   * to the PostGrid host and returns the response.
   */
  async fire(
    method: string,
    uri: string,
    headers?: any,
    query?: { [index: string]: number | string | boolean | undefined },
    body?: object | object[] | FormData
  ): Promise<{ response: any; payload?: any }> {
    // build up the complete url from the provided 'uri' and the 'host'
    let url = new URL(PROTOCOL + "://" + path.join(this.host, uri));
    if (query) {
        Object.keys(query).forEach((k) => {
          if (query[k]) {
            url.searchParams.append(k, query[k]!.toString());
          }
        });
    }
    const isForm = isFormData(body);
    // make the appropriate headers
    headers = {
      ...headers,
      Accept: "application/json",
      "X-PostGrid-Client-Ver": ClientVersion,
    };
    if (!isForm) {
      headers = { ...headers, "Content-Type": "application/json" };
    }
    // now we can make the call... see if it's a JSON body or a FormData one...
    const response = await fetch(url, {
      method: method,
      body: isForm
        ? (body as any)
        : body
        ? JSON.stringify(body)
        : undefined,
      headers,
      redirect: "follow",
    });
    try {
      const payload = camelCaseKeys(await response.json(), {
        deep: true,
      });
      return { response, payload };
    } catch (err) {
      return { response };
    }
  }
}

/*
 * Simple predicate function to return 'true' if the argument is a FormData
 * object - as that is one of the possible values of the 'body' in the fire()
 * function. We have to handle that differently on the call than when it's
 * a more traditional JSON object body.
 */
function isFormData(arg: any): boolean {
  let ans = false;
  if (arg && typeof arg === "object") {
    ans =
      typeof arg._boundary === "string" &&
      arg._boundary.length > 20 &&
      Array.isArray(arg._streams);
  }
  return ans;
}

/*
 * Convenience function to create a PostGridError based on a simple message
 * from the Client code. This is an easy way to make PostGridError instances
 * from the simple error messages we have in this code.
 */
export function mkError(message: string): PostGridError {
  return {
    type: "client",
    message,
  };
}

/*
 * Each function in each Api class needs to test and make sure that the
 * Client has the appropriate API Key for PostGrid to do what it needs
 * to do. So rather than duplicate that code and structure, we simply
 * have it here, so each of the API Keys, and import it in each module.
 */
export const NO_ADDR_API_KEY = {
  success: false,
  error: mkError("Missing PostGrid Address API Key!"),
};

export const NO_MAIL_API_KEY = {
  success: false,
  error: mkError("Missing PostGrid Print-Mail API Key!"),
};
