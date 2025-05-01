# SelfMailerCreate


## Supported Types

### `components.SelfMailerCreateWithHTML`

```typescript
const value: components.SelfMailerCreateWithHTML = {
  to: {
    addressLine1: "9687 Lawrence Street",
    countryCode: "CG",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Hegmann, Kub and Pfannerstill",
  },
  size: "8.5x11_trifold",
  from: "<value>",
  insideHTML: "<value>",
  outsideHTML: "<value>",
};
```

### `components.SelfMailerCreateWithTemplate`

```typescript
const value: components.SelfMailerCreateWithTemplate = {
  insideTemplate: "<value>",
  outsideTemplate: "<value>",
};
```

### `components.SelfMailerCreateWithPDFURL`

```typescript
const value: components.SelfMailerCreateWithPDFURL = {
  to: "<value>",
  size: "8.5x11_bifold",
  from: "<value>",
  pdf: "https://fine-eyeliner.net/",
};
```

### `components.SelfMailerCreateWithPDFFile`

```typescript
const value: components.SelfMailerCreateWithPDFFile = {
  to: {
    addressLine1: "89182 Spencer Creek",
    countryCode: "KG",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Wunsch, Larkin and Hirthe",
  },
  size: "8.5x11_trifold",
  from: {
    addressLine1: "994 Mulberry Street",
    countryCode: "MC",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "McClure, Thiel and Runolfsson",
  },
  pdf: "<value>",
};
```

