import trash from "./trash.svg";
import {
  displayProjectTasks,
  displayHomeTasks,
  displayProjects,
  activateHomeButton,
} from "./home-page";
import { displayTodayTasks } from "./today-page";
import { displayWeekTasks } from "./week-page";
import { projectList } from "./to-do-list";
import { storeProjects } from "./storage";

const { parse } = require("date-fns");
const { format } = require("date-fns");

export { displayTaskItem, deleteProject };

function updateCompletionStatus(task) {
  const updatedTask = task;
  const newStatus = !task.complete;
  updatedTask.complete = newStatus;
}

function deleteTask(taskCounter, project, page) {
  project.taskList.splice(taskCounter, 1);
  if (page == "project") {
    displayProjectTasks(project.id);
  } else if (page == "home") {
    displayHomeTasks();
  } else if (page == "today") {
    displayTodayTasks();
  } else if (page == "week") {
    displayWeekTasks();
  }
}

function deleteProject(projectCounter) {
  projectList.splice(projectCounter, 1);
  storeProjects();
  displayProjects();
  displayHomeTasks();
  activateHomeButton();
}

function displayTaskItem(project, task, taskCounter, page) {
  const taskList = document.querySelector("#taskList");
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item-container");
  const containerOne = document.createElement("div");
  containerOne.classList.add("container-one");
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  if (task.complete == true) {
    checkbox.checked = true;
  }
  checkbox.onclick = function updateCompletion () {
    updateCompletionStatus(task);
  };
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
  const date = parse(task.dueDate, "yyyy-MM-dd", new Date());
  let formattedDate = document.createTextNode(
    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
  );
  taskItemDate.appendChild(formattedDate);
  if (date != "Invalid Date") {
    formattedDate = format(date, "MM/dd/yyyy");
    taskItemDate.textContent = formattedDate;
  }
  containerTwo.appendChild(taskItemDate);
  const deleteButton = document.createElement("input");
  deleteButton.type = "image";
  deleteButton.classList.add("delete-button");
  deleteButton.src = trash;
  deleteButton.addEventListener("click", () => {
    deleteTask(taskCounter, project, page);
  });
  containerTwo.appendChild(deleteButton);
  taskItem.appendChild(containerTwo);
  taskList.appendChild(taskItem);
}
