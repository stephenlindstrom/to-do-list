import { projectList } from "./to-do-list";
import { storeProjects } from "./storage";
import { displayTasks } from "./home-page";
export { implementTaskDialog };

function implementTaskDialog() {
    const taskDialog = document.querySelector("#task-dialog");
    const openTaskDialogButton = document.querySelector("#add-task-button");
    const closeTaskDialogButton = document.querySelector("#task-dialog > #close-button");
    const addTaskDialogButton = document.querySelector("#task-dialog > #add-button");

    openTaskDialogButton.addEventListener("click", () => {
        const projectListItems = document.querySelector("#projectList");
        projectListItems.textContent = "";
        for (const project of projectList) {
            const option = document.createElement("option");
            option.textContent = project.title;
            option.value = JSON.stringify(project);
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
        const projectChoiceId = JSON.parse(document.querySelector("#projectList").value).id;
        for (const project of projectList) {
            if (projectChoiceId == project.id) {
                project.addTask(name, description, dueDate, priority);
                storeProjects();
                displayTasks(project.id);
            }
        }
        taskDialog.close()
    });
}