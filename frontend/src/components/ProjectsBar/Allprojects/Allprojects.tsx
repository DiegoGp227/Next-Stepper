import Style from "./style.module.css";
import CategoriesDiv from "../CategoriesDiv/CategoriesDiv";
import { useEffect, useState } from "react";

type CategoryProps = {
  id: number;
  name: string;
};

const CategoryList = () => {
  // Establecer el tipo de estado como un array de 'Category'
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las categorías");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className={Style.divButtonAllprojects}>
        <button className={Style.buttonsAllprojects}>All</button>
        <button className={Style.buttonsAllprojects}>Started</button>
        <button className={Style.buttonsAllprojects}>Finished</button>
      </div>
      <div className={Style.divCards}>
        {categories.map((CategoryProps) => (
          <CategoriesDiv
            categoryId={CategoryProps.id}
            nameCard={CategoryProps.name}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
