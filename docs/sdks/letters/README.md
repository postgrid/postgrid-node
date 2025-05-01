# Letters
(*letters*)

## Overview

### Available Operations

* [create](#create) - Create Letter
* [list](#list) - List Letters
* [get](#get) - Get Letter
* [delete](#delete) - Cancel Letter
* [getUrl](#geturl) - Get Letter Preview

## create

Create a letter. Note that you can supply one of the following:
- HTML content for the letter
- A template ID for the letter
- A URL or file for a PDF for the letter
- Upload the aforementioned PDF file via a multipart form upload request

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.letters.create({
    to: "contact_123",
    doubleSided: false,
    color: false,
    from: "contact_123",
    size: "us_letter",
    addressPlacement: "top_first_page",
    envelope: "standard",
    html: "<html>Content</html>",
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
import { lettersCreate } from "postgrid-node/funcs/lettersCreate.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await lettersCreate(postGrid, {
    to: "contact_123",
    doubleSided: false,
    color: false,
    from: "contact_123",
    size: "us_letter",
    addressPlacement: "top_first_page",
    envelope: "standard",
    html: "<html>Content</html>",
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
| `request`                                                                                                                                                                      | [components.LetterCreate](../../models/components/lettercreate.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Letter](../../models/components/letter.md)\>**

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

Get a list of letters.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.letters.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { lettersList } from "postgrid-node/funcs/lettersList.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await lettersList(postGrid, {});

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
| `request`                                                                                                                                                                      | [operations.LettersListRequest](../../models/operations/letterslistrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LetterList](../../models/components/letterlist.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Retrieve a letter by ID.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.letters.get({
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
import { lettersGet } from "postgrid-node/funcs/lettersGet.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await lettersGet(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.LettersGetRequest](../../models/operations/lettersgetrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Letter](../../models/components/letter.md)\>**

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

Cancel a letter by ID. Note that this operation cannot be undone.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.letters.delete({
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
import { lettersDelete } from "postgrid-node/funcs/lettersDelete.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await lettersDelete(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.LettersDeleteRequest](../../models/operations/lettersdeleterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Letter](../../models/components/letter.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getUrl

Retrieve a letter preview URL.

This is only available for customers with our document management addon, which offers
document generation and hosting capabilities. This endpoint has a much higher rate limit
than the regular order retrieval endpoint, so it is suitable for customer-facing use-cases.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.letters.getUrl({
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
import { lettersGetUrl } from "postgrid-node/funcs/lettersGetUrl.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await lettersGetUrl(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.LettersGetURLRequest](../../models/operations/lettersgeturlrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LettersGetURLResponseBody](../../models/operations/lettersgeturlresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.PermissionMissingError | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |