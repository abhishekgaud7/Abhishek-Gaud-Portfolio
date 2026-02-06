// Components
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { Suspense, lazy } from 'react'

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'))
const Achievements = lazy(() => import('./components/Achievements'))
const Contact = lazy(() => import('./components/Contact'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))

// Styles
import './App.css'

function App(): JSX.Element {

  return (
    <div className="app">
      <Navbar />
      <Landing />
      <Suspense fallback={<Loading />}>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Achievements />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App