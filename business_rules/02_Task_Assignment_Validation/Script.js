(function executeRule(current, previous /*null when async*/) {

    var isNew = current.isNewRecord();
    var assignmentChanged = isNew ? !current.assigned_to.nil() : current.assigned_to.changes();

    if (assignmentChanged && !gs.hasRole('role_manager')) {
        current.setAbortAction(true);
        gs.addErrorMessage('Only a Project Manager can assign or reassign tasks.');
    }

})(current, previous);
