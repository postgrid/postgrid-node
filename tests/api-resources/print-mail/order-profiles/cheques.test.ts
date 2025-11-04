// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cheques', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.printMail.orderProfiles.cheques.create({
      bankAccount: 'bankAccount',
      size: 'us_letter',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.printMail.orderProfiles.cheques.create({
      bankAccount: 'bankAccount',
      size: 'us_letter',
      expand: ['string'],
      currencyCode: 'CAD',
      description: 'description',
      letterPDF: 'U3RhaW5sZXNzIHJvY2tz',
      letterTemplate: 'letterTemplate',
      logo: 'https://example.com',
      mailingClass: 'first_class',
      memo: 'memo',
      mergeVariables: { foo: 'bar' },
      message: 'message',
      metadata: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.printMail.orderProfiles.cheques.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printMail.orderProfiles.cheques.retrieve(
        'id',
        { expand: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.printMail.orderProfiles.cheques.update('id', {
      bankAccount: 'bankAccount',
      size: 'us_letter',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.printMail.orderProfiles.cheques.update('id', {
      bankAccount: 'bankAccount',
      size: 'us_letter',
      expand: ['string'],
      currencyCode: 'CAD',
      description: 'description',
      letterPDF: 'U3RhaW5sZXNzIHJvY2tz',
      letterTemplate: 'letterTemplate',
      logo: 'https://example.com',
      mailingClass: 'first_class',
      memo: 'memo',
      mergeVariables: { foo: 'bar' },
      message: 'message',
      metadata: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.printMail.orderProfiles.cheques.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printMail.orderProfiles.cheques.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.printMail.orderProfiles.cheques.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
