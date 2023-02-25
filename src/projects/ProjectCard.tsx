import React from "react";
import { Link } from "react-router-dom";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={"/projects/" + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button
          onClick={() => {
            handleEditClick(project);
          }}
          className=" bordered"
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
};

export default ProjectCard;
