import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p className="intro-text">
          Hi! I'm [Your Name], a passionate developer creating amazing web experiences.
        </p>
        <p className="intro-description">
          This is my personal space where I share my projects, skills, and journey in web development.
          Feel free to explore and get to know more about my work.
        </p>
        <div className="cta-buttons">
          <a href="/about" className="cta-button primary">Learn More About Me</a>
          <a href="/projects" className="cta-button secondary">View My Projects</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
