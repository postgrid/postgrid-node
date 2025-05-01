# PostcardCreateWithHTMLFrom

The contact information of the sender. You can pass contact information inline here just like you can for the `to`. Unlike other order types, the sender address is optional for postcards.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "476 Greenholt Gateway",
  countryCode: "VI",
  skipVerification: false,
  forceVerifiedStatus: false,
  firstName: "Jayden",
};
```

### `string`

```typescript
const value: string = "<value>";
```

