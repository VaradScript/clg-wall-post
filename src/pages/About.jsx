function About() {
  return (
    <div className="about-container">
      <h2>About This Wall</h2>
      <div className="about-content">
        <p>
          <strong>Created during a collaborative MERN workshop</strong>, this social wall represents not just posts, 
          but people and shared moments. It's a place where the NITTE community can connect, 
          share ideas, and create memories together.
        </p>
        <div className="tech-stack">
          <h3>Built with:</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS Modules</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;