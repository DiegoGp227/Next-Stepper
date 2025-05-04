import Style from "./style.module.css";
import {GrConfigure} from "react-icons/gr";
import { NavLink } from "react-router-dom";

function Configuration() {
  return (
    <NavLink to="/configuration" className={({ isActive }) =>`${Style.configurationDiv} ${isActive ? Style.active : ""}`}>
      <GrConfigure className={Style.icons} />
    </NavLink>
  );
}

export default Configuration;
