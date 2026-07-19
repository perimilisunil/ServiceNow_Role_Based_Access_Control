# Deployment Guide

Step-by-step instructions to deploy the Update Set:

1. Import the Update Set into a ServiceNow instance (via **System Update Sets > Retrieved Update Sets**).
2. Ingest and Preview, then commit the update set.
3. Verify that the new tables (`Project`, `Project Task`) and their fields are present.
4. Create the users (Sunil Kumar, Sasi, Kumar, Sasanka, Deepak) and ensure their groups/roles exist:
   - Sunil Kumar -> Project Managers group -> role_manager
   - Sasi, Kumar, Sasanka, Deepak -> Team Members group -> role_member
5. Check that all ACLs (table and field level) and Business Rules are active.
6. Confirm the **Task Assigned Notification** is active and using the provided HTML template.
7. Test basic flows: as Sunil (PM), create a task and assign it. Check that the assigned Team Member receives the email, and that access controls behave as expected (TM sees only their task, cannot edit restricted fields).
8. Optionally, import any screenshots or additional documentation into `docs/Screenshots/`.

Following these steps ensures the target instance has the Project Collaboration Management application set up correctly and matches the RBAC model documented in this repository.
