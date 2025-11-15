import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hi 👋, my name is Sean, I'm currently a student here in the U.S. studying physics with a focus on quantum computing and quantum algorithms.
        </p>
        <p>
          Just go checkout my projects or something, i'm not that interesting.
        </p>
      </div>

      <div className="about-links-section">
        <h2>Useful Links (If you're that curious)</h2>
        <div className="about-links">
          <a href="https://www.linkedin.com/in/sean-borneman/" target="_blank" rel="noopener noreferrer" className="about-link">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=ro2PkcYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="about-link">
            Google Scholar
          </a>
          <a href="https://github.com/Sean-Borneman" target="_blank" rel="noopener noreferrer" className="about-link">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
