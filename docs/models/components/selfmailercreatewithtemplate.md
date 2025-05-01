# SelfMailerCreateWithTemplate

## Example Usage

```typescript
import { SelfMailerCreateWithTemplate } from "postgrid-node/models/components";

let value: SelfMailerCreateWithTemplate = {
  insideTemplate: "<value>",
  outsideTemplate: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `insideTemplate`                                                                                                | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The template ID for the inside of the self-mailer. You can supply _either_ this or `insideHTML` but not both.   |
| `outsideTemplate`                                                                                               | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The template ID for the outside of the self-mailer. You can supply _either_ this or `outsideHTML` but not both. |