import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Darwin Ramos Jr</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
  );
};


const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Darwin Ramos Jr</h1>
      <p>3rd Year Information Technology Student</p>
      <button>Download Resume</button>
    </section>
  );
};


const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Im currently a 3rd year Information Technology student at Acts Computer College. I pursue a career in IT because I have a passion for technology and problem-solving. I enjoy learning about new technologies and how they can be used to improve people's lives. I am also interested in the field of backend development, as I enjoy working with databases and system architecture. I am excited to continue learning and growing in the field of IT, and I am eager to contribute my skills and knowledge to a dynamic and innovative company.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p>Currently, I am proficient in Java, React, Flutter, mySQL, HTML, CSS and JavaScript. As of right now, I am mastering React for frontend development.</p>
    </section>
  );
}


const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Kitchen Ai</h3>
          <p>AI-powered kitchen assistant that helps with recipe suggestions and cooking instructions. You only need to upload an image of an ingredient to get started.</p>
          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h3>Project Two</h3>
          <p>Short description of your project.</p>
          <a href="#">View Project</a>
        </div>

        <div className="project-card">
          <h3>Project Three</h3>
          <p>Short description of your project.</p>
          <a href="#">View Project</a>
        </div>

      </div>
    </section>
  );
};


const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: ramosjrdarwin72@gmail.com</p>
      <p>GitHub: https://github.com/praeee11</p>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Darwin Ramos Jr. All rights reserved.</p>
    </footer>
  );
};


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;