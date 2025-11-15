import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts-list">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
