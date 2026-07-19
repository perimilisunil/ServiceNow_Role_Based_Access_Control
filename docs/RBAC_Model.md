# RBAC Model

## Roles

| Role | Internal Name | Description |
|------|---------------|-------------|
| Project Manager | role_manager | Full control over projects and tasks |
| Team Member | role_member | Restricted access to only assigned tasks |

## Groups

| Group | Role Granted | Members |
|-------|--------------|---------|
| Project Managers | role_manager | Sunil Kumar |
| Team Members | role_member | Sasi, Kumar, Sasanka, Deepak |

## Permission Matrix

| Action | Project Manager | Team Member |
|--------|------------------|-------------|
| Create Task | Yes | No |
| Read Task | Yes (all) | Yes (own only) |
| Update Task | Yes (all fields) | Yes (own tasks, limited fields) |
| Delete Task | Yes | No |
| Assign/Reassign Task | Yes | No |
| Change Status/Priority | Yes | No (read-only) |
| Add Work Notes | Yes | Yes |

## Design Rationale

Grouping users and mapping roles to groups (rather than assigning roles directly to individual users) keeps the model maintainable — onboarding a new Team Member is as simple as adding them to the Team Members group.
