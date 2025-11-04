// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AddressVerification extends APIResource {
  /**
   * 1. **Structured Address** — Verify and standardize a structured address (e.g.,
   *    with `line1`, `city`, etc.).
   * 2. **Freeform Address** — Verify and standardize a freeform address written on
   *    one line. For best results, append the ISO 2-letter country code (e.g., `US`,
   *    `CA`) to the end of the line.
   *
   * - Specifying `includeDetails=true` will provide additional output as documented
   *   in the `Details` schema.
   * - Uses 1 lookup for verification, and 1 more if geocoding (unless your contract
   *   says otherwise).
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.verifyAddress({
   *     address: '1234 Elm St, Los Angeles, CA 90001, US',
   *   });
   * ```
   */
  verifyAddress(
    params: AddressVerificationVerifyAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressVerificationVerifyAddressResponse> {
    const { geocode, includeDetails, properCase, ...body } = params;
    return this._client.post('/addver/verifications', {
      query: { geocode, includeDetails, properCase },
      body,
      ...options,
    });
  }
}

export interface AddressVerificationVerifyAddressResponse {
  data: AddressVerificationVerifyAddressResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationVerifyAddressResponse {
  export interface Data {
    /**
     * The city name of the address.
     */
    city: string;

    /**
     * The country code of the address.
     */
    country: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The postal code or ZIP code of the address.
     */
    postalOrZip: string;

    /**
     * The province or state of the address.
     */
    provinceOrState: string;

    /**
     * The country name of the address.
     */
    countryName?: string;

    /**
     * If you supply `includeDetails=true` as a query parameter, we will also populate
     * an additional `details` field that follows the
     * [Address Details](https://avdocs.postgrid.com/#address-details) schema.
     */
    details?: Data.Details;

    /**
     * Errors encountered during address verification.
     */
    errors?: Data.Errors;

    /**
     * The firm name of the address.
     */
    firmName?: string;

    /**
     * If the `geocode=true` query parameter is supplied, the response will include a
     * geocodeResult which follows the
     * [Geocoding](https://avdocs.postgrid.com/#geocoding) schema. You can request this
     * feature be enabled by emailing `support@postgrid.com`. This includes our
     * verification, batch verification, suggestions, and POST /completions endpoint.
     * Note that you must supply country when geocoding to get the result successfully.
     */
    geocodeResult?: Data.GeocodeResult;

    /**
     * The second line of the address.
     */
    line2?: string;

    /**
     * The verification status of an address.
     */
    status?: 'verified' | 'corrected' | 'failed';

    /**
     * The zip plus 4 code of the address.
     */
    zipPlus4?: string;
  }

  export namespace Data {
    /**
     * If you supply `includeDetails=true` as a query parameter, we will also populate
     * an additional `details` field that follows the
     * [Address Details](https://avdocs.postgrid.com/#address-details) schema.
     */
    export interface Details {
      /**
       * PO Box ID
       */
      boxID?: string;

      /**
       * County in the United States (US address only)
       */
      county?: string;

      /**
       * FIPS code for county (US address only)
       */
      countyNum?: string;

      /**
       * Delivery installation area name
       */
      deliveryInstallationAreaName?: string;

      /**
       * Delivery installation qualifier
       */
      deliveryInstallationQualifier?: string;

      /**
       * Delivery installation type
       */
      deliveryInstallationType?: string;

      /**
       * Any extra information relevant to the address
       */
      extraInfo?: string;

      /**
       * The post-direction of the street (after the street name, US addresses only)
       */
      postDirection?: string;

      /**
       * The pre-direction of the street (before the street name, US addresses only)
       */
      preDirection?: string;

      /**
       * Indicates that the address is residential (US address only)
       */
      residential?: boolean;

      /**
       * Rural route number
       */
      ruralRouteNumber?: string;

      /**
       * Rural route type
       */
      ruralRouteType?: string;

      /**
       * The direction of the street (N, S, E, W, etc)
       */
      streetDirection?: string;

      /**
       * Name of the street where the address is located
       */
      streetName?: string;

      /**
       * Street number (e.g. the 20 in 20 Bay St)
       */
      streetNumber?: string;

      /**
       * Type of the street (DR, ST, BLVD, etc)
       */
      streetType?: string;

      /**
       * The unit number/name
       */
      suiteID?: string;

      /**
       * The suite key
       */
      suiteKey?: string;

      /**
       * US Census block number
       */
      usCensusBlockNumber?: string;

      /**
       * US Census consolidated metropolitan statistical area
       */
      usCensusCMSA?: string;

      /**
       * US Census metropolitan area
       */
      usCensusMA?: string;

      /**
       * US Census metropolitan statistical area
       */
      usCensusMSA?: string;

      /**
       * US Census primary metropolitan statistical area
       */
      usCensusPMSA?: string;

      /**
       * US Census tract number
       */
      usCensusTractNumber?: string;

      /**
       * US congressional district number
       */
      usCongressionalDistrictNumber?: string;

      /**
       * True if address location recognizes DST
       */
      usHasDaylightSavings?: boolean;

      /**
       * PostNet barcode digit
       */
      usMailingCheckDigit?: string;

      /**
       * 4-character code assigned to mail delivery route within a 5 digit zip code
       */
      usMailingsCarrierRoute?: string;

      /**
       * True if US address matches a high-rise default or rural route default in the
       * USPS data
       */
      usMailingsDefaultFlag?: boolean;

      /**
       * Unique USPS identifier for the delivery point
       */
      usMailingsDeliveryPoint?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsDpvConfirmationIndicator?: string;

      /**
       * Y if this is a commercial mail receiving agency, N otherwise
       */
      usMailingsDpvCrmaIndicator?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsDpvFootnote1?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsDpvFootnote2?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsDpvFootnote3?: string;

      /**
       * A for ascending, D for descending
       */
      usMailingsElotAscDesc?: string;

      /**
       * eLOT sequence number
       */
      usMailingsElotSequenceNumber?: string;

      /**
       * Y if address is in early warning system database
       */
      usMailingsEWSFlag?: string;

      /**
       * Y if address converted by LACS
       */
      usMailingsLACSFlag?: string;

      /**
       * Corresponds to USPS LACSLink return code
       */
      usMailingsLACSReturnCode?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsRecordTypeCode?: string;

      /**
       * See [USPS DPV](https://avdocs.postgrid.com/#usps-dpv)
       */
      usMailingsSuiteLinkReturnCode?: string;

      /**
       * Lower legislative district for the US address
       */
      usStateLegislativeLower?: string;

      /**
       * Upper legislative district for the US address
       */
      usStateLegislativeUpper?: string;

      /**
       * Time zone for the US address area
       */
      usTimeZone?: string;

      /**
       * Indicates that the address is vacant according to the USPS (US address only)
       */
      vacant?: boolean;
    }

    /**
     * Errors encountered during address verification.
     */
    export interface Errors {
      /**
       * Errors related to the city.
       */
      city?: Array<string>;

      /**
       * Generic errors not tied to a specific field.
       */
      generic?: Array<string>;

      /**
       * Errors related to the first address line.
       */
      line1?: Array<string>;

      /**
       * Errors related to the second address line.
       */
      line2?: Array<string>;

      /**
       * Errors related to the province or state.
       */
      provinceOrState?: Array<string>;
    }

    /**
     * If the `geocode=true` query parameter is supplied, the response will include a
     * geocodeResult which follows the
     * [Geocoding](https://avdocs.postgrid.com/#geocoding) schema. You can request this
     * feature be enabled by emailing `support@postgrid.com`. This includes our
     * verification, batch verification, suggestions, and POST /completions endpoint.
     * Note that you must supply country when geocoding to get the result successfully.
     */
    export interface GeocodeResult {
      /**
       * A real number from 0.00 to 1.00 which represents an
       * [accuracy score](https://avdocs.postgrid.com/#accuracy-score)
       */
      accuracy: number;

      /**
       * A string representing the
       * [accuracy type](https://avdocs.postgrid.com/#accuracy-type)
       */
      accuracyType:
        | 'rooftop'
        | 'point'
        | 'range_interpolation'
        | 'nearest_rooftop_match'
        | 'intersection'
        | 'street_center'
        | 'place'
        | 'state';

      /**
       * Object that contains `lat`, `lng` properties with number values
       */
      location: GeocodeResult.Location;
    }

    export namespace GeocodeResult {
      /**
       * Object that contains `lat`, `lng` properties with number values
       */
      export interface Location {
        lat: number;

        lng: number;
      }
    }
  }
}

export type AddressVerificationVerifyAddressParams =
  | AddressVerificationVerifyAddressParams.StandardFreeformAddressInput
  | AddressVerificationVerifyAddressParams.StandardStructuredAddressInput;

export declare namespace AddressVerificationVerifyAddressParams {
  export interface StandardFreeformAddressInput {
    /**
     * Body param: The address you want to verify, written on a single line.
     */
    address: string;

    /**
     * Query param:
     */
    geocode?: boolean;

    /**
     * Query param:
     */
    includeDetails?: boolean;

    /**
     * Query param:
     */
    properCase?: boolean;
  }

  export interface StandardStructuredAddressInput {
    /**
     * Body param:
     */
    address: StandardStructuredAddressInput.Address;

    /**
     * Query param:
     */
    geocode?: boolean;

    /**
     * Query param:
     */
    includeDetails?: boolean;

    /**
     * Query param:
     */
    properCase?: boolean;
  }

  export namespace StandardStructuredAddressInput {
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The country of your address, one of `ca` or `us`.
       */
      country: 'ca' | 'us';

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The postal code or ZIP code of the address.
       */
      postalOrZip: string;

      /**
       * The province or state of the address.
       */
      provinceOrState: string;

      /**
       * The second line of the address.
       */
      line2?: string;

      /**
       * The optional firm/recipient name.
       */
      recipient?: string;
    }
  }
}

export declare namespace AddressVerification {
  export {
    type AddressVerificationVerifyAddressResponse as AddressVerificationVerifyAddressResponse,
    type AddressVerificationVerifyAddressParams as AddressVerificationVerifyAddressParams,
  };
}
