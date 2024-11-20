import style from "../css modules/Buttons.module.css";

export function ButtonNewSecction(props) {
  return <button className={style.buttonSecction}>{props.Name}</button>;
}

export function ButtonNewTask() {
  return <button className={style.buttonTask}>New Task</button>;
}