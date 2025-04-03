# UnprocessableError

This gets returned when the action you are trying to do is not possible. This could be due to any number of reasons hence why the `type` is just a string.

## Example Usage

```typescript
import { UnprocessableError } from "postgrid-node/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [errors.UnprocessableErrorObject](../../models/errors/unprocessableerrorobject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `error`                                                                            | [errors.UnprocessableErrorError](../../models/errors/unprocessableerrorerror.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |