# PermissionMissingErrorError

## Example Usage

```typescript
import { PermissionMissingErrorError } from "postgrid-node/models/errors";

let value: PermissionMissingErrorError = {
  type: "permission_missing_error",
  message: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [errors.PermissionMissingErrorType](../../models/errors/permissionmissingerrortype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |