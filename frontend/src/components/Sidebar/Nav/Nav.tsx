import Style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { BsFolder2Open } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

function Nav() {
  return (
    <nav className={Style.nav}>
      <NavLink to="/projects" className={({ isActive }) =>`${Style.navlink} ${isActive ? Style.active : ""}`}>
        <BsFolder2Open className={Style.icons} />
      </NavLink>
      <NavLink to="/task" className={({ isActive }) =>`${Style.navlink} ${isActive ? Style.active : ""}`}>
        <FaTasks className={Style.icons} />
      </NavLink>
      <NavLink to="/calendar" className={({ isActive }) =>`${Style.navlink} ${isActive ? Style.active : ""}`}>
        <FaCalendarAlt className={Style.icons} />
      </NavLink>
      <NavLink to="/ideas" className={({ isActive }) =>`${Style.navlink} ${isActive ? Style.active : ""}`}>
        <MdLightbulbOutline className={Style.icons} />
      </NavLink>
      <NavLink to="/notes" className={({ isActive }) =>`${Style.navlink} ${isActive ? Style.active : ""}`}>
        <BsPencilSquare className={Style.icons} />
      </NavLink>
    </nav>
  );
}

export default Nav;
