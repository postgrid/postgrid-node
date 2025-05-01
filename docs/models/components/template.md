# Template

## Example Usage

```typescript
import { Template } from "postgrid-node/models/components";

let value: Template = {
  id: "<id>",
  live: false,
  createdAt: new Date("2024-02-24T06:57:40.612Z"),
  updatedAt: new Date("2023-07-18T18:39:42.485Z"),
  object: "template",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique ID prefixed with template_                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | An optional string describing this resource. Will be visible in the API and the dashboard.    |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | See the section on Metadata.                                                                  |
| `live`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | `true` if this is a live mode resource else `false`.                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The UTC time at which this resource was created.                                              |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The UTC time at which this resource was last updated.                                         |
| `object`                                                                                      | [components.TemplateObject](../../models/components/templateobject.md)                        | :heavy_check_mark:                                                                            | Always `template`.                                                                            |
| `html`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The HTML content of this template.                                                            |