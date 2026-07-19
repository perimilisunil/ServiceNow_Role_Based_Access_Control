# Update Set

This repository corresponds to a ServiceNow Update Set named **Project Collaboration Management**.

## Included Artifacts

- Custom tables: `Project`, `Project Task`
- Custom roles: `role_manager`, `role_member`
- Groups: Project Managers, Team Members
- Table-level ACLs: Create, Read, Write, Delete (on Project Task)
- Field-level ACLs: Status, Priority, Due Date, Work Notes, Assigned To
- Business Rules: Lock Project Field, Task Assignment Validation, Project Manager Restrictions, Task Completion Rule
- Notification: Task Assigned Notification (HTML email template)
- Flow Designer flow: Notify on Task Assignment
