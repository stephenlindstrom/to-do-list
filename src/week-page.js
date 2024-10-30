import { projectList } from "./to-do-list";
import { displayTaskItem } from "./ui-helpers";
const { parse } = require("date-fns");
const { isThisWeek } = require("date-fns");
export { activateWeekButton };

function activateWeekButton() {
    const weekButton = document.querySelector("#week-button");
    weekButton.addEventListener("click", () => {
        const taskList = document.querySelector("#taskList");
        taskList.textContent = "";
        for (const project of projectList) {
            for (const task of project.taskList) {
                const date = parse(task.dueDate, 'yyyy-MM-dd', new Date());
                if (isThisWeek(date)) {
                    displayTaskItem(task);
                }
            }
        }
    });
}