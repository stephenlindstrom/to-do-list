import { projectList } from "./to-do-list";
import { storeProjects } from "./storage";
import { displayHomeTasks, displayProjectTasks } from "./home-page";
export { implementTaskDialog };

function implementTaskDialog() {
  const taskDialog = document.querySelector("#task-dialog");
  const openTaskDialogButton = document.querySelector("#add-task-button");
  const closeTaskDialogButton = document.querySelector(
    "#task-dialog > #close-button",
  );
  const addTaskDialogButton = document.querySelector(
    "#task-dialog > #add-button",
  );

  openTaskDialogButton.addEventListener("click", () => {
    const projectListItems = document.querySelector("#projectList");
    projectListItems.textContent = "";
    for (const project of projectList) {
      const option = document.createElement("option");
      if (project.id == 1) {
        option.textContent = "None";
      } else {
        option.textContent = project.title;
      }
      option.value = JSON.stringify(project);
      projectListItems.appendChild(option);
    }
    taskDialog.showModal();
  });

  closeTaskDialogButton.addEventListener("click", () => {
    taskDialog.close();
  });

  addTaskDialogButton.addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const name = nameInput.value;
    const warningMessage = document.querySelector("#warning-message");
    if (name == "") {
      warningMessage.textContent = "Please add a name";
    } else {
      const descriptionInput = document.querySelector("#description");
      const description = descriptionInput.value;
      const dueDateInput = document.querySelector("#dueDate");
      const dueDate = dueDateInput.value;
      const priorityInput = document.querySelector("#priority");
      const priority = priorityInput.checked;
      const projectChoiceId = JSON.parse(
        document.querySelector("#projectList").value,
      ).id;
      for (const project of projectList) {
        if (projectChoiceId == project.id) {
          project.addTask(name, description, dueDate, priority);
          storeProjects();
          const projectButtons = document.querySelectorAll(".project-button");
          projectButtons.forEach((button) => {
            button.style.fontWeight = "normal";
            if (button.id == project.id) {
              button.style.fontWeight = "bold";
            }
          });
          if (project.id == 1) {
            displayHomeTasks();
          } else {
            displayProjectTasks(project.id);
          }
        }
      }
      nameInput.value = "";
      descriptionInput.value = "";
      dueDateInput.value = "";
      priorityInput.checked = false;
      warningMessage.textContent = "";
      taskDialog.close();
    }
  });
}
