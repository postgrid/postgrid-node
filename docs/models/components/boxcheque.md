# BoxCheque

Model representing a single cheque in "read" mode.
- The "from" and "to" should be fully expanded Contact objects once created.

## Example Usage

```typescript
import { BoxCheque } from "postgrid-node/models/components";

let value: BoxCheque = {
  bankAccount: "<value>",
  amount: 470171,
  number: 952104,
  from: {
    id: "<id>",
    live: false,
    createdAt: new Date("2023-11-10T00:32:32.019Z"),
    updatedAt: new Date("2023-01-26T03:22:45.547Z"),
    object: "contact",
    addressLine1: "8822 E Washington Street",
    countryCode: "AL",
    addressStatus: "failed",
  },
  to: {
    id: "<id>",
    live: false,
    createdAt: new Date("2023-06-08T10:17:16.868Z"),
    updatedAt: new Date("2023-09-25T23:09:32.695Z"),
    object: "contact",
    addressLine1: "42603 Raven Forest",
    countryCode: "EE",
    addressStatus: "failed",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `bankAccount`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The bank account (ID or reference) from which the cheque amount is drawn.                         |
| `amount`                                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | The amount on the cheque.                                                                         |
| `memo`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The memo text on the cheque (optional).                                                           |
| `logoURL`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | A URL to a logo for the cheque (optional).                                                        |
| `messageTemplate`                                                                                 | *string*                                                                                          | :heavy_minus_sign:                                                                                | An optional message template to be printed on or with the cheque.                                 |
| `number`                                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | The cheque number.                                                                                |
| `mergeVariables`                                                                                  | Record<string, *any*>                                                                             | :heavy_minus_sign:                                                                                | A set of dynamic merge variables for customizing the cheque or accompanying documents (optional). |
| `from`                                                                                            | [components.Contact](../../models/components/contact.md)                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `to`                                                                                              | [components.Contact](../../models/components/contact.md)                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |