# PostcardList

## Example Usage

```typescript
import { PostcardList } from "postgrid-node/models/components";

let value: PostcardList = {
  object: "list",
  totalCount: 843682,
  skip: 511522,
  limit: 870910,
  data: [
    {
      status: "processed_for_delivery",
      id: "<id>",
      live: false,
      createdAt: new Date("2023-03-15T02:08:57.335Z"),
      updatedAt: new Date("2024-03-04T04:36:26.485Z"),
      sendDate: new Date("2024-03-31T18:18:37.374Z"),
      mailingClass: "registered",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-06-06T19:59:58.238Z"),
        updatedAt: new Date("2023-08-23T02:15:08.642Z"),
        object: "contact",
        addressLine1: "379 Kohler Underpass",
        countryCode: "NP",
        addressStatus: "failed",
      },
      object: "postcard",
      size: "11x6",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [components.PostcardListObject](../../models/components/postcardlistobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `skip`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.Postcard](../../models/components/postcard.md)[]                   | :heavy_check_mark:                                                             | N/A                                                                            |