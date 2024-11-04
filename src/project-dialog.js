import { addProject } from "./to-do-list";
import { displayProjects, displayProjectTasks } from "./home-page";
export { implementProjectDialog };

function implementProjectDialog() {
  const projectDialog = document.querySelector("#project-dialog");
  const openProjectDialogButton = document.querySelector("#add-project-button");
  const closeProjectDialogButton = document.querySelector(
    "#project-dialog > #close-button",
  );
  const addProjectDialogButton = document.querySelector(
    "#project-dialog > #add-button",
  );

  openProjectDialogButton.addEventListener("click", () => {
    projectDialog.showModal();
  });

  closeProjectDialogButton.addEventListener("click", () => {
    projectDialog.close();
  });

  addProjectDialogButton.addEventListener("click", () => {
    const projectInput = document.querySelector("#title");
    const title = projectInput.value;
    const newProject = addProject(title, []);
    displayProjects();
    const projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach((button) => {
      button.style.fontWeight = "normal";
      if (button.id == newProject.id) {
        button.style.fontWeight = "bold";
      }
    });
    displayProjectTasks(newProject.id);
    projectInput.value = "";
    projectDialog.close();
  });
}
