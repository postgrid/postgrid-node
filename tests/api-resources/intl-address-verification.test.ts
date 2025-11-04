// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';
import { Response } from 'node-fetch';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource intlAddressVerification', () => {
  test('verifyAddress: only required params', async () => {
    const responsePromise = client.intlAddressVerification.verifyAddress({
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

  test('verifyAddress: required and optional params', async () => {
    const response = await client.intlAddressVerification.verifyAddress({
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
