import { addProject, projectList } from "./to-do-list";
import { getCounter } from "./counter";
import { implementProjectDialog } from "./project-dialog";
import { implementTaskDialog } from "./task-dialog";
import { activateTodayButton } from "./today-page";
import { activateWeekButton } from "./week-page";
import { storeProjects } from "./storage";
import { displayTaskItem, deleteProject } from "./ui-helpers";
import "./styles.css";
export {
  createHomePage,
  displayProjects,
  displayProjectTasks,
  displayHomeTasks,
  activateHomeButton,
};

function createHomePage() {
  if (getCounter() == 0) {
    addProject("Home", []);
  }
  displayProjects();
  displayHomeTasks();
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
        displayProjectTasks(projectButton.id);
      });
      projectsList.appendChild(projectButton);
    }
  }
  activateProjectButtons();
}

function displayProjectTasks(projectId) {
  const taskList = document.querySelector("#taskList");
  const taskHeader = document.querySelector("#task-header");
  taskList.textContent = "";
  taskHeader.textContent = "";
  const placeholder = document.createElement("div");
  const emptySpaces = document.createTextNode(
    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
  );
  placeholder.appendChild(emptySpaces);
  taskHeader.appendChild(placeholder);
  let projectCounter = 0;
  for (const project of projectList) {
    if (projectId == project.id) {
      const header = document.createElement("h2");
      header.textContent = project.title;
      taskHeader.appendChild(header);
      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.textContent = "Delete Project";
      console.log(projectCounter);
      const projectIndex = projectCounter;
      deleteProjectButton.addEventListener("click", function () {
        deleteProject(projectIndex);
      });
      taskHeader.appendChild(deleteProjectButton);
      taskList.appendChild(taskHeader);
      if (project.taskList.length == 0) {
        displayEmptyProject();
      } else {
        let taskCounter = 0;
        for (const task of project.taskList) {
          displayTaskItem(project, task, taskCounter, "project");
          taskCounter++;
        }
      }
    }
    projectCounter++;
  }
}

function displayHomeTasks() {
  const taskList = document.querySelector("#taskList");
  const taskHeader = document.querySelector("#task-header");
  taskList.textContent = "";
  taskHeader.textContent = "";
  const placeholder = document.createElement("div");
  const emptySpaces = document.createTextNode(
    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
  );
  placeholder.appendChild(emptySpaces);
  taskHeader.appendChild(placeholder);
  const header = document.createElement("h2");
  header.textContent = "Home";
  taskHeader.appendChild(header);
  const clearTasksButton = document.createElement("button");
  clearTasksButton.textContent = "Clear Tasks";
  taskHeader.appendChild(clearTasksButton);
  taskList.appendChild(taskHeader);
  for (const project of projectList) {
    let taskCounter = 0;
    for (const task of project.taskList) {
      displayTaskItem(project, task, taskCounter, "home");
      taskCounter++;
    }
  }
}

function activateHomeButton() {
  const homeButton = document.querySelector(".home-button");
  homeButton.style.fontWeight = "bold";
  homeButton.addEventListener("click", () => {
    displayHomeTasks();
  });
}

function activateProjectButtons() {
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

function displayEmptyProject() {
  const taskList = document.querySelector("#taskList");
  const para = document.createElement("p");
  para.textContent = "Add a task to this project or delete project";
  taskList.appendChild(para);
}
