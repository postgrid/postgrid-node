# ContactsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ContactsListResponseBody } from "postgrid-node/models/operations";

let value: ContactsListResponseBody = {
  object: "list",
  totalCount: 345390,
  skip: 223686,
  limit: 84111,
  data: [
    {
      id: "<id>",
      live: false,
      createdAt: new Date("2023-04-26T10:39:10.327Z"),
      updatedAt: new Date("2023-06-18T18:34:27.627Z"),
      object: "contact",
      addressLine1: "73928 School Close",
      countryCode: "FI",
      addressStatus: "corrected",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [operations.ContactsListObject](../../models/operations/contactslistobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `skip`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.Contact](../../models/components/contact.md)[]                     | :heavy_check_mark:                                                             | N/A                                                                            |