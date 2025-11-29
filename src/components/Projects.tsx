import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  github?: string
}

const Projects: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const projectsData: Project[] = [
    {
      title: 'MediGuardia',
      description: 'Your Personal AI Health Companion - An AI-powered health application that provides personalized health recommendations and insights.',
      tech: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      link: 'https://mediguardia.vercel.app/',
      github: 'https://github.com/abhishekgaud7'
    },
    {
      title: 'Personalized News Aggregator',
      description: 'A web application that filters and recommends news articles based on user preferences using ML recommendation systems.',
      tech: ['Python', 'Flask', 'TensorFlow', 'News API', 'React'],
      link: '#',
      github: 'https://github.com/abhishekgaud7'
    },
    {
      title: 'Secure Password Manager',
      description: 'An encrypted password vault with AES-256 encryption, secure storage, and master password protection.',
      tech: ['Python', 'Encryption', 'SQLite', 'Security'],
      link: '#',
      github: 'https://github.com/abhishekgaud7'
    },
    {
      title: 'Habit Tracker with Data Visualization',
      description: 'Full-stack habit tracking application with interactive charts and progress visualization.',
      tech: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/abhishekgaud7'
    },
    {
      title: 'Employee Management System',
      description: 'Role-based platform to onboard employees, track reviews, and manage payroll approvals with automated email workflows.',
      tech: ['Spring Boot', 'Hibernate', 'REST', 'MySQL', 'React'],
      link: 'https://github.com/abhishekgaud7/employee-management-system',
      github: 'https://github.com/abhishekgaud7/employee-management-system'
    },
    {
      title: 'Online Examination System',
      description: 'Full-stack exam engine with JWT auth, timed assessments, and analytics dashboards for instructors and learners.',
      tech: ['Spring MVC', 'Hibernate', 'JWT', 'MySQL', 'TypeScript'],
      link: 'https://github.com/abhishekgaud7/online-examination-system',
      github: 'https://github.com/abhishekgaud7/online-examination-system'
    },
    {
      title: 'OTP-based Email Verification',
      description: 'Microservice that issues signed OTP tokens, validates expiry, and secures onboarding flows with audit-grade logs.',
      tech: ['Spring Boot', 'JavaMailSender', 'MySQL', 'JWT', 'Postman'],
      link: 'https://github.com/abhishekgaud7/otp-email-verification',
      github: 'https://github.com/abhishekgaud7/otp-email-verification'
    }
  ]

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

  // 3D transform based on active index
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
        translateX: 150,
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
        translateX: 150 + (normalizedOffset * 120),
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
        translateX: 150 + (normalizedOffset * 100),
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
      translateX: 150 + (normalizedOffset * 80),
      translateY: 0,
      translateZ: -320,
      opacity: 0.35,
      zIndex: 1,
      filter: 'blur(5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(99, 102, 241, 0.1)',
    }
  }

  // NOTE: Maine is function ko comment kar diya hai kyunki ye niche use nahi ho raha tha
  // aur build error de raha tha. Agar future mein chahiye ho to uncomment kar lena.
  /*
  const startAutoplay = () => {
    if (!totalProjects) return
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(() => {
      scrollCarousel('next')
    }, 6000)
  }
  */

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
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

  useEffect(() => {
    // startAutoplay() // Temporarily disabled autoplay
    return () => {
      stopAutoplay()
    }
  }, [activeIndex])


  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
        </div>
        <div
          className="projects-grid-3d"
          ref={carouselRef}
        >
          {projectsData.map((project, index) => {
            const cardStyle = getCardStyle(index)
            const isActive = index === activeIndex
            
            return (
            <motion.article
              key={index}
              className="project-card-3d"
              initial={false}
              animate={{
                scale: cardStyle.scale,
                rotateY: isActive ? cardStyle.rotateY + mousePosition.y : cardStyle.rotateY,
                rotateX: isActive ? mousePosition.x : 0,
                x: cardStyle.translateX,
                y: cardStyle.translateY,
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
                marginLeft: `calc(min(-210px, -42.5vw) + ${cardStyle.translateX}px)`,
                marginTop: `calc(-200px + ${cardStyle.translateY}px)`,
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
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Live
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link ghost">
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