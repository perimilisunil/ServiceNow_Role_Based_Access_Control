# Team Member Test Cases (Sasi, Kumar, Sasanka, Deepak)

| # | Test | Expected Result |
|---|------|------------------|
| 1 | View Assigned — open the task list | Only tasks where `assigned_to = self` are visible |
| 2 | View Unassigned — try to access a task not assigned to self | Access denied by ACL |
| 3 | Edit Task — update Work Notes on own task | Allowed |
| 4 | Edit Restricted — try to change "Assigned To" or "Project" | Blocked by field ACL / Business Rule |
| 5 | Create Task — attempt to create a task | Denied by Create ACL |
| 6 | Delete Task — attempt to delete any task | Denied |
