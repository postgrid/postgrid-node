# Contacts
(*contacts*)

## Overview

### Available Operations

* [create](#create) - Create Contact
* [list](#list) - List Contacts
* [get](#get) - Get Contact
* [delete](#delete) - Delete Contact

## create

Creates a contact. This will also verify the contact's address **if you create it using a live API key**. To sucessfully create a contact, either a `firstName`, a `companyName`, or both are required. You can supply both, but you **cannot** supply neither.

You have the option to supply the entire address (except for `countryCode`) via `addressLine1`, in which case PostGrid will parse it automatically. However, this is **not guaranteed to be correct**, so we recommend passing along the structured address fields (`city`, `provinceOrState`, etc) if you have them.

_Note that if you create a contact that has identical information to another contact, this will simply update the description of the existing contact and return it. This avoids creating duplicate contacts._

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.contacts.create({
    addressLine1: "90 Canal St Suite 600, Boston MA 90210",
    countryCode: "US",
    companyName: "PostGrid",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Kevin",
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
import { contactsCreate } from "postgrid-node/funcs/contactsCreate.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await contactsCreate(postGrid, {
    addressLine1: "90 Canal St Suite 600, Boston MA 90210",
    countryCode: "US",
    companyName: "PostGrid",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Kevin",
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
| `request`                                                                                                                                                                      | [components.ContactCreate](../../models/components/contactcreate.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Contact](../../models/components/contact.md)\>**

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

Get a list of contacts.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.contacts.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PostGridCore } from "postgrid-node/core.js";
import { contactsList } from "postgrid-node/funcs/contactsList.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await contactsList(postGrid, {});

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
| `request`                                                                                                                                                                      | [operations.ContactsListRequest](../../models/operations/contactslistrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ContactsListResponseBody](../../models/operations/contactslistresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Retrieve a contact.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.contacts.get({
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
import { contactsGet } from "postgrid-node/funcs/contactsGet.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await contactsGet(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.ContactsGetRequest](../../models/operations/contactsgetrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Contact](../../models/components/contact.md)\>**

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

Delete a contact. Note that this will not affect orders that were sent to this contact.

### Example Usage

```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.contacts.delete({
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
import { contactsDelete } from "postgrid-node/funcs/contactsDelete.js";

// Use `PostGridCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const postGrid = new PostGridCore({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await contactsDelete(postGrid, {
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
| `request`                                                                                                                                                                      | [operations.ContactsDeleteRequest](../../models/operations/contactsdeleterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ContactsDeleteResponseBody](../../models/operations/contactsdeleteresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedError      | 401                           | application/json              |
| errors.NotFoundError          | 404                           | application/json              |
| errors.UnprocessableError     | 422                           | application/json              |
| errors.RateLimitExceededError | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |