import { projectList } from "./to-do-list";
import { displayTaskItem } from "./ui-helpers";
const { isToday } = require("date-fns");
const { parse } = require("date-fns");
export { activateTodayButton };

function activateTodayButton() {
    const todayButton = document.querySelector("#today-button");
    todayButton.addEventListener("click", () => {
        const taskList = document.querySelector("#taskList");
        taskList.textContent = "";
        for (const project of projectList) {
            for (const task of project.taskList) {
                const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
                if (isToday(date)) {
                    displayTaskItem(task);
                }
            }
        }
    });
}

