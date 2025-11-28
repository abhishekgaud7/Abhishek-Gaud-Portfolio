import React, { useRef, useEffect, useState } from 'react'
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
    const container = carouselRef.current
    if (!container) return
    const cards = Array.from(container.children) as HTMLElement[]
    const target = cards[index]
    target?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!totalProjects) return
    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % totalProjects
        : (activeIndex - 1 + totalProjects) % totalProjects
    scrollToIndex(nextIndex)
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

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const handleScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[]
      if (!cards.length) return
      const scrollLeft = container.scrollLeft
      let closestIndex = 0
      let minDistance = Number.POSITIVE_INFINITY

      cards.forEach((card, idx) => {
        const distance = Math.abs(card.offsetLeft - scrollLeft)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = idx
        }
      })

      setActiveIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          <div className="projects-carousel-controls">
            <button onClick={() => scrollCarousel('prev')} aria-label="Previous projects">
              <FiArrowLeft />
            </button>
            <button onClick={() => scrollCarousel('next')} aria-label="Next projects">
              <FiArrowRight />
            </button>
          </div>
        </div>
        <div
          className="projects-grid"
          ref={carouselRef}
        >
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="project-card"
              onMouseMove={(event) => {
                const card = event.currentTarget
                const rect = card.getBoundingClientRect()
                const x = event.clientX - rect.left
                const y = event.clientY - rect.top
                const rotateX = ((y - rect.height / 2) / rect.height) * -12
                const rotateY = ((x - rect.width / 2) / rect.width) * 12

                card.style.setProperty('--mouse-x', `${x}px`)
                card.style.setProperty('--mouse-y', `${y}px`)
                card.style.setProperty('--tilt-x', `${rotateX}deg`)
                card.style.setProperty('--tilt-y', `${rotateY}deg`)
              }}
              onMouseLeave={(event) => {
                const card = event.currentTarget
                card.style.setProperty('--tilt-x', '0deg')
                card.style.setProperty('--tilt-y', '0deg')
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
            </article>
          ))}
        </div>
        <div className="projects-indicators">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              className={idx === activeIndex ? 'active' : ''}
              aria-label={`Go to project ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects