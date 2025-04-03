# TemplatesDeleteResponseBody

The request has succeeded.

## Example Usage

```typescript
import { TemplatesDeleteResponseBody } from "postgrid-node/models/operations";

let value: TemplatesDeleteResponseBody = {
  object: "template",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `object`                                                                             | [operations.TemplatesDeleteObject](../../models/operations/templatesdeleteobject.md) | :heavy_check_mark:                                                                   | Always `template`.                                                                   |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | A unique ID prefixed with template_                                                  |
| `deleted`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |