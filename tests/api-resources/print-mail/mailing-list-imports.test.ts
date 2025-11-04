// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Postgrid from 'postgrid';

const client = new Postgrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mailingListImports', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.printMail.mailingListImports.create({
      file: 'https://signed-upload-url.csv',
      fileType: 'csv',
      receiverAddressMapping: {
        description: 'Description',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        addressLine1: 'Address',
        city: 'City',
        postalOrZip: 'Postal Code',
        provinceOrState: 'State',
        countryCode: 'Country',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.printMail.mailingListImports.create({
      file: 'https://signed-upload-url.csv',
      fileType: 'csv',
      receiverAddressMapping: {
        description: 'Description',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        addressLine1: 'Address',
        city: 'City',
        postalOrZip: 'Postal Code',
        provinceOrState: 'State',
        countryCode: 'Country',
      },
      description: 'description',
      metadata: { foo: 'bar' },
      receiverMergeVariableMapping: { foo: 'string' },
      senderAddressMapping: { foo: 'string' },
      senderMergeVariableMapping: { foo: 'string' },
      'idempotency-key': 'idempotency-key',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.printMail.mailingListImports.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.printMail.mailingListImports.update('id', {});
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
    const responsePromise = client.printMail.mailingListImports.list();
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
      client.printMail.mailingListImports.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Postgrid.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.printMail.mailingListImports.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
