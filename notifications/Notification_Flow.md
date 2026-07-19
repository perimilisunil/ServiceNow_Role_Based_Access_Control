# Notification Flow

Documents when and how notifications are sent for this application.

1. **Task Assigned Notification** — fires whenever a task is created or updated with an `assigned_to` value set (see `flows/Flow_Designer.md`).
2. **Task Completed Notification** (optional) — fires when a task's state transitions to Completed, notifying the PM.

Both notifications are triggered via a Flow Designer flow rather than a legacy Notification record, to keep logic centralized and easy to extend.
