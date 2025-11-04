// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  test('create: only required params', async () => {
    const responsePromise = client.printMail.v1.campaigns.create({ mailingList: 'mailingList' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.printMail.v1.campaigns.create({
      mailingList: 'mailingList',
      chequeProfile: 'chequeProfile',
      defaultSenderContact: 'defaultSenderContact',
      description: 'description',
      letterProfile: 'letterProfile',
      metadata: { foo: 'bar' },
      postcardProfile: 'postcardProfile',
      selfMailerProfile: 'selfMailerProfile',
      sendDate: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.printMail.v1.campaigns.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.printMail.v1.campaigns.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.printMail.v1.campaigns.list();
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
      client.printMail.v1.campaigns.list(
        { limit: 0, search: 'search', skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.printMail.v1.campaigns.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('send', async () => {
    const responsePromise = client.printMail.v1.campaigns.send('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
