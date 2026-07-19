# Architecture

## Components

1. **Data Layer**
   - `Project` table (parent)
   - `Project Task` table (child, references Project)

2. **Security Layer**
   - Roles: `role_manager` (Project Manager), `role_member` (Team Member)
   - Groups: Project Managers, Team Members
   - ACLs: table-level (Create/Read/Write/Delete) and field-level (Status, Priority, Due Date, Work Notes, Assigned To)

3. **Logic Layer (Business Rules)**
   - Lock Project Field
   - Task Assignment Validation
   - Project Manager Restrictions
   - Task Completion Rule

4. **Automation Layer**
   - Flow Designer flow: "Notify on Task Assignment"
   - Email Notification: "Task Assigned Notification"

## High-Level Flow

```
User (PM/TM) -> UI/List View -> ACL Check -> Business Rule Execution -> Data Update
                                                     |
                                                     v
                                        Flow Designer Trigger -> Email Notification
```

## Design Principles

- **Least privilege:** Team Members only see and touch what belongs to them.
- **Defense in depth:** ACLs handle broad access; Business Rules handle nuanced governance (e.g., field locking on update, not just on create).
- **Separation of duties:** Only PMs can create, delete, assign, or reassign tasks.
