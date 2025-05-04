// import { createContext } from "react";

// export const ProjectContext = createContext(null);


// ProjectProvider.js
import { useState } from "react";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }) => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  return (
    <ProjectContext.Provider value={{ activeProjectId, setActiveProjectId }}>
      {children}
    </ProjectContext.Provider>
  );
};
