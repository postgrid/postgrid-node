# BankAccounts
(*bankAccounts*)

## Overview

### Available Operations

* [create](#create) - Create Bank Account
* [list](#list) - List Bank Accounts
* [get](#get) - Get Bank Account
* [delete](#delete) - Delete Bank Account

## create

Create a bank account. A US bank account is created by setting `bankCountryCode` to `US` and providing `accountNumber` and `routingNumber`. A canadian bank account can be created by specifying `bankCountryCode` as `CA` and setting `accountNumber`, `routeNumber`, and `transitNumber` accordingly.

You must specify _either_ `signatureImage` or `signatureText`. The image can be supplied as either a URL or a multipart file upload.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { bankAccountsCreate } from "postgrid-node/funcs/bankAccountsCreate.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await bankAccountsCreate(postGrid, {
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BankAccountCreate](../../models/components/bankaccountcreate.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccount](../../models/components/bankaccount.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ValidationError        | 400                           | application/json              |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## list

Get a list of bank accounts.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { bankAccountsList } from "postgrid-node/funcs/bankAccountsList.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await bankAccountsList(postGrid, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BankAccountsListRequest](../../models/operations/bankaccountslistrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccountList](../../models/components/bankaccountlist.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Retrieve a bank account by ID.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.get({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { bankAccountsGet } from "postgrid-node/funcs/bankAccountsGet.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await bankAccountsGet(postGrid, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BankAccountsGetRequest](../../models/operations/bankaccountsgetrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BankAccount](../../models/components/bankaccount.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.PermissionMissingError | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a bank account by ID. Note that this operation cannot be undone.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.delete({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { bankAccountsDelete } from "postgrid-node/funcs/bankAccountsDelete.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await bankAccountsDelete(postGrid, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BankAccountsDeleteRequest](../../models/operations/bankaccountsdeleterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BankAccountsDeleteResponseBody](../../models/operations/bankaccountsdeleteresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |