# Dictionary Fields

Key dictionary entries and field choices for the `Project Task` table:

- **`Project Task.State`** — Choice list: New, In Progress, Completed, Closed.
- **`Project Task.Priority`** — Choice list: Low, Medium, High.
- **`Project Task.Assigned_to`** — Reference to the `sys_user` (Users) table.
- **`Project Task.Work notes`** — Journal-type text area for ongoing updates.
- **`Project Task.Project`** — Reference to the `Project` table (parent).
- **`Project Task.Planned end date`** — Date/Time field representing the task due date.

Field-level ACLs (see `/acl/Field_ACLs/`) control read/write access to these fields based on role, layered on top of the table-level ACLs.
