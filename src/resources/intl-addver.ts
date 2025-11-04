// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddverAPI from './addver';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class IntlAddver extends APIResource {
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
   * const response = await client.intlAddver.verify({
   *   address: {
   *     '0': '3',
   *     '1': '1',
   *     '2': ' ',
   *     '3': 'F',
   *     '4': 'l',
   *     '5': ' ',
   *     '6': 'S',
   *     '7': 'c',
   *     '8': 'a',
   *     '9': 'r',
   *     '10': 'b',
   *     '11': 'o',
   *     '12': 'r',
   *     '13': 'o',
   *     '14': 'u',
   *     '15': 'g',
   *     '16': 'h',
   *     '17': ',',
   *     '18': ' ',
   *     '19': 'C',
   *     '20': 'a',
   *     '21': 'n',
   *     '22': 'a',
   *     '23': 'd',
   *     '24': 'a',
   *   },
   * });
   * ```
   */
  verify(params: IntlAddverVerifyParams, options?: RequestOptions): APIPromise<IntlAddverVerifyResponse> {
    const { geoData, includeDetails, properCase, ...body } = params;
    return this._client.post('/v1/intl_addver/verifications', {
      query: { geoData, includeDetails, properCase },
      body,
      ...options,
    });
  }
}

export interface IntlAddverVerifyResponse {
  /**
   * The result of a verified international address.
   */
  data: IntlAddverVerifyResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace IntlAddverVerifyResponse {
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
    errors?: AddverAPI.Errors;

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
    status?: AddverAPI.Status;

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

export type IntlAddverVerifyParams =
  | IntlAddverVerifyParams.StructuredAddressInput
  | IntlAddverVerifyParams.FreeformAddressInput;

export declare namespace IntlAddverVerifyParams {
  export interface StructuredAddressInput {
    /**
     * Body param:
     */
    address: StructuredAddressInput.Address;

    /**
     * Query param:
     */
    geoData?: boolean;

    /**
     * Query param:
     */
    includeDetails?: boolean;

    /**
     * Query param:
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
     * Query param:
     */
    geoData?: boolean;

    /**
     * Query param:
     */
    includeDetails?: boolean;

    /**
     * Query param:
     */
    properCase?: boolean;
  }
}

export declare namespace IntlAddver {
  export {
    type IntlAddverVerifyResponse as IntlAddverVerifyResponse,
    type IntlAddverVerifyParams as IntlAddverVerifyParams,
  };
}
