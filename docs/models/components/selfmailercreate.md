# SelfMailerCreate


## Supported Types

### `components.SelfMailerCreateWithHTML`

```typescript
const value: components.SelfMailerCreateWithHTML = {
  to: {
    addressLine1: "540 Bergnaum Estates",
    countryCode: "US",
    skipVerification: false,
    forceVerifiedStatus: false,
    firstName: "Cruz",
  },
  size: "9.5x16_trifold",
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
  to: {
    addressLine1: "76849 Elda Rapids",
    countryCode: "IN",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Breitenberg - Schumm",
  },
  size: "8.5x11_trifold",
  from: "<value>",
  pdf: "https://incomparable-gazebo.name",
};
```

### `components.SelfMailerCreateWithPDFFile`

```typescript
const value: components.SelfMailerCreateWithPDFFile = {
  to: "<value>",
  size: "9.5x16_trifold",
  from: {
    addressLine1: "714 Florine View",
    countryCode: "UA",
    skipVerification: false,
    forceVerifiedStatus: false,
    companyName: "Hayes - Miller",
  },
  pdf: "<value>",
};
```

