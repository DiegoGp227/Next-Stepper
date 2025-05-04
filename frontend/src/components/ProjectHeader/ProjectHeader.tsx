import Style from "./style.module.css";
import StadeProject from "./StadeProject/StadeProject";
import NewTask from "./NewTask/NewTask"


function ProjectHeader() {
    return (
        <header className={Style.header}>
            <div className={Style.nameProjectDiv}>
                <h2>Moments</h2>
                <StadeProject stadeTask={"Finished"} />
            </div>

            <NewTask />

        </header>
    )
}

export default ProjectHeader;