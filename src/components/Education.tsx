import React from 'react'
import { educationData } from '../data/education'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">Education</h2>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="glass p-8 rounded-2xl relative border-l-4 border-primary hover:bg-white/5 transition-colors duration-300">
              <div className="absolute top-8 left-[-10px] w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.school}</h3>
                  <p className="text-lg text-primary font-medium">{edu.qualification}</p>
                </div>
                <div className="text-right md:text-right">
                  <span className="block text-sm font-semibold text-gray-300 bg-white/5 px-4 py-1.5 rounded-full inline-block mb-1">
                    {edu.period}
                  </span>
                  <span className="block text-sm text-gray-500">{edu.location}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                {edu.details.map((detail: string, idx: number) => (
                  <li key={idx} className="text-gray-400 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              {edu.meta && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-sm text-accent font-mono">{edu.meta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

