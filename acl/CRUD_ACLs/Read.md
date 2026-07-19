# Read ACL — Project Task

- **Table:** Project Task
- **Operation:** Read
- **Allowed Roles:** Project Manager, Team Member

## Logic

PM can read all tasks. TM can only read tasks where `assigned_to == current user`.

## Script

```js
if (gs.hasRole('role_manager')) {
    answer = true;
} else if (gs.hasRole('role_member')) {
    answer = (current.assigned_to == gs.getUserID());
} else {
    answer = false;
}
```
