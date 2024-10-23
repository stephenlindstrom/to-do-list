import { createProject } from "./project";
export { createHomePage };

function createHomePage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "To Do List";
    content.appendChild(h1);

    const newProjectInput = document.createElement("input");
    content.appendChild(newProjectInput);
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "Create New Project"
    content.appendChild(newProjectButton);
    newProjectButton.addEventListener("click", () => {
        const title = newProjectInput.value;
        const project = createProject(title);
        createProjectPage(project);
    });
}

function createProjectPage(project) {
    const content = document.querySelector("#content");
    content.textContent = "";
    const h1 = document.createElement("h1");
    h1.textContent = project.title;
    content.appendChild(h1);
    const taskList = document.createElement("ul");
    project.taskList.forEach((task) => {
        const item = document.createElement("li");
        item.textContent = task.name;
        taskList.appendChild(item);
    });
    content.appendChild(taskList);
    const newTaskName = document.createElement("input");
    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "Create New Task";
    content.appendChild(newTaskName);
    content.appendChild(newTaskButton);
    newTaskButton.addEventListener("click", () => {
        const name = newTaskName.value;
        project.addTask(name, "default", "default", false);
        createProjectPage(project);
    });
}

