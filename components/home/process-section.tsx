const coachingSteps = [
  { number: '01', title: 'Evaluamos', description: 'Tu punto de partida, objetivos y contexto.' },
  { number: '02', title: 'Diseñamos', description: 'Tu plan de entrenamiento y estrategia nutricional.' },
  { number: '03', title: 'Implementas', description: 'Lo llevas a la práctica en tu vida real.' },
  { number: '04', title: 'Revisamos', description: 'Analizamos tu progreso y adherencia.' },
  { number: '05', title: 'Ajustamos', description: 'Hacemos los cambios necesarios.' },
  { number: '06', title: 'Evolucionas', description: 'Construimos la siguiente fase contigo.' },
]

export function ProcessSection() {
  return (
    <section className="process-section" id="proceso" aria-labelledby="process-title">
      <div className="process-heading">
        <div>
          <p className="eyebrow editorial-eyebrow">El proceso</p>
          <h2 id="process-title">Así funciona el coaching.</h2>
        </div>
        <p className="process-subtitle">Un proceso que evoluciona contigo.</p>
      </div>

      <ol className="process-steps">
        {coachingSteps.map((step) => (
          <li className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProcessSection
