export { implementProjectDialog };
import { addProject } from "./to-do-list";
import { displayProjects } from "./home-page";

function implementProjectDialog() {
    const projectDialog = document.querySelector("#project-dialog");
    const openProjectDialogButton = document.querySelector("#add-project-button");
    const closeProjectDialogButton = document.querySelector("#project-dialog > #close-button");
    const addProjectDialogButton = document.querySelector("#project-dialog > #add-button");

    openProjectDialogButton.addEventListener("click", () => {
        projectDialog.showModal();
    })

    closeProjectDialogButton.addEventListener("click", () => {
        projectDialog.close();
    });

    addProjectDialogButton.addEventListener("click", () => {
        const title = document.querySelector("#title").value;
        addProject(title, []);
        displayProjects();
        projectDialog.close()
    });
}