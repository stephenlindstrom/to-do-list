import { createProject } from "./project";
import { retrieveProjects, storeProjects } from "./storage";
export { projectList, addProject };

const projectList = retrieveProjects();

function addProject(title, taskList) {
    const newProject = createProject(title, taskList);
    projectList.push(newProject)
    storeProjects();
} 