import React, { useState, useCallback } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { projectsData } from '../data/projects'

/**
 * Projects Component
 * Displays a 3D carousel of featured projects with glassmorphism design.
 * Optimized with useMotionValue for high performance animations.
 */
const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalProjects = projectsData.length

  // Motion values for the tilt effect - optimizing performance by avoiding re-renders
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics for the tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 })

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
      translateX: normalizedOffset * 100,
      translateZ: -320,
      opacity: 0,
      zIndex: 1,
      filter: 'none', // Optimization: remove blur on hidden items
      pointerEvents: 'none',
      visibility: 'hidden', // Hide completely if not visible
      display: 'none', // Optimization: remove from layout
    }

    if (normalizedOffset === 0) {
      style = {
        scale: 1,
        translateX: 0,
        translateZ: 0,
        opacity: 1,
        zIndex: 10,
        filter: 'none',
        pointerEvents: 'auto',
        visibility: 'visible',
        display: 'block',
      }
    } else if (Math.abs(normalizedOffset) === 1) {
      style = {
        scale: 0.85,
        translateX: normalizedOffset * 160,
        translateZ: -100,
        opacity: 0.7,
        zIndex: 5,
        filter: 'none', // Optimization: remove blur
        pointerEvents: 'none', // Optimization
        visibility: 'visible',
        display: 'block',
      }
    } else if (Math.abs(normalizedOffset) === 2) {
      style = {
        scale: 0.75,
        translateX: normalizedOffset * 130,
        translateZ: -200,
        opacity: 0.4,
        zIndex: 3,
        filter: 'blur(2px)', // Reduced blur
        pointerEvents: 'none', // Optimization
        visibility: 'visible',
        display: 'block',
      }
    }

    return { ...style, rotateY: 0 } // Base rotation is 0, tilt handled by motion values for active card
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    // Calculate normalized position (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Elements - Deep Space Nebula */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light tracking-wide">Explore my timeline of digital creations.</p>
        </div>

        <div className="relative h-[500px] w-full perspective-1000 flex items-center justify-center">
          {projectsData.map((project, index) => {
            const cardStyle = getCardStyle(index)
            const isActive = index === activeIndex

            return (
              <motion.article
                key={index}
                className="absolute w-[350px] md:w-[450px] aspect-[4/5] bg-glass border border-white/40 rounded-3xl overflow-hidden cursor-pointer shadow-glass group"
                initial={false}
                animate={{
                  scale: cardStyle.scale,
                  x: `calc(-50% + ${cardStyle.translateX}px)`,
                  z: cardStyle.translateZ,
                  opacity: cardStyle.opacity,
                  filter: cardStyle.filter,
                  zIndex: cardStyle.zIndex,
                }}
                style={{
                  rotateX: isActive ? rotateX : 0,
                  rotateY: isActive ? rotateY : 0,
                  transformStyle: 'preserve-3d',
                  left: '50%',
                  top: '50%',
                  y: '-50%', // Center vertically using translate instead of calc in animate (smoother)
                  willChange: 'transform, opacity, filter', // Hardware acceleration hint
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                onMouseMove={isActive ? handleMouseMove : undefined}
                onMouseLeave={isActive ? handleMouseLeave : undefined}
                onClick={() => scrollToIndex(index)}
              >
                {/* Image Section */}
                <div className="h-[55%] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-3xl font-bold font-heading text-white mb-2 drop-shadow-md">{project.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="h-[45%] p-6 flex flex-col justify-between bg-white/60">
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 font-normal">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-4">

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-all shadow-neon hover:shadow-neon-cyan hover:-translate-y-1"
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
        <div className="flex justify-center gap-6 mt-12 pb-12">
          <button
            onClick={() => scrollCarousel('prev')}
            className="p-4 rounded-full glass hover:bg-white/50 text-gray-800 transition-all transform hover:scale-110 active:scale-95 shadow-lg"
            aria-label="Previous Project"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={() => scrollCarousel('next')}
            className="p-4 rounded-full glass hover:bg-white/50 text-gray-800 transition-all transform hover:scale-110 active:scale-95 shadow-lg"
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