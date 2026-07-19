# Notification Testing

- After assignment (PM creates or updates a task with `assigned_to` set), verified the Team Member received the "Task Assigned Notification" email with correct info.
- Checked that placeholders (`${project}`, `${short_description}`, `${description}`, `${sys_updated_by}`, `${state}`, `${Assigned_to.name}`) were correctly populated in the email body.
- Verified the optional Task Completed notification is sent to the PM when a Team Member marks their task Completed.
