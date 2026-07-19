# Email Templates

## Task Assigned Notification (HTML Body)

```html
<h2>New Task Assigned</h2>
<p>Hello <b>${Assigned_to.name}</b>,</p>
<p>A new task has been assigned to you.</p>
<hr>
<table border="1" cellpadding="8" cellspacing="0">
<tr><td><b>Project</b></td><td>${project}</td></tr>
<tr><td><b>Task</b></td><td>${short_description}</td></tr>
<tr><td><b>Description</b></td><td>${description}</td></tr>
<tr><td><b>Assigned By</b></td><td>${sys_updated_by}</td></tr>
<tr><td><b>Status</b></td><td>${state}</td></tr>
</table>
<br>
Please log in to the Project Collaboration Management application and update your task progress.
<br><br>
Thanks,<br>
<b>Project Collaboration Management</b>
```

This template is placed in an Email Template record (or embedded directly in the notification/flow email step) and referenced by the "Task Assigned Notification".
