# Cancellation

## Example Usage

```typescript
import { Cancellation } from "postgrid-node/models/components";

let value: Cancellation = {
  reason: "invalid_content",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `reason`                                                       | [components.Reason](../../models/components/reason.md)         | :heavy_check_mark:                                             | The reason for the cancellation.                               |
| `cancelledByUser`                                              | *string*                                                       | :heavy_minus_sign:                                             | The user ID who cancelled the order.                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | An optional note provided by the user who cancelled the order. |