import React, { useState, useEffect } from "react";
import style from "../css modules/TaskList.module.css";
import { ButtonNewTask } from "../modules/Buttons.jsx";
import Tasks from "../modules/Tasks.jsx";

// function TaskList({ project_id }) {
function TaskList() {

  const [sections, setSections] = useState([]);

  let project_id = 1

  useEffect(() => {
    if (!project_id) return; 

    

    fetch(`http://localhost:5000/api/sections/${project_id}`, {
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
          setSections(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [project_id]); // Agregar `project_id` como dependencia

  return (
    <div>
      {sections.length > 0 ? (
        sections.map((section) => (
          <section  className={style.section}>
            <h3>{section.name}</h3>
            <Tasks project_id={section.section_id} />
            <ButtonNewTask />
          </section>
        ))
      ) : (
        <p className={style.p}>No sections available.</p>
      )}
    </div>
  );
}

export default TaskList;

