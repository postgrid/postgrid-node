# LetterCreateWithHTMLTo

The recipient of this order. You can either supply the contact information inline here or provide a contact ID. PostGrid will automatically deduplicate contacts regardless of whether you provide the information inline here or call the contact creation endpoint.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "24163 Willow Close",
  countryCode: "MA",
  skipVerification: false,
  forceVerifiedStatus: false,
  firstName: "Dorothy",
};
```

### `string`

```typescript
const value: string = "<value>";
```

