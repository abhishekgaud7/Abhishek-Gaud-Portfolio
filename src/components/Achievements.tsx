import React from 'react'
import { achievementsData } from '../data/achievements'

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wide mb-2 uppercase text-sm">Hardware & Lab Wins</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900">Electronics & Robotics Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Beyond software, I ship tangible prototypes—blending sensors, microcontrollers, and hands-on testing to solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="glass p-8 rounded-2xl relative border border-white/40 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 bg-white/60">
              <div className="absolute -top-4 -right-4 text-6xl font-black text-black/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">{achievement.context}</p>
                <h3 className="text-xl font-bold mb-4 text-gray-900 transition-colors">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {achievement.takeaway}
                </p>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-accent">{achievement.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

