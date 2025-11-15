import { Link } from 'react-router-dom';
import './BlogPostCard.css';

function BlogPostCard({ post }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${post.id}`} className="blog-post-card">
      <div className="blog-post-header">
        <h2>{post.title}</h2>
        <div className="blog-post-meta">
          <span className="blog-date">{formatDate(post.date)}</span>
          <span className="blog-separator">•</span>
          <span className="blog-read-time">{post.readTime}</span>
        </div>
      </div>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-read-more">
        Read More →
      </div>
    </Link>
  );
}

export default BlogPostCard;
