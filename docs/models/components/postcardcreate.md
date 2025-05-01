# PostcardCreate


## Supported Types

### `components.PostcardCreateWithHTML`

```typescript
const value: components.PostcardCreateWithHTML = {
  to: "<value>",
  size: "9x6",
  frontHTML: "<value>",
  backHTML: "<value>",
};
```

### `components.PostcardCreateWithTemplate`

```typescript
const value: components.PostcardCreateWithTemplate = {
  frontTemplate: "<value>",
  backTemplate: "<value>",
};
```

### `components.PostcardCreateWithPDFURL`

```typescript
const value: components.PostcardCreateWithPDFURL = {
  to: {
    addressLine1: "29581 Abbigail Valleys",
    countryCode: "BH",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Marcellus",
  },
  size: "6x4",
  pdf: "https://mild-fuel.com",
};
```

### `components.PostcardCreateWithPDFFile`

```typescript
const value: components.PostcardCreateWithPDFFile = {
  to: "<value>",
  size: "6x4",
  pdf: "<value>",
};
```

