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
    taskList.textContent = "";
    for (const project of projectList) {
        let taskCounter = 0;
        for (const task of project.taskList) {
            const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
            if (isToday(date)) {
                displayTaskItem(project, task, taskCounter, "today");
            }
            taskCounter++;
        }
    }
}

