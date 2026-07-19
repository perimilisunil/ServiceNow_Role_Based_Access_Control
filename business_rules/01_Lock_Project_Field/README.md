# Business Rule: Lock Project Field

- **When:** Before Update
- **Table:** Project Task
- **Purpose:** Prevents a non-PM from changing the `Project` reference of a task after it's set.

If a Team Member tries to change the project of an existing task, the update is canceled with an error message. Only Project Managers can change the project reference if needed.
