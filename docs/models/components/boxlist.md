# BoxList

A list of Boxes.

## Example Usage

```typescript
import { BoxList } from "postgrid-node/models/components";

let value: BoxList = {
  object: "list",
  totalCount: 169613,
  skip: 976799,
  limit: 149082,
  data: [
    {
      status: "cancelled",
      id: "<id>",
      live: false,
      createdAt: new Date("2024-05-11T13:22:12.575Z"),
      updatedAt: new Date("2023-03-03T03:43:09.181Z"),
      sendDate: new Date("2023-11-29T15:11:38.143Z"),
      mailingClass: "usps_eddm",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2025-07-17T19:54:11.717Z"),
        updatedAt: new Date("2023-11-05T00:58:23.627Z"),
        object: "contact",
        addressLine1: "9239 N State Street",
        countryCode: "CC",
        addressStatus: "verified",
      },
      object: "box",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2025-07-10T15:37:40.671Z"),
        updatedAt: new Date("2024-02-18T12:01:10.333Z"),
        object: "contact",
        addressLine1: "3501 Zane Crossing",
        countryCode: "MG",
        addressStatus: "failed",
      },
      cheques: [
        {
          bankAccount: "<value>",
          amount: 515088,
          number: 857163,
          from: {
            id: "<id>",
            live: false,
            createdAt: new Date("2023-01-05T19:44:31.753Z"),
            updatedAt: new Date("2023-07-22T19:40:30.866Z"),
            object: "contact",
            addressLine1: "267 Bartoletti Place",
            countryCode: "JP",
            addressStatus: "verified",
          },
          to: {
            id: "<id>",
            live: false,
            createdAt: new Date("2023-03-24T16:38:44.756Z"),
            updatedAt: new Date("2024-11-15T05:50:38.302Z"),
            object: "contact",
            addressLine1: "5443 Kirlin Circles",
            countryCode: "NF",
            addressStatus: "failed",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `object`                                                             | [components.BoxListObject](../../models/components/boxlistobject.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalCount`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `skip`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [components.Box](../../models/components/box.md)[]                   | :heavy_check_mark:                                                   | N/A                                                                  |