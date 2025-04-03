# BoxList

A list of Boxes.

## Example Usage

```typescript
import { BoxList } from "postgrid-node/models/components";

let value: BoxList = {
  object: "list",
  totalCount: 253941,
  skip: 213312,
  limit: 518201,
  data: [
    {
      status: "ready",
      id: "<id>",
      live: false,
      createdAt: new Date("2023-08-16T09:17:34.312Z"),
      updatedAt: new Date("2024-04-10T10:55:35.652Z"),
      sendDate: new Date("2024-02-15T02:10:01.786Z"),
      mailingClass: "usps_first_class_certified_return_receipt",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-11-01T06:44:43.765Z"),
        updatedAt: new Date("2024-10-05T02:46:31.617Z"),
        object: "contact",
        addressLine1: "251 Laburnum Grove",
        countryCode: "MF",
        addressStatus: "verified",
      },
      object: "box",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-06-08T18:04:31.662Z"),
        updatedAt: new Date("2024-06-18T21:49:56.662Z"),
        object: "contact",
        addressLine1: "9779 Katrine Orchard",
        countryCode: "VI",
        addressStatus: "verified",
      },
      cheques: [
        {
          bankAccount: "<value>",
          amount: 240829,
          number: 100294,
          from: {
            id: "<id>",
            live: false,
            createdAt: new Date("2023-01-19T00:09:53.916Z"),
            updatedAt: new Date("2025-10-15T18:20:20.936Z"),
            object: "contact",
            addressLine1: "825 Jeanette Wall",
            countryCode: "TJ",
            addressStatus: "corrected",
          },
          to: {
            id: "<id>",
            live: false,
            createdAt: new Date("2025-11-19T21:08:28.843Z"),
            updatedAt: new Date("2023-09-11T22:40:46.497Z"),
            object: "contact",
            addressLine1: "976 First Avenue",
            countryCode: "SY",
            addressStatus: "corrected",
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