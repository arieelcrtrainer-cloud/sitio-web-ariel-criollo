export function RiskReductionSection() {
  return (
    <section className="risk-section" aria-labelledby="risk-title">
      <div className="risk-intro">
        <p className="eyebrow editorial-eyebrow">El Proceso de Selección</p>
        <h2 id="risk-title">Claridad absoluta antes del primer paso.</h2>
        <p>
          No abrimos plazas a ciegas. Antes de iniciar cualquier programa, analizamos exhaustivamente tu punto de partida. El objetivo es determinar con precisión el nivel de intervención y exigencia que tu cuerpo y tu mente necesitan hoy.
        </p>
      </div>

      <div className="fit-guarantee">
        <p className="fit-guarantee-label">Compromiso mutuo</p>
        <p className="fit-guarantee-copy">
          Tu tiempo es valioso, el mío también. En la primera sesión de diagnóstico evaluamos si tu nivel de compromiso se alinea con mi forma de trabajar. Si durante este análisis concluimos que tu situación requiere un enfoque distinto, te lo diré con total honestidad antes de formalizar el pago e iniciar el programa. No acepto clientes a los que no puedo garantizar un cambio radical.
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
