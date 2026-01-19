import { useState } from "react";
import projects from "../data/projectsData";
import ProjectList from "./ProjectList";
import ProjectModal from "./ProjectModal";
import "../css/main.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="content">
      <ProjectList projects={projects} onOpenModal={handleOpenModal} />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default Projects;
