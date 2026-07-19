# Delete ACL — Project Task

- **Table:** Project Task
- **Operation:** Delete
- **Allowed Role:** Project Manager only

## Script

```js
answer = gs.hasRole('role_manager');
```

This ensures Team Members cannot delete tasks under any circumstance.
