'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const questions = [
  {
    prompt: '¿Cuál es tu principal objetivo actualmente?',
    answers: [
      { label: 'Perder grasa', score: 0 },
      { label: 'Mejorar mi composición corporal', score: 0 },
      { label: 'Ganar masa muscular', score: 0 },
      { label: 'Mejorar mi condición física', score: 0 },
      { label: 'Construir mejores hábitos', score: 0 },
      { label: 'Otro', score: 0 },
    ],
  },
  {
    prompt: '¿Cuánta experiencia tienes entrenando?',
    answers: [
      { label: 'Estoy empezando', score: 1, reason: 'Estás empezando y una guía puede darte una base clara.' },
      { label: 'Tengo algo de experiencia', score: 0 },
      { label: 'Tengo experiencia regular', score: 0 },
      { label: 'Tengo bastante experiencia', score: 0, reason: 'Tienes experiencia para ejecutar un plan con autonomía.' },
    ],
  },
  {
    prompt: '¿Qué tan cómodo te sientes ejecutando un programa por tu cuenta?',
    answers: [
      { label: 'Muy cómodo', score: 0, reason: 'Te sientes cómodo siguiendo una estructura por tu cuenta.' },
      { label: 'Bastante cómodo', score: 0, reason: 'Tienes una base de autonomía para sostener un plan.' },
      { label: 'Necesito orientación', score: 1, reason: 'Te beneficiaría tener orientación al tomar decisiones.' },
      { label: 'Prefiero supervisión cercana', score: 2, reason: 'Prefieres contar con supervisión cercana.' },
    ],
  },
  {
    prompt: '¿Qué tan estable es tu semana?',
    answers: [
      { label: 'Muy estable', score: 0, reason: 'Tu semana estable facilita seguir una estructura definida.' },
      { label: 'Relativamente estable', score: 0 },
      { label: 'Cambia con frecuencia', score: 1, reason: 'Tu semana puede requerir algunos ajustes de contexto.' },
      { label: 'Mi semana cambia constantemente', score: 2, reason: 'Tu contexto cambiante puede requerir más adaptación.' },
    ],
  },
  {
    prompt: '¿Con qué frecuencia sientes que necesitas que alguien revise tu proceso?',
    answers: [
      { label: 'Solo necesito una estructura', score: 0, reason: 'Buscas principalmente estructura, sin revisiones frecuentes.' },
      { label: 'Cada cierto tiempo', score: 1 },
      { label: 'Una revisión semanal', score: 2, reason: 'Te interesa revisar tu evolución semanalmente.' },
      { label: 'Necesito poder consultar cuando aparezca una situación', score: 2, reason: 'Valoras poder consultar cuando aparece una situación.' },
    ],
  },
  {
    prompt: '¿Qué suele ocurrir cuando intentas mantener un programa?',
    answers: [
      { label: 'Soy bastante constante', score: 0, reason: 'Ya tienes constancia para sostener un programa.' },
      { label: 'Empiezo bien y pierdo ritmo', score: 1 },
      { label: 'Necesito seguimiento para mantenerme', score: 2, reason: 'Un seguimiento puede ayudarte a mantener el ritmo.' },
      { label: 'Mi principal problema es adaptar el plan a mi realidad', score: 2, reason: 'Necesitas que el plan se adapte a cambios de tu realidad.' },
    ],
  },
  {
    prompt: '¿Qué nivel de acompañamiento estás buscando?',
    answers: [
      { label: 'Quiero principalmente estructura', score: 0 },
      { label: 'Quiero supervisión y ajustes semanales', score: 1 },
      { label: 'Quiero acompañamiento privado y mayor intervención', score: 2 },
    ],
  },
]

const recommendations = [
  {
    title: 'Autonomía con dirección',
    plan: 'Coaching Básico',
    price: '$97',
    tone: 'basic',
    description: 'Por tus respuestas, parece que tienes suficiente autonomía para ejecutar una estrategia estructurada sin necesitar un seguimiento frecuente.',
  },
  {
    title: 'Supervisión personalizada',
    plan: 'Coaching Personalizado',
    price: '$197',
    tone: 'personalized',
    description: 'Tus respuestas indican que podrías obtener más valor de un proceso donde tu evolución se revise semanalmente y la estrategia se ajuste según lo que vaya ocurriendo.',
  },
  {
    title: 'Acompañamiento privado',
    plan: 'Coaching Privado 1:1',
    price: '$397',
    tone: 'private',
    description: 'Por el nivel de intervención y adaptación que buscas, tu perfil parece encajar mejor con un proceso privado y de mayor acompañamiento.',
  },
]

export function CoachingDiagnostic() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showReasons, setShowReasons] = useState(false)
  const questionRef = useRef<HTMLLegendElement>(null)
  const resultRef = useRef<HTMLHeadingElement>(null)
  const hasInteracted = useRef(false)
  const isComplete = step === questions.length

  useEffect(() => {
    if (!hasInteracted.current) return
    if (isComplete) resultRef.current?.focus()
    else questionRef.current?.focus()
  }, [isComplete, step])

  const total = useMemo(
    () => answers.reduce((sum, answerIndex, questionIndex) => sum + (questions[questionIndex]?.answers[answerIndex]?.score ?? 0), 0),
    [answers],
  )
  const recommendationIndex = total <= 3 ? 0 : total <= 7 ? 1 : 2
  const recommendation = recommendations[recommendationIndex]
  const reasons = answers
    .map((answerIndex, questionIndex) => questions[questionIndex].answers[answerIndex]?.reason)
    .filter((reason): reason is string => Boolean(reason))
    .slice(0, 3)

  const chooseAnswer = (answerIndex: number) => {
    hasInteracted.current = true
    setAnswers((current) => {
      const next = current.slice(0, step)
      next[step] = answerIndex
      return next
    })
    setShowReasons(false)
    setStep((current) => current + 1)
  }

  const goBack = () => {
    hasInteracted.current = true
    setStep((current) => Math.max(0, current - 1))
  }

  const restart = () => {
    hasInteracted.current = true
    setAnswers([])
    setShowReasons(false)
    setStep(0)
  }

  return (
    <section className="diagnostic-section" id="diagnostico" aria-labelledby="diagnostic-title">
      <div className="diagnostic-heading">
        <p className="eyebrow editorial-eyebrow">Encuentra tu punto de partida</p>
        <h2 id="diagnostic-title">Descubre qué nivel de coaching necesitas.</h2>
        <p>Responde unas preguntas sobre tu objetivo, experiencia, autonomía y nivel de acompañamiento que buscas. Al finalizar recibirás una recomendación orientativa.</p>
      </div>

      <div className="diagnostic-panel">
        {!isComplete ? (
          <>
            <div className="diagnostic-progress-row">
              <span>Pregunta {step + 1} de {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="diagnostic-progress-track" role="progressbar" aria-label="Progreso del diagnóstico" aria-valuemin={1} aria-valuemax={questions.length} aria-valuenow={step + 1}>
              <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
            </div>
            <fieldset className="diagnostic-question" key={step}>
              <legend ref={questionRef} tabIndex={-1}>{questions[step].prompt}</legend>
              <div className="diagnostic-options">
                {questions[step].answers.map((answer, index) => (
                  <button className="diagnostic-option" key={answer.label} type="button" onClick={() => chooseAnswer(index)}>
                    <span className="diagnostic-option-mark" aria-hidden="true" />
                    <span>{answer.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="diagnostic-controls">
              {step > 0 ? <button className="diagnostic-back" type="button" onClick={goBack}>Volver a la pregunta anterior</button> : <span />}
              <span className="diagnostic-keyboard-note">Selecciona una respuesta para continuar</span>
            </div>
          </>
        ) : (
          <div className={`diagnostic-result diagnostic-result-${recommendation.tone}`} key="result">
            <p className="diagnostic-result-kicker">Tu recomendación orientativa</p>
            <h3 ref={resultRef} tabIndex={-1}>{recommendation.title}</h3>
            <p className="diagnostic-result-plan">{recommendation.plan}</p>
            <p className="diagnostic-result-price"><span>{recommendation.price}</span> / 90 días</p>
            {recommendation.tone === 'private' && <p className="availability-badge diagnostic-result-capacity">5 PLAZAS ACTIVAS</p>}
            <p className="diagnostic-result-description">{recommendation.description}</p>
            <button className="diagnostic-reasons-toggle" type="button" aria-expanded={showReasons} onClick={() => setShowReasons((visible) => !visible)}>
              {showReasons ? 'Ocultar motivos' : '¿Por qué este nivel encaja contigo?'}
            </button>
            {showReasons && <ul className="diagnostic-reasons">{reasons.length > 0 ? reasons.map((reason) => <li key={reason}>{reason}</li>) : <li>Buscas un nivel de acompañamiento acorde con tus respuestas y con la autonomía que prefieres.</li>}</ul>}
            <p className="diagnostic-disclaimer">Esta recomendación se basa en tus respuestas y es orientativa. Para revisar tu caso personalmente, hace falta coordinar una evaluación con Ariel.</p>
            <div className="diagnostic-result-actions"><a className="button button-primary conversion-cta diagnostic-result-cta" href="#coaching">VER OPCIONES DE COACHING</a><button className="diagnostic-restart" type="button" onClick={restart}>Volver a empezar</button></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CoachingDiagnostic
