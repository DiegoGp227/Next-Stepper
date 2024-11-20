import React, { useState, useEffect } from "react";
import style from "../css modules/ProjectList.module.css";
import TaskList from "./TaskList"; // Asegúrate de importar TaskList

function ProyectList() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null); // Para manejar el proyecto seleccionado

  useEffect(() => {
    let userId = 1;

    fetch(`http://localhost:5000/api/projects/${userId}`, {
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
          setProjects(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleProjectClick = (project_id) => {
    setSelectedProjectId(project_id); // Actualiza el proyecto seleccionado
  };

  return (
    <section className={style.secction}>
      <div>
        <form action="" className={style.form}>
          <input type="text" placeholder="search" className={style.search} />
        </form>
      </div>
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <button
              className={style.project}
              // key={project.project_id}
              // onClick={() => handleProjectClick(project.project_id)}
            >
              <h3>{project.name}</h3>
              <hr />
              <p>{project.description}</p>
            </button>
          ))
        ) : (
          <p className={style.p}>No projects available.</p>
        )}
      </div>

      {/* Mostrar TaskList cuando haya un proyecto seleccionado */}
      {/* {selectedProjectId && <TaskList project_id={selectedProjectId} />} */}
    </section>
  );
}

export default ProyectList;
