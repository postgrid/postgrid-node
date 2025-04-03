# PostcardCreateWithHTMLTo

The recipient of this order. You can either supply the contact information inline here or provide a contact ID. PostGrid will automatically deduplicate contacts regardless of whether you provide the information inline here or call the contact creation endpoint.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "6218 Janie Corners",
  countryCode: "JP",
  skipVerification: false,
  forceVerifiedStatus: false,
  firstName: "Wilhelm",
};
```

### `string`

```typescript
const value: string = "<value>";
```

