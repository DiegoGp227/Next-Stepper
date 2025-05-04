import Style from "./style.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
}


type CategoriesDivProps = {
  nameCard: string;
  categoryId: number;
}


function CategoriesDiv( {nameCard, categoryId}: CategoriesDivProps) {
    const [projects, setProjects] = useState<Project[]>([]);
  
    useEffect(() => {
      fetch (`http://localhost:3001/projects?categoryId=${categoryId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar las categorías");
          }
          return response.json();
        })
        .then((data) => {
          setProjects(data);
        })
        .catch((error) => console.error("Error:", error));
    }, []);
  

    return (
      <>
    <h4 className={Style.titleCategories}>{nameCard}</h4>
    {projects.map((project) =>(
      <Card key={project.id} id={project.id} title={project.title} description={project.description} />
    ))}
      {/* <h4 className={Style.titleCategories}>{nameCard}</h4>
      <Card /> */}
    </>
  );
}

export default CategoriesDiv;
