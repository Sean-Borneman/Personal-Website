import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-button">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-button">← Back to Projects</Link>

      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="project-meta">
          <span className="project-date">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
        </div>
      </div>

      <div className="project-image-full">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-details-content">
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-description">
          <h2>About This Project</h2>
          <p>{project.description}</p>
        </div>

        <div className="project-links-section">
          <h2>Links</h2>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>Live Demo</span>
              </a>
            )}
            {project.paperUrl && (
              <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>Read Paper</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
