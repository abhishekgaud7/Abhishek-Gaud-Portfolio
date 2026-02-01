import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="glass p-6 rounded-2xl border-l-4 border-primary">
              I am a <strong>Data Scientist</strong> and <strong>Java Full Stack Developer</strong> with a relentless passion for solving complex problems through <strong>Data Structures & Algorithms (DSA)</strong>.
              With a strong foundation in computer science and mathematics, I blend analytical thinking with engineering precision to build scalable applications and data-driven solutions.
            </p>
            <p>
              My expertise spans the entire development lifecycle, from architecting robust backends using <strong>Spring Boot & Java</strong> to creating interactive frontends with <strong>React</strong>.
              Simultaneously, I leverage advanced <strong>Data Science & Machine Learning</strong> techniques to extract actionable insights. My consistent practice of DSA ensures that every solution I engineer is optimized for performance and efficiency.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: "🚀", title: "Java Full Stack", desc: "Expertise in Spring Boot, React, and building scalable Microservices." },
              { icon: "📊", title: "Data Science & ML", desc: "Proficient in Python, Pandas, NumPy, and Building Predictive Models." },
              { icon: "🧩", title: "DSA & Problem Solving", desc: "Strong command over Algorithms, LeetCode, and Performance Optimization." }
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:bg-black/5 transition-colors duration-300 flex items-start gap-4 transform hover:-translate-y-1">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
