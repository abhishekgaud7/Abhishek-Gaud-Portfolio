import { useState } from 'react'
import { Project } from '../../../types'
import { projectsData as visionProjects } from '../../../data/projects'
import { motion, useMotionValue, useTransform, AnimatePresence, PanInfo } from 'framer-motion'

const SPRING_CONFIG = {
  type: 'spring' as const,
  stiffness: 150,
  damping: 20,
}

const clampIndex = (index: number, length: number) => {
  const mod = index % length
  return mod < 0 ? mod + length : mod
}

export const VisionOSProjectsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const dragX = useMotionValue(0)

  // Subtle parallax on drag for the whole stack
  const sceneRotateY = useTransform(dragX, [-300, 300], [-6, 6])
  const sceneTranslateX = useTransform(dragX, [-300, 300], [-40, 40])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80
    const { x } = info.offset

    if (x > threshold) {
      setActiveIndex((prev) => clampIndex(prev - 1, visionProjects.length))
    } else if (x < -threshold) {
      setActiveIndex((prev) => clampIndex(prev + 1, visionProjects.length))
    }

    dragX.set(0)
  }

  const getCardConfig = (position: number) => {
    if (position === 0) {
      return {
        scale: 1,
        rotateY: 0,
        translateX: 0,
        translateZ: 150,
        opacity: 1,
        blur: 0,
        zIndex: 50,
      }
    }

    if (position === -1) {
      return {
        scale: 0.75,
        rotateY: 25,
        translateX: -200,
        translateZ: 0,
        opacity: 0.6,
        blur: 4,
        zIndex: 20,
      }
    }

    if (position === 1) {
      return {
        scale: 0.75,
        rotateY: -25,
        translateX: 200,
        translateZ: 0,
        opacity: 0.6,
        blur: 4,
        zIndex: 20,
      }
    }

    return {
      scale: 0.6,
      rotateY: position < 0 ? 40 : -40,
      translateX: position * 120,
      translateZ: -200,
      opacity: 0.3,
      blur: 8,
      zIndex: 10,
    }
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Soft radial background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-10 top-10 h-64 rounded-[40px] bg-gradient-to-r from-sky-500/15 via-blue-400/10 to-violet-500/15 blur-3xl" />
        <div className="absolute inset-x-20 bottom-0 h-48 rounded-[40px] bg-slate-900/80 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,0,0,0.85)]" />
      </div>

      <div
        className="
          relative w-full h-[600px]
          flex items-center justify-center
          perspective-[2000px] overflow-visible
        "
      >
        <motion.div
          className="relative w-full max-w-5xl h-[420px]"
          style={{
            x: sceneTranslateX,
            rotateY: sceneRotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            drag="x"
            style={{ x: dragX, transformStyle: 'preserve-3d' }}
            dragElastic={0.2}
            dragConstraints={{ left: 0, right: 0 }}
            transition={SPRING_CONFIG}
            onDragEnd={handleDragEnd}
            className="relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence initial={false}>
              {visionProjects.map((project: Project, index: number) => {
                const position = clampIndex(index - activeIndex, visionProjects.length)
                const normalized =
                  position === 0
                    ? 0
                    : position > visionProjects.length / 2
                      ? position - visionProjects.length
                      : position

                const cfg = getCardConfig(normalized)

                const baseTransform = `translateZ(${cfg.translateZ}px)`

                return (
                  <motion.div
                    key={project.title}
                    initial={false}
                    animate={{
                      scale: cfg.scale,
                      opacity: cfg.opacity,
                      x: cfg.translateX,
                      rotateY: cfg.rotateY,
                    }}
                    transition={SPRING_CONFIG}
                    style={{
                      transform: `${baseTransform}`,
                      filter: `blur(${cfg.blur}px)`,
                      transformStyle: 'preserve-3d',
                      zIndex: cfg.zIndex,
                    }}
                    className={`
                      absolute w-[360px] md:w-[420px] lg:w-[460px] h-[380px]
                      rounded-3xl backdrop-blur-2xl bg-white/60 border border-white/40
                      shadow-[0_18px_60px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_22px_80px_rgba(0,0,0,0.15)]
                      transition-shadow duration-300
                      overflow-hidden
                      flex flex-col
                      ${normalized === 0 ? 'scale-100' : 'md:scale-95'}
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex-1 px-5 pt-5 pb-4 flex flex-col">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-white/10 mix-blend-screen" />
                        <img
                          src={project.image}
                          className="rounded-2xl w-full h-[260px] object-cover"
                          alt={project.title}
                        />
                      </div>

                      <h3 className="text-2xl font-semibold mt-4 text-gray-900 drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((t: string) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-md bg-black/5 text-gray-700 border border-gray-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-primary hover:text-primary-glow hover:underline text-sm"
                      >
                        Visit Project →
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default VisionOSProjectsCarousel


