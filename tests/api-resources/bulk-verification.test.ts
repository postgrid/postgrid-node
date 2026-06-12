// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid, { toFile } from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulkVerification', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.bulkVerification.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bulkVerification.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bulkVerification.list({ limit: 0, skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.bulkVerification.upload({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      mappings: { line1: 'line1' },
      name: 'name',
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.bulkVerification.upload({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      mappings: {
        line1: 'line1',
        city: 'city',
        country: 'country',
        firstName: 'firstName',
        fullName: 'fullName',
        lastName: 'lastName',
        line2: 'line2',
        postalOrZip: 'postalOrZip',
        provinceOrState: 'provinceOrState',
      },
      name: 'name',
      defaultCountry: 'defaultCountry',
      runCCOA: true,
      runNCOA: true,
      useGeocode: true,
      useIntlVerification: true,
      useProperCase: true,
    });
  });
});
