import React from 'react'
import { certificateData, certificateImages } from '../data/certificates'
import './Certificate.css'

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
                  <div className="certificate-image-wrapper" title={cert.title}>
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
