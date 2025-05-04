import Style from "./style.module.css";

type TaskToDoProps = {
  projectName: string;
  taskNumber: number;
};

function TaskToDo({ projectName, taskNumber }: TaskToDoProps) {
  const number = taskNumber;
  return (
    <div className={Style.taskContainer}>
      <div>
        <h1 className={Style.tittleSecction}>
          {projectName} <span>(</span>
          <span className={Style.taskNumber}>{number}</span>
          <span>)</span>
        </h1>
      </div>
      <div>
        <div className={Style.cardProject} >
          <h1>Create Routes</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptates libero in aut nulla placeat, architecto et dolorem amet quos qui deserunt, culpa reprehenderit aliquam quod. Accusamus quia nam laborum?</p>
        </div>
      </div>
    </div>
  );
}

export default TaskToDo;
