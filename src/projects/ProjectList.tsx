import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

const ProjectList = ({ projects, onSave }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingtEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingtEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingtEdited({});
  };

  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm
          onSave={onSave}
          onCancel={cancelEditing}
          project={project}
        ></ProjectForm>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
      )}
    </div>
  ));

  return <div className="row">{items}</div>;
};

export default ProjectList;
