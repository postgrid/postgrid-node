// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Postgrid from 'postgrid';

const client = new Postgrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addver', () => {
  // Prism tests are disabled
  test.skip('createVerification: only required params', async () => {
    const responsePromise = client.addver.createVerification({ address: 'address' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createVerification: required and optional params', async () => {
    const response = await client.addver.createVerification({
      address: 'address',
      geocode: true,
      includeDetails: true,
      properCase: true,
    });
  });
});
