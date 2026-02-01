import React from 'react'
import { experienceData } from '../data/experience'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">Where I have contributed</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">Experience</h2>
        </div>

        <div className="space-y-12 relative before:content-[''] before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white shadow-[0_0_10px_2px_rgba(99,102,241,0.2)] group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-white/40 hover:border-primary/30 transition-colors duration-300 bg-white/50">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-black/5 rounded-full text-gray-600 border border-black/5 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.contributions.map((point: string, idx: number) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5 text-[10px]">➢</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

