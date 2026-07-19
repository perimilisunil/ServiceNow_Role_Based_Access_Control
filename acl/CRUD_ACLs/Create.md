# Create ACL — Project Task

- **Table:** Project Task
- **Operation:** Create
- **Allowed Role:** Project Manager only

## Condition Script

```js
answer = gs.hasRole('role_manager');
```

Only PMs can create new tasks. Team Members attempting to create a task via UI or API will be denied.
