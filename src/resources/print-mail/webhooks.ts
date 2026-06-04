// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 *  Create and manage Webhooks.
 *
 *  Webhooks can be used to notify your application when events occur in PostGrid.
 *  For example, you may use a `letter.updated` webhook to receive a notification
 *  when a letter has been processed for delivery.
 *
 *  Every webhook has a `secret` and this is used to sign the payload of the event.
 *
 *  You can choose what format you want the payload to be delivered in. By default,
 *  the webhook payload will be delivered as a [JSON Web Token](https://jwt.io/).
 *  When you receive the event, you can verify it using a JWT library available for
 *  your particular language (using the HMAC SHA256 Algorithm). There are
 *  [many](https://jwt.io/#libraries-io) off-the-shelf solutions you can use.
 *
 *  You can alternatively choose to receive a JSON payload. In this case, you'll
 *  also receive a `PostGrid-Signature` HTTP header along with the payload.
 *
 *  You must respond with a `200` status from your webhook. Otherwise, PostGrid
 *  will retry the webhook up to 3 times. First, after 1 hour, then 2 hours, then
 *  4 hours. We will also keep track of every invocation and its response status.
 *  You can retrieve data about prior invocations using the webhook invocations
 *  list endpoint below.
 */
export class Webhooks extends APIResource {
  /**
   * Create a Webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.printMail.webhooks.create({
   *   enabledEvents: ['letter.created'],
   *   url: 'https://example.com/postgrid-webhook',
   *   description: 'Letter Created',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/print-mail/v1/webhooks', { body, ...options });
  }

  /**
   * Retrieve a Webhook by ID.
   *
   * @example
   * ```ts
   * const webhook = await client.printMail.webhooks.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/print-mail/v1/webhooks/${id}`, options);
  }

  /**
   * Update a Webhook by ID.
   *
   * @example
   * ```ts
   * const webhook = await client.printMail.webhooks.update(
   *   'id',
   *   {
   *     description: 'Letter creates and updates',
   *     enabled: true,
   *     enabledEvents: ['letter.created', 'letter.updated'],
   *     url: 'https://example.com/postgrid-webhook',
   *   },
   * );
   * ```
   */
  update(id: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post(path`/print-mail/v1/webhooks/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of Webhooks.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhook of client.printMail.webhooks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhooksSkipLimit, Webhook> {
    return this._client.getAPIList('/print-mail/v1/webhooks', SkipLimit<Webhook>, { query, ...options });
  }

  /**
   * Delete a Webhook by ID. Note that this operation cannot be undone.
   *
   * @example
   * ```ts
   * const webhook = await client.printMail.webhooks.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/webhooks/${id}`, options);
  }

  /**
   * Retrieve a paginated list of invocations for a Webhook.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookInvocation of client.printMail.webhooks.listInvocations(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listInvocations(
    id: string,
    query: WebhookListInvocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookInvocationsSkipLimit, WebhookInvocation> {
    return this._client.getAPIList(
      path`/print-mail/v1/webhooks/${id}/invocations`,
      SkipLimit<WebhookInvocation>,
      { query, ...options },
    );
  }
}

export type WebhooksSkipLimit = SkipLimit<Webhook>;

export type WebhookInvocationsSkipLimit = SkipLimit<WebhookInvocation>;

export interface Webhook {
  /**
   * A unique ID prefixed with webhook\_
   */
  id: string;

  /**
   * The UTC time at which this resource was created.
   */
  createdAt: string;

  /**
   * Whether this webhook is enabled. Disabled webhooks are not triggered.
   */
  enabled: boolean;

  /**
   * The list of event types this webhook listens for.
   */
  enabledEvents: Array<
    | 'letter.created'
    | 'letter.updated'
    | 'postcard.created'
    | 'postcard.updated'
    | 'self_mailer.created'
    | 'self_mailer.updated'
    | 'cheque.created'
    | 'cheque.updated'
    | 'box.created'
    | 'box.updated'
    | 'snap_pack.created'
    | 'snap_pack.updated'
    | 'return_envelope_order.created'
    | 'return_envelope_order.updated'
    | 'tracker.visited'
    | 'campaign.created'
    | 'campaign.updated'
    | 'virtual_mailbox_item.created'
  >;

  /**
   * `true` if this is a live mode resource else `false`.
   */
  live: boolean;

  /**
   * Always `webhook`.
   */
  object: 'webhook';

  /**
   * The UTC time at which this resource was last updated.
   */
  updatedAt: string;

  /**
   * An HTTPS URL that PostGrid can invoke for webhook deliveries.
   */
  url: string;

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
   * The format in which a Webhook's event payload is delivered.
   */
  payloadFormat?: 'jwt' | 'json';

  /**
   * A webhook signing secret with at least 20 non-whitespace characters.
   */
  secret?: string;
}

export interface WebhookInvocation {
  /**
   * A unique ID prefixed with `webhook_invocation_`.
   */
  id: string;

  /**
   * The UTC time at which this invocation was created.
   */
  createdAt: string;

  /**
   * The ID of the event that was delivered in this invocation.
   */
  event: string;

  /**
   * Always `webhook_invocation`.
   */
  object: 'webhook_invocation';

  /**
   * The HTTP status code returned by your endpoint for this invocation.
   */
  statusCode: number;

  /**
   * The type of event that a Webhook can listen for and that an Event represents.
   */
  type:
    | 'letter.created'
    | 'letter.updated'
    | 'postcard.created'
    | 'postcard.updated'
    | 'self_mailer.created'
    | 'self_mailer.updated'
    | 'cheque.created'
    | 'cheque.updated'
    | 'box.created'
    | 'box.updated'
    | 'snap_pack.created'
    | 'snap_pack.updated'
    | 'return_envelope_order.created'
    | 'return_envelope_order.updated'
    | 'tracker.visited'
    | 'campaign.created'
    | 'campaign.updated'
    | 'virtual_mailbox_item.created';

  /**
   * The UTC time at which this invocation was last updated.
   */
  updatedAt: string;

  /**
   * The ID of the webhook that was invoked.
   */
  webhook: string;

  /**
   * The ID of the order associated with this invocation, if the event was
   * order-related.
   */
  orderID?: string;
}

export interface WebhookDeleteResponse {
  /**
   * A unique ID prefixed with webhook\_
   */
  id: string;

  deleted: true;

  /**
   * Always `webhook`.
   */
  object: 'webhook';
}

export interface WebhookCreateParams {
  /**
   * The list of event types this webhook listens for.
   */
  enabledEvents: Array<
    | 'letter.created'
    | 'letter.updated'
    | 'postcard.created'
    | 'postcard.updated'
    | 'self_mailer.created'
    | 'self_mailer.updated'
    | 'cheque.created'
    | 'cheque.updated'
    | 'box.created'
    | 'box.updated'
    | 'snap_pack.created'
    | 'snap_pack.updated'
    | 'return_envelope_order.created'
    | 'return_envelope_order.updated'
    | 'tracker.visited'
    | 'campaign.created'
    | 'campaign.updated'
    | 'virtual_mailbox_item.created'
  >;

  /**
   * An HTTPS URL that PostGrid can invoke for webhook deliveries.
   */
  url: string;

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
   * The format in which a Webhook's event payload is delivered.
   */
  payloadFormat?: 'jwt' | 'json';

  /**
   * A webhook signing secret with at least 20 non-whitespace characters.
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Whether this webhook is enabled. Disabled webhooks are not triggered.
   */
  enabled?: boolean;

  /**
   * The list of event types this webhook listens for.
   */
  enabledEvents?: Array<
    | 'letter.created'
    | 'letter.updated'
    | 'postcard.created'
    | 'postcard.updated'
    | 'self_mailer.created'
    | 'self_mailer.updated'
    | 'cheque.created'
    | 'cheque.updated'
    | 'box.created'
    | 'box.updated'
    | 'snap_pack.created'
    | 'snap_pack.updated'
    | 'return_envelope_order.created'
    | 'return_envelope_order.updated'
    | 'tracker.visited'
    | 'campaign.created'
    | 'campaign.updated'
    | 'virtual_mailbox_item.created'
  >;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The format in which a Webhook's event payload is delivered.
   */
  payloadFormat?: 'jwt' | 'json';

  /**
   * A webhook signing secret with at least 20 non-whitespace characters.
   */
  secret?: string;

  /**
   * An HTTPS URL that PostGrid can invoke for webhook deliveries.
   */
  url?: string;
}

export interface WebhookListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export interface WebhookListInvocationsParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookInvocation as WebhookInvocation,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhooksSkipLimit as WebhooksSkipLimit,
    type WebhookInvocationsSkipLimit as WebhookInvocationsSkipLimit,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookListInvocationsParams as WebhookListInvocationsParams,
  };
}
