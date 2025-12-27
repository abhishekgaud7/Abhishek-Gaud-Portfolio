import React from 'react'
import './Education.css'

interface EducationItem {
  school: string
  qualification: string
  location: string
  period: string
  details: string[]
  meta?: string
}

const educationData: EducationItem[] = [
  {
    school: 'ShriRam Institute of Information and Technology',
    qualification: 'Bachelor of Technology · Computer Science & Engineering',
    location: 'Banmore, India',
    period: '07/2021 – 06/2025',
    details: [
      'CGPA: 7.5 / 10.0',
      'Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.',
      'Completed various projects in subjects like Web Development, and Software Engineering.'
    ],
  },
  {
    school: 'Green Field Higher Secondary School',
    qualification: '10 + 2 · Science',
    location: 'Gwalior, India',
    period: '07/2020 – 05/2021',
    details: ['GPA: 6.5 / 10.0']
  }
]

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
                <span>{edu.year}</span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

