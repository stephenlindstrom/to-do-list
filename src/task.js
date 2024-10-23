export { createTask };

function createTask (name, description, dueDate, priority) {
    let complete = false;

    const isComplete = () => complete;
    const changeCompletionStatus = () => {
        complete ? complete = false : complete = true;
    };

    const isPriority = () => priority;
    const changePriorityStatus = () => {
        priority ? priority = false : priority = true;
    }
    

    return { name, description, dueDate, isComplete, changeCompletionStatus, isPriority, changePriorityStatus };
}