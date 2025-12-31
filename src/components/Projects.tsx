import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import './Projects.css'

import { projectsData } from '../data/projects'

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })


  const totalProjects = projectsData.length

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
  }

  const scrollCarousel = useCallback((direction: 'prev' | 'next') => {
    if (!totalProjects) return
    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % totalProjects
        : (activeIndex - 1 + totalProjects) % totalProjects
    setActiveIndex(nextIndex)
  }, [activeIndex, totalProjects])

  /**
   * Calculates the 3D transform styles for a card based on its index relative to the active index.
   * Handles the circular carousel logic and visual depth effects (scale, blur, opacity).
   * @param index - The index of the project card
   * @returns CSSProperties for the card's transformation
   */
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex
    const absOffset = Math.abs(offset)

    // Normalize offset for circular carousel
    let normalizedOffset = offset
    if (absOffset > totalProjects / 2) {
      normalizedOffset = offset > 0 ? offset - totalProjects : offset + totalProjects
    }

    if (normalizedOffset === 0) {
      return {
        scale: 1,
        rotateY: 0,
        translateX: 0, // Centered
        translateY: 0,
        translateZ: 0,
        opacity: 1,
        zIndex: 10,
        filter: 'blur(0px)',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 50px rgba(99, 102, 241, 0.3)',
      }
    }

    if (Math.abs(normalizedOffset) === 1) {
      return {
        scale: 0.88,
        rotateY: normalizedOffset > 0 ? -28 : 28,
        translateX: normalizedOffset * 150, // Reduced spread
        translateY: 0,
        translateZ: -120,
        opacity: 0.75,
        zIndex: 5,
        filter: 'blur(1.5px)',
        boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)',
      }
    }

    if (Math.abs(normalizedOffset) === 2) {
      return {
        scale: 0.75,
        rotateY: normalizedOffset > 0 ? -38 : 38,
        translateX: normalizedOffset * 120,
        translateY: 0,
        translateZ: -220,
        opacity: 0.55,
        zIndex: 3,
        filter: 'blur(3px)',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.35), 0 0 20px rgba(99, 102, 241, 0.15)',
      }
    }

    return {
      scale: 0.65,
      rotateY: normalizedOffset > 0 ? -45 : 45,
      translateX: normalizedOffset * 100,
      translateY: 0,
      translateZ: -320,
      opacity: 0.35,
      zIndex: 1,
      filter: 'blur(5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(99, 102, 241, 0.1)',
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollCarousel('prev')
      } else if (e.key === 'ArrowRight') {
        scrollCarousel('next')
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [scrollCarousel])

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
        </div>
        <div
          className="projects-grid-3d reveal-animation delay-200"
          ref={carouselRef}
        >
          {projectsData.map((project, index) => {
            const cardStyle = getCardStyle(index)
            const isActive = index === activeIndex

            return (
              <motion.article
                key={index}
                className={`project - card - 3d ${isActive ? 'active' : ''} `}
                initial={false}
                animate={{
                  scale: cardStyle.scale,
                  rotateY: isActive ? cardStyle.rotateY + mousePosition.y : cardStyle.rotateY,
                  rotateX: isActive ? mousePosition.x : 0,
                  x: `calc(-50% + ${cardStyle.translateX}px)`, // Center then offset
                  y: `calc(-50% + ${cardStyle.translateY}px)`,
                  z: cardStyle.translateZ,
                  opacity: cardStyle.opacity,
                  filter: cardStyle.filter,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                style={{
                  zIndex: cardStyle.zIndex,
                  transformStyle: 'preserve-3d',
                  boxShadow: cardStyle.boxShadow,
                  transformOrigin: 'center center',
                  left: '50%',
                  top: '50%',
                  position: 'absolute',
                }}
                onMouseMove={(event) => {
                  if (!isActive) return
                  const rect = event.currentTarget.getBoundingClientRect()
                  const x = event.clientX - rect.left
                  const y = event.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = ((y - centerY) / centerY) * -8
                  const rotateY = ((x - centerX) / centerX) * 8
                  setMousePosition({ x: rotateX, y: rotateY })
                }}
                onMouseLeave={() => {
                  if (isActive) setMousePosition({ x: 0, y: 0 })
                }}
                onClick={() => {
                  scrollToIndex(index)
                }}
              >
                <div className="project-glow" aria-hidden="true"></div>
                <div className="project-img-wrapper" style={{ height: '150px', overflow: 'hidden', borderRadius: '12px 12px 0 0', position: 'relative' }}>
                  <div className="project-img-container" style={{ width: '100%', height: '100%' }}>
                    <img src={project.image} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>

                <div className="project-card__content">
                  <header className="project-header">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </header>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link ghost"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
        <div className="projects-controls-bottom">
          <div className="projects-carousel-controls">
            <button onClick={() => scrollCarousel('prev')} aria-label="Previous projects">
              <FiArrowLeft />
            </button>
            <button onClick={() => scrollCarousel('next')} aria-label="Next projects">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects