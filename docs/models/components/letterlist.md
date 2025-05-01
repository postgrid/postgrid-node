# LetterList

## Example Usage

```typescript
import { LetterList } from "postgrid-node/models/components";

let value: LetterList = {
  object: "list",
  totalCount: 770205,
  skip: 770145,
  limit: 252516,
  data: [
    {
      status: "printing",
      id: "<id>",
      live: false,
      createdAt: new Date("2025-06-16T11:46:44.491Z"),
      updatedAt: new Date("2025-09-12T15:07:15.058Z"),
      sendDate: new Date("2025-10-13T01:30:37.628Z"),
      mailingClass: "registered",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-05-23T17:27:00.675Z"),
        updatedAt: new Date("2024-09-14T19:14:56.685Z"),
        object: "contact",
        addressLine1: "3547 Goyette Orchard",
        countryCode: "VN",
        addressStatus: "corrected",
      },
      object: "letter",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2025-07-27T21:32:13.160Z"),
        updatedAt: new Date("2025-07-09T18:21:32.203Z"),
        object: "contact",
        addressLine1: "5577 Haley Row",
        countryCode: "GS",
        addressStatus: "verified",
      },
      doubleSided: false,
      color: false,
      size: "a4",
      addressPlacement: "top_first_page",
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