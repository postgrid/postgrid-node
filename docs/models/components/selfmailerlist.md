# SelfMailerList

## Example Usage

```typescript
import { SelfMailerList } from "postgrid-node/models/components";

let value: SelfMailerList = {
  object: "list",
  totalCount: 934899,
  skip: 825993,
  limit: 875218,
  data: [
    {
      status: "completed",
      id: "<id>",
      live: false,
      createdAt: new Date("2025-12-22T19:48:26.507Z"),
      updatedAt: new Date("2025-01-17T13:24:24.026Z"),
      sendDate: new Date("2023-08-09T08:32:10.985Z"),
      mailingClass: "usps_standard_class",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-03-28T10:46:12.065Z"),
        updatedAt: new Date("2024-10-20T15:08:41.150Z"),
        object: "contact",
        addressLine1: "79812 Lincoln Street",
        countryCode: "TN",
        addressStatus: "verified",
      },
      object: "self_mailer",
      size: "8.5x11_trifold",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-03-06T00:57:42.091Z"),
        updatedAt: new Date("2024-05-09T18:19:26.605Z"),
        object: "contact",
        addressLine1: "898 Lori Junction",
        countryCode: "VC",
        addressStatus: "verified",
      },
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [components.SelfMailerListObject](../../models/components/selfmailerlistobject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `totalCount`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `skip`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `limit`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.SelfMailer](../../models/components/selfmailer.md)[]                   | :heavy_check_mark:                                                                 | N/A                                                                                |