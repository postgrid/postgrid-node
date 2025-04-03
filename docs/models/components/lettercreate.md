# LetterCreate


## Supported Types

### `components.LetterCreateWithHTML`

```typescript
const value: components.LetterCreateWithHTML = {
  to: {
    addressLine1: "902 Schultz Ways",
    countryCode: "VU",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Susan",
  },
  from: {
    addressLine1: "19260 W 8th Street",
    countryCode: "ES",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Hirthe LLC",
  },
  html: "<value>",
};
```

### `components.LetterCreateWithTemplate`

```typescript
const value: components.LetterCreateWithTemplate = {
  template: "<value>",
};
```

### `components.LetterCreateWithPDF`

```typescript
const value: components.LetterCreateWithPDF = {
  to: {
    addressLine1: "3825 Priory Road",
    countryCode: "TF",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Tristian",
  },
  from: "<value>",
  pdf: "https://wide-eyed-yarmulke.info",
};
```

