// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';
import { Response } from 'node-fetch';

const client = new PostGrid({
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource selfMailers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.selfMailers.create({
      from: { addressLine1: 'addressLine1', countryCode: 'countryCode', firstName: 'firstName' },
      insideHTML: 'insideHTML',
      outsideHTML: 'outsideHTML',
      size: '8.5x11_bifold',
      to: { addressLine1: 'addressLine1', countryCode: 'countryCode', firstName: 'firstName' },
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
    const response = await client.selfMailers.create({
      from: {
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
      insideHTML: 'insideHTML',
      outsideHTML: 'outsideHTML',
      size: '8.5x11_bifold',
      to: {
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
      description: 'description',
      mailingClass: 'first_class',
      mergeVariables: { foo: 'bar' },
      metadata: { foo: 'bar' },
      sendDate: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.selfMailers.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.selfMailers.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.selfMailers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.selfMailers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.selfMailers.list({ limit: 0, search: 'search', skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.selfMailers.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.selfMailers.cancel('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('retrievePreviewURL', async () => {
    const responsePromise = client.selfMailers.retrievePreviewURL('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrievePreviewURL: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.selfMailers.retrievePreviewURL('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });
});
