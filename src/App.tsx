import { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Certificate from './components/Certificate'
import Cursor from './components/Cursor'

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Education />
      <Certificate />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App