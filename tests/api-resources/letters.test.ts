// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid';
import { Response } from 'node-fetch';

const client = new PostGrid({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource letters', () => {
  test('create: only required params', async () => {
    const responsePromise = client.letters.create({
      from: { addressLine1: 'addressLine1', countryCode: 'countryCode', firstName: 'firstName' },
      html: 'html',
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
    const response = await client.letters.create({
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
      html: 'html',
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
      addressPlacement: 'top_first_page',
      attachedPDF: { file: 'https://example.com', placement: 'before_template' },
      color: true,
      description: 'description',
      doubleSided: true,
      envelope: 'envelope',
      mailingClass: 'first_class',
      mergeVariables: { foo: 'bar' },
      metadata: { foo: 'bar' },
      perforatedPage: 1,
      plasticCard: {
        size: 'standard',
        doubleSided: {
          backHTML: 'backHTML',
          backTemplate: 'backTemplate',
          frontHTML: 'frontHTML',
          frontTemplate: 'frontTemplate',
          pdf: 'https://example.com',
        },
        singleSided: { html: 'html', pdf: 'https://example.com', template: 'template' },
      },
      returnEnvelope: 'returnEnvelope',
      sendDate: '2019-12-27T18:11:19.117Z',
      size: 'us_letter',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.letters.retrieve('id');
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
    await expect(client.letters.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.letters.list();
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
    await expect(client.letters.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.letters.list({ limit: 0, search: 'search', skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.letters.delete('id');
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
    await expect(client.letters.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });

  test('url', async () => {
    const responsePromise = client.letters.url('id');
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
    await expect(client.letters.url('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PostGrid.NotFoundError,
    );
  });
});
