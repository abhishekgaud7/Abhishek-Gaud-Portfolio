import React from 'react'
import './Experience.css'

interface ExperienceItem {
  company: string
  role: string
  period: string
  contributions: string[]
}

const experienceData: ExperienceItem[] = [
  {
    company: 'DevTown',
    role: 'Front End Developer Intern',
    period: 'June 2022 – Oct 2022',
    contributions: [
      'Translated high-fidelity UI concepts into responsive React components and micro-interactions.',
      'Improved perceived performance with code-splitting and reusable animation primitives built with GSAP.',
      'Partnered with backend team to wire REST endpoints and validate data contracts in Postman.'
    ]
  },
  {
    company: 'AcmeGrade',
    role: 'Web Developer Intern',
    period: 'Aug 2022 – Dec 2023',
    contributions: [
      'Delivered full-stack features with Spring Boot, Hibernate, and MySQL—covering auth, dashboards, and reporting flows.',
      'Owned CI-ready API documentation, JWT security hardening, and regression test data with Postman/Maven scripts.',
      'Mentored junior interns on Git workflows, review-ready pull requests, and accessibility-focused styling.'
    ]
  }
]

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
            <article key={index} className="experience-card">
              <header className="experience-meta">
                <div>
                  <p className="experience-company">{exp.company}</p>
                  <h3>{exp.role}</h3>
                </div>
                <span className="experience-period">{exp.period}</span>
              </header>
              <ul>
                {exp.contributions.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

