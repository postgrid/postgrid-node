// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressVerificationAPI from './address-verification';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 *  Standard Address Verification API.
 *
 *  Provides endpoints to verify and standardize addresses across US and Canada,
 *  supporting both structured and freeform inputs.
 *
 *  Note that this uses a different set of lookups than our international API.
 */
export class AddressVerification extends APIResource {
  /**
   * Resolves a partial street address into a list of full address candidates,
   * optionally selecting a specific candidate by index and verifying it.
   *
   * **Basic usage** — omit `index`: returns an array of `CompletedAddressItem`
   * results for the given `partialStreet`.
   *
   * **With `index`** — specify `index` to resolve a single candidate. Returns a
   * single `CompletedAddressItem`.
   *
   * **With `index` + `verify=true`** — additionally runs the selected address
   * through the USPS/Canada Post verifier and returns a `StandardVerifiedAddress`.
   *
   * - Uses 1 lookup per call (plus 1 more if geocoding a result).
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.autocomplete({
   *     partialStreet: 'partialStreet',
   *   });
   * ```
   */
  autocomplete(
    params: AddressVerificationAutocompleteParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationAutocompleteResponse> {
    const {
      filterExact,
      geocode,
      includeDetails,
      index,
      limit,
      properCase,
      query_verifiedOnly,
      verify,
      ...body
    } = params;
    return this._client.post('/v1/addver/completions', {
      query: {
        filterExact,
        geocode,
        includeDetails,
        index,
        limit,
        properCase,
        verifiedOnly: query_verifiedOnly,
        verify,
      },
      body,
      ...options,
    });
  }

  /**
   * Verify a batch of US or Canadian addresses in a single request. Each address can
   * be freeform or structured, matching the same input formats accepted by the
   * single verification endpoint.
   *
   * - Accepts up to 2,000 addresses per request.
   * - Uses 1 lookup per address (plus 1 more per address if geocoding).
   * - Requires a secret API key.
   * - Returns results in the same order as the input addresses.
   * - If an individual address fails, its result will contain an `error` field
   *   rather than a `verifiedAddress`.
   * - If you are not subscribed and the batch would exceed your remaining free
   *   lookups, the entire batch fails (nothing is verified). Size your batch to the
   *   number of lookups you have left.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.batchVerification({
   *     addresses: [{ address: 'address' }],
   *   });
   * ```
   */
  batchVerification(
    params: AddressVerificationBatchVerificationParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationBatchVerificationResponse> {
    const { geocode, includeDetails, properCase, ...body } = params;
    return this._client.post('/v1/addver/verifications/batch', {
      query: { geocode, includeDetails, properCase },
      body,
      ...options,
    });
  }

  /**
   * Returns address completion previews for a partial street address, suitable for
   * populating an autocomplete dropdown without consuming a lookup per keystroke.
   *
   * Each result contains a partial address preview (street, city, and — for non-US
   * addresses — only the first 3 digits of the postal code, to avoid revealing the
   * full code before a lookup is charged).
   *
   * - Does not consume a lookup.
   * - Use `POST /completions` to resolve a full address once the user selects a
   *   result.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.getAutocompletePreviews({
   *     partialStreet: 'partialStreet',
   *   });
   * ```
   */
  getAutocompletePreviews(
    query: AddressVerificationGetAutocompletePreviewsParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationGetAutocompletePreviewsResponse> {
    return this._client.get('/v1/addver/completions', { query, ...options });
  }

  /**
   * Returns your organization's current lookup usage and plan information. Useful
   * for checking how many lookups you have consumed and whether you are on a paid
   * plan. If you are not subscribed, any lookup past your free limit will fail — use
   * this endpoint to check your remaining lookups.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.getLookupInfo();
   * ```
   */
  getLookupInfo(options?: RequestOptions): APIPromise<AddressVerificationGetLookupInfoResponse> {
    return this._client.get('/v1/addver/', options);
  }

  /**
   * Looks up city, county, and other location metadata for a given US or Canadian
   * postal code or ZIP code.
   *
   * A single postal code may map to multiple cities (e.g. a ZIP that spans several
   * towns), so the response is an array.
   *
   * - Uses 1 lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.lookupCityOrStateFromPostalOrZipCode(
   *     { postalOrZip: 'postalOrZip' },
   *   );
   * ```
   */
  lookupCityOrStateFromPostalOrZipCode(
    body: AddressVerificationLookupCityOrStateFromPostalOrZipCodeParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse> {
    return this._client.post('/v1/addver/city_states', { body, ...options });
  }

  /**
   * Looks up all ZIP codes that correspond to a given US city and state.
   *
   * - Currently only supported for US addresses (`countryCode: "US"`).
   * - Uses 1 lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.lookupZipCodeFromCityOrState(
   *     {
   *       city: 'city',
   *       countryCode: 'countryCode',
   *       state: 'state',
   *     },
   *   );
   * ```
   */
  lookupZipCodeFromCityOrState(
    body: AddressVerificationLookupZipCodeFromCityOrStateParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationLookupZipCodeFromCityOrStateResponse> {
    return this._client.post('/v1/addver/zip_codes', { body, ...options });
  }

  /**
   * Parses a freeform address string into its individual components (house number,
   * street name, city, state, postal code, etc.).
   *
   * Useful for extracting structured data from a single-line address without running
   * a full verification.
   *
   * - Uses 1 lookup.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.parseAnAddress({
   *     address: 'address',
   *   });
   * ```
   */
  parseAnAddress(
    body: AddressVerificationParseAnAddressParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationParseAnAddressResponse> {
    return this._client.post('/v1/addver/parses', { body, ...options });
  }

  /**
   * Returns up to 3 verified address suggestions for a given input address.
   *
   * Useful as a fallback when `POST /verifications` returns a `failed` status —
   * suggestions represent the closest matches found and may help the user identify
   * the correct address.
   *
   * Accepts the same freeform or structured input formats as `POST /verifications`.
   *
   * - Uses 1 lookup per call (plus 1 more if geocoding).
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressVerification.suggestAddresses({
   *     address: '1234 Elm St, Los Angeles, CA 90001, US',
   *   });
   * ```
   */
  suggestAddresses(
    params: AddressVerificationSuggestAddressesParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationSuggestAddressesResponse> {
    const { geocode, includeDetails, properCase, ...body } = params;
    return this._client.post('/v1/addver/suggestions', {
      query: { geocode, includeDetails, properCase },
      body,
      ...options,
    });
  }

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
   * const response = await client.addressVerification.verify({
   *   address: '1234 Elm St, Los Angeles, CA 90001, US',
   * });
   * ```
   */
  verify(
    params: AddressVerificationVerifyParams,
    options?: RequestOptions,
  ): APIPromise<AddressVerificationVerifyResponse> {
    const { geocode, includeDetails, properCase, ...body } = params;
    return this._client.post('/v1/addver/verifications', {
      query: { geocode, includeDetails, properCase },
      body,
      ...options,
    });
  }
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
   * Errors related to the postal or ZIP code.
   */
  postalOrZip?: Array<string>;

  /**
   * Errors related to the province or state.
   */
  provinceOrState?: Array<string>;
}

/**
 * The verification status of an address.
 */
export type Status = 'verified' | 'corrected' | 'failed';

export interface AddressVerificationAutocompleteResponse {
  data:
    | AddressVerificationAutocompleteResponse.CompletedAddressItem
    | Array<AddressVerificationAutocompleteResponse.UnionMember1>
    | AddressVerificationAutocompleteResponse.StandardVerifiedAddress;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationAutocompleteResponse {
  export interface CompletedAddressItem {
    /**
     * The resolved address components.
     */
    address: CompletedAddressItem.Address;

    /**
     * Errors encountered during address verification.
     */
    errors?: AddressVerificationAPI.Errors;

    /**
     * Geocoding result. Only present when `geocode=true` is supplied and an `index` is
     * specified.
     */
    geocodeResult?: CompletedAddressItem.GeocodeResult;
  }

  export namespace CompletedAddressItem {
    /**
     * The resolved address components.
     */
    export interface Address {
      /**
       * The first line of the address.
       */
      address: string;

      /**
       * The second line of the address.
       */
      address2?: string;

      /**
       * The city.
       */
      city?: string;

      /**
       * The ISO 2-letter country code.
       */
      country?: string;

      /**
       * The postal code.
       */
      pc?: string;

      /**
       * The province or state abbreviation.
       */
      prov?: string;
    }

    /**
     * Geocoding result. Only present when `geocode=true` is supplied and an `index` is
     * specified.
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

  export interface UnionMember1 {
    /**
     * The resolved address components.
     */
    address: UnionMember1.Address;

    /**
     * Errors encountered during address verification.
     */
    errors?: AddressVerificationAPI.Errors;

    /**
     * Geocoding result. Only present when `geocode=true` is supplied and an `index` is
     * specified.
     */
    geocodeResult?: UnionMember1.GeocodeResult;
  }

  export namespace UnionMember1 {
    /**
     * The resolved address components.
     */
    export interface Address {
      /**
       * The first line of the address.
       */
      address: string;

      /**
       * The second line of the address.
       */
      address2?: string;

      /**
       * The city.
       */
      city?: string;

      /**
       * The ISO 2-letter country code.
       */
      country?: string;

      /**
       * The postal code.
       */
      pc?: string;

      /**
       * The province or state abbreviation.
       */
      prov?: string;
    }

    /**
     * Geocoding result. Only present when `geocode=true` is supplied and an `index` is
     * specified.
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

  export interface StandardVerifiedAddress {
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
    details?: StandardVerifiedAddress.Details;

    /**
     * Errors encountered during address verification.
     */
    errors?: AddressVerificationAPI.Errors;

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
    geocodeResult?: StandardVerifiedAddress.GeocodeResult;

    /**
     * The second line of the address.
     */
    line2?: string;

    /**
     * The full name of the province or state.
     */
    provinceOrStateName?: string;

    /**
     * The verification status of an address.
     */
    status?: AddressVerificationAPI.Status;

    /**
     * The zip plus 4 code of the address.
     */
    zipPlus4?: string;
  }

  export namespace StandardVerifiedAddress {
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
       * US Census FIPS code (US address only)
       */
      usCensusFIPS?: string;

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
       * PostNet barcode for the address (US address only)
       */
      usPostnetBarcode?: string;

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

export interface AddressVerificationBatchVerificationResponse {
  data: AddressVerificationBatchVerificationResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationBatchVerificationResponse {
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
       * The verified address result. Present when verification succeeded.
       */
      verifiedAddress?: Result.VerifiedAddress;
    }

    export namespace Result {
      /**
       * The verified address result. Present when verification succeeded.
       */
      export interface VerifiedAddress {
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
        details?: VerifiedAddress.Details;

        /**
         * Errors encountered during address verification.
         */
        errors?: AddressVerificationAPI.Errors;

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
        geocodeResult?: VerifiedAddress.GeocodeResult;

        /**
         * The second line of the address.
         */
        line2?: string;

        /**
         * The full name of the province or state.
         */
        provinceOrStateName?: string;

        /**
         * The verification status of an address.
         */
        status?: AddressVerificationAPI.Status;

        /**
         * The zip plus 4 code of the address.
         */
        zipPlus4?: string;
      }

      export namespace VerifiedAddress {
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
           * US Census FIPS code (US address only)
           */
          usCensusFIPS?: string;

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
           * PostNet barcode for the address (US address only)
           */
          usPostnetBarcode?: string;

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
  }
}

export interface AddressVerificationGetAutocompletePreviewsResponse {
  data: Array<AddressVerificationGetAutocompletePreviewsResponse.Data>;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationGetAutocompletePreviewsResponse {
  export interface Data {
    /**
     * A partial view of the address, suitable for display in an autocomplete dropdown.
     */
    preview: Data.Preview;
  }

  export namespace Data {
    /**
     * A partial view of the address, suitable for display in an autocomplete dropdown.
     */
    export interface Preview {
      /**
       * The street address line.
       */
      address: string;

      /**
       * The city.
       */
      city?: string;

      /**
       * For US addresses, the full postal code. For non-US addresses, only the first 3
       * digits are returned to avoid consuming a lookup.
       */
      pc?: string;

      /**
       * The province or state abbreviation. Returned instead of `pc` when
       * `provInsteadOfPC=true`.
       */
      prov?: string;
    }
  }
}

export interface AddressVerificationGetLookupInfoResponse {
  data: AddressVerificationGetLookupInfoResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationGetLookupInfoResponse {
  export interface Data {
    /**
     * The maximum number of lookups allowed in the current billing period. `null`
     * indicates an unlimited plan.
     */
    freeLimit: number | null;

    /**
     * Whether the organization is on a paid (subscribed) plan.
     */
    subscribed: boolean;

    /**
     * The number of lookups consumed in the current billing period.
     */
    used: number;
  }
}

export interface AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse {
  data: Array<AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse.Data>;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse {
  export interface Data {
    /**
     * The city name.
     */
    city: string;

    /**
     * The ISO 2-letter country code.
     */
    country: string;

    /**
     * The province or state abbreviation.
     */
    provinceOrState: string;

    /**
     * The county name (US addresses only).
     */
    county?: string;

    /**
     * The FIPS code for the county (US addresses only).
     */
    countyFIPS?: string;

    /**
     * Whether the location is mailable.
     */
    mailable?: boolean;

    /**
     * The USPS preferred city name for this postal code.
     */
    preferredCity?: string;

    /**
     * The USPS ZIP code class (e.g. `S` for standard, `P` for PO Box only).
     */
    zipClass?: string;
  }
}

export interface AddressVerificationLookupZipCodeFromCityOrStateResponse {
  data: AddressVerificationLookupZipCodeFromCityOrStateResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationLookupZipCodeFromCityOrStateResponse {
  export interface Data {
    zipCodes: Array<string>;
  }
}

export interface AddressVerificationParseAnAddressResponse {
  data: AddressVerificationParseAnAddressResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationParseAnAddressResponse {
  export interface Data {
    /**
     * The category of the location (e.g. restaurant).
     */
    category?: string;

    /**
     * The city name.
     */
    city?: string;

    /**
     * The borough within a city.
     */
    cityDistrict?: string;

    /**
     * The country.
     */
    country?: string;

    /**
     * The name of the location.
     */
    house?: string;

    /**
     * The house or street number.
     */
    houseNumber?: string;

    /**
     * The name of the island.
     */
    island?: string;

    /**
     * The floor.
     */
    level?: string;

    /**
     * Populated if the input query contains a near/in qualifier.
     */
    near?: string;

    /**
     * The postal office box.
     */
    poBox?: string;

    /**
     * The postal or ZIP code.
     */
    postcode?: string;

    /**
     * The street name.
     */
    road?: string;

    /**
     * The state or province.
     */
    state?: string;

    /**
     * The county.
     */
    stateDistrict?: string;

    /**
     * The unofficial neighborhood name.
     */
    suburb?: string;

    /**
     * The apartment, unit, office, lot, or other secondary unit designator.
     */
    unit?: string;
  }
}

export interface AddressVerificationSuggestAddressesResponse {
  data: Array<AddressVerificationSuggestAddressesResponse.Data>;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationSuggestAddressesResponse {
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
    errors?: AddressVerificationAPI.Errors;

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
     * The full name of the province or state.
     */
    provinceOrStateName?: string;

    /**
     * The verification status of an address.
     */
    status?: AddressVerificationAPI.Status;

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
       * US Census FIPS code (US address only)
       */
      usCensusFIPS?: string;

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
       * PostNet barcode for the address (US address only)
       */
      usPostnetBarcode?: string;

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

export interface AddressVerificationVerifyResponse {
  data: AddressVerificationVerifyResponse.Data;

  message: string;

  status: 'success' | 'error';
}

export namespace AddressVerificationVerifyResponse {
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
    errors?: AddressVerificationAPI.Errors;

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
     * The full name of the province or state.
     */
    provinceOrStateName?: string;

    /**
     * The verification status of an address.
     */
    status?: AddressVerificationAPI.Status;

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
       * US Census FIPS code (US address only)
       */
      usCensusFIPS?: string;

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
       * PostNet barcode for the address (US address only)
       */
      usPostnetBarcode?: string;

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

export interface AddressVerificationAutocompleteParams {
  /**
   * Body param: The partial street address to complete (e.g. `"22 Bay"`).
   */
  partialStreet: string;

  /**
   * Query param
   */
  filterExact?: boolean;

  /**
   * Query param
   */
  geocode?: boolean;

  /**
   * Query param
   */
  includeDetails?: boolean;

  /**
   * Query param
   */
  index?: number;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  properCase?: boolean;

  /**
   * Query param
   */
  query_verifiedOnly?: boolean;

  /**
   * Query param
   */
  verify?: boolean;

  /**
   * Body param: Filter results to a specific city.
   */
  cityFilter?: string;

  /**
   * Body param: Filter results to a specific country code.
   */
  countryFilter?: string;

  /**
   * Body param: Filter results to a specific postal code prefix.
   */
  pcFilter?: string;

  /**
   * Body param: Filter results to a specific state or province abbreviation.
   */
  stateFilter?: string;

  /**
   * Body param: If true, only return addresses that passed USPS/Canada Post
   * verification.
   */
  body_verifiedOnly?: boolean;
}

export interface AddressVerificationBatchVerificationParams {
  /**
   * Body param: Array of addresses to verify. Each item can be a freeform string or
   * structured address object.
   */
  addresses: Array<
    | AddressVerificationBatchVerificationParams.StandardFreeformAddressInput
    | AddressVerificationBatchVerificationParams.StandardStructuredAddressInput
  >;

  /**
   * Query param
   */
  geocode?: boolean;

  /**
   * Query param
   */
  includeDetails?: boolean;

  /**
   * Query param
   */
  properCase?: boolean;
}

export namespace AddressVerificationBatchVerificationParams {
  export interface StandardFreeformAddressInput {
    /**
     * The address you want to verify, written on a single line.
     */
    address: string;
  }

  export interface StandardStructuredAddressInput {
    address: StandardStructuredAddressInput.Address;
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

export interface AddressVerificationGetAutocompletePreviewsParams {
  partialStreet: string;

  cityFilter?: string;

  countryFilter?: string;

  filterExact?: boolean;

  limit?: number;

  pcFilter?: string;

  properCase?: boolean;

  provInsteadOfPC?: boolean;

  stateFilter?: string;

  verifiedOnly?: boolean;
}

export interface AddressVerificationLookupCityOrStateFromPostalOrZipCodeParams {
  postalOrZip: string;
}

export interface AddressVerificationLookupZipCodeFromCityOrStateParams {
  /**
   * The city name.
   */
  city: string;

  /**
   * The country code. Currently only `US` is supported.
   */
  countryCode: string;

  /**
   * The state abbreviation (e.g. `NY`).
   */
  state: string;
}

export interface AddressVerificationParseAnAddressParams {
  /**
   * The address you want to verify, written on a single line.
   */
  address: string;
}

export type AddressVerificationSuggestAddressesParams =
  | AddressVerificationSuggestAddressesParams.StandardFreeformAddressInput
  | AddressVerificationSuggestAddressesParams.StandardStructuredAddressInput;

export declare namespace AddressVerificationSuggestAddressesParams {
  export interface StandardFreeformAddressInput {
    /**
     * Body param: The address you want to verify, written on a single line.
     */
    address: string;

    /**
     * Query param
     */
    geocode?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
     */
    properCase?: boolean;
  }

  export interface StandardStructuredAddressInput {
    /**
     * Body param
     */
    address: StandardStructuredAddressInput.Address;

    /**
     * Query param
     */
    geocode?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
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

export type AddressVerificationVerifyParams =
  | AddressVerificationVerifyParams.StandardFreeformAddressInput
  | AddressVerificationVerifyParams.StandardStructuredAddressInput;

export declare namespace AddressVerificationVerifyParams {
  export interface StandardFreeformAddressInput {
    /**
     * Body param: The address you want to verify, written on a single line.
     */
    address: string;

    /**
     * Query param
     */
    geocode?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
     */
    properCase?: boolean;
  }

  export interface StandardStructuredAddressInput {
    /**
     * Body param
     */
    address: StandardStructuredAddressInput.Address;

    /**
     * Query param
     */
    geocode?: boolean;

    /**
     * Query param
     */
    includeDetails?: boolean;

    /**
     * Query param
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
    type Errors as Errors,
    type Status as Status,
    type AddressVerificationAutocompleteResponse as AddressVerificationAutocompleteResponse,
    type AddressVerificationBatchVerificationResponse as AddressVerificationBatchVerificationResponse,
    type AddressVerificationGetAutocompletePreviewsResponse as AddressVerificationGetAutocompletePreviewsResponse,
    type AddressVerificationGetLookupInfoResponse as AddressVerificationGetLookupInfoResponse,
    type AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse as AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse,
    type AddressVerificationLookupZipCodeFromCityOrStateResponse as AddressVerificationLookupZipCodeFromCityOrStateResponse,
    type AddressVerificationParseAnAddressResponse as AddressVerificationParseAnAddressResponse,
    type AddressVerificationSuggestAddressesResponse as AddressVerificationSuggestAddressesResponse,
    type AddressVerificationVerifyResponse as AddressVerificationVerifyResponse,
    type AddressVerificationAutocompleteParams as AddressVerificationAutocompleteParams,
    type AddressVerificationBatchVerificationParams as AddressVerificationBatchVerificationParams,
    type AddressVerificationGetAutocompletePreviewsParams as AddressVerificationGetAutocompletePreviewsParams,
    type AddressVerificationLookupCityOrStateFromPostalOrZipCodeParams as AddressVerificationLookupCityOrStateFromPostalOrZipCodeParams,
    type AddressVerificationLookupZipCodeFromCityOrStateParams as AddressVerificationLookupZipCodeFromCityOrStateParams,
    type AddressVerificationParseAnAddressParams as AddressVerificationParseAnAddressParams,
    type AddressVerificationSuggestAddressesParams as AddressVerificationSuggestAddressesParams,
    type AddressVerificationVerifyParams as AddressVerificationVerifyParams,
  };
}
