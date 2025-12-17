import React, { useRef, useEffect, useState } from 'react'
import { FiGithub, FiMail, FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import './Landing.css'

// Scene will be dynamically imported when needed to avoid increasing initial bundle size
const Scene = React.lazy(() => import('./Scene'))

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
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [show3D, setShow3D] = useState(false)

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
      // Prefer a short MP4 video in public folder: /videos/hero.mp4
      setShowVideo(true)
      if (supportsWebGL) setShow3D(true)
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Set initial states
    gsap.set([titleWord1.current, titleWord2.current], { y: '100%' })
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
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.2')
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .to(descRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
      .to([ctaPrimary.current, ctaSecondary.current], { y: 0, opacity: 1, stagger: 0.12, duration: 0.45 }, '-=0.25')

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
    // aboutSection?.scrollIntoView({ behavior: 'smooth' })
    // Lenis handles smooth scrolling, so we can just scrollTo
    window.scrollTo({
      top: aboutSection?.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <section id="home" className="landing">
      <div className="landing-bg">
        {/* Video background: place /public/videos/hero.mp4 for autoplayed hero */}
        {showVideo && (
          <video
            className="landing-video"
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src="/videos/hero.mp4"
          />
        )}
        {/* If device supports WebGL you can optionally mount the Scene component */}
        {show3D ? (
          <React.Suspense fallback={null}>
            <div className="landing-scene" aria-hidden>
              <Scene />
            </div>
          </React.Suspense>
        ) : null}
        <div className="blob blob-1" ref={blob1} />
        <div className="blob blob-2" ref={blob2} />
        <div className="blob blob-3" ref={blob3} />
      </div>

      <div className="landing-content">
        <div className="landing-intro">
          <span className="intro-tag" ref={tagRef}>Welcome to my portfolio</span>
        </div>

        <h1 className="landing-title">
          <div className="overflow-hidden inline-block mr-4">
            <span className="title-word block" ref={titleWord1}>Abhishek</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="title-word block" ref={titleWord2}>Gaud</span>
          </div>
        </h1>

        <p className="landing-subtitle" ref={subtitleRef}>
          Full Stack Developer • Data Scientist • Software Engineer
        </p>

        <p className="landing-description" ref={descRef}>
          Crafting beautiful and scalable digital experiences with modern technologies. Specialized in MERN Stack, Java Spring Boot, and Machine Learning.
        </p>

        <div className="landing-cta">
          <a ref={ctaPrimary} href="mailto:ritikempire505@gmail.com" className="cta-button primary magnetic">
            <FiMail size={18} />
            <span>Get In Touch</span>
          </a>
          <a ref={ctaSecondary} href="https://github.com/abhishekgaud7" target="_blank" rel="noopener noreferrer" className="cta-button secondary magnetic">
            <FiGithub size={18} />
            <span>GitHub Profile</span>
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
    </section>
  )
}

export default Landing