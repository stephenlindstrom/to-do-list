import { displayTasks } from "./home-page"
export { activateProjectButtons }

function activateProjectButtons () {
    const projectButtons = document.querySelectorAll(".project-button")

    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            displayTasks(button.id);
        });
    });
}

