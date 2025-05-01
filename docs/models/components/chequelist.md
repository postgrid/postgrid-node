# ChequeList

## Example Usage

```typescript
import { ChequeList } from "postgrid-node/models/components";

let value: ChequeList = {
  object: "list",
  totalCount: 458604,
  skip: 724168,
  limit: 399025,
  data: [
    {
      status: "cancelled",
      id: "<id>",
      live: false,
      createdAt: new Date("2025-01-26T06:25:05.272Z"),
      updatedAt: new Date("2025-02-05T18:51:30.654Z"),
      sendDate: new Date("2023-12-26T04:21:26.793Z"),
      mailingClass: "ca_post_neighbourhood_mail",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-11-28T02:57:00.009Z"),
        updatedAt: new Date("2023-09-21T01:29:35.775Z"),
        object: "contact",
        addressLine1: "89458 Wilderman Neck",
        countryCode: "SN",
        addressStatus: "failed",
      },
      object: "cheque",
      bankAccount: "<value>",
      amount: 815524,
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-06-24T17:14:16.967Z"),
        updatedAt: new Date("2024-11-20T06:32:40.348Z"),
        object: "contact",
        addressLine1: "1428 Veronica Harbor",
        countryCode: "GR",
        addressStatus: "verified",
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