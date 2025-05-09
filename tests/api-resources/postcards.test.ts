// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';
import { Response } from 'node-fetch';

const client = new PostGrid({
  pmAPIKey: 'My Pm API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postcards', () => {
  test('create: only required params', async () => {
    const responsePromise = client.postcards.create({
      backHTML: 'backHTML',
      frontHTML: 'frontHTML',
      size: '6x4',
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
    const response = await client.postcards.create({
      backHTML: 'backHTML',
      frontHTML: 'frontHTML',
      size: '6x4',
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
      mailingClass: 'first_class',
      mergeVariables: { foo: 'bar' },
      metadata: { foo: 'bar' },
      sendDate: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.postcards.retrieve('id');
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
    await expect(client.postcards.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.postcards.list();
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
    await expect(client.postcards.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.postcards.list({ limit: 0, search: 'search', skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.postcards.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.postcards.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('url', async () => {
    const responsePromise = client.postcards.url('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('url: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.postcards.url('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });
});
