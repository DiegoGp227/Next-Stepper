import Style from "./style.module.css";
import ProjectsBar from "../../components/ProjectsBar/ProjectsBar";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader"
import Task from "../../components/Task/Task";

function Projects() {
  return (
    <>
      <ProjectsBar />
      <div className={Style.div}>
        <ProjectHeader />
        <Task />
      </div>
    </>
  );
}

export default Projects;
