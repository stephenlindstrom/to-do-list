import { projectList } from "./to-do-list";
import { displayTaskItem } from "./ui-helpers";
const { isToday } = require("date-fns");
const { parse } = require("date-fns");
export { activateTodayButton, displayTodayTasks };

function activateTodayButton() {
  const todayButton = document.querySelector("#today-button");
  todayButton.addEventListener("click", () => {
    displayTodayTasks();
  });
}

function displayTodayTasks() {
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
  header.textContent = "Today";
  taskHeader.appendChild(header);
  const clearTasksButton = document.createElement("button");
  clearTasksButton.textContent = "Clear Tasks";
  taskHeader.appendChild(clearTasksButton);
  taskList.appendChild(taskHeader);
  for (const project of projectList) {
    let taskCounter = 0;
    for (const task of project.taskList) {
      const date = parse(task.dueDate, "yyyy-MM-dd", new Date());
      if (isToday(date)) {
        displayTaskItem(project, task, taskCounter, "today");
      }
      taskCounter++;
    }
  }
}
