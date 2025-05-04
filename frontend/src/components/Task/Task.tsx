import Style from "./style.module.css";
import TaskToDo from "./TaskToDo/TaskToDo"

function Task() {
    return (
        <div className={Style.divTask}>
            <TaskToDo projectName={"To do"} taskNumber={9} />
            <TaskToDo projectName={"On Progrees"} taskNumber={2}/>
            {/* <TaskToDo projectName={"Done"} taskNumber={12}/> */}
        </div>
    )
}

export default Task;