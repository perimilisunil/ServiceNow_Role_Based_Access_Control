# Flow Designer

## Flow: Notify on Task Assignment

- **Trigger:** Project Task table, Record Created or Updated
- **Condition:** `Assigned To` is set (and, on update, has changed)
- **Action:** Send email using the "Task Assigned Notification" template to the assigned user

This flow keeps notification logic outside of Business Rules, making it easier for non-developers to maintain via the Flow Designer UI.
