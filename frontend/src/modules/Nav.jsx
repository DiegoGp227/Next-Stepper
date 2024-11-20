import React from "react";
import style from "../css modules/Nav.module.css";
import pageImg from "../assets/Next-Stepper-logo.webp";

function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.links}>
        <ul className={style.ul}>
          <li>Upcoming</li>
          <li>Development</li>
          <li>Complete</li>
        </ul>
      </div>
      <div className={style.divImgPagina}>
        <img src={pageImg} alt="" />
      </div>
    </nav>
  );
}

export default Nav;
