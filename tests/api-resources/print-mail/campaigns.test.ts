// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PostGrid from 'postgrid-node';

const client = new PostGrid({
  addressVerificationAPIKey: 'My Address Verification API Key',
  printMailAPIKey: 'My Print Mail API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.printMail.campaigns.create({ mailingList: 'mailingList' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.printMail.campaigns.create({
      mailingList: 'mailingList',
      cheque: {
        bankAccount: 'bankAccount',
        currencyCode: 'CAD',
        description: 'description',
        envelope: 'envelope',
        letterPDF: 'https://example.com',
        letterSettings: { color: true },
        letterTemplate: 'letterTemplate',
        logo: 'https://example.com',
        mailingClass: 'first_class',
        memo: 'memo',
        mergeVariables: { foo: 'bar' },
        message: 'message',
        metadata: { foo: 'string' },
        returnEnvelope: 'returnEnvelope',
        size: 'us_letter',
      },
      defaultSenderContact: 'defaultSenderContact',
      description: 'description',
      letter: {
        addressPlacement: 'top_first_page',
        attachedPDF: { file: 'https://example.com', placement: 'before_template' },
        color: true,
        description: 'description',
        doubleSided: true,
        envelope: 'envelope',
        envelopeType: 'standard_double_window',
        mailingClass: 'first_class',
        mergeVariables: { foo: 'bar' },
        metadata: { foo: 'string' },
        paper: 'standard',
        pdf: 'https://example.com',
        perforatedPage: 1,
        returnEnvelope: 'returnEnvelope',
        size: 'us_letter',
        template: 'template',
      },
      metadata: { foo: 'bar' },
      postcard: {
        backTemplate: 'backTemplate',
        description: 'description',
        frontTemplate: 'frontTemplate',
        mailingClass: 'first_class',
        mergeVariables: { foo: 'bar' },
        metadata: { foo: 'string' },
        paper: 'standard',
        pdf: 'https://example.com',
        size: '6x4',
      },
      selfMailer: {
        description: 'description',
        insideTemplate: 'insideTemplate',
        mailingClass: 'first_class',
        mergeVariables: { foo: 'bar' },
        metadata: { foo: 'string' },
        outsideTemplate: 'outsideTemplate',
        pdf: 'https://example.com',
        size: '8.5x11_bifold',
      },
      sendDate: '2019-12-27T18:11:19.117Z',
      snapPack: {
        description: 'description',
        insideTemplate: 'insideTemplate',
        mailingClass: 'first_class',
        mergeVariables: { foo: 'bar' },
        metadata: { foo: 'string' },
        outsideTemplate: 'outsideTemplate',
        pdf: 'https://example.com',
        size: '8.5x11_bifold_v',
      },
      'idempotency-key': 'idempotency-key',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.printMail.campaigns.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.printMail.campaigns.update('id', {});
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
    const responsePromise = client.printMail.campaigns.list();
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
      client.printMail.campaigns.list(
        {
          limit: 0,
          search: 'search',
          skip: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PostGrid.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.printMail.campaigns.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.printMail.campaigns.send('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
