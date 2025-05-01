# BankAccountList

## Example Usage

```typescript
import { BankAccountList } from "postgrid-node/models/components";

let value: BankAccountList = {
  object: "list",
  totalCount: 887856,
  skip: 496323,
  limit: 472785,
  data: [
    {
      object: "bank_account",
      bankName: "<value>",
      bankCountryCode: "US",
      accountNumber: "<value>",
      id: "<id>",
      live: false,
      createdAt: new Date("2024-04-17T16:45:28.479Z"),
      updatedAt: new Date("2023-03-25T08:48:54.278Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `object`                                                                             | [components.BankAccountListObject](../../models/components/bankaccountlistobject.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `totalCount`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `skip`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `limit`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.BankAccount](../../models/components/bankaccount.md)[]                   | :heavy_check_mark:                                                                   | N/A                                                                                  |