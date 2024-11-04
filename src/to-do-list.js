import { createProject } from "./project";
import { retrieveProjects, storeProjects } from "./storage";
import { incrementCounter } from "./counter";
export { projectList, addProject };

const projectList = retrieveProjects();

function addProject(title, taskList) {
  const id = incrementCounter();
  const newProject = createProject(id, title, taskList);
  projectList.push(newProject);
  storeProjects();
  return newProject;
}
