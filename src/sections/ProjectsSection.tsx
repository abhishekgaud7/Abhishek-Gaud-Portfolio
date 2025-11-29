import React from 'react'
import VisionOSProjectsCarousel from '../components/projects/visionOS/VisionOSProjectsCarousel'

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-32">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
      <div className="max-w-6xl mx-auto px-4">
        <VisionOSProjectsCarousel />
      </div>
    </section>
  )
}

export default ProjectsSection


