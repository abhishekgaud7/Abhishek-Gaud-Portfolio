import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { projectsData } from '../data/projects'

/**
 * Projects Component
 * Displays a 3D carousel of featured projects with glassmorphism design.
 * Uses framed-motion for animations.
 */
const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const totalProjects = projectsData.length

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
  }

  const scrollCarousel = useCallback((direction: 'prev' | 'next') => {
    if (!totalProjects) return;
    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % totalProjects
        : (activeIndex - 1 + totalProjects) % totalProjects;
    setActiveIndex(nextIndex);
  }, [activeIndex, totalProjects]);

  /**
   * Calculates the 3D transform styles for a card based on its index relative to the active index.
   */
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex
    const absOffset = Math.abs(offset)

    // Normalize offset for circular carousel
    let normalizedOffset = offset
    if (absOffset > totalProjects / 2) {
      normalizedOffset = offset > 0 ? offset - totalProjects : offset + totalProjects
    }

    // Default style for hidden cards
    let style = {
      scale: 0.65,
      rotateY: normalizedOffset > 0 ? -45 : 45,
      translateX: normalizedOffset * 100,
      translateY: 0,
      translateZ: -320,
      opacity: 0,
      zIndex: 1,
      filter: 'blur(5px)',
      boxShadow: 'none',
    }

    if (normalizedOffset === 0) {
      style = {
        scale: 1,
        rotateY: 0,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        opacity: 1,
        zIndex: 10,
        filter: 'blur(0px)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.2)',
      }
    } else if (Math.abs(normalizedOffset) === 1) {
      style = {
        scale: 0.85,
        rotateY: normalizedOffset > 0 ? -25 : 25,
        translateX: normalizedOffset * 160,
        translateY: 0,
        translateZ: -100,
        opacity: 0.7,
        zIndex: 5,
        filter: 'blur(2px)',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    } else if (Math.abs(normalizedOffset) === 2) {
      style = {
        scale: 0.75,
        rotateY: normalizedOffset > 0 ? -35 : 35,
        translateX: normalizedOffset * 130,
        translateY: 0,
        translateZ: -200,
        opacity: 0.4,
        zIndex: 3,
        filter: 'blur(4px)',
        boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.5)',
      }
    }

    return style
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scrollCarousel('prev')
      else if (e.key === 'ArrowRight') scrollCarousel('next')
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [scrollCarousel])

  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore some of my recent work, blending creativity with technical excellence.</p>
        </div>

        <div className="relative h-[500px] w-full perspective-1000 flex items-center justify-center" ref={carouselRef}>
          {projectsData.map((project, index) => {
            const cardStyle = getCardStyle(index)
            const isActive = index === activeIndex

            return (
              <motion.article
                key={index}
                className="absolute w-[350px] md:w-[450px] aspect-[4/5] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                initial={false}
                animate={{
                  scale: cardStyle.scale,
                  rotateY: isActive ? cardStyle.rotateY + mousePosition.y : cardStyle.rotateY,
                  rotateX: isActive ? mousePosition.x : 0,
                  x: `calc(-50% + ${cardStyle.translateX}px)`,
                  y: `calc(-50% + ${cardStyle.translateY}px)`,
                  z: cardStyle.translateZ,
                  opacity: cardStyle.opacity,
                  filter: cardStyle.filter,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{
                  zIndex: cardStyle.zIndex,
                  transformStyle: 'preserve-3d',
                  boxShadow: cardStyle.boxShadow,
                  left: '50%',
                  top: '50%',
                }}
                onMouseMove={(event) => {
                  if (!isActive) return
                  const rect = event.currentTarget.getBoundingClientRect()
                  const x = event.clientX - rect.left
                  const y = event.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  setMousePosition({ x: ((y - centerY) / centerY) * -5, y: ((x - centerX) / centerX) * 5 })
                }}
                onMouseLeave={() => isActive && setMousePosition({ x: 0, y: 0 })}
                onClick={() => scrollToIndex(index)}
              >
                {/* Image Section */}
                <div className="h-[55%] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-bold font-heading text-white mb-1">{project.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-200 border border-white/5">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="h-[45%] p-6 flex flex-col justify-between bg-black/20">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> Source
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/80 hover:bg-primary text-white text-sm font-medium transition-colors shadow-lg shadow-primary/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink /> View
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() => scrollCarousel('prev')}
            className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all transform hover:scale-110"
            aria-label="Previous Project"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={() => scrollCarousel('next')}
            className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all transform hover:scale-110"
            aria-label="Next Project"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects