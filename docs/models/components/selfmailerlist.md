# SelfMailerList

## Example Usage

```typescript
import { SelfMailerList } from "postgrid-node/models/components";

let value: SelfMailerList = {
  object: "list",
  totalCount: 588639,
  skip: 753240,
  limit: 235834,
  data: [
    {
      status: "completed",
      id: "<id>",
      live: false,
      createdAt: new Date("2024-12-02T00:37:24.524Z"),
      updatedAt: new Date("2025-11-05T14:24:14.692Z"),
      sendDate: new Date("2025-05-02T23:46:34.697Z"),
      mailingClass: "ups_express_3_day",
      to: {
        id: "<id>",
        live: false,
        createdAt: new Date("2024-06-21T12:00:18.977Z"),
        updatedAt: new Date("2023-07-23T03:24:33.235Z"),
        object: "contact",
        addressLine1: "240 Westgate",
        countryCode: "PM",
        addressStatus: "corrected",
      },
      object: "self_mailer",
      size: "8.5x11_bifold",
      from: {
        id: "<id>",
        live: false,
        createdAt: new Date("2023-10-18T18:32:19.135Z"),
        updatedAt: new Date("2023-05-20T12:20:31.360Z"),
        object: "contact",
        addressLine1: "2367 Hilton Plain",
        countryCode: "SZ",
        addressStatus: "corrected",
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