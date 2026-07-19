# Project Task Table

**Table name:** `u_project_task`

## Fields

| Field | Type | Description |
|-------|------|--------------|
| Number | String (auto) | Auto-generated task ID (e.g. TASK0001) |
| Project | Reference (u_project) | Parent project |
| Short description | String | Brief task title |
| Description | String (multi-line) | Full task details |
| Assigned to | Reference (sys_user) | Team Member responsible for the task |
| State | Choice | New, In Progress, Completed, Closed |
| Priority | Choice | Low, Medium, High |
| Work notes | String (journal) | Ongoing updates/comments |
| Planned start date | Date/Time | Task start date |
| Planned end date | Date/Time | Task due date |

## Behavior

Tasks are created and managed by the Project Manager and worked on by the assigned Team Member. Field-level ACLs restrict which fields a Team Member can edit (see `acl/Field_ACLs/`).
