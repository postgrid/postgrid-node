# RedirectTo

Providing this inserts a blank page at the start of the cheque with the recipient you provide here. This leaves the cheque that follows intact, which means you can use this to intercept at cheque at the redirected address and then mail it forward to the final recipient yourself. One use case for this is signing cheques at your office before mailing them out yourself.


## Supported Types

### `components.ContactCreate`

```typescript
const value: components.ContactCreate = {
  addressLine1: "2407 Josiah Freeway",
  countryCode: "MK",
  skipVerification: false,
  forceVerifiedStatus: false,
  firstName: "Vicenta",
};
```

### `string`

```typescript
const value: string = "<value>";
```

