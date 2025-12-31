import React from 'react'
import { skillsData } from '../data/skills'
import './Skills.css'

const Skills: React.FC = () => {

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.category}</h3>
              {skill.description && <p className="skill-subtitle">{skill.description}</p>}
              <div className="skill-items">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
