# PostcardCreateWithTemplate

## Example Usage

```typescript
import { PostcardCreateWithTemplate } from "postgrid-node/models/components";

let value: PostcardCreateWithTemplate = {
  frontTemplate: "<value>",
  backTemplate: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `frontTemplate`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The template ID for the front of the postcard. You can supply _either_ this or `frontHTML` but not both. |
| `backTemplate`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The template ID for the back of the postcard. You can supply _either_ this or `backHTML` but not both.   |