import projects from "../data/projectsData";
import ProjectList from "./ProjectList";
import "../css/main.css";

function Projects() {
  return (
    <section className="content">
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;
