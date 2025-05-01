# SelfMailerCreateWithPDFURLTo

The recipient of this order. You can either supply the contact information inline here or provide a contact ID. PostGrid will automatically deduplicate contacts regardless of whether you provide the information inline here or call the contact creation endpoint.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "41180 Broadway",
  countryCode: "TF",
  skipVerification: false,
  forceVerifiedStatus: false,
  companyName: "Hills Inc",
};
```

### `string`

```typescript
const value: string = "<value>";
```

