# ACL Testing

Describes how ACLs were verified:

- Attempted operations as a user without the right role (e.g., a TM, or a user with no role at all).
- Verified that UI buttons (New, Delete) are hidden or disabled for unauthorized roles.
- Confirmed server-side ACLs block direct record edits, not just UI controls (tested via Scripts - Background and REST API calls).
- Checked Field ACLs by attempting to change protected fields (Status, Priority, Assigned To, Planned End Date) as a Team Member via both the form UI and scripted update — all correctly blocked.
