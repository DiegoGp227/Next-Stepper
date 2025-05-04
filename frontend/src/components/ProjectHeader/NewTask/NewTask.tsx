import Style from "./style.module.css";
import { LuCross } from "react-icons/lu";

function NewTask() {
  return (
    <div>
      <button className={Style.buttonNewTask}>
        <LuCross />
        New Task
      </button>
    </div>
  );
}

export default NewTask;
