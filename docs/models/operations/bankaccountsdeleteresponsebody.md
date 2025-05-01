# BankAccountsDeleteResponseBody

The request has succeeded.

## Example Usage

```typescript
import { BankAccountsDeleteResponseBody } from "postgrid-node/models/operations";

let value: BankAccountsDeleteResponseBody = {
  object: "bank_account",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | Always `bank_account`.                                   |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | A unique ID prefixed with bank_account_                  |
| `deleted`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |