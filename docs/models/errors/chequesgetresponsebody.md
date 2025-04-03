# ChequesGetResponseBody

the Cheque.


## Supported Types

### `errors.UnauthorizedError`

```typescript
const value: errors.UnauthorizedError = {
  object: "error",
  error: {
    type: "missing_auth_error",
    message: "<value>",
  },
};
```

### `errors.PermissionMissingError`

```typescript
const value: errors.PermissionMissingError = {
  object: "error",
  error: {
    type: "permission_missing_error",
    message: "<value>",
  },
};
```

