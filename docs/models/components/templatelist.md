# TemplateList

## Example Usage

```typescript
import { TemplateList } from "postgrid-node/models/components";

let value: TemplateList = {
  object: "list",
  totalCount: 13508,
  skip: 483753,
  limit: 256114,
  data: [
    {
      id: "<id>",
      live: false,
      createdAt: new Date("2025-06-21T19:04:10.722Z"),
      updatedAt: new Date("2023-09-13T02:51:08.528Z"),
      object: "template",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [components.TemplateListObject](../../models/components/templatelistobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalCount`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `skip`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.Template](../../models/components/template.md)[]                   | :heavy_check_mark:                                                             | N/A                                                                            |