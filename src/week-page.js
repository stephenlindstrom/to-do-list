import { projectList } from "./to-do-list";
import { displayTaskItem } from "./ui-helpers";
const { parse } = require("date-fns");
const { isThisWeek } = require("date-fns");
export { activateWeekButton, displayWeekTasks };

function activateWeekButton() {
  const weekButton = document.querySelector("#week-button");
  weekButton.addEventListener("click", () => {
    displayWeekTasks();
  });
}

function displayWeekTasks() {
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
  header.textContent = "Week";
  taskHeader.appendChild(header);
  const clearTasksButton = document.createElement("button");
  clearTasksButton.textContent = "Clear Tasks";
  taskHeader.appendChild(clearTasksButton);
  taskList.appendChild(taskHeader);
  for (const project of projectList) {
    let taskCounter = 0;
    for (const task of project.taskList) {
      const date = parse(task.dueDate, "yyyy-MM-dd", new Date());
      if (isThisWeek(date)) {
        displayTaskItem(project, task, taskCounter, "week");
      }
      taskCounter++;
    }
  }
}
