import React from 'react'
import { experienceData } from '../data/experience'
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="eyebrow">Where I have contributed</p>
          <h2>Experience</h2>
        </div>
        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="experience-header">
                <div>
                  <p className="experience-company">{exp.company}</p>
                  <h3>{exp.role}</h3>
                </div>
                <span className="experience-period"><time>{exp.period}</time></span>
              </div>
              <ul>
                {exp.contributions.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

