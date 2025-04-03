# PlasticCard

Model representing a plastic card.

## Example Usage

```typescript
import { PlasticCard } from "postgrid-node/models/components";

let value: PlasticCard = {
  size: "standard",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `size`                                                                                 | [components.PlasticCardSize](../../models/components/plasticcardsize.md)               | :heavy_check_mark:                                                                     | The size of the plastic card.                                                          |
| `singleSided`                                                                          | [components.PlasticCardSingleSided](../../models/components/plasticcardsinglesided.md) | :heavy_minus_sign:                                                                     | The single-sided plastic card details.                                                 |
| `doubleSided`                                                                          | [components.PlasticCardDoubleSided](../../models/components/plasticcarddoublesided.md) | :heavy_minus_sign:                                                                     | The double-sided plastic card details.                                                 |