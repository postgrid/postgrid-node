// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource intlAddressVerification', () => {
  // Mock server tests are disabled
  test.skip('autocomplete: only required params', async () => {
    const responsePromise = client.intlAddressVerification.autocomplete({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('autocomplete: required and optional params', async () => {
    const response = await client.intlAddressVerification.autocomplete({
      id: 'id',
      includeDetails: true,
      properCase: true,
      useEnhancedChinaDataset: true,
      verify: true,
    });
  });

  // Mock server tests are disabled
  test.skip('batchVerification: only required params', async () => {
    const responsePromise = client.intlAddressVerification.batchVerification({
      addresses: [
        {
          address: {
            country: 'country',
            line1: 'line1',
            postalOrZip: 'postalOrZip',
            provinceOrState: 'provinceOrState',
          },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('batchVerification: required and optional params', async () => {
    const response = await client.intlAddressVerification.batchVerification({
      addresses: [
        {
          address: {
            country: 'country',
            line1: 'line1',
            postalOrZip: 'postalOrZip',
            provinceOrState: 'provinceOrState',
            city: 'city',
            line2: 'line2',
            line3: 'line3',
            line4: 'line4',
          },
        },
      ],
      geoData: true,
      includeDetails: true,
      properCase: true,
      useEnhancedChinaDataset: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getAutocompleteAdvancedPreviews', async () => {
    const responsePromise = client.intlAddressVerification.getAutocompleteAdvancedPreviews();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAutocompleteAdvancedPreviews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.intlAddressVerification.getAutocompleteAdvancedPreviews(
        {
          advanced: true,
          cityFilter: 'cityFilter',
          container: 'container',
          countriesFilter: 'countriesFilter',
          disableIPBiasing: true,
          language: 'language',
          limit: 0,
          partialStreet: 'partialStreet',
          postalOrZipFilter: 'postalOrZipFilter',
          standardFallback: true,
          streetFilter: 'streetFilter',
          useEnhancedChinaDataset: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getAutocompletePreviews', async () => {
    const responsePromise = client.intlAddressVerification.getAutocompletePreviews();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getAutocompletePreviews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.intlAddressVerification.getAutocompletePreviews(
        {
          advanced: true,
          cityFilter: 'cityFilter',
          container: 'container',
          countriesFilter: 'countriesFilter',
          disableIPBiasing: true,
          language: 'language',
          limit: 0,
          partialStreet: 'partialStreet',
          postalOrZipFilter: 'postalOrZipFilter',
          standardFallback: true,
          streetFilter: 'streetFilter',
          useEnhancedChinaDataset: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.intlAddressVerification.verify({
      address: {
        country: 'country',
        line1: 'line1',
        postalOrZip: 'postalOrZip',
        provinceOrState: 'provinceOrState',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.intlAddressVerification.verify({
      address: {
        country: 'country',
        line1: 'line1',
        postalOrZip: 'postalOrZip',
        provinceOrState: 'provinceOrState',
        city: 'city',
        line2: 'line2',
        line3: 'line3',
        line4: 'line4',
      },
      geoData: true,
      includeDetails: true,
      properCase: true,
    });
  });
});
