import React, { useRef, useEffect } from 'react'
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import './Landing.css'

// Scene removed for Retro Theme

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
        <div className="retro-shape star-1">✦</div>
        <div className="retro-shape star-2">✦</div>
      </div>

      <div className="landing-content">
        <div className="landing-intro">
          <span className="intro-tag" ref={tagRef}>Full Stack Developer</span>
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
          <a ref={ctaPrimary} href="https://linkedin.com/in/abhishekgaud" className="cta-button primary">
            LinkedIn Profile
          </a>
        </div>

        <div className="social-links">
          <a href="mailto:ritikempire505@gmail.com" className="social-icon" title="Email">
            <FiMail size={20} />
          </a>
          <a href="https://github.com/abhishekgaud7" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FiGithub size={20} />
          </a>
        </div>

        <button className="scroll-indicator" onClick={scrollToAbout}>
          <FiChevronDown size={20} />
        </button>
      </div>

      <div className="landing-image-section">
        <div className="image-frame">
          <img src="/images/profile.png" alt="Abhishek Gaud - Full Stack Developer" />
        </div>
      </div>
    </section>
  )
}

export default Landing