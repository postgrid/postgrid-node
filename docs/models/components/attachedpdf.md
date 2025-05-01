# AttachedPDF

Model representing an attached PDF.

## Example Usage

```typescript
import { AttachedPDF } from "postgrid-node/models/components";

let value: AttachedPDF = {
  file: "https://strict-cellar.com/",
  placement: "after_template",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `file`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The file (multipart form upload) or URL pointing to a PDF for the attached PDF.    |
| `placement`                                                                        | [components.AttachedPDFPlacement](../../models/components/attachedpdfplacement.md) | :heavy_check_mark:                                                                 | The placement of the attached PDF.                                                 |