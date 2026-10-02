import { PrimaryCta } from '@/components/home/primary-header'

export function FinalCtaSection() {
  return (
    <section className="final-cta-section" id="evaluacion" aria-labelledby="final-cta-title">
      <div className="final-cta-content">
        <p className="eyebrow editorial-eyebrow">Encuentra tu punto de partida</p>
        <h2 id="final-cta-title">Elige el nivel de acompañamiento que necesitas.</h2>
        <p className="final-cta-description">
          Responde unas preguntas sobre tus objetivos y cómo prefieres entrenar. Recibirás una recomendación orientativa antes de elegir cómo continuar.
        </p>
        <PrimaryCta className="final-cta-button" href="#diagnostico" openInNewTab={false} />
        <p className="final-cta-note">Sin compromiso. El diagnóstico no envía tus respuestas.</p>
      </div>
    </section>
  )
}

export default FinalCtaSection
