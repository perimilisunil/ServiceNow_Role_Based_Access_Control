(function executeRule(current, previous /*null when async*/) {

    // Only relevant on update, when Project field actually changed
    if (current.project.changes() && !gs.hasRole('role_manager')) {
        current.setAbortAction(true);
        gs.addErrorMessage('Only a Project Manager can change the Project on an existing task.');
    }

})(current, previous);
