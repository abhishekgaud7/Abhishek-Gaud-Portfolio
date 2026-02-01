import React from 'react'
import { certificateData, certificateImages } from '../data/certificates'

const Certificate: React.FC = () => {
  return (
    <section id="certificate" className="py-20 relative bg-black/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Additional Courses Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">Professional Training</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Additional Courses</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {certificateData.map((cert, index) => (
              <div key={index} className="glass p-8 rounded-2xl border-l-4 border-primary hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{cert.school}</h3>
                    <p className="text-lg text-primary">{cert.qualification}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{cert.location}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {cert.meta && (
                  <div className="text-xs text-accent font-mono mt-4 pt-4 border-t border-white/5">
                    {cert.meta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Gallery Section */}
        {certificateImages.length > 0 && (
          <div>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">Achievements</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Certificates</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificateImages.map((cert) => (
                <div key={cert.id} className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(198,108,73,0.15)] transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden bg-black/50">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm font-medium">View Certificate</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h4>
                    <div className="flex justify-between items-center text-sm">
                      {cert.issuer && <span className="text-primary font-medium">{cert.issuer}</span>}
                      {cert.date && <span className="text-gray-500">{cert.date}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificate
