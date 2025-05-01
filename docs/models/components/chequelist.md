# ChequeList

## Example Usage

```typescript
import { ChequeList } from "postgrid-node/models/components";

let value: ChequeList = {
  object: "list",
  totalCount: 530550,
  skip: 302179,
  limit: 944813,
  data: [
    {
      status: "ready",
      id: "<id>",
      live: false,
      createdAt: new Date("2025-09-29T01:40:17.910Z"),
      updatedAt: new Date("2024-12-31T06:30:48.671Z"),
      sendDate: new Date("2023-01-30T22:33:55.579Z"),
      mailingClass: "registered",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-08-31T16:08:55.484Z"),
        updatedAt: new Date("2025-07-19T02:23:08.630Z"),
        object: "contact",
        addressLine1: "399 Dax Fields",
        countryCode: "SM",
        addressStatus: "verified",
      },
      object: "cheque",
      bankAccount: "<value>",
      amount: 704041,
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2025-02-23T13:50:22.709Z"),
        updatedAt: new Date("2024-09-18T19:38:03.478Z"),
        object: "contact",
        addressLine1: "5533 Watson Crest",
        countryCode: "AE",
        addressStatus: "failed",
      },
      size: "us_letter",
      currencyCode: "USD",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [components.ChequeListObject](../../models/components/chequelistobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `skip`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [components.Cheque](../../models/components/cheque.md)[]                   | :heavy_check_mark:                                                         | N/A                                                                        |