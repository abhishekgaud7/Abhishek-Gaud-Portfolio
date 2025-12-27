import React from 'react'
import './Certificate.css'

interface CertificateItem {
  school: string
  qualification: string
  location: string
  details: string[]
  meta?: string
}

interface CertificateImage {
  id: string
  title: string
  image: string
  issuer?: string
  date?: string
}

// Additional Courses/Certifications (like TOPS Technologies)
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
    meta: 'Additional Course'
  },
]

// Certificate Images Gallery
// Yahan aap certificate images add kar sakte hain
const certificateImages: CertificateImage[] = [
  {
    id: 'cert-1',
    title: 'Certificate of Training Completion',
    image: '/assets/acmegrade-cert.jpg',
  },
]

const Certificate: React.FC = () => {
  return (
    <section id="certificate" className="certificate">
      <div className="certificate-container">
        {/* Additional Courses Section */}
        <div className="certificate-head">
          <p className="eyebrow">Professional Training</p>
          <h2>Additional Courses</h2>
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

        {/* Certificates Gallery Section */}
        {certificateImages.length > 0 && (
          <>
            <div className="certificate-head" style={{ marginTop: '80px' }}>
              <p className="eyebrow">Achievements</p>
              <h2>Certificates</h2>
            </div>

            <div className="certificate-gallery">
              {certificateImages.map((cert) => (
                <div key={cert.id} className="certificate-image-card">
                  <div className="certificate-image-wrapper">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="certificate-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="certificate-image-info">
                    <h4>{cert.title}</h4>
                    {cert.issuer && <p className="certificate-issuer">{cert.issuer}</p>}
                    {cert.date && <p className="certificate-date">{cert.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Certificate
