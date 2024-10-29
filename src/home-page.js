import { addProject, projectList } from "./to-do-list";
import { getCounter } from "./counter";
import { implementProjectDialog } from "./project-dialog";
import { implementTaskDialog } from "./task-dialog";
import { activateTodayButton } from "./today-page";
import { activateWeekButton } from "./week-page";
import "./styles.css";
export { createHomePage, displayProjects, displayTasks };
const { parse } = require("date-fns");
const { format } = require("date-fns");

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
                const taskItem = document.createElement("div");
                taskItem.classList.add("task-item-container");
                const containerOne = document.createElement("div");
                containerOne.classList.add("container-one");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                containerOne.appendChild(checkbox);
                const taskItemName = document.createElement("div");
                taskItemName.textContent = task.name;
                containerOne.appendChild(taskItemName);
                taskItem.appendChild(containerOne);
                const containerTwo = document.createElement("div");
                containerTwo.classList.add("container-two");
                const detailsButton = document.createElement("button");
                detailsButton.classList.add("details-button");
                detailsButton.textContent = "Details";
                containerTwo.appendChild(detailsButton);
                const taskItemDate = document.createElement("div");
                const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
                let formattedDate = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
                taskItemDate.appendChild(formattedDate);
                if (date != "Invalid Date") {
                    formattedDate = format(date, 'MM/dd/yyyy');
                    taskItemDate.textContent = formattedDate;
                } 
                containerTwo.appendChild(taskItemDate);
                taskItem.appendChild(containerTwo);
                taskList.appendChild(taskItem);
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
        });
    });
}