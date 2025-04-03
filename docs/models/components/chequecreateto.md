# ChequeCreateTo

The recipient of this order. You can either supply the contact information inline here or provide a contact ID. PostGrid will automatically deduplicate contacts regardless of whether you provide the information inline here or call the contact creation endpoint.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "721 Elisha Ford",
  countryCode: "JP",
  skipVerification: false,
  forceVerifiedStatus: false,
  companyName: "Predovic, Graham and Hoeger",
};
```

### `string`

```typescript
const value: string = "<value>";
```

