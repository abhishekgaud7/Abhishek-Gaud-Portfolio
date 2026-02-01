import React, { useRef, useEffect } from 'react'
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { SOCIALS } from '../data/socials'

const Landing: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium tracking-wide">
            Java Full Stack Developer & Data Scientist
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Hello, <br />
            <span className="text-gradient">I'm Abhishek!</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Building scalable web applications and exploring the frontiers of AI/ML.
            Crafting digital experiences with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-glow transition-all duration-300 shadow-neon transform hover:-translate-y-1"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full glass border border-white/10 hover:border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white/5"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
            <a href={`mailto:${SOCIALS.email}`} className="text-gray-400 hover:text-accent transition-colors">
              <FiMail size={24} />
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Glowing ring behind */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
            <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Image mask */}
            <div className="absolute inset-4 rounded-full overflow-hidden glass border-4 border-white/5 shadow-2xl">
              <img
                src="/images/profile.png"
                alt="Abhishek Gaud"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-primary transition-colors"
      >
        <FiChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default Landing