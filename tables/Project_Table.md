# Project Table

**Table name:** `u_project` (custom table)

## Fields

| Field | Type | Description |
|-------|------|--------------|
| Number | String (auto) | Auto-generated project ID (e.g. PRJ0001) |
| Name | String | Project name |
| Description | String (multi-line) | Project description |
| Created by | Reference (sys_user) | User who created the project (auto) |
| Created on | Date/Time | Auto timestamp |
| Project Manager | Reference (sys_user) | Owning PM for this project |

## Use

Parent entity used to group related Project Tasks.

## Access

Only the Project Manager (role `role_manager`) can create new Project records, enforced via the Create ACL on this table.
