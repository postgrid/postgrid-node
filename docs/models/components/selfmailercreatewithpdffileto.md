# SelfMailerCreateWithPDFFileTo

The recipient of this order. You can either supply the contact information inline here or provide a contact ID. PostGrid will automatically deduplicate contacts regardless of whether you provide the information inline here or call the contact creation endpoint.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "61433 Renner Center",
  countryCode: "TJ",
  skipVerification: false,
  forceVerifiedStatus: false,
  companyName: "Dare, Weimann and Lakin",
};
```

### `string`

```typescript
const value: string = "<value>";
```

