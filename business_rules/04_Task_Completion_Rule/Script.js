(function executeRule(current, previous /*null when async*/) {

    if (current.state.changesTo('3') /* Completed */) {
        current.comments = 'Completed by ' + gs.getUserName();
        current.u_completed_on = new GlideDateTime();
        current.update();
    }

})(current, previous);
