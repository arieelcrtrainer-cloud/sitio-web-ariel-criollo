import { PrimaryCta } from '@/components/home/primary-header'

export function FinalCtaSection() {
  return (
    <section className="final-cta-section" id="evaluacion" aria-labelledby="final-cta-title">
      <div className="final-cta-content">
        <p className="eyebrow editorial-eyebrow">Tu proceso empieza con una conversación</p>
        <h2 id="final-cta-title">Tu siguiente paso es saber qué necesitas.</h2>
        <p className="final-cta-description">
          Cuéntame tu objetivo, tu punto de partida y qué te está impidiendo avanzar. Revisaremos si el coaching es adecuado para ti y qué nivel de acompañamiento tiene más sentido.
        </p>
        <PrimaryCta className="final-cta-button" />
        <p className="final-cta-note">Sin compromiso.</p>
      </div>
    </section>
  )
}

export default FinalCtaSection
