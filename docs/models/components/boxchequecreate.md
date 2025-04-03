# BoxChequeCreate

Model representing a single cheque in "create" mode.
- The "from" and "to" can be ContactCreate objects (inline) or string contactIDs.

## Example Usage

```typescript
import { BoxChequeCreate } from "postgrid-node/models/components";

let value: BoxChequeCreate = {
  bankAccount: "<value>",
  amount: 729991,
  number: 171629,
  from: "<value>",
  to: {
    addressLine1: "82397 Casimer Passage",
    countryCode: "MK",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "David",
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
| `from`                                                                                            | *components.BoxChequeCreateFrom*                                                                  | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `to`                                                                                              | *components.BoxChequeCreateTo*                                                                    | :heavy_check_mark:                                                                                | N/A                                                                                               |