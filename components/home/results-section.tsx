const cases = ['Caso real', 'Transformación real', 'Proceso real']

function ResultCase({ label }: { label: string }) {
  return (
    <article className="result-case" aria-label={`${label}: espacios reservados para fotografías reales`}>
      <div className="result-photo" role="img" aria-label={`Fotografía real de antes pendiente para ${label}`}>
        <span className="photo-placeholder-label">Fotografía real pendiente</span>
        <span className="photo-tag">Antes</span>
      </div>
      <div className="result-photo" role="img" aria-label={`Fotografía real de después pendiente para ${label}`}>
        <span className="photo-placeholder-label">Fotografía real pendiente</span>
        <span className="photo-tag">Después</span>
      </div>
    </article>
  )
}

export function ResultsSection() {
  return (
    <section className="results-section" id="resultados" aria-labelledby="results-title">
      <div className="section-heading">
        <p className="eyebrow">El trabajo habla por sí mismo</p>
        <h2 id="results-title">Resultados reales</h2>
      </div>
      <div className="results-marquee" aria-label="Franja continua de casos reales, pendiente de fotografías verificadas">
        <div className="results-track">
          <div className="results-group">
            {cases.map((label) => <ResultCase key={label} label={label} />)}
          </div>
          <div className="results-group" aria-hidden="true">
            {cases.map((label) => <ResultCase key={`duplicate-${label}`} label={label} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
