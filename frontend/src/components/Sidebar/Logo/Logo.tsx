import Style from "./style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logos/Next stepper mini.png";


function Logo() {
  return (
    <NavLink to="/"  className={Style.logoDiv}>
      <img src={logo} alt="" className={Style.logoImg}/>
    </NavLink>
  );
}

export default Logo;