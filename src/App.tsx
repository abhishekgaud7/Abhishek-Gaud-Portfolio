// Components
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      <Contact />
      <Footer />
    </div>
  )
}

export default App