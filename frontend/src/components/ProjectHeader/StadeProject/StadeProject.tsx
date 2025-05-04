import Style from "./style.module.css";

type StadeProjectProps = {
  stadeTask: "Planification" | "On development" | "Finished";
};

function StadeProject( {stadeTask}: StadeProjectProps ) {
    return (
        <div>
            <h3 className={Style.stateText}>{stadeTask}</h3>
        </div>
    )
}

export default StadeProject;