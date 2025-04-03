# Postcards
(*postcards*)

## Overview

### Available Operations

* [create](#create) - Create Postcard
* [list](#list) - List Postcards
* [get](#get) - Get Postcard
* [delete](#delete) - Cancel Postcard
* [getUrl](#geturl) - Get Postcard Preview

## create

Create a postcard. Note that you can supply one of the following:
- HTML content for the front and back of the postcard
- A template ID for the front and back of the postcard
- A URL or file for a 2 page PDF where the first page is the front of the postcard and the second page is the back
- Upload the aforementioned PDF file via a multipart form upload request

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.postcards.create({
    to: "contact_456",
    size: "6x4",
    from: "contact_123",
    frontHTML: "<html>Front</html>",
    backHTML: "<html>Back</html>",
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
import { postcardsCreate } from "postgrid-node/funcs/postcardsCreate.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await postcardsCreate(postGrid, {
    to: "contact_456",
    size: "6x4",
    from: "contact_123",
    frontHTML: "<html>Front</html>",
    backHTML: "<html>Back</html>",
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
| `request`                                                                                                                                                                      | [components.PostcardCreate](../../models/components/postcardcreate.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Postcard](../../models/components/postcard.md)\>**

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

Get a list of postcards.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.postcards.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { postcardsList } from "postgrid-node/funcs/postcardsList.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await postcardsList(postGrid, {});

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
| `request`                                                                                                                                                                      | [operations.PostcardsListRequest](../../models/operations/postcardslistrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PostcardList](../../models/components/postcardlist.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Retrieve a postcard by ID.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.postcards.get({
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
import { postcardsGet } from "postgrid-node/funcs/postcardsGet.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await postcardsGet(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.PostcardsGetRequest](../../models/operations/postcardsgetrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Postcard](../../models/components/postcard.md)\>**

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

Cancel a postcard by ID. Note that this operation cannot be undone.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.postcards.delete({
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
import { postcardsDelete } from "postgrid-node/funcs/postcardsDelete.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await postcardsDelete(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.PostcardsDeleteRequest](../../models/operations/postcardsdeleterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Postcard](../../models/components/postcard.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getUrl

Retrieve a postcard preview URL.

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
  const result = await postGrid.postcards.getUrl({
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
import { postcardsGetUrl } from "postgrid-node/funcs/postcardsGetUrl.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await postcardsGetUrl(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.PostcardsGetURLRequest](../../models/operations/postcardsgeturlrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostcardsGetURLResponseBody](../../models/operations/postcardsgeturlresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.PermissionMissingError | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |