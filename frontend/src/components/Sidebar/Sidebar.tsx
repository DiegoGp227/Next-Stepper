import Style from "./style.module.css";
import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav"
import Configuration from "./Configuration/Configuration"




function Sidebar() {
  return (
    <aside className={Style.sidebar}>
      <Logo/>
      <Nav/>
      <Configuration/>
    </aside>
  );
}

export default Sidebar;