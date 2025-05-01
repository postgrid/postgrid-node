# BankAccountList

## Example Usage

```typescript
import { BankAccountList } from "postgrid-node/models/components";

let value: BankAccountList = {
  object: "list",
  totalCount: 778157,
  skip: 870013,
  limit: 978619,
  data: [
    {
      object: "bank_account",
      bankName: "<value>",
      bankCountryCode: "US",
      accountNumber: "<value>",
      id: "<id>",
      live: false,
      createdAt: new Date("2024-05-20T18:45:11.321Z"),
      updatedAt: new Date("2025-05-05T11:02:22.031Z"),
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