import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I am a <strong>Data Scientist</strong> and <strong>Java Full Stack Developer</strong> with a relentless passion for solving complex problems through <strong>Data Structures & Algorithms (DSA)</strong>. With a strong foundation in computer science and mathematics, I blend analytical thinking with engineering precision to build scalable applications and data-driven solutions.
        </p>
        <p className="about-text">
          My expertise spans the entire development lifecycle, from architecting robust backends using <strong>Spring Boot & Java</strong> to creating interactive frontends with <strong>React</strong>. Simultaneously, I leverage advanced <strong>Data Science & Machine Learning</strong> techniques to extract actionable insights. My consistent practice of DSA ensures that every solution I engineer is optimized for performance and efficiency.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="card-icon">🚀</div>
            <h4>Java Full Stack</h4>
            <p>Expertise in Spring Boot, React, and building scalable Microservices.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">📊</div>
            <h4>Data Science & ML</h4>
            <p>Proficient in Python, Pandas, NumPy, and Building Predictive Models.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">🧩</div>
            <h4>DSA & Problem Solving</h4>
            <p>Strong command over Algorithms, LeetCode, and Performance Optimization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
