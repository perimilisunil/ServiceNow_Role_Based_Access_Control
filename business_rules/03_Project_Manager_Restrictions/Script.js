(function executeRule(current, previous /*null when async*/) {

    // Example: prevent closing a task without work notes filled in
    if (current.state == 4 /* Closed */ && current.work_notes.nil()) {
        current.setAbortAction(true);
        gs.addErrorMessage('Work notes must be filled in before closing a task.');
    }

    // Additional PM-specific validations can be added here.

})(current, previous);
