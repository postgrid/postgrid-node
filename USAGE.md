<!-- Start SDK Example Usage [usage] -->
```typescript
import { PostGrid } from "postgrid-node";

const postGrid = new PostGrid({
  apiKeyAuth: process.env["POSTGRID_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await postGrid.bankAccounts.create({
    bankName: "Test Bank",
    bankPrimaryLine: "145 mulberry st",
    bankSecondaryLine: "new york ny 10013",
    bankCountryCode: "US",
    accountNumber: "1234567",
    routingNumber: "123456789",
    signatureText: "Example",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->