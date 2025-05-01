# PostcardsGetURLResponseBody

the Postcard Preview URL.

## Example Usage

```typescript
import { PostcardsGetURLResponseBody } from "postgrid-node/models/operations";

let value: PostcardsGetURLResponseBody = {
  id: "<id>",
  object: "<value>",
  url: "https://private-forage.net/",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A unique ID prefixed with postcard_                                                                                 |
| `object`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A signed URL linking to the order preview PDF. The link remains valid for 15 minutes from the time of the API call. |