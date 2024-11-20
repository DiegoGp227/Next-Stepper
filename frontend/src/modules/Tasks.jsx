import React, { useState, useEffect } from "react"; 
import style from "../css modules/TaskList.module.css";

function Tasks({ section_id }) { 
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks/${section_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Network response was not ok");
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setTasks(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [section_id]); 

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => ( // Usar tasks en lugar de Tasks y corregir capitalización
          <div key={task.id} className={style.checkboxDiv}>
            <label className={style.checkbox}>
              <input type="checkbox" className={style.checkboxInput} />
              <span className={style.checkboxLabel}></span>
              {task.name}
            </label>
            <p>{task.status}</p>
          </div>
        ))
      ) : (
        <p>Not tasks available</p>
      )}
    </>
  );
}

export default Tasks;
