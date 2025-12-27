import React, { useRef, useEffect, useState } from 'react'
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import './Landing.css'

// Scene removed for Retro Theme

const Landing: React.FC = () => {
  const tagRef = useRef<HTMLSpanElement | null>(null)
  const titleWord1 = useRef<HTMLSpanElement | null>(null)
  const titleWord2 = useRef<HTMLSpanElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const ctaPrimary = useRef<HTMLAnchorElement | null>(null)
  const ctaSecondary = useRef<HTMLAnchorElement | null>(null)
  const blob1 = useRef<HTMLDivElement | null>(null)
  const blob2 = useRef<HTMLDivElement | null>(null)
  const blob3 = useRef<HTMLDivElement | null>(null)
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const videoRef = useRef<HTMLVideoElement | null>(null)
  /* eslint-enable @typescript-eslint/no-unused-vars */

  useEffect(() => {
    // Feature detection: prefer-reduced-motion or low device memory -> disable heavy visuals
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const deviceMemory = (navigator as any).deviceMemory || 4
    const isLowPower = deviceMemory < 2
    // WebGL detection
    const supportsWebGL = (() => {
      try {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      } catch (e) {
        return false
      }
    })()

    // Only enable video/3D when user hasn't opted for reduced motion and device is not low power
    if (!prefersReducedMotion && !isLowPower) {
      // 3D/Video disabled for Retro Theme
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Set initial states
    gsap.set([titleWord1.current, titleWord2.current], { opacity: 0, y: 40 })
    gsap.set(tagRef.current, { opacity: 0, y: 18 })
    gsap.set(subtitleRef.current, { opacity: 0, y: 18 })
    gsap.set(descRef.current, { opacity: 0, y: 18 })
    gsap.set([ctaPrimary.current, ctaSecondary.current], { opacity: 0, y: 16 })

    tl.to(tagRef.current, { y: 0, opacity: 1, duration: 0.5 })
      .to([
        titleWord1.current,
        titleWord2.current,
      ], {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.75
      }, '-=0.2')
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .to(descRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
      .to([ctaPrimary.current, ctaSecondary.current], { y: 0, opacity: 1, stagger: 0.12, duration: 0.45 }, '-=0.25')
      // Ensure title stays visible
      .set([titleWord1.current, titleWord2.current], { opacity: 1, clearProps: 'all' })

    const b1 = gsap.to(blob1.current, { x: 28, y: 18, duration: 12, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    const b2 = gsap.to(blob2.current, { x: -20, y: -12, duration: 16, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    const b3 = gsap.to(blob3.current, { x: 15, y: -15, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' })

    return () => {
      tl.kill()
      b1.kill()
      b2.kill()
      b3.kill()
      // pause video playback on cleanup
      if (videoRef.current) {
        try { videoRef.current.pause(); videoRef.current.src = ''; } catch (e) { /* ignore */ }
      }
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
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" alt="Abhishek Gaud" />
        </div>
      </div>
    </section>
  )
}

export default Landing