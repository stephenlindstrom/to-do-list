import { projectList, addProject } from "./to-do-list";
export { storeProjects, retrieveProjects };

function storeProjects () {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function retrieveProjects () {
    const retrievedData = JSON.parse(localStorage.getItem("projectList"));
    for (const data of retrievedData) {
        const restoredProject = addProject(data.title, data.taskList);
    }
}
