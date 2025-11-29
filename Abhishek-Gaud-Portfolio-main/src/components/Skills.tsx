import React from 'react'
import './Skills.css'

interface Skill {
  category: string
  description?: string
  items: string[]
}

const Skills: React.FC = () => {
  const skillsData: Skill[] = [
    {
      category: 'Programming Languages',
      description: 'Day-to-day stack for building performant product features.',
      items: ['Java', 'C++', 'JavaScript', 'TypeScript', 'React', 'SQL', 'MySQL']
    },
    {
      category: 'Spring & Backend Frameworks',
      description: 'Hands-on with Spring ecosystem for secure, production APIs.',
      items: ['Spring Boot', 'Spring MVC', 'Hibernate ORM', 'JWT Auth', 'REST APIs', 'Web Services']
    },
    {
      category: 'Tools & Delivery',
      description: 'Collaboration, testing, and shipping workflows I rely on.',
      items: ['Git', 'GitHub', 'MySQL Workbench', 'HTML/CSS', 'JavaMailSender', 'Postman', 'Maven', 'VS Code', 'Eclipse']
    }
  ]

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
