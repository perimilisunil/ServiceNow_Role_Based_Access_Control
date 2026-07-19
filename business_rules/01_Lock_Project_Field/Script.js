(function executeRule(current, previous) {

    if (previous.state != 3)
        return;

    var project = current.project.getRefRecord();

    if (project.getValue('project_manager') == gs.getUserID()) {
        return;
    }

    gs.addErrorMessage("This task is already completed. Only the Project Manager can modify completed tasks.");
    current.setAbortAction(true);

})(current, previous);
