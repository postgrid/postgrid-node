# ContactsListResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ContactsListResponseBody } from "postgrid-node/models/operations";

let value: ContactsListResponseBody = {
  object: "list",
  totalCount: 704948,
  skip: 418637,
  limit: 5310,
  data: [
    {
      id: "<id>",
      live: false,
      createdAt: new Date("2023-01-13T10:41:07.081Z"),
      updatedAt: new Date("2024-07-14T07:10:40.441Z"),
      object: "contact",
      addressLine1: "19810 Edward Street",
      countryCode: "CM",
      addressStatus: "failed",
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