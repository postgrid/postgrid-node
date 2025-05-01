# ContactsDeleteResponseBody

The request has succeeded.

## Example Usage

```typescript
import { ContactsDeleteResponseBody } from "postgrid-node/models/operations";

let value: ContactsDeleteResponseBody = {
  object: "contact",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [operations.ContactsDeleteObject](../../models/operations/contactsdeleteobject.md) | :heavy_check_mark:                                                                 | Always `contact`.                                                                  |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | A unique ID prefixed with contact_                                                 |
| `deleted`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |