# RateLimitExceededErrorError

## Example Usage

```typescript
import { RateLimitExceededErrorError } from "postgrid-node/models/errors";

let value: RateLimitExceededErrorError = {
  type: "rate_limit_exceeded_error",
  message: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [errors.RateLimitExceededErrorType](../../models/errors/ratelimitexceedederrortype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |