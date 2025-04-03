# BoxCheque

Model representing a single cheque in "read" mode.
- The "from" and "to" should be fully expanded Contact objects once created.

## Example Usage

```typescript
import { BoxCheque } from "postgrid-node/models/components";

let value: BoxCheque = {
  bankAccount: "<value>",
  amount: 282807,
  number: 120196,
  from: {
    id: "<id>",
    live: false,
    createdAt: new Date("2023-11-21T13:40:18.320Z"),
    updatedAt: new Date("2023-05-11T03:00:50.109Z"),
    object: "contact",
    addressLine1: "40652 Botsford Neck",
    countryCode: "UM",
    addressStatus: "verified",
  },
  to: {
    id: "<id>",
    live: false,
    createdAt: new Date("2025-01-01T11:33:45.485Z"),
    updatedAt: new Date("2023-05-25T10:48:39.501Z"),
    object: "contact",
    addressLine1: "315 Rhoda Alley",
    countryCode: "NR",
    addressStatus: "verified",
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