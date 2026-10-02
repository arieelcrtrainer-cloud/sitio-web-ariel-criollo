'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const clamp = (value: number) => Math.min(1, Math.max(0, value))

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) return

    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollRange = Math.max(1, section.offsetHeight - window.innerHeight)
        const progress = clamp(-section.getBoundingClientRect().top / scrollRange)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const problemOpacity = prefersReducedMotion ? (progress < 0.5 ? 1 : 0) : 1 - clamp((progress - 0.23) / 0.27)
        const solutionOpacity = prefersReducedMotion ? (progress >= 0.5 ? 1 : 0) : clamp((progress - 0.42) / 0.27)
        const problemY = (1 - problemOpacity) * -6
        const solutionY = (1 - solutionOpacity) * 6

        stage.style.setProperty('--problem-opacity', String(problemOpacity))
        stage.style.setProperty('--solution-opacity', String(solutionOpacity))
        stage.style.setProperty('--problem-y', `${problemY}px`)
        stage.style.setProperty('--solution-y', `${solutionY}px`)
        setShowSolution((visible) => {
          const next = progress >= 0.5
          return visible === next ? visible : next
        })
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <section
      className="problem-solution-section"
      id="problema"
      aria-label="El problema y la solución"
      ref={sectionRef}
    >
      <div className="problem-solution-stage" ref={stageRef}>
        <article className="problem-solution-layer problem-story editorial-section" aria-labelledby="problem-title" aria-hidden={showSolution}>
          <div className="problem-copy editorial-copy">
            <p className="eyebrow editorial-eyebrow">El problema</p>
            <h2 id="problem-title">
              Has empezado más de una vez.<br />
              <span className="highlight-accent">Mantener el proceso es otra historia.</span>
            </h2>
            <p>
              Quizás ya has probado entrenamientos, dietas o planes que funcionaron durante un tiempo. El problema aparece cuando cambia tu horario, pierdes ritmo, tienes una semana complicada o simplemente dejas de saber qué deberías ajustar.
            </p>
            <p>
              El resultado suele ser el mismo: vuelves a empezar, cambias de estrategia y vuelves a buscar qué hacer.
            </p>
          </div>

          <figure className="problem-image editorial-image">
            <Image
              src="/images/editorial-process.png"
              alt="Una persona se toma un momento de pausa y reflexión en un estudio de entrenamiento oscuro."
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              loading="lazy"
              quality={78}
            />
          </figure>
        </article>

        <article className="problem-solution-layer solution-story editorial-section" aria-labelledby="solution-title" aria-hidden={!showSolution}>
          <figure className="reframe-image editorial-image">
            <Image
              src="/images/editorial-planning.png"
              alt="Cuaderno abierto, bolígrafo y portátil en un espacio de planificación junto al entrenamiento."
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              loading="lazy"
              quality={78}
            />
          </figure>

          <div className="reframe-copy editorial-copy">
            <p className="eyebrow editorial-eyebrow">La solución</p>
            <h2 id="solution-title">LA SOLUCIÓN: UNA ESTRATEGIA CON INTENCIÓN</h2>
            <p>
              Tu objetivo, tu experiencia, el tiempo que tienes disponible, tus hábitos y la forma en que responde tu cuerpo condicionan las decisiones que debes tomar.
            </p>
            <p>
              Por eso una estrategia útil no se limita a decirte qué hacer. También debe permitirte saber qué mantener, qué ajustar y cuándo hacerlo.
            </p>
            <p className="reframe-conclusion highlight-accent">Necesitas una estrategia diseñada para ti.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProblemSection
