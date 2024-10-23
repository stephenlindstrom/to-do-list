import { createProject } from "./project";
export { createUserInterface };

function createUserInterface() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "To Do List";
    content.appendChild(h1);

    const newProjectInput = document.createElement("input");
    content.appendChild(newProjectInput);
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = "Create New Project Yay"
    content.appendChild(newProjectButton);
    newProjectButton.addEventListener("click", () => {
        const title = newProjectInput.value;
        const project = createProject(title);
        console.log(project.title);
    });
}

