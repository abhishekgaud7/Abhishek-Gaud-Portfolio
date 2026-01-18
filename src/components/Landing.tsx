import React, { useRef, useEffect } from 'react'
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import { SOCIALS } from '../data/socials'
import './Landing.css'


const Landing: React.FC = () => {
  const tagRef = useRef<HTMLSpanElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctaPrimary = useRef<HTMLAnchorElement | null>(null)
  const blob1 = useRef<HTMLDivElement | null>(null)
  const blob2 = useRef<HTMLDivElement | null>(null)
  const blob3 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Set initial states
    gsap.set(tagRef.current, { opacity: 0, y: 18 })
    gsap.set(subtitleRef.current, { opacity: 0, y: 18 })
    gsap.set(ctaPrimary.current, { opacity: 0, y: 16 })

    tl.to(tagRef.current, { y: 0, opacity: 1, duration: 0.5 })
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
      .to(ctaPrimary.current, { y: 0, opacity: 1, duration: 0.45 }, '-=0.25')

    const b1 = gsap.to(blob1.current, { x: 28, y: 18, duration: 12, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    const b2 = gsap.to(blob2.current, { x: -20, y: -12, duration: 16, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    const b3 = gsap.to(blob3.current, { x: 15, y: -15, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' })

    return () => {
      tl.kill()
      b1.kill()
      b2.kill()
      b3.kill()
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="landing">
      <div className="landing-bg">
        {/* Decorative Retro Elements */}
        <div className="retro-shape circle-1"></div>
        <div className="retro-shape star-1" aria-hidden="true">✦</div>
        <div className="retro-shape star-2" aria-hidden="true">✦</div>
      </div>

      <div className="landing-content">
        <div className="landing-intro">
          <span className="intro-tag" ref={tagRef}>Java Full Stack Developer | Aspiring Data Scientist | B.Tech Graduate ’25 | Specialized in Spring Boot, React & Data Science | 3x Internship Experience</span>
        </div>

        <h1 className="landing-title">
          <span className="title-word serif">Hello,</span>
          <br />
          <span className="title-word serif">I'm Abhishek!</span>
        </h1>

        <p className="landing-subtitle" ref={subtitleRef}>
          I am a self-taught Developer based in India with extensive experience in building scalable web applications.
        </p>

        <div className="landing-cta">
          <a ref={ctaPrimary} href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button primary">
            LinkedIn Profile
          </a>
        </div>

        <div className="social-links">
          <a href={`mailto:${SOCIALS.email}`} className="social-icon" title="Email" aria-label={`Send email to ${SOCIALS.email}`}>
            <FiMail size={20} />
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" aria-label="Visit GitHub Profile">
            <FiGithub size={20} />
          </a>
        </div>

        <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to About Section">
          <FiChevronDown size={20} />
        </button>
      </div>

      <div className="landing-image-section">
        <div className="image-frame">
          <img
            src="/images/profile.png"
            alt="Abhishek Gaud - Java Full Stack Developer | Aspiring Data Scientist"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Landing