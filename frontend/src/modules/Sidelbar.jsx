import React from "react";
import style from "../css modules/Sidelbar.module.css";
import imgProfile from "../assets/kenny.jpg";
import homeSvg from "../assets/svg/home logo.svg";
import projectsSvg from "../assets/svg/projects logo.svg";
import newSvg from "../assets/svg/new logo.svg";




function Sidelbar() {
  return (
    <nav className={style.Sidelbar}>
      <div className={style.divImgProfile}>
        <img src={imgProfile} alt="" />
      </div>
      <div className={style.buttons}>
        <button className={style.button}>
          <img src={homeSvg} alt="" className={style.homeImg} />
        </button>
        <button className={style.button}>
          <img src={projectsSvg} alt="" className={style.projectsImg} />
        </button>
        <button className={style.button}>
          <img src={newSvg} alt="" className={style.newImg}/>
        </button>
      </div>
      <div className={style.relleno}>
      </div>
    </nav>
  );
}

export default Sidelbar;
