import { projectList, addProject } from "./to-do-list";
import { createProject } from "./project";
export { storeProjects, retrieveProjects };

function storeProjects () {
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

function retrieveProjects () {
    const storedData = localStorage.getItem("projectList");
    if (storedData == null) {
        return [];
    }
    
    const retrievedData = JSON.parse(localStorage.getItem("projectList"));
    const restoredProjects = [];
    for (const data of retrievedData) {
        const restoredProject = createProject(data.id, data.title, data.taskList);
        restoredProjects.push(restoredProject);
    }
    return restoredProjects;
}
