import { addProject, projectList } from "./to-do-list";
import { getCounter } from "./counter";
import { implementProjectDialog } from "./project-dialog";
import { implementTaskDialog } from "./task-dialog";
import { activateTodayButton } from "./today-page";
import { activateWeekButton } from "./week-page";
import { storeProjects } from "./storage";
import { displayTaskItem } from "./ui-helpers";
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
    activateHomeButton();   
    activateTodayButton();
    activateWeekButton();
    activateProjectButtons();
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
            projectButton.addEventListener("click", () => {
                displayTasks(projectButton.id);
            });
            projectsList.appendChild(projectButton);
        }
    }
    activateProjectButtons();
}

function displayTasks(projectId) {
    const taskList = document.querySelector("#taskList");
    taskList.textContent = "";
    for (const project of projectList) {
        if (projectId == project.id || projectId == 1) {
            for (const task of project.taskList) {
                displayTaskItem(task);
            }
        }
    }
}

function activateHomeButton () {
    const homeButton = document.querySelector(".home-button");
    homeButton.style.fontWeight = "bold";
    homeButton.addEventListener("click", () => {
        displayTasks("1");
    });
}


function activateProjectButtons () {
    const projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            projectButtons.forEach((button) => {
                button.style.fontWeight = "normal";
            });
            button.style.fontWeight = "bold";
            storeProjects();
        });
    });
}