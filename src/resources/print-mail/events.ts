// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

/**
 *  View Events related to your orders.
 *
 *  An event is created whenever a webhook is triggered. For example, if a webhook
 *  is created that listens to `letter.updated` events and the delivery status of a
 *  letter is updated, an event detailing the updated fields will get created.
 */
export class Events extends APIResource {
  /**
   * Retrieve a paginated list of Events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const event of client.printMail.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventsSkipLimit, Event> {
    return this._client.getAPIList('/print-mail/v1/events', SkipLimit<Event>, { query, ...options });
  }
}

export type EventsSkipLimit = SkipLimit<Event>;

export interface Event {
  /**
   * A unique ID prefixed with `event_`.
   */
  id: string;

  /**
   * The UTC time at which this event was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode event else `false`.
   */
  live: boolean;

  /**
   * Always `event`.
   */
  object: 'event';

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
    | 'virtual_mailbox_item.created'
    | 'postal_statement.created'
    | 'document.created'
    | 'document.updated';

  /**
   * The data of the resource associated with this event.
   */
  data?: { [key: string]: unknown };

  /**
   * A record containing the updated fields of the resource associated with this
   * event.
   */
  updatedFields?: { [key: string]: unknown };
}

export interface EventListParams extends SkipLimitParams {
  /**
   * An optional list of event types to filter the results by.
   */
  type?: Array<
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
    | 'postal_statement.created'
    | 'document.created'
    | 'document.updated'
  >;
}

export declare namespace Events {
  export {
    type Event as Event,
    type EventsSkipLimit as EventsSkipLimit,
    type EventListParams as EventListParams,
  };
}
