import { createTask } from "./task";
export { createProject };

function createProject (id, title, taskList) {
    const addTask = (name, description, dueDate, priority) => {
        const newTask = createTask(name, description, dueDate, priority);
        taskList.push(newTask);
    }
    return { id, title, taskList, addTask };
}