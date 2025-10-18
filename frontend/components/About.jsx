import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p className="about-intro">
            Hello! I'm <strong>Manchuru Vishnuvardhan</strong>, an aspiring <strong>Software Engineer</strong> currently pursuing
            my <strong>B.Tech in Computer Science and Engineering</strong> at <strong>IIIT Dharwad</strong>.  
            I’m passionate about building efficient systems and full-stack web applications.
          </p>

          <p className="about-body">
            I love working with technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
            and <strong>MongoDB</strong>. My focus is on designing scalable, high-performance solutions and exploring 
            modern web development practices.
          </p>

          <p className="about-body">
            I’ve developed several projects including a <strong>Blog Application</strong>, <strong>Chat App</strong>, and
            <strong> Encryptify (Encryption Web App)</strong>. I enjoy problem-solving, collaborating with others, and continuously
            learning new technologies to grow as a developer.
          </p>

          <div className="about-info">
            <p><strong>Email:</strong> mvishnuvardhan156@gmail.com</p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>

          <div className="about-links">
            <a href="https://github.com/vishnu2k5" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/manchuru-vishnuvardhan-38009025a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Vishnu_dev.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">View Resume</a>
          </div>
        </div>

        <div className="about-image">
          <img src="/profile.jpg" alt="Vishnuvardhan" className="about-profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
