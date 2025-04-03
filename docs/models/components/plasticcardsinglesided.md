# PlasticCardSingleSided

Model representing a single-sided plastic card.

## Example Usage

```typescript
import { PlasticCardSingleSided } from "postgrid-node/models/components";

let value: PlasticCardSingleSided = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `html`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The HTML content for the single-sided plastic card. Can specify one of this, `template`, or `pdf`. |
| `template`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The template ID for the single-sided plastic card.                                                 |
| `pdf`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A URL pointing to a PDF file for the single-sided plastic card or the PDF file itself.             |