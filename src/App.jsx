/* eslint-disable react/jsx-no-undef */
// import React from "react";
import About  from './component/About.jsx';
import Projects  from './component/Projects.jsx';
import Contact from './component/Contact.jsx';
import './App.css';
// import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Home id="home" title="Home" />
      <div className="content">
        <Navbar />
        <div className="about-skills-container">
          <div className="about-section">
            <About id="about" title="About" />
          </div>
          <div className="skills">
            {/* <Skill skillName="JAVASCRIPT" imageUrl={javascriptIcon} /> */}
            {/* <Skill skillName="SQL" imageUrl={sqlIcon} /> */}
            {/* <Skill skillName="HTML" imageUrl={htmlIcon} /> */}
            {/* <Skill skillName="REACT" imageUrl={reactIcon} /> */}
            {/* <Skill skillName="MYSQL" imageUrl={mysqlIcon} /> */}
            {/* <Skill skillName="MONGODB" imageUrl={mongodbIcon} /> */}
            {/* <Skill skillName="REST API" imageUrl={restApiIcon} /> */}
            {/* <Skill skillName="GIT" imageUrl={gitIcon} /> */}
          </div>
        </div>
        <Projects id="projects" title="Projects" />
        <Contact id="contact" title="Contact" />
        <Footer id="footer" title="Footer" />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="Navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="" target="_blank" rel="noreferrer">
        Resume
      </a>
    </nav>
  );
}

function Footer({ id, }) {
  return (
    <div className="Footer" id={id}>
      <div className="home-link">
        <a href="#home">
          {/* <img src={homeLink} alt="home" /> */}
        </a>
      </div>
      <div className="img-link-container">
        <a
          href="https://github.com/L-Lainio"
          target="_blank"
          className="home-go-to" rel="noreferrer"
        >
          {/* <img src={githubLink} alt="github" /> */}
        </a>
        <a
          href="mailto:arollainio@gmail.com"
          target="_blank"
          className="home-go-to" rel="noreferrer"
        >
          {/* <img src={contactIcon} alt="email" /> */}
        </a>
        <a
          href="https://www.linkedin.com/in/lora-lainio-1a3a55255/"
          target="_blank"
          className="home-go-to" rel="noreferrer"
        >
          {/* <img src={linkedinIcon} alt="linkedin" /> */}
        </a>
      </div>
      <p>Lora Lainio</p>
    </div>
  );
}

export default App;
