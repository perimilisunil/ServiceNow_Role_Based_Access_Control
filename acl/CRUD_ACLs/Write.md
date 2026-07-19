# Write (Update) ACL — Project Task

- **Table:** Project Task
- **Operation:** Write
- **Allowed Roles:** Project Manager, Team Member (with restrictions)

## Logic

PM can update any field on any task. TM can only update tasks assigned to them, and even then, some fields are locked by field-level ACLs.

## Script

```js
if (gs.hasRole('role_manager')) {
    answer = true;
} else {
    answer = (current.assigned_to == gs.getUserID());
}
```

Additional Field ACLs (see `/acl/Field_ACLs/`) further restrict specific fields for Team Members.
