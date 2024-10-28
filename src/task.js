export { createTask };

function createTask (name, description, dueDate, priority) {
    let complete = false;
    
    return { name, description, dueDate, complete, priority };
}