// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimit, type SkipLimitParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 *  You can use template editor sessions to bring the capabilities of our
 *  template editor to your website. When you create a session, you provide the
 *  `template` which you want to edit, and we return a session with a `url` that
 *  you can `iframe` or redirect your customers to.
 *
 *  When users save their changes in the editor session, it will update the
 *  underlying template. Note that sessions are only valid for 24 hours, after
 *  which point they are automatically deleted for security reasons.
 *
 *  You can have multiple sessions active for the same template at the same time.
 *  In general, we recommend creating a new session every time you present our
 *  editor to your users.
 *
 *  Note: you can use the template editor to modify templates created using HTML,
 *  but saving a session from the editor will override the original HTML content.
 */
export class TemplateEditorSessions extends APIResource {
  /**
   * Create a Template Editor Session.
   *
   * Note that if no `backURL` is supplied, PostGrid removes the Back button from the
   * editor page. This is ideal for when you `iframe` the editor.
   *
   * @example
   * ```ts
   * const templateEditorSession =
   *   await client.printMail.templateEditorSessions.create({
   *     template: 'template_eYxcbMKPZEZPk71ZJPA6Yz',
   *     backURL: 'https://postgrid.com',
   *     title: 'My Editor Session',
   *     trackers: [
   *       'tracker_123456789abcdefghijklmnopqrstuvwxyz',
   *     ],
   *   });
   * ```
   */
  create(
    body: TemplateEditorSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<TemplateEditorSessionCreateResponse> {
    return this._client.post('/print-mail/v1/template_editor_sessions', { body, ...options });
  }

  /**
   * Retrieve a paginated list of Template Editor Sessions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const templateEditorSessionListResponse of client.printMail.templateEditorSessions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TemplateEditorSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TemplateEditorSessionListResponsesSkipLimit, TemplateEditorSessionListResponse> {
    return this._client.getAPIList(
      '/print-mail/v1/template_editor_sessions',
      SkipLimit<TemplateEditorSessionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a Template Editor Session by ID.
   *
   * @example
   * ```ts
   * const templateEditorSession =
   *   await client.printMail.templateEditorSessions.delete(
   *     'id',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TemplateEditorSessionDeleteResponse> {
    return this._client.delete(path`/print-mail/v1/template_editor_sessions/${id}`, options);
  }
}

export type TemplateEditorSessionListResponsesSkipLimit = SkipLimit<TemplateEditorSessionListResponse>;

export interface TemplateEditorSessionCreateResponse {
  /**
   * A unique ID prefixed with `template_editor_session_`.
   */
  id: string;

  /**
   * The UTC time at which this session was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode session else `false`.
   */
  live: boolean;

  /**
   * Always `template_editor_session`.
   */
  object: 'template_editor_session';

  /**
   * ID of the underlying template that this edits.
   */
  template: string;

  /**
   * A URL that can be iframed or redirected to for editing the template.
   */
  url: string;

  /**
   * The URL supplied when this editor session was created.
   */
  backURL?: string;

  /**
   * Style overrides for the template editor session.
   */
  styles?: TemplateEditorSessionCreateResponse.Styles;

  /**
   * The title supplied when this editor session was created.
   */
  title?: string;

  /**
   * Controls which Trackers are displayed in the template editor session.
   */
  trackers?: 'all' | 'none' | Array<string>;
}

export namespace TemplateEditorSessionCreateResponse {
  /**
   * Style overrides for the template editor session.
   */
  export interface Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    canvas?: Styles.Canvas;

    /**
     * Style overrides for template editor panel text.
     */
    panelText?: Styles.PanelText;

    /**
     * Style overrides for the template editor save button.
     */
    saveButton?: Styles.SaveButton;
  }

  export namespace Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    export interface Canvas {
      /**
       * The canvas background color.
       */
      backgroundColor?: string;
    }

    /**
     * Style overrides for template editor panel text.
     */
    export interface PanelText {
      /**
       * The panel text color.
       */
      color?: string;
    }

    /**
     * Style overrides for the template editor save button.
     */
    export interface SaveButton {
      /**
       * The save button background color.
       */
      backgroundColor?: string;

      /**
       * The save button text color.
       */
      textColor?: string;
    }
  }
}

export interface TemplateEditorSessionListResponse {
  /**
   * A unique ID prefixed with `template_editor_session_`.
   */
  id: string;

  /**
   * The UTC time at which this session was created.
   */
  createdAt: string;

