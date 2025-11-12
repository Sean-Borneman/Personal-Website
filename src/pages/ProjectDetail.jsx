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

  // Render detailed content sections
  const renderDetailedContent = () => {
    if (!project.detailedContent || project.detailedContent.length === 0) {
      // Fallback to simple description if no detailed content
      return (
        <div className="project-description">
          <h2>About This Project</h2>
          <p>{project.description}</p>
        </div>
      );
    }

    return (
      <div className="project-detailed-content">
        {project.detailedContent.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return <h2 key={index} className="content-heading">{section.content}</h2>;

            case 'text':
              return <p key={index} className="content-text">{section.content}</p>;

            case 'image':
              return (
                <div key={index} className="content-image">
                  <img src={section.src} alt={section.alt} />
                  {section.caption && <p className="image-caption">{section.caption}</p>}
                </div>
              );

            case 'list':
              return (
                <ul key={index} className="content-list">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  };

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

        {renderDetailedContent()}

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
