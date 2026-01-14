import React from 'react'
import { achievementsData } from '../data/achievements'
import './Achievements.css'

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <div className="achievements-head">
          <p className="eyebrow">Hardware & Lab Wins</p>
          <h2>Electronics & Robotics Highlights</h2>
          <p className="lead">
            Beyond software, I ship tangible prototypes—blending sensors, microcontrollers, and hands-on testing to solve real problems.
          </p>
        </div>
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <article key={index} className="achievement-card reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="achievement-index" aria-label={`Achievement number ${index + 1}`}>#{String(index + 1).padStart(2, '0')}</div>
              <div className="achievement-body">
                <p className="achievement-context">{achievement.context}</p>
                <h3>{achievement.title}</h3>
                <p className="achievement-takeaway">{achievement.takeaway}</p>
                <span className="achievement-meta">{achievement.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

