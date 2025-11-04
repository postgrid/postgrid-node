// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource mailingListImports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.mailingListImports.create({
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

  test('create: required and optional params', async () => {
    const response = await client.mailingListImports.create({
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
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.mailingListImports.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.mailingListImports.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.mailingListImports.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mailingListImports.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.mailingListImports.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
