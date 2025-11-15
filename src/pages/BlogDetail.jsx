import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogDetail.css';

function BlogDetail() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="blog-detail">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-button">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = () => {
    return (
      <div className="blog-content">
        {post.content.map((section, index) => {
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

            case 'code':
              return (
                <pre key={index} className="content-code">
                  <code>{section.content}</code>
                </pre>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  };

  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-button">← Back to Blog</Link>

      <article className="blog-post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{formatDate(post.date)}</span>
            <span className="meta-separator">•</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
        </header>

        <div className="post-content">
          {renderContent()}
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;
