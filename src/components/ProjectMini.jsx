import { useState } from "react";
import "./ProjectMini.css";

const ProjectMini = (props) => {
  const { name, image, organization, status, description} = props;
  const [projectSaved, setProjectSaved] = useState(false);
  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col col-2">
          {image === undefined ? (
            <img
              src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="company logo"
              className="rounded-circle img-fluid"
            />
          ) : (
            <img src={image} alt="company logo" className="rounded-circle" />
          )}
        </div>
        <div className="col col-9 text-start pe-0">
          <p className="text-primary fw-medium">{name}</p>
          <p>{organization}</p>
          <p className="text-muted">{status}</p>
        </div>
        <div className="col col-1 ps-0">
          {projectSaved ? (
            <button
              className="btn icon-button"
              onClick={() => {
                setProjectSaved(!projectSaved);
              }}
            >
              <i className="bi bi-bookmark-fill fs-4 text-secondary"></i>
            </button>
          ) : (
            <button
              className="btn icon-button"
              onClick={() => {
                setProjectSaved(!projectSaved);
              }}
            >
              <i className="bi bi-bookmark fs-4 text-secondary"></i>
            </button>
          )}
        </div>
      </div>
      <div className="row"><hr /></div>
      </div>
    </>
  );
};

export default ProjectMini;
