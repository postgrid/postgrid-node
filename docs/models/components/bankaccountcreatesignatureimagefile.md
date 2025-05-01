# BankAccountCreateSignatureImageFile

## Example Usage

```typescript
import { BankAccountCreateSignatureImageFile } from "postgrid-node/models/components";

let value: BankAccountCreateSignatureImageFile = {
  bankName: "<value>",
  bankCountryCode: "CA",
  accountNumber: "<value>",
  signatureImage: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `bankName`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The name of the bank.                                                                      |
| `bankPrimaryLine`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | The primary address line of the bank.                                                      |
| `bankSecondaryLine`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | The secondary address line of the bank.                                                    |
| `bankCountryCode`                                                                          | [components.BankAccountCountryCode](../../models/components/bankaccountcountrycode.md)     | :heavy_check_mark:                                                                         | The country code of the bank.                                                              |
| `accountNumber`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | The account number of the bank account.                                                    |
| `routingNumber`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | The routing number of the bank account (for US).                                           |
| `transitNumber`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | The transit number of the bank account (for CA).                                           |
| `routeNumber`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The route number of the bank account (for CA).                                             |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | An optional string describing this resource. Will be visible in the API and the dashboard. |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | See the section on Metadata.                                                               |
| `signatureImage`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | A PNG or JPEG file which PostGrid will apply to checks created with this bank account.     |