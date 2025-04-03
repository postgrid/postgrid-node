# PostcardCreate


## Supported Types

### `components.PostcardCreateWithHTML`

```typescript
const value: components.PostcardCreateWithHTML = {
  to: {
    addressLine1: "3253 Hauck Walks",
    countryCode: "BV",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Heathcote - McLaughlin",
  },
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
    addressLine1: "7689 St George's Road",
    countryCode: "PE",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Corkery Group",
  },
  size: "6x4",
  pdf: "https://misguided-saloon.org/",
};
```

### `components.PostcardCreateWithPDFFile`

```typescript
const value: components.PostcardCreateWithPDFFile = {
  to: {
    addressLine1: "7899 Hoeger Creek",
    countryCode: "NZ",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Madisyn",
  },
  size: "11x6",
  pdf: "<value>",
};
```

