import { useEffect } from 'react' // 'React' ko hata diya
import './App.css'
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

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="app">
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