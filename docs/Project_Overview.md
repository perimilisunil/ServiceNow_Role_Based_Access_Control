# Project Overview

## Purpose

The Project Collaboration Management application demonstrates how ServiceNow's platform capabilities — custom tables, RBAC (roles/groups), Access Control Lists (ACLs), Business Rules, and Flow Designer — can be combined to build a secure, real-world task management system.

## Objectives

- Implement a two-role system: **Project Manager (PM)** and **Team Member (TM)**.
- Ensure PMs have full control over projects and tasks, while TMs have restricted, self-scoped access.
- Enforce security both at the table level (who can Create/Read/Update/Delete) and field level (which fields each role can view/edit).
- Automate task-assignment notifications via Flow Designer and email templates.
- Provide a documented, testable, and deployable Update Set.

## Scope

- Two custom tables: `Project` and `Project Task`.
- Two custom roles and two groups.
- Four table-level ACLs (Create/Read/Write/Delete) and five field-level ACLs.
- Four Business Rules enforcing governance beyond what ACLs alone can do.
- One notification (Task Assigned) delivered through a Flow Designer flow.