  /**
   * `true` if this is a live mode session else `false`.
   */
  live: boolean;

  /**
   * Always `template_editor_session`.
   */
  object: 'template_editor_session';

  /**
   * ID of the underlying template that this edits.
   */
  template: string;

  /**
   * A URL that can be iframed or redirected to for editing the template.
   */
  url: string;

  /**
   * The URL supplied when this editor session was created.
   */
  backURL?: string;

  /**
   * Style overrides for the template editor session.
   */
  styles?: TemplateEditorSessionListResponse.Styles;

  /**
   * The title supplied when this editor session was created.
   */
  title?: string;

  /**
   * Controls which Trackers are displayed in the template editor session.
   */
  trackers?: 'all' | 'none' | Array<string>;
}

export namespace TemplateEditorSessionListResponse {
  /**
   * Style overrides for the template editor session.
   */
  export interface Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    canvas?: Styles.Canvas;

    /**
     * Style overrides for template editor panel text.
     */
    panelText?: Styles.PanelText;

    /**
     * Style overrides for the template editor save button.
     */
    saveButton?: Styles.SaveButton;
  }

  export namespace Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    export interface Canvas {
      /**
       * The canvas background color.
       */
      backgroundColor?: string;
    }

    /**
     * Style overrides for template editor panel text.
     */
    export interface PanelText {
      /**
       * The panel text color.
       */
      color?: string;
    }

    /**
     * Style overrides for the template editor save button.
     */
    export interface SaveButton {
      /**
       * The save button background color.
       */
      backgroundColor?: string;

      /**
       * The save button text color.
       */
      textColor?: string;
    }
  }
}

export interface TemplateEditorSessionDeleteResponse {
  /**
   * A unique ID prefixed with `template_editor_session_`.
   */
  id: string;

  deleted: true;

  /**
   * Always `template_editor_session`.
   */
  object: 'template_editor_session';
}

export interface TemplateEditorSessionCreateParams {
  /**
   * ID of the underlying template that this edits.
   */
  template: string;

  /**
   * The URL supplied when this editor session was created.
   */
  backURL?: string;

  /**
   * Style overrides for the template editor session.
   */
  styles?: TemplateEditorSessionCreateParams.Styles;

  /**
   * The title supplied when this editor session was created.
   */
  title?: string;

  /**
   * Controls which Trackers are displayed in the template editor session.
   */
  trackers?: 'all' | 'none' | Array<string>;
}

export namespace TemplateEditorSessionCreateParams {
  /**
   * Style overrides for the template editor session.
   */
  export interface Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    canvas?: Styles.Canvas;

    /**
     * Style overrides for template editor panel text.
     */
    panelText?: Styles.PanelText;

    /**
     * Style overrides for the template editor save button.
     */
    saveButton?: Styles.SaveButton;
  }

  export namespace Styles {
    /**
     * Style overrides for the template editor canvas.
     */
    export interface Canvas {
      /**
       * The canvas background color.
       */
      backgroundColor?: string;
    }

    /**
     * Style overrides for template editor panel text.
     */
    export interface PanelText {
      /**
       * The panel text color.
       */
      color?: string;
    }

    /**
     * Style overrides for the template editor save button.
     */
    export interface SaveButton {
      /**
       * The save button background color.
       */
      backgroundColor?: string;

      /**
       * The save button text color.
       */
      textColor?: string;
    }
  }
}

export interface TemplateEditorSessionListParams extends SkipLimitParams {
  /**
   * You can supply any string to help narrow down the list of resources. For
   * example, if you pass `"New York"` (quoted), it will return resources that have
   * that string present somewhere in their response. Alternatively, you can supply a
   * structured search query. See the documentation on `StructuredSearchQuery` for
   * more details.
   */
  search?: string;
}

export declare namespace TemplateEditorSessions {
  export {
    type TemplateEditorSessionCreateResponse as TemplateEditorSessionCreateResponse,
    type TemplateEditorSessionListResponse as TemplateEditorSessionListResponse,
    type TemplateEditorSessionDeleteResponse as TemplateEditorSessionDeleteResponse,
    type TemplateEditorSessionListResponsesSkipLimit as TemplateEditorSessionListResponsesSkipLimit,
    type TemplateEditorSessionCreateParams as TemplateEditorSessionCreateParams,
    type TemplateEditorSessionListParams as TemplateEditorSessionListParams,
  };
}
