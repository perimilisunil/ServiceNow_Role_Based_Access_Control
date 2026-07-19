# Business Rule: Task Assignment Validation

- **When:** Before Insert / Before Update
- **Table:** Project Task
- **Purpose:** Ensures only a Project Manager can assign or reassign tasks.

If a Team Member tries to set or change the `assigned_to` field, the rule blocks the action.
