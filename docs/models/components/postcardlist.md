# PostcardList

## Example Usage

```typescript
import { PostcardList } from "postgrid-node/models/components";

let value: PostcardList = {
  object: "list",
  totalCount: 945027,
  skip: 991891,
  limit: 376741,
  data: [
    {
      status: "cancelled",
      id: "<id>",
      live: false,
      createdAt: new Date("2025-05-17T21:36:00.719Z"),
      updatedAt: new Date("2025-01-10T13:19:38.423Z"),
      sendDate: new Date("2023-09-26T09:34:22.320Z"),
      mailingClass: "registered",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-07-01T23:43:19.114Z"),
        updatedAt: new Date("2025-10-08T08:11:23.552Z"),
        object: "contact",
        addressLine1: "54781 Spinka Square",
        countryCode: "BL",
        addressStatus: "verified",
      },
      object: "postcard",
      size: "6x4",
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