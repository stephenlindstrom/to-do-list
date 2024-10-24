import { addProject, projectList } from "./to-do-list";
import { storeProjects, retrieveProjects } from "./storage";
import "./styles.css";
export { createHomePage };

function createHomePage() {
    displayProjects();
    const projectDialog = document.querySelector("#project-dialog");
    const openProjectDialogButton = document.querySelector("#add-project-button");
    const closeProjectDialogButton = document.querySelector("#project-dialog > #close-button");
    const addProjectDialogButton = document.querySelector("#project-dialog > #add-button");

    openProjectDialogButton.addEventListener("click", () => {
        projectDialog.showModal();
    })

    closeProjectDialogButton.addEventListener("click", () => {
        projectDialog.close();
    });

    addProjectDialogButton.addEventListener("click", () => {
        const title = document.querySelector("#title").value;
        addProject(title, []);
        displayProjects();
        projectDialog.close()
    });

    const taskDialog = document.querySelector("#task-dialog");
    const openTaskDialogButton = document.querySelector("#add-task-button");
    const closeTaskDialogButton = document.querySelector("#task-dialog > #close-button");
    const addTaskDialogButton = document.querySelector("#task-dialog > #add-button");

    openTaskDialogButton.addEventListener("click", () => {
        const projects = retrieveProjects();
        const projectListItems = document.querySelector("#projectList");
        for (const project of projects) {
            const option = document.createElement("option");
            option.textContent = project.title;
            option.value = project;
            projectListItems.appendChild(option);
        }
        taskDialog.showModal();
    })

    closeTaskDialogButton.addEventListener("click", () => {
        taskDialog.close();
    });

    addTaskDialogButton.addEventListener("click", () => {
        const name = document.querySelector("#name").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#dueDate").value;
        const priority = document.querySelector("#priority").checked;
        const projectChoice = document.querySelector("#projectList").value;
        Object.assign(projectChoice, )
        projectChoice.addTask(name, description, dueDate, priority);
        taskDialog.close()
    });    
}

function displayProjects() {
    const projectList = document.querySelector("#projects");
    projectList.textContent = "";
    const projects = retrieveProjects();
    for (const project of projects) {
        const projectButton = document.createElement("button");
        projectButton.textContent = project.title;
        projectList.appendChild(projectButton);
    }
}