import { PrimaryCta } from '@/components/home/primary-header'

const questions = [
  {
    question: '¿El coaching es completamente online?',
    answer: 'Sí. El proceso está diseñado para desarrollarse de forma digital, con planificación, seguimiento y comunicación según el nivel de coaching.',
  },
  {
    question: '¿Necesito entrenar en un gimnasio?',
    answer: 'No necesariamente. El entorno de entrenamiento se define de acuerdo con tus objetivos, experiencia y posibilidades.',
  },
  {
    question: '¿Cuánto dura el proceso?',
    answer: 'El compromiso inicial de los tres niveles de coaching es de 90 días.',
  },
  {
    question: '¿Cuál es la diferencia entre los tres niveles?',
    answer: 'El Coaching Básico prioriza estructura y autonomía. El Coaching Personalizado añade supervisión y ajustes semanales. El Coaching Privado 1:1 añade mayor intervención, personalización y acceso directo.',
  },
  {
    question: '¿Puedo cambiar de nivel?',
    answer: 'Sí. Según tu evolución y necesidades, el nivel de acompañamiento puede cambiar en una fase posterior.',
  },
  {
    question: '¿Qué pasa si viajo o cambia mi horario?',
    answer: 'Dependiendo del nivel de coaching, la estrategia puede adaptarse ante cambios relevantes de contexto. Los niveles superiores permiten una mayor capacidad de adaptación.',
  },
  {
    question: '¿Puedo hablar directamente con Ariel?',
    answer: 'El nivel y frecuencia de comunicación dependen del coaching elegido. El Coaching Privado 1:1 ofrece acceso directo de lunes a viernes dentro del horario establecido.',
  },
  {
    question: '¿Qué ocurre si tengo una molestia o lesión?',
    answer: 'El entrenamiento puede adaptarse dentro del ámbito profesional del servicio. Cuando una situación requiera valoración médica o fisioterapéutica, se recomendará consultar al profesional correspondiente.',
  },
  {
    question: '¿Qué ocurre después de los 90 días?',
    answer: 'Se revisa tu progreso y se determina si tiene sentido renovar, cambiar de nivel o continuar de forma independiente.',
  },
  {
    question: '¿La evaluación gratuita me obliga a contratar?',
    answer: 'No. La evaluación sirve para revisar tu situación y determinar si el coaching es adecuado para ti.',
  },
]

export function FaqSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-heading">
        <p className="eyebrow editorial-eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-title">Resuelve tus dudas.</h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-toggle" aria-hidden="true" />
            </summary>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
      </div>

      <div className="faq-cta">
        <p>¿Todavía tienes dudas sobre qué nivel elegir?</p>
        <PrimaryCta />
      </div>
    </section>
  )
}

export default FaqSection
