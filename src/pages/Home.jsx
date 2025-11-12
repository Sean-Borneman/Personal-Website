import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to My Website!</h1>
        <p className="intro-text">
          Hi! I'm Sean, a passionate reasercher interested in the intersection between Quantum Physics and cutting edge algorithms.
        </p>
        <p className="intro-description">
          This is my personal space where I share my projects, skills, and journey as I progress in my academic career.
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
