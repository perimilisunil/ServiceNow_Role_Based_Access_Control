# Business Rule Testing

1. **Lock Project Field:** As a Team Member, attempted to change the `Project` of an existing task. Received the expected error message and the update was aborted.
2. **Assignment Validation:** As a Team Member, attempted to assign/reassign a task. Prevented, with an error message shown.
3. **PM Restrictions:** Tested closing a task without Work Notes filled in — correctly blocked with a validation message.
4. **Completion Rule:** Marked a task as Completed. Verified the completion date field (`u_completed_on`) was stamped and the comment "Completed by [user]" was added.
