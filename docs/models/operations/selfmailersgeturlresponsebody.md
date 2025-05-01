# SelfMailersGetURLResponseBody

the Self-Mailer Preview URL.

## Example Usage

```typescript
import { SelfMailersGetURLResponseBody } from "postgrid-node/models/operations";

let value: SelfMailersGetURLResponseBody = {
  id: "<id>",
  object: "<value>",
  url: "https://total-ocelot.com",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A unique ID prefixed with self_mailer_                                                                              |
| `object`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A signed URL linking to the order preview PDF. The link remains valid for 15 minutes from the time of the API call. |