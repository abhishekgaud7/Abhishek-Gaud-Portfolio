import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I am a highly motivated and aspiring Software Developer with a strong foundation in computer science principles and a passion for building elegant and functional web applications. As a recent graduate, I am eager to apply my academic knowledge and hands-on project experience in a professional setting.
        </p>
        <p className="about-text">
          My core strength lies in <strong>Java</strong>, and I am actively developing my expertise in the <strong>Spring ecosystem</strong> (including Spring Boot and Hibernate) to build robust backend services. I also have a keen interest in frontend development and have been honing my skills in <strong>React, JavaScript, and TypeScript</strong> to create engaging user interfaces. I am a fast learner, a collaborative team player, and I am excited to contribute to challenging projects where I can grow my skills and make a meaningful impact.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="card-icon">💻</div>
            <h4>Core Programming</h4>
            <p>Solid foundation in Java, with exposure to JavaScript & C++.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">⚙️</div>
            <h4>Backend Focus</h4>
            <p>Eager to master Spring Boot, REST APIs, and Hibernate.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">🌐</div>
            <h4>Full-Stack Interest</h4>
            <p>Learning React & TypeScript for modern UI development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
