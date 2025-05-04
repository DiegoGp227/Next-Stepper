import Style from "./style.module.css";
// import { createContext } from "react";

type cardProps = {
  id: number;
  title: string;
  description: string;
};

function Card({ id, title, description }: cardProps) {
  const hasData = id && title && description;

  return hasData ? (
    <div className={Style.cardProject} >
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  ) : (
    <div className={Style.cardProject}>
      <h5>File does not exist</h5>
    </div>
  );
}

export default Card;
