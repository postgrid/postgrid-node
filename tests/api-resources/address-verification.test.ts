// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addressVerification', () => {
  // Mock server tests are disabled
  test.skip('autocomplete: only required params', async () => {
    const responsePromise = client.addressVerification.autocomplete({ partialStreet: 'partialStreet' });
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
    const response = await client.addressVerification.autocomplete({
      partialStreet: 'partialStreet',
      filterExact: true,
      geocode: true,
      includeDetails: true,
      index: 0,
      limit: 0,
      properCase: true,
      query_verifiedOnly: true,
      verify: true,
      cityFilter: 'cityFilter',
      countryFilter: 'countryFilter',
      pcFilter: 'pcFilter',
      stateFilter: 'stateFilter',
      body_verifiedOnly: true,
    });
  });

  // Mock server tests are disabled
  test.skip('batchVerification: only required params', async () => {
    const responsePromise = client.addressVerification.batchVerification({
      addresses: [{ address: 'address' }],
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
    const response = await client.addressVerification.batchVerification({
      addresses: [{ address: 'address' }],
      geocode: true,
      includeDetails: true,
      properCase: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getAutocompletePreviews: only required params', async () => {
    const responsePromise = client.addressVerification.getAutocompletePreviews({
      partialStreet: 'partialStreet',
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
  test.skip('getAutocompletePreviews: required and optional params', async () => {
    const response = await client.addressVerification.getAutocompletePreviews({
      partialStreet: 'partialStreet',
      cityFilter: 'cityFilter',
      countryFilter: 'countryFilter',
      filterExact: true,
      limit: 0,
      pcFilter: 'pcFilter',
      properCase: true,
      provInsteadOfPC: true,
      stateFilter: 'stateFilter',
      verifiedOnly: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getLookupInfo', async () => {
    const responsePromise = client.addressVerification.getLookupInfo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookupCityOrStateFromPostalOrZipCode: only required params', async () => {
    const responsePromise = client.addressVerification.lookupCityOrStateFromPostalOrZipCode({
      postalOrZip: 'postalOrZip',
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
  test.skip('lookupCityOrStateFromPostalOrZipCode: required and optional params', async () => {
    const response = await client.addressVerification.lookupCityOrStateFromPostalOrZipCode({
      postalOrZip: 'postalOrZip',
    });
  });

  // Mock server tests are disabled
  test.skip('lookupZipCodeFromCityOrState: only required params', async () => {
    const responsePromise = client.addressVerification.lookupZipCodeFromCityOrState({
      city: 'city',
      countryCode: 'countryCode',
      state: 'state',
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
  test.skip('lookupZipCodeFromCityOrState: required and optional params', async () => {
    const response = await client.addressVerification.lookupZipCodeFromCityOrState({
      city: 'city',
      countryCode: 'countryCode',
      state: 'state',
    });
  });

  // Mock server tests are disabled
  test.skip('parseAnAddress: only required params', async () => {
    const responsePromise = client.addressVerification.parseAnAddress({ address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('parseAnAddress: required and optional params', async () => {
    const response = await client.addressVerification.parseAnAddress({ address: 'address' });
  });

  // Mock server tests are disabled
  test.skip('suggestAddresses: only required params', async () => {
    const responsePromise = client.addressVerification.suggestAddresses({ address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('suggestAddresses: required and optional params', async () => {
    const response = await client.addressVerification.suggestAddresses({
      address: 'address',
      geocode: true,
      includeDetails: true,
      properCase: true,
    });
  });

  // Mock server tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.addressVerification.verify({ address: 'address' });
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
    const response = await client.addressVerification.verify({
      address: 'address',
      geocode: true,
      includeDetails: true,
      properCase: true,
    });
  });
});
