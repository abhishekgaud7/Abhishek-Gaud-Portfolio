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
import './App.css'

import Footer from './components/Footer'

function App() {

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
      <Footer />
    </div>
  )
}

export default App