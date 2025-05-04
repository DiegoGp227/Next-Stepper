import Style from "./style.module.css";
import Newproject from "./Newproject/Newproject";
import Shearch from "./shearch/shearch";
import Allprojects from "./Allprojects/Allprojects";

function ProjectsBar() {
  return (
    <div>
      <section className={Style.selectorSecction}>
        <div className={Style.divProjects}>
          <h4>Projects</h4>
          <Newproject />
        </div>
        <div className={Style.divShearch}>
          <Shearch />
        </div>
        <div>
          <Allprojects />
        </div>
      </section>
    </div>
  );
}
export default ProjectsBar;
