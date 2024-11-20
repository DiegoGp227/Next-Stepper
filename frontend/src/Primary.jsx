import React from "react";
import style from "./Primary.module.css";
import ProyectList from "./modules/ProjectList.jsx";
import TaskList from "./modules/TaskList.jsx";
import { PieCharts } from "./modules/Charts.jsx";
import { ButtonNewSecction, ButtonNewTask } from "./modules/Buttons.jsx";

function Primary() {
  return (
    <div className={style.Primary}>
      <div>
        <ProyectList />
      </div>
      <div className={style.TaskList}>
        <TaskList TaskTittle="Frontend" Task="Crear el home" />
        <ButtonNewSecction Name="New Secction" />
      </div>
      <div className={style.ChartsDIv}>
        <PieCharts />
      </div>
    </div>
  );
}

export default Primary;
