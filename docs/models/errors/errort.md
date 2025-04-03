# ErrorT

## Example Usage

```typescript
import { ErrorT } from "postgrid-node/models/errors";

let value: ErrorT = {
  type: "validation_error",
  message: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `type`                                     | [errors.Type](../../models/errors/type.md) | :heavy_check_mark:                         | N/A                                        |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |