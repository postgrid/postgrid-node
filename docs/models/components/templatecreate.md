# TemplateCreate

## Example Usage

```typescript
import { TemplateCreate } from "postgrid-node/models/components";

let value: TemplateCreate = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `html`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The HTML content of this template.                                                         |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | An optional string describing this resource. Will be visible in the API and the dashboard. |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | See the section on Metadata.                                                               |