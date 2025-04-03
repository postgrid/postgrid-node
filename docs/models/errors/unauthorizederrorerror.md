# UnauthorizedErrorError

## Example Usage

```typescript
import { UnauthorizedErrorError } from "postgrid-node/models/errors";

let value: UnauthorizedErrorError = {
  type: "missing_auth_error",
  message: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [errors.UnauthorizedErrorType](../../models/errors/unauthorizederrortype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |