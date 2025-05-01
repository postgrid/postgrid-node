# postgrid-node

Developer-friendly & type-safe Typescript SDK specifically catered to leverage the PostGrid API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=postgrid-node&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/postgrid/postgrid). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [postgrid-node](#postgrid-node)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add postgrid-node
```

### PNPM

```bash
pnpm add postgrid-node
```

### Bun

```bash
bun add postgrid-node
```

### Yarn

```bash
yarn add postgrid-node zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "PostGrid": {
      "command": "npx",
      "args": [
        "-y", "--package", "postgrid-node",
        "--",
        "mcp", "start",
        "--api-key-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "PostGrid": {
      "command": "npx",
      "args": [
        "-y", "--package", "postgrid-node",
        "--",
        "mcp", "start",
        "--api-key-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package postgrid-node -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  | Environment Variable    |
| ------------ | ------ | ------- | ----------------------- |
| `apiKeyAuth` | apiKey | API key | `POSTGRID_API_KEY_AUTH` |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create Bank Account
* [list](docs/sdks/bankaccounts/README.md#list) - List Bank Accounts
* [get](docs/sdks/bankaccounts/README.md#get) - Get Bank Account
* [delete](docs/sdks/bankaccounts/README.md#delete) - Delete Bank Account

### [boxes](docs/sdks/boxes/README.md)

* [create](docs/sdks/boxes/README.md#create) - Create Box
* [list](docs/sdks/boxes/README.md#list) - List Boxes
* [get](docs/sdks/boxes/README.md#get) - Get Box
* [delete](docs/sdks/boxes/README.md#delete) - Cancel Box

### [cheques](docs/sdks/cheques/README.md)

* [create](docs/sdks/cheques/README.md#create) - Create Cheque
* [list](docs/sdks/cheques/README.md#list) - List Cheques
* [get](docs/sdks/cheques/README.md#get) - Get Cheque
* [delete](docs/sdks/cheques/README.md#delete) - Cancel Cheque
* [getUrl](docs/sdks/cheques/README.md#geturl) - Get Cheque Preview
* [getDepositReadyPdf](docs/sdks/cheques/README.md#getdepositreadypdf) - Retrieve Cheque Deposit-Ready PDF (Digital Only)

### [contacts](docs/sdks/contacts/README.md)

* [create](docs/sdks/contacts/README.md#create) - Create Contact
* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [get](docs/sdks/contacts/README.md#get) - Get Contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete Contact

### [letters](docs/sdks/letters/README.md)

* [create](docs/sdks/letters/README.md#create) - Create Letter
* [list](docs/sdks/letters/README.md#list) - List Letters
* [get](docs/sdks/letters/README.md#get) - Get Letter
* [delete](docs/sdks/letters/README.md#delete) - Cancel Letter
* [getUrl](docs/sdks/letters/README.md#geturl) - Get Letter Preview

### [postcards](docs/sdks/postcards/README.md)

* [create](docs/sdks/postcards/README.md#create) - Create Postcard
* [list](docs/sdks/postcards/README.md#list) - List Postcards
* [get](docs/sdks/postcards/README.md#get) - Get Postcard
* [delete](docs/sdks/postcards/README.md#delete) - Cancel Postcard
* [getUrl](docs/sdks/postcards/README.md#geturl) - Get Postcard Preview


### [selfMailers](docs/sdks/selfmailers/README.md)

* [create](docs/sdks/selfmailers/README.md#create) - Create Self Mailer
* [list](docs/sdks/selfmailers/README.md#list) - List Self Mailers
* [get](docs/sdks/selfmailers/README.md#get) - Get Self Mailer
* [delete](docs/sdks/selfmailers/README.md#delete) - Cancel Self Mailer
* [getUrl](docs/sdks/selfmailers/README.md#geturl) - Get Self Mailer Preview

### [templates](docs/sdks/templates/README.md)

* [create](docs/sdks/templates/README.md#create) - Create Template
* [list](docs/sdks/templates/README.md#list) - List Templates
* [get](docs/sdks/templates/README.md#get) - Get Template
* [update](docs/sdks/templates/README.md#update) - Update Template
* [delete](docs/sdks/templates/README.md#delete) - Delete Template

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create Bank Account
- [`bankAccountsDelete`](docs/sdks/bankaccounts/README.md#delete) - Delete Bank Account
- [`bankAccountsGet`](docs/sdks/bankaccounts/README.md#get) - Get Bank Account
- [`bankAccountsList`](docs/sdks/bankaccounts/README.md#list) - List Bank Accounts
- [`boxesCreate`](docs/sdks/boxes/README.md#create) - Create Box
- [`boxesDelete`](docs/sdks/boxes/README.md#delete) - Cancel Box
- [`boxesGet`](docs/sdks/boxes/README.md#get) - Get Box
- [`boxesList`](docs/sdks/boxes/README.md#list) - List Boxes
- [`chequesCreate`](docs/sdks/cheques/README.md#create) - Create Cheque
- [`chequesDelete`](docs/sdks/cheques/README.md#delete) - Cancel Cheque
- [`chequesGet`](docs/sdks/cheques/README.md#get) - Get Cheque
- [`chequesGetDepositReadyPdf`](docs/sdks/cheques/README.md#getdepositreadypdf) - Retrieve Cheque Deposit-Ready PDF (Digital Only)
- [`chequesGetUrl`](docs/sdks/cheques/README.md#geturl) - Get Cheque Preview
- [`chequesList`](docs/sdks/cheques/README.md#list) - List Cheques
- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Create Contact
- [`contactsDelete`](docs/sdks/contacts/README.md#delete) - Delete Contact
- [`contactsGet`](docs/sdks/contacts/README.md#get) - Get Contact
- [`contactsList`](docs/sdks/contacts/README.md#list) - List Contacts
- [`lettersCreate`](docs/sdks/letters/README.md#create) - Create Letter
- [`lettersDelete`](docs/sdks/letters/README.md#delete) - Cancel Letter
- [`lettersGet`](docs/sdks/letters/README.md#get) - Get Letter
- [`lettersGetUrl`](docs/sdks/letters/README.md#geturl) - Get Letter Preview
- [`lettersList`](docs/sdks/letters/README.md#list) - List Letters
- [`postcardsCreate`](docs/sdks/postcards/README.md#create) - Create Postcard
- [`postcardsDelete`](docs/sdks/postcards/README.md#delete) - Cancel Postcard
- [`postcardsGet`](docs/sdks/postcards/README.md#get) - Get Postcard
- [`postcardsGetUrl`](docs/sdks/postcards/README.md#geturl) - Get Postcard Preview
- [`postcardsList`](docs/sdks/postcards/README.md#list) - List Postcards
- [`selfMailersCreate`](docs/sdks/selfmailers/README.md#create) - Create Self Mailer
- [`selfMailersDelete`](docs/sdks/selfmailers/README.md#delete) - Cancel Self Mailer
- [`selfMailersGet`](docs/sdks/selfmailers/README.md#get) - Get Self Mailer
- [`selfMailersGetUrl`](docs/sdks/selfmailers/README.md#geturl) - Get Self Mailer Preview
- [`selfMailersList`](docs/sdks/selfmailers/README.md#list) - List Self Mailers
- [`templatesCreate`](docs/sdks/templates/README.md#create) - Create Template
- [`templatesDelete`](docs/sdks/templates/README.md#delete) - Delete Template
- [`templatesGet`](docs/sdks/templates/README.md#get) - Get Template
- [`templatesList`](docs/sdks/templates/README.md#list) - List Templates
- [`templatesUpdate`](docs/sdks/templates/README.md#update) - Update Template

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `create` method may throw the following errors:

| Error Type                    | Status Code | Content Type     |
| ----------------------------- | ----------- | ---------------- |
| errors.ValidationError        | 400         | application/json |
| errors.UnauthorizedError      | 401         | application/json |
| errors.NotFoundError          | 404         | application/json |
| errors.UnprocessableError     | 422         | application/json |
| errors.RateLimitExceededError | 429         | application/json |
| errors.APIError               | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { PostGrid } from "postgrid-node";
import {
  NotFoundError,
  RateLimitExceededError,
  SDKValidationError,
  UnauthorizedError,
  UnprocessableError,
  ValidationError,
} from "postgrid-node/models/errors";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await postGrid.bankAccounts.create({
      bankName: "Test Bank",
      bankPrimaryLine: "145 mulberry st",
      bankSecondaryLine: "new york ny 10013",
      bankCountryCode: "US",
      accountNumber: "1234567",
      routingNumber: "123456789",
      signatureText: "Example",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ValidationError): {
        // Handle err.data$: ValidationErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedError): {
        // Handle err.data$: UnauthorizedErrorData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundError): {
        // Handle err.data$: NotFoundErrorData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableError): {
        // Handle err.data$: UnprocessableErrorData
        console.error(err);
        return;
      }
      case (err instanceof RateLimitExceededError): {
        // Handle err.data$: RateLimitExceededErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  serverURL: "https://api.postgrid.com/print-mail/v1",
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PostGrid } from "postgrid-node";
import { HTTPClient } from "postgrid-node/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PostGrid({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PostGrid } from "postgrid-node";

const sdk = new PostGrid({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `POSTGRID_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=postgrid-node&utm_campaign=typescript)
