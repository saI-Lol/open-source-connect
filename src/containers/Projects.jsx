import ProjectMini from "../components/ProjectMini";
import "./Projects.css";
import { useState } from "react";
const Projects = ({ projectList }) => {
  const [selectedProject, setSelectedProject] = useState(projectList[0]);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 custom-scrollbar-container">
            {projectList.map((project) => (
              <a
                className="btn"
                onClick={() => handleProjectClick(project)}
                style={{ border: "none" }}
              >
                <ProjectMini
                  key={project.project_id} // Use a unique key for each project component
                  name={project.project_name}
                  organization={project.agency_sponsor}
                  status={project.project_status}
                  description={project.project_description}
                />
              </a>
            ))}
          </div>
          <div className="col-lg-6 selected-project"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
