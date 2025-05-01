# ChequesGetURLResponseBody

the Cheque Preview URL.

## Example Usage

```typescript
import { ChequesGetURLResponseBody } from "postgrid-node/models/operations";

let value: ChequesGetURLResponseBody = {
  id: "<id>",
  object: "<value>",
  url: "https://pertinent-knuckle.net/",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A unique ID prefixed with cheque_                                                                                   |
| `object`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A signed URL linking to the order preview PDF. The link remains valid for 15 minutes from the time of the API call. |