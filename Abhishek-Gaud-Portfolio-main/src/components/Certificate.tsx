import React from 'react'
import './Certificate.css'

interface CertificateItem {
  school: string
  qualification: string
  location: string
  details: string[]
  meta?: string
}

const certificateData: CertificateItem[] = [
  {
    school: 'Tops Technologies',
    qualification: 'Full Stack Java Developer',
    location: 'Ahmedabad, India',
    details: [
        'Completed an intensive Full Stack Java Development course.',
        'Skills: C, C++, SQL, HTML, CSS, JavaScript, Bootstrap, jQuery, React.js, Java, JSP, Servlet, JDBC, Spring Boot, Hibernate, Microservices, RESTful API.',
        'Winner of multiple coding events and competitions.'
    ],
    meta: 'Certification'
  },
]

const Certificate: React.FC = () => {
  return (
    <section id="certificate" className="certificate">
      <div className="certificate-container">
        <div className="certificate-head">
          <p className="eyebrow">Professional Training</p>
          <h2>Certification</h2>
        </div>

        <div className="certificate-timeline">
          {certificateData.map((cert, index) => (
            <article key={index} className="certificate-card">
              <div className="certificate-info">
                <header>
                  <h3>{cert.school}</h3>
                  <p className="certificate-qualification">{cert.qualification}</p>
                  <span className="certificate-location">{cert.location}</span>
                </header>
                <ul>
                  {cert.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {cert.meta && <div className="certificate-meta">{cert.meta}</div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
