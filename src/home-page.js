import { addProject, projectList } from "./to-do-list";
import { getCounter } from "./counter";
import { implementProjectDialog } from "./project-dialog";
import { implementTaskDialog } from "./task-dialog";
import { activateProjectButtons } from "./project-page";
import { activateTodayButton } from "./today-page";
import "./styles.css";
export { createHomePage, displayProjects, displayTasks };

function createHomePage() {
    if (getCounter() == 0) {
        addProject("Home", []);
    }
    displayProjects();
    displayTasks(1);
    implementProjectDialog();
    implementTaskDialog();
    activateProjectButtons();   
    activateTodayButton();
}

function displayProjects() {
    const projectsList = document.querySelector("#projects");
    projectsList.textContent = "";
    for (const project of projectList) {
        const projectButton = document.createElement("button");
        if (project.id != 1) {
            projectButton.textContent = project.title;
            projectButton.id = project.id;
            projectButton.classList.add("project-button");
            projectsList.appendChild(projectButton);
        }
    }
}

function displayTasks(projectId) {
    const taskList = document.querySelector("#taskList");
    taskList.textContent = "";
    for (const project of projectList) {
        if (projectId == project.id || projectId == 1) {
            for (const task of project.taskList) {
                const taskItem = document.createElement("div");
                taskItem.textContent = task.name;
                taskList.appendChild(taskItem);
            }
        }
    }
}