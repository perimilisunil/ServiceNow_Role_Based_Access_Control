# ACL Matrix

| Operation/Field | Project Manager | Team Member |
|------------------|------------------|-------------|
| **Create Task** | Allow | Deny |
| **Read Task** | Allow (all) | Allow (own) |
| **Update Task** | Allow (all) | Allow (own)¹ |
| **Delete Task** | Allow | Deny |
| **State (field)** | Write | Read only |
| **Priority (field)** | Write | Read only |
| **Planned End Date** | Write | Read only |
| **Work notes** | Write | Write |
| **Assigned to** | Write | Read only |
| **Manger Remarks** | Write | Read only |
| **Estimated Hours** | Write | Read only |

¹ Team Member only on tasks assigned to them, and even then some fields are locked.
