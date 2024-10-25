export { createTask };

function createTask (name, description, dueDate, priority) {
    let complete = false;
    
    return { name, description, dueDate, complete, priority };
}

const changeCompletionStatus = () => {
    complete ? complete = false : complete = true;
};

const changePriorityStatus = () => {
    priority ? priority = false : priority = true;
}