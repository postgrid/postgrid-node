# LettersGetURLResponseBody

the Letter Preview URL.

## Example Usage

```typescript
import { LettersGetURLResponseBody } from "postgrid-node/models/operations";

let value: LettersGetURLResponseBody = {
  id: "<id>",
  object: "<value>",
  url: "https://favorable-waist.name/",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A unique ID prefixed with letter_                                                                                   |
| `object`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A signed URL linking to the order preview PDF. The link remains valid for 15 minutes from the time of the API call. |