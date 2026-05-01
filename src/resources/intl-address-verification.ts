// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressVerificationAPI from './address-verification';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 *  International Address Verification API.
 *
 *  Provides endpoints to verify and standardize international addresses,
 *  supporting both structured and freeform inputs.
 */
export class IntlAddressVerification extends APIResource {
  /**
   * Resolves an address preview `id` (from `GET /completions`) into a full address.
   *
   * Optionally verifies the resolved address through the standard US/CA verifier
   * when `verify=true` is supplied and the address is in the US or Canada.
   *
   * - Uses 1 lookup per call.
   * - When `verify=true` resolves a US or CA address, the response will be a
   *   `VerifiedAddress` instead of an `IntlAddressCompletion`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.intlAddressVerification.autocomplete({
   *     id: 'id',
   *   });
   * ```
   */
  autocomplete(
    params: IntlAddressVerificationAutocompleteParams,
    options?: RequestOptions,
  ): APIPromise<IntlAddressVerificationAutocompleteResponse> {
    const { includeDetails, properCase, useEnhancedChinaDataset, verify, ...body } = params;
    return this._client.post('/v1/intl_addver/completions', {
      query: { includeDetails, properCase, useEnhancedChinaDataset, verify },
      body,
      ...options,
    });
  }

  /**
   * Verify a batch of international addresses in a single request. Each address can
   * be freeform or structured, matching the same input formats accepted by the
   * single verification endpoint.
   *
   * - Uses 1 lookup per address.
   * - Requires a secret API key.
   * - Returns results in the same order as the input addresses.
   * - If an individual address fails, its result will contain an `error` field
   *   rather than a `verifiedAddress`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.intlAddressVerification.batchVerification({
   *     addresses: [
   *       {
   *         address: {
   *           country: 'country',
   *           line1: 'line1',
   *           postalOrZip: 'postalOrZip',
   *           provinceOrState: 'provinceOrState',
   *         },
   *       },
   *     ],
   *   });
   * ```
   */
  batchVerification(
    params: IntlAddressVerificationBatchVerificationParams,
    options?: RequestOptions,
  ): APIPromise<IntlAddressVerificationBatchVerificationResponse> {
    const { geoData, includeDetails, properCase, useEnhancedChinaDataset, ...body } = params;
    return this._client.post('/v1/intl_addver/verifications/batch', {
      query: { geoData, includeDetails, properCase, useEnhancedChinaDataset },
      body,
      ...options,
    });
  }

  /**
   * Returns address completion previews for a partial address string, suitable for
   * populating an autocomplete dropdown.
   *
   * **Regular mode** — supply `partialStreet` to search by partial street address.
   * Results may include `Address` types (resolvable directly) and `Container` types
   * (buildings/complexes that require a follow-up call).
   *
   * **Advanced mode** — supply `advanced=true` and a `container` ID (from a previous
   * regular call) to drill into a building or complex and retrieve individual unit
   * addresses.
   *
   * Results with `type: "Address"` can be fully resolved by passing their `id` to
   * `POST /completions`.
   *
   * - Does not consume a lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.intlAddressVerification.getAutocompleteAdvancedPreviews();
   * ```
   */
  getAutocompleteAdvancedPreviews(
    query: IntlAddressVerificationGetAutocompleteAdvancedPreviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse> {
    return this._client.get('/v1/intl_addver/completions', { query, ...options });
  }

  /**
   * Returns address completion previews for a partial address string, suitable for
   * populating an autocomplete dropdown.
   *
   * **Regular mode** — supply `partialStreet` to search by partial street address.
   * Results may include `Address` types (resolvable directly) and `Container` types
   * (buildings/complexes that require a follow-up call).
   *
   * **Advanced mode** — supply `advanced=true` and a `container` ID (from a previous
   * regular call) to drill into a building or complex and retrieve individual unit
   * addresses.
   *
   * Results with `type: "Address"` can be fully resolved by passing their `id` to
   * `POST /completions`.
   *
   * - Does not consume a lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.intlAddressVerification.getAutocompletePreviews();
   * ```
   */
  getAutocompletePreviews(
    query: IntlAddressVerificationGetAutocompletePreviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntlAddressVerificationGetAutocompletePreviewsResponse> {
    return this._client.get('/v1/intl_addver/completions', { query, ...options });
  }

  /**
   * Verify and standardize an international address.
   *
   * - Supports both structured and freeform address inputs.
   * - Specify `includeDetails=true` to get additional details as per the
   *   `IntlDetails` schema.
   * - Uses 1 lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.intlAddressVerification.verify({
   *     address: {},
   *   });
   * ```
   */
  verify(
    params: IntlAddressVerificationVerifyParams,
    options?: RequestOptions,
  ): APIPromise<IntlAddressVerificationVerifyResponse> {
    const { geoData, includeDetails, properCase, ...body } = params;
    return this._client.post('/v1/intl_addver/verifications', {
      query: { geoData, includeDetails, properCase },
      body,
      ...options,
    });
  }
}

export interface IntlAddressVerificationAutocompleteResponse {
  /**
   * A fully resolved international address returned by `POST /completions`.
   */
  data:
    | IntlAddressVerificationAutocompleteResponse.IntlAddressCompletion
    | IntlAddressVerificationAutocompleteResponse.VerifiedAddress;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddressVerificationAutocompleteResponse {
  /**
   * A fully resolved international address returned by `POST /completions`.
   */
  export interface IntlAddressCompletion {
    /**
     * The building name, if applicable.
     */
    building?: string;

    /**
     * The city or locality.
     */
    city?: string;

    /**
     * The company or organization name, if applicable.
     */
    company?: string;

    /**
     * The country name.
     */
    country?: string;

    /**
     * The ISO 2-letter country code.
     */
    countryCode?: string;

    /**
     * The department or floor, if applicable.
     */
    department?: string;

    /**
     * An error message if resolution failed.
     */
    error?: string;

    /**
     * The full formatted address string.
     */
    formattedAddress?: string;

    /**
     * The first address line.
     */
    line1?: string;

    /**
     * The second address line.
     */
    line2?: string;

    /**
     * The third address line.
     */
    line3?: string;

    /**
     * The fourth address line.
     */
    line4?: string;

    /**
     * The postal or ZIP code.
     */
    postalOrZip?: string;

    /**
     * The province or state code.
     */
    provinceCode?: string;

    /**
     * The province or state name.
     */
    provinceOrState?: string;
  }

  /**
   * The result of a verified international address.
   */
  export interface VerifiedAddress {
    /**
     * The city or locality.
     */
    city: string;

    /**
     * The country code (ISO 3166-1 alpha-2).
     */
    country: string;

    /**
     * The first address line.
     */
    line1: string;

    /**
     * The postal or ZIP code.
     */
    postalOrZip: string;

    /**
     * The province or state.
     */
    provinceOrState: string;

    /**
     * The full country name.
     */
    countryName?: string;

    /**
     * Additional details about the verified address, such as premise, thoroughfare,
     * and locality.
     */
    details?: VerifiedAddress.Details;

    /**
     * Errors encountered during address verification.
     */
    errors?: AddressVerificationAPI.Errors;

    /**
     * The firm or company name, if available.
     */
    firmName?: string;

    /**
     * The formatted address string.
     */
    formattedAddress?: string;

    /**
     * Geocoding result for the verified address.
     */
    geoData?: VerifiedAddress.GeoData;

    /**
     * The second address line.
     */
    line2?: string;

    /**
     * The third address line, if available.
     */
    line3?: string;

    /**
     * The verification status of an address.
     */
    status?: AddressVerificationAPI.Status;

    /**
     * A summary of the verification process and match levels.
     */
    summary?: VerifiedAddress.Summary;

    /**
     * The ZIP+4 code (for US addresses).
     */
    zipPlus4?: string;
  }

  export namespace VerifiedAddress {
    /**
     * Additional details about the verified address, such as premise, thoroughfare,
     * and locality.
     */
    export interface Details {
      /**
       * The building name or number.
       */
      building?: string;

      /**
       * The type of building (e.g., apartment, office).
       */
      buildingType?: string;

      /**
       * The full city name.
       */
      cityName?: string;

      /**
       * Secondary city information.
       */
      citySecondary?: string;

      /**
       * The type of city (e.g., city, town, village).
       */
      cityType?: string;

      /**
       * The full delivery address.
       */
      deliveryAddress?: string;

      /**
       * The dependent locality (UK addresses).
       */
      dependentLocality?: string;

      /**
       * The double dependent locality (UK addresses).
       */
      doubleDependentLocality?: string;

      /**
       * The organization or company name.
       */
      organization?: string;

      /**
       * The primary part of the postal or ZIP code.
       */
      postalOrZipPrimary?: string;

      /**
       * The secondary part of the postal or ZIP code.
       */
      postalOrZipSecondary?: string;

      /**
       * The post box number.
       */
      postBox?: string;

      /**
       * The premise name or number.
       */
      premise?: string;

      /**
       * The premise number.
       */
      premiseNumber?: string;

      /**
       * Secondary premise information.
       */
      premiseSecondary?: string;

      /**
       * The type of premise (e.g., house, flat).
       */
      premiseType?: string;

      /**
       * The full name of the province or state.
       */
      provinceOrStateName?: string;

      /**
       * The type of province or state (e.g., province, state, region).
       */
      provinceOrStateType?: string;

      /**
       * The street name.
       */
      street?: string;

      /**
       * The directional suffix for the street (e.g., N, S, E, W).
       */
      streetPostDirection?: string;

      /**
       * The directional prefix for the street (e.g., N, S, E, W).
       */
      streetPreDirection?: string;

      /**
       * The type of street (e.g., St, Ave, Blvd).
       */
      streetType?: string;

      /**
       * The sub-administrative area.
       */
      subAdministrativeArea?: string;

      /**
       * The sub-building name or number (e.g., unit, suite).
       */
      subBuilding?: string;

      /**
       * The floor of the sub-building.
       */
      SubBuildingFloor?: string;

      /**
       * The sub-building number.
       */
      subBuildingNumber?: string;

      /**
       * The type of sub-building (e.g., floor, wing).
       */
      subBuildingType?: string;

      /**
       * The sub-street name.
       */
      subStreet?: string;

      /**
       * The directional suffix for the sub-street.
       */
      subStreetPostDirection?: string;

      /**
       * The directional prefix for the sub-street.
       */
      subStreetPreDirection?: string;

      /**
       * The type of sub-street.
       */
      subStreetType?: string;

      /**
       * The super-administrative area.
       */
      superAdministrativeArea?: string;

      /**
       * The telephone number associated with the address.
       */
      telephone?: string;
    }

    /**
     * Geocoding result for the verified address.
     */
    export interface GeoData {
      /**
       * The geocode accuracy.
       */
      geoAccuracy?: string;

      /**
       * The latitude of the address.
       */
      latitude?: string;

      /**
       * The longitude of the address.
       */
      longitude?: string;
    }

    /**
     * A summary of the verification process and match levels.
     */
    export interface Summary {
      /**
       * Context identification match level.
       */
      contextIdentificationMatchLevel?: string;

      /**
       * Lexicon identification match level.
       */
      lexiconIdentificationMatchLevel?: string;

      /**
       * The match score (0-100).
       */
      matchScore?: number;

      /**
       * Additional message about the verification.
       */
      message?: string;

      /**
       * The parsing status of the address.
       */
      parsingStatus?: string;

      /**
       * The status of the postal code.
       */
      postCodeStatus?: string;

      /**
       * The match level after post-processing.
       */
      postProcessedVerificationMatchLevel?: string;

      /**
       * The match level before post-processing.
       */
      preProcessedVerificationMatchLevel?: string;

      /**
       * The overall verification status.
       */
      verificationStatus?: string;
    }
  }
}

export interface IntlAddressVerificationBatchVerificationResponse {
  data: IntlAddressVerificationBatchVerificationResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddressVerificationBatchVerificationResponse {
  export interface Data {
    results: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * An error message for this address. Present when verification failed.
       */
      error?: string;

      /**
       * The result of a verified international address.
       */
      verifiedAddress?: Result.VerifiedAddress;
    }

    export namespace Result {
      /**
       * The result of a verified international address.
       */
      export interface VerifiedAddress {
        /**
         * The city or locality.
         */
        city: string;

        /**
         * The country code (ISO 3166-1 alpha-2).
         */
        country: string;

        /**
         * The first address line.
         */
        line1: string;

        /**
         * The postal or ZIP code.
         */
        postalOrZip: string;

        /**
         * The province or state.
         */
        provinceOrState: string;

        /**
         * The full country name.
         */
        countryName?: string;

        /**
         * Additional details about the verified address, such as premise, thoroughfare,
         * and locality.
         */
        details?: VerifiedAddress.Details;

        /**
         * Errors encountered during address verification.
         */
        errors?: AddressVerificationAPI.Errors;

        /**
         * The firm or company name, if available.
         */
        firmName?: string;

        /**
         * The formatted address string.
         */
        formattedAddress?: string;

        /**
         * Geocoding result for the verified address.
         */
        geoData?: VerifiedAddress.GeoData;

        /**
         * The second address line.
         */
        line2?: string;

        /**
         * The third address line, if available.
         */
        line3?: string;

        /**
         * The verification status of an address.
         */
        status?: AddressVerificationAPI.Status;

        /**
         * A summary of the verification process and match levels.
         */
        summary?: VerifiedAddress.Summary;

        /**
         * The ZIP+4 code (for US addresses).
         */
        zipPlus4?: string;
      }

      export namespace VerifiedAddress {
        /**
         * Additional details about the verified address, such as premise, thoroughfare,
         * and locality.
         */
        export interface Details {
          /**
           * The building name or number.
           */
          building?: string;

          /**
           * The type of building (e.g., apartment, office).
           */
          buildingType?: string;

          /**
           * The full city name.
           */
          cityName?: string;

          /**
           * Secondary city information.
           */
          citySecondary?: string;

          /**
           * The type of city (e.g., city, town, village).
           */
          cityType?: string;

          /**
           * The full delivery address.
           */
          deliveryAddress?: string;

          /**
           * The dependent locality (UK addresses).
           */
          dependentLocality?: string;

          /**
           * The double dependent locality (UK addresses).
           */
          doubleDependentLocality?: string;

          /**
           * The organization or company name.
           */
          organization?: string;

          /**
           * The primary part of the postal or ZIP code.
           */
          postalOrZipPrimary?: string;

          /**
           * The secondary part of the postal or ZIP code.
           */
          postalOrZipSecondary?: string;

          /**
           * The post box number.
           */
          postBox?: string;

          /**
           * The premise name or number.
           */
          premise?: string;

          /**
           * The premise number.
           */
          premiseNumber?: string;

          /**
           * Secondary premise information.
           */
          premiseSecondary?: string;

          /**
           * The type of premise (e.g., house, flat).
           */
          premiseType?: string;

          /**
           * The full name of the province or state.
           */
          provinceOrStateName?: string;

          /**
           * The type of province or state (e.g., province, state, region).
           */
          provinceOrStateType?: string;

          /**
           * The street name.
           */
          street?: string;

          /**
           * The directional suffix for the street (e.g., N, S, E, W).
           */
          streetPostDirection?: string;

          /**
           * The directional prefix for the street (e.g., N, S, E, W).
           */
          streetPreDirection?: string;

          /**
           * The type of street (e.g., St, Ave, Blvd).
           */
          streetType?: string;

          /**
           * The sub-administrative area.
           */
          subAdministrativeArea?: string;

          /**
           * The sub-building name or number (e.g., unit, suite).
           */
          subBuilding?: string;

          /**
           * The floor of the sub-building.
           */
          SubBuildingFloor?: string;

          /**
           * The sub-building number.
           */
          subBuildingNumber?: string;

          /**
           * The type of sub-building (e.g., floor, wing).
           */
          subBuildingType?: string;

          /**
           * The sub-street name.
           */
          subStreet?: string;

          /**
           * The directional suffix for the sub-street.
           */
          subStreetPostDirection?: string;

          /**
           * The directional prefix for the sub-street.
           */
          subStreetPreDirection?: string;

          /**
           * The type of sub-street.
           */
          subStreetType?: string;

          /**
           * The super-administrative area.
           */
          superAdministrativeArea?: string;

          /**
           * The telephone number associated with the address.
           */
          telephone?: string;
        }

        /**
         * Geocoding result for the verified address.
         */
        export interface GeoData {
          /**
           * The geocode accuracy.
           */
          geoAccuracy?: string;

          /**
           * The latitude of the address.
           */
          latitude?: string;

          /**
           * The longitude of the address.
           */
          longitude?: string;
        }

        /**
         * A summary of the verification process and match levels.
         */
        export interface Summary {
          /**
           * Context identification match level.
           */
          contextIdentificationMatchLevel?: string;

          /**
           * Lexicon identification match level.
           */
          lexiconIdentificationMatchLevel?: string;

          /**
           * The match score (0-100).
           */
          matchScore?: number;

          /**
           * Additional message about the verification.
           */
          message?: string;

          /**
           * The parsing status of the address.
           */
          parsingStatus?: string;

          /**
           * The status of the postal code.
           */
          postCodeStatus?: string;

          /**
           * The match level after post-processing.
           */
          postProcessedVerificationMatchLevel?: string;

          /**
           * The match level before post-processing.
           */
          preProcessedVerificationMatchLevel?: string;

          /**
           * The overall verification status.
           */
          verificationStatus?: string;
        }
      }
    }
  }
}

export interface IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse {
  data: Array<IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse.Data>;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse {
  /**
   * A single address suggestion returned by `GET /completions`. Use the `id` field
   * to retrieve the full address via `POST /completions`.
   */
  export interface Data {
    /**
     * The unique identifier for this result. Pass this to `POST /completions` to
     * retrieve the full address. If the `type` is `Container`, pass it as the
     * `container` parameter to `GET /completions` to drill down further.
     */
    id?: string;

    /**
     * A secondary description of the result (e.g. city and country).
     */
    description?: string;

    /**
     * An error message if the lookup failed for this result.
     */
    error?: string;

    /**
     * Character ranges within `text` that match the search input, for bolding in UI.
     */
    highlight?: string;

    /**
     * The human-readable address suggestion text.
     */
    text?: string;

    /**
     * The type of result. `Address` means this can be resolved directly via
     * `POST /completions`. `Container` means the result represents a building or
     * complex — perform another `GET /completions` with this `id` as `container` to
     * get individual unit addresses.
     */
    type?: string;
  }
}

export interface IntlAddressVerificationGetAutocompletePreviewsResponse {
  data: Array<IntlAddressVerificationGetAutocompletePreviewsResponse.Data>;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddressVerificationGetAutocompletePreviewsResponse {
  /**
   * A single address suggestion returned by `GET /completions`. Use the `id` field
   * to retrieve the full address via `POST /completions`.
   */
  export interface Data {
    /**
     * The unique identifier for this result. Pass this to `POST /completions` to
     * retrieve the full address. If the `type` is `Container`, pass it as the
     * `container` parameter to `GET /completions` to drill down further.
     */
    id?: string;

    /**
     * A secondary description of the result (e.g. city and country).
     */
    description?: string;

    /**
     * An error message if the lookup failed for this result.
     */
    error?: string;

    /**
     * Character ranges within `text` that match the search input, for bolding in UI.
     */
    highlight?: string;

    /**
     * The human-readable address suggestion text.
     */
    text?: string;

    /**
     * The type of result. `Address` means this can be resolved directly via
     * `POST /completions`. `Container` means the result represents a building or
     * complex — perform another `GET /completions` with this `id` as `container` to
     * get individual unit addresses.
     */
    type?: string;
  }
}

export interface IntlAddressVerificationVerifyResponse {
  /**
   * The result of a verified international address.
   */
  data: IntlAddressVerificationVerifyResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddressVerificationVerifyResponse {
  /**
   * The result of a verified international address.
   */
  export interface Data {
    /**
     * The city or locality.
     */
    city: string;

    /**
     * The country code (ISO 3166-1 alpha-2).
     */
    country: string;

    /**
     * The first address line.
     */
    line1: string;

    /**
     * The postal or ZIP code.
     */
    postalOrZip: string;

    /**
     * The province or state.
     */
    provinceOrState: string;

    /**
     * The full country name.
     */
    countryName?: string;

    /**
     * Additional details about the verified address, such as premise, thoroughfare,
     * and locality.
     */
    details?: Data.Details;

    /**
     * Errors encountered during address verification.
     */
    errors?: AddressVerificationAPI.Errors;

    /**
     * The firm or company name, if available.
     */
    firmName?: string;

    /**
     * The formatted address string.
     */
    formattedAddress?: string;

    /**
     * Geocoding result for the verified address.
     */
    geoData?: Data.GeoData;

    /**
     * The second address line.
     */
    line2?: string;

    /**
     * The third address line, if available.
     */
    line3?: string;

    /**
     * The verification status of an address.
     */
    status?: AddressVerificationAPI.Status;

    /**
     * A summary of the verification process and match levels.
     */
    summary?: Data.Summary;

    /**
     * The ZIP+4 code (for US addresses).
     */
    zipPlus4?: string;
  }

  export namespace Data {
    /**
     * Additional details about the verified address, such as premise, thoroughfare,
     * and locality.
     */
    export interface Details {
      /**
       * The building name or number.
       */
      building?: string;

      /**
       * The type of building (e.g., apartment, office).
       */
      buildingType?: string;

      /**
       * The full city name.
       */
      cityName?: string;

      /**
       * Secondary city information.
       */
      citySecondary?: string;

      /**
       * The type of city (e.g., city, town, village).
       */
      cityType?: string;

      /**
       * The full delivery address.
       */
      deliveryAddress?: string;

      /**
       * The dependent locality (UK addresses).
       */
      dependentLocality?: string;

      /**
       * The double dependent locality (UK addresses).
       */
      doubleDependentLocality?: string;

      /**
       * The organization or company name.
       */
      organization?: string;

      /**
       * The primary part of the postal or ZIP code.
       */
      postalOrZipPrimary?: string;

      /**
       * The secondary part of the postal or ZIP code.
       */
      postalOrZipSecondary?: string;

      /**
       * The post box number.
       */
      postBox?: string;

      /**
       * The premise name or number.
       */
      premise?: string;

      /**
       * The premise number.
       */
      premiseNumber?: string;

      /**
       * Secondary premise information.
       */
      premiseSecondary?: string;

      /**
       * The type of premise (e.g., house, flat).
       */
      premiseType?: string;

      /**
       * The full name of the province or state.
       */
      provinceOrStateName?: string;

      /**
       * The type of province or state (e.g., province, state, region).
       */
      provinceOrStateType?: string;

      /**
       * The street name.
       */
      street?: string;

      /**
       * The directional suffix for the street (e.g., N, S, E, W).
       */
      streetPostDirection?: string;

      /**
       * The directional prefix for the street (e.g., N, S, E, W).
       */
      streetPreDirection?: string;

      /**
       * The type of street (e.g., St, Ave, Blvd).
       */
      streetType?: string;

      /**
       * The sub-administrative area.
       */
      subAdministrativeArea?: string;

      /**
       * The sub-building name or number (e.g., unit, suite).
       */
      subBuilding?: string;

      /**
       * The floor of the sub-building.
       */
      SubBuildingFloor?: string;

      /**
       * The sub-building number.
       */
      subBuildingNumber?: string;

      /**
       * The type of sub-building (e.g., floor, wing).
       */
      subBuildingType?: string;

      /**
       * The sub-street name.
       */
      subStreet?: string;

      /**
       * The directional suffix for the sub-street.
       */
      subStreetPostDirection?: string;

      /**
       * The directional prefix for the sub-street.
       */
      subStreetPreDirection?: string;

      /**
       * The type of sub-street.
       */
      subStreetType?: string;

      /**
       * The super-administrative area.
       */
      superAdministrativeArea?: string;

      /**
       * The telephone number associated with the address.
       */
      telephone?: string;
    }

    /**
     * Geocoding result for the verified address.
     */
    export interface GeoData {
      /**
       * The geocode accuracy.
       */
      geoAccuracy?: string;

      /**
       * The latitude of the address.
       */
      latitude?: string;

      /**
       * The longitude of the address.
       */
      longitude?: string;
    }

    /**
     * A summary of the verification process and match levels.
     */
    export interface Summary {
      /**
       * Context identification match level.
       */
      contextIdentificationMatchLevel?: string;

      /**
       * Lexicon identification match level.
       */
      lexiconIdentificationMatchLevel?: string;

      /**
       * The match score (0-100).
       */
      matchScore?: number;

      /**
       * Additional message about the verification.
       */
      message?: string;

      /**
       * The parsing status of the address.
       */
      parsingStatus?: string;

      /**
       * The status of the postal code.
       */
      postCodeStatus?: string;

      /**
       * The match level after post-processing.
       */
      postProcessedVerificationMatchLevel?: string;

      /**
       * The match level before post-processing.
       */
      preProcessedVerificationMatchLevel?: string;

      /**
       * The overall verification status.
       */
      verificationStatus?: string;
    }
  }
}

export interface IntlAddressVerificationAutocompleteParams {
  /**
   * Body param
   */
  id: string;

  /**
   * Query param
   */
  includeDetails?: boolean;

  /**
   * Query param
   */
  properCase?: boolean;

  /**
   * Query param
   */
  useEnhancedChinaDataset?: boolean;

  /**
   * Query param
   */
  verify?: boolean;
}

export interface IntlAddressVerificationBatchVerificationParams {
  /**
   * Body param: Array of addresses to verify. Each item can be a freeform string or
   * a structured address object.
   */
  addresses: Array<
    | IntlAddressVerificationBatchVerificationParams.StructuredAddressInput
    | IntlAddressVerificationBatchVerificationParams.FreeformAddressInput
  >;

  /**
   * Query param
   */
  geoData?: boolean;

  /**
   * Query param
   */
  includeDetails?: boolean;

  /**
   * Query param
   */
  properCase?: boolean;

  /**
   * Query param
   */
  useEnhancedChinaDataset?: boolean;
}

export namespace IntlAddressVerificationBatchVerificationParams {
  /**
   * Input model for structured international address verification.
   */
  export interface StructuredAddressInput {
    address: StructuredAddressInput.Address;
  }

  export namespace StructuredAddressInput {
    export interface Address {
      /**
       * The country code (ISO 3166-1 alpha-2 or alpha-3).
       */
      country: string;

      /**
       * The first line of the address (e.g., street address, building, etc.).
       */
      line1: string;

      /**
       * The postal or ZIP code.
       */
      postalOrZip: string;

      /**
       * The administrative area (e.g., state, province, region).
       */
      provinceOrState: string;

      /**
       * The city, town, or locality of the address.
       */
      city?: string;

      /**
       * The second line of the address (e.g., apartment, suite, etc.).
       */
      line2?: string;

      /**
       * The third line of the address (e.g., additional locality or delivery info).
       */
      line3?: string;

      /**
       * The fourth line of the address (e.g., further address details).
       */
      line4?: string;
    }
  }

  /**
   * Input model for freeform international address verification.
   */
  export interface FreeformAddressInput {
    /**
     * The full address as a single string.
     */
    address: string;
  }
}

export interface IntlAddressVerificationGetAutocompleteAdvancedPreviewsParams {
  advanced?: boolean;

  cityFilter?: string;

  container?: string;

  countriesFilter?: string;

  disableIPBiasing?: boolean;

  language?: string;

  limit?: number;

  partialStreet?: string;

  postalOrZipFilter?: string;

  standardFallback?: boolean;

  streetFilter?: string;

  useEnhancedChinaDataset?: boolean;
}

export interface IntlAddressVerificationGetAutocompletePreviewsParams {
  advanced?: boolean;

  cityFilter?: string;

  container?: string;

  countriesFilter?: string;

  disableIPBiasing?: boolean;

  language?: string;

  limit?: number;

  partialStreet?: string;

  postalOrZipFilter?: string;

  standardFallback?: boolean;

  streetFilter?: string;

  useEnhancedChinaDataset?: boolean;
}

export type IntlAddressVerificationVerifyParams =
  | IntlAddressVerificationVerifyParams.StructuredAddressInput
  | IntlAddressVerificationVerifyParams.FreeformAddressInput;

export declare namespace IntlAddressVerificationVerifyParams {
  export interface StructuredAddressInput {
    /**
     * Body param
     */
    address: StructuredAddressInput.Address;

    /**
     * Query param
     */
    geoData?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
     */
    properCase?: boolean;
  }

  export namespace StructuredAddressInput {
    export interface Address {
      /**
       * The country code (ISO 3166-1 alpha-2 or alpha-3).
       */
      country: string;

      /**
       * The first line of the address (e.g., street address, building, etc.).
       */
      line1: string;

      /**
       * The postal or ZIP code.
       */
      postalOrZip: string;

      /**
       * The administrative area (e.g., state, province, region).
       */
      provinceOrState: string;

      /**
       * The city, town, or locality of the address.
       */
      city?: string;

      /**
       * The second line of the address (e.g., apartment, suite, etc.).
       */
      line2?: string;

      /**
       * The third line of the address (e.g., additional locality or delivery info).
       */
      line3?: string;

      /**
       * The fourth line of the address (e.g., further address details).
       */
      line4?: string;
    }
  }

  export interface FreeformAddressInput {
    /**
     * Body param: The full address as a single string.
     */
    address: string;

    /**
     * Query param
     */
    geoData?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
     */
    properCase?: boolean;
  }
}

export declare namespace IntlAddressVerification {
  export {
    type IntlAddressVerificationAutocompleteResponse as IntlAddressVerificationAutocompleteResponse,
    type IntlAddressVerificationBatchVerificationResponse as IntlAddressVerificationBatchVerificationResponse,
    type IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse as IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse,
    type IntlAddressVerificationGetAutocompletePreviewsResponse as IntlAddressVerificationGetAutocompletePreviewsResponse,
    type IntlAddressVerificationVerifyResponse as IntlAddressVerificationVerifyResponse,
    type IntlAddressVerificationAutocompleteParams as IntlAddressVerificationAutocompleteParams,
    type IntlAddressVerificationBatchVerificationParams as IntlAddressVerificationBatchVerificationParams,
    type IntlAddressVerificationGetAutocompleteAdvancedPreviewsParams as IntlAddressVerificationGetAutocompleteAdvancedPreviewsParams,
    type IntlAddressVerificationGetAutocompletePreviewsParams as IntlAddressVerificationGetAutocompletePreviewsParams,
    type IntlAddressVerificationVerifyParams as IntlAddressVerificationVerifyParams,
  };
}
