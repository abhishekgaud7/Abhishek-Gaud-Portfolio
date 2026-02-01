import React from 'react'
import { skillsData } from '../data/skills'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative text-gray-900">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:bg-black/5 transition-all duration-300 hover:-translate-y-2 border border-white/40 group">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">{skill.category}</h3>
              {skill.description && (
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {skill.description}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:text-white hover:border-primary/50 hover:bg-primary transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
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
