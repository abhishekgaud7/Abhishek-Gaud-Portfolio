// Components
import About from './components/About'
import Achievements from './components/Achievements'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

// Styles
import './App.css'

function App(): JSX.Element {

  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App