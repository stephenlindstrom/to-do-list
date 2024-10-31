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
    taskList.textContent = "";
    for (const project of projectList) {
        let taskCounter = 0;
        for (const task of project.taskList) {
            const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
            if (isThisWeek(date)) {
                displayTaskItem(project, task, taskCounter, "week");
            }
            taskCounter++;
        }
    }
}