# TemplateList

## Example Usage

```typescript
import { TemplateList } from "postgrid-node/models/components";

let value: TemplateList = {
  object: "list",
  totalCount: 848818,
  skip: 51893,
  limit: 562424,
  data: [
    {
      id: "<id>",
      live: false,
      createdAt: new Date("2023-01-31T21:13:14.632Z"),
      updatedAt: new Date("2025-05-29T19:52:13.215Z"),
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