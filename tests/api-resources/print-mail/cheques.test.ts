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
    const responsePromise = client.printMail.cheques.create({
      amount: 1000,
      bankAccount: 'bank_123',
      from: 'contact_123',
      to: 'contact_123',
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
    const response = await client.printMail.cheques.create({
      amount: 1000,
      bankAccount: 'bank_123',
      from: 'contact_123',
      to: 'contact_123',
      currencyCode: 'USD',
      description: 'description',
      digitalOnly: { watermark: 'watermark' },
      envelope: 'standard',
      logoURL: 'https://example.com',
      mailingClass: 'first_class',
      memo: 'memo',
      mergeVariables: { foo: 'bar' },
      message: 'message',
      metadata: { foo: 'bar' },
      number: 123456,
      redirectTo: {
        addressLine1: 'addressLine1',
        countryCode: 'countryCode',
        firstName: 'firstName',
        addressLine2: 'addressLine2',
        city: 'city',
        companyName: 'companyName',
        description: 'description',
        email: 'email',
        forceVerifiedStatus: true,
        jobTitle: 'jobTitle',
        lastName: 'lastName',
        metadata: { foo: 'bar' },
        phoneNumber: 'phoneNumber',
        postalOrZip: 'postalOrZip',
        provinceOrState: 'provinceOrState',
        skipVerification: true,
      },
      sendDate: '2019-12-27T18:11:19.117Z',
      size: 'us_letter',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.printMail.cheques.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.printMail.cheques.list();
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
      client.printMail.cheques.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.printMail.cheques.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveURL', async () => {
    const responsePromise = client.printMail.cheques.retrieveURL('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveWithDepositReadyPdf', async () => {
    const responsePromise = client.printMail.cheques.retrieveWithDepositReadyPdf('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
