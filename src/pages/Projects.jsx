import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
