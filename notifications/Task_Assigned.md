# Notification: Task Assigned

- **Email Name:** Task Assigned Notification
- **Trigger:** After Insert or Update on Project Task (with condition that `assigned_to` is set/changed)
- **Recipients:** `${assigned_to}` (the assigned user), CC to Project Manager
- **Subject:** `Task ${number} Assigned to You`

See `Email_Templates.md` for the HTML body used by this notification.
