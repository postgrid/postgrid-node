// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';
import { Response } from 'node-fetch';

const client = new PostGrid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subOrganizations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.subOrganizations.create({
      countryCode: 'CA',
      email: 'suborg@postgrid.com',
      name: 'Calvin',
      organizationName: 'PostGrid',
      password: 'very-strong-password',
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
    const response = await client.subOrganizations.create({
      countryCode: 'CA',
      email: 'suborg@postgrid.com',
      name: 'Calvin',
      organizationName: 'PostGrid',
      password: 'very-strong-password',
      phoneNumber: '9059059059',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.subOrganizations.retrieve('id');
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
    await expect(
      client.subOrganizations.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.subOrganizations.list();
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
    await expect(client.subOrganizations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subOrganizations.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('listUsers', async () => {
    const responsePromise = client.subOrganizations.listUsers('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listUsers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subOrganizations.listUsers('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('listUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subOrganizations.listUsers(
        'id',
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });
});
