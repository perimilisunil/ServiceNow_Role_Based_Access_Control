(function executeRule(current, previous) {

    var completion = parseInt(current.project_completion, 10);

    if (isNaN(completion))
        completion = 0;

    if (completion == 0) {
        current.status = "Planning";
    }
    else if (completion < 100) {
        current.status = "In Progress";
    }
    else {
        current.status = "Completed";
    }

    current.update();

})(current, previous);
