import Style from "./styles/style.module.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Task from "./pages/Task/Task"
import Calendar from "./pages/Calendar/Calendar"
import Ideas from "./pages/Ideas/Ideas"
import Notes from "./pages/Notes/Notes"
import Configuration from "./pages/Configuration/Configuration"
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <div className={Style.pageDiv}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/task" element={<Task />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/*" element={<NotFound />}  ></Route>
      </Routes>
    </div>
  );
}

export default App;
