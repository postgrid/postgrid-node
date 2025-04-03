# NotFoundErrorError

## Example Usage

```typescript
import { NotFoundErrorError } from "postgrid-node/models/errors";

let value: NotFoundErrorError = {
  type: "not_found_error",
  message: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [errors.NotFoundErrorType](../../models/errors/notfounderrortype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `message`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |