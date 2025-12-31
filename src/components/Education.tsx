import React from 'react'
import { educationData } from '../data/education'
import './Education.css'

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-head">
          <p className="eyebrow">Academic Journey</p>
          <h2>Education</h2>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="education-marker">
                <span>{edu.period}</span>
              </div>
              <div className="education-info">
                <header>
                  <h3>{edu.school}</h3>
                  <p className="education-qualification">{edu.qualification}</p>
                  <span className="education-location">{edu.location}</span>
                </header>
                <ul>
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {edu.meta && <div className="education-meta">{edu.meta}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

