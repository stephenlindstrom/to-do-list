import { projectList } from "./to-do-list";
const { isToday } = require("date-fns");
const { formatISO } = require("date-fns");
const { parse } = require("date-fns");
export { activateTodayButton };

function activateTodayButton() {
    const todayButton = document.querySelector("#today-button");
    todayButton.addEventListener("click", () => {
        const taskList = document.querySelector("#taskList");
        taskList.textContent = "";
        console.log("hello");
        for (const project of projectList) {
            for (const task of project.taskList) {
                const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
                if (isToday(date)) {
                    const taskItem = document.createElement("div");
                    taskItem.textContent = task.name;
                    taskList.appendChild(taskItem);
                }
            }
        }
    });
}
