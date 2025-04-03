# LetterCreateWithTemplate

## Example Usage

```typescript
import { LetterCreateWithTemplate } from "postgrid-node/models/components";

let value: LetterCreateWithTemplate = {
  template: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `template`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The template ID for the letter. You can supply _either_ this or `html` but not both. |