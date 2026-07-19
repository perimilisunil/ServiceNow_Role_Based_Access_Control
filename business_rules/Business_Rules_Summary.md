# Business Rules Summary

| # | Name | When | Purpose |
|---|------|------|---------|
| 1 | Lock Project Field | Before Update | Prevents non-PMs from changing a task's Project reference |
| 2 | Task Assignment Validation | Before Insert/Update | Ensures only PMs can assign or reassign tasks |
| 3 | Project Manager Restrictions | Before Update | Additional PM-specific governance checks (e.g., required fields before closing) |
| 4 | Task Completion Rule | After Update | Stamps completion date and logs a comment when state changes to Completed |

Together, these four Business Rules complement the table- and field-level ACLs, enforcing governance logic (like conditional field locking on update) that ACLs alone cannot express.
