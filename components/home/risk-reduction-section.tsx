export function RiskReductionSection() {
  return (
    <section className="risk-section" aria-labelledby="risk-title">
      <div className="risk-intro">
        <p className="eyebrow editorial-eyebrow">Antes de comenzar</p>
        <h2 id="risk-title">Empieza con claridad, no con incertidumbre.</h2>
        <p>
          Antes de comenzar revisamos tu situación y determinamos qué nivel de acompañamiento tiene sentido para ti.
        </p>
        <p>No todas las personas necesitan el mismo nivel de intervención.</p>
      </div>

      <div className="fit-guarantee">
        {/* PLACEHOLDER — REEMPLAZAR POR LA POLÍTICA DE GARANTÍA DEFINITIVA ANTES DE PUBLICAR. */}
        <p className="fit-guarantee-label">Garantía de encaje</p>
        <p className="fit-guarantee-copy">
          Primero revisamos si existe encaje entre tus necesidades y el nivel de coaching elegido. Si durante la evaluación determinamos que otro nivel resulta más adecuado para tu situación, te lo indicaremos antes de comenzar.
        </p>
      </div>

      <ul className="risk-assurances" aria-label="Detalles del proceso">
        <li>Evaluación inicial sin costo</li>
        <li>Sin compromiso</li>
        <li>Proceso de 90 días</li>
        <li>Selección del nivel según tus necesidades</li>
      </ul>
    </section>
  )
}

export default RiskReductionSection
