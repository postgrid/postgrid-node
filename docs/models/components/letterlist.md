# LetterList

## Example Usage

```typescript
import { LetterList } from "postgrid-node/models/components";

let value: LetterList = {
  object: "list",
  totalCount: 97243,
  skip: 442036,
  limit: 519952,
  data: [
    {
      status: "completed",
      id: "<id>",
      live: false,
      createdAt: new Date("2023-04-10T14:39:29.863Z"),
      updatedAt: new Date("2023-09-07T14:59:09.342Z"),
      sendDate: new Date("2024-03-25T16:34:20.298Z"),
      mailingClass: "usps_express_3_day_certified_return_receipt",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2025-08-30T02:36:59.001Z"),
        updatedAt: new Date("2024-11-09T05:36:12.706Z"),
        object: "contact",
        addressLine1: "98595 The Ridings",
        countryCode: "VU",
        addressStatus: "failed",
      },
      object: "letter",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-02-09T11:50:00.721Z"),
        updatedAt: new Date("2023-07-11T13:12:10.070Z"),
        object: "contact",
        addressLine1: "9318 Upton Crossing",
        countryCode: "NI",
        addressStatus: "corrected",
      },
      doubleSided: false,
      color: false,
      size: "us_letter",
      addressPlacement: "insert_blank_page",
      envelope: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [components.LetterListObject](../../models/components/letterlistobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `skip`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [components.Letter](../../models/components/letter.md)[]                   | :heavy_check_mark:                                                         | N/A                                                                        |