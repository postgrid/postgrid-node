# TemplatesUpdateRequest

## Example Usage

```typescript
import { TemplatesUpdateRequest } from "postgrid-node/models/operations";

let value: TemplatesUpdateRequest = {
  id: "<id>",
  templateUpdate: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The ID of the template you want to update.                             |
| `templateUpdate`                                                       | [components.TemplateUpdate](../../models/components/templateupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |