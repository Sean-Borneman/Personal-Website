import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-short-desc">{project.shortDescription}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <span className="link-icon" onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, '_blank'); }}>
              GitHub
            </span>
          )}
          {project.liveUrl && (
            <span className="link-icon" onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}>
              Live Demo
            </span>
          )}
          {project.paperUrl && (
            <span className="link-icon" onClick={(e) => { e.preventDefault(); window.open(project.paperUrl, '_blank'); }}>
              Paper
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
