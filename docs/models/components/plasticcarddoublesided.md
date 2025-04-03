# PlasticCardDoubleSided

Model representing a double-sided plastic card.

## Example Usage

```typescript
import { PlasticCardDoubleSided } from "postgrid-node/models/components";

let value: PlasticCardDoubleSided = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `frontHTML`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | The HTML content for the front side of the double-sided plastic card.              |
| `backHTML`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | The HTML content for the back side of the double-sided plastic card.               |
| `frontTemplate`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The template ID for the front side of the double-sided plastic card.               |
| `backTemplate`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | The template ID for the back side of the double-sided plastic card.                |
| `pdf`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | A URL pointing to a PDF file for the double-sided plastic card or the file itself. |