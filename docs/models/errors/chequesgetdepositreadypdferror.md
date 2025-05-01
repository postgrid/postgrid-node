# ChequesGetDepositReadyPDFError

## Example Usage

```typescript
import { ChequesGetDepositReadyPDFError } from "postgrid-node/models/errors";

let value: ChequesGetDepositReadyPDFError = {
  type: "cheque_not_digital_only_error",
  message: "Cheque is not digital only",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [errors.ChequesGetDepositReadyPDFType](../../models/errors/chequesgetdepositreadypdftype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `message`                                                                                    | [errors.Message](../../models/errors/message.md)                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |