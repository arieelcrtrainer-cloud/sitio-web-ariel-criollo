const dimensions = [
  { number: '01', title: 'Cuerpo', description: 'Pérdida de grasa y recomposición corporal.' },
  { number: '02', title: 'Hábitos', description: 'La estructura que hace sostenible el proceso.' },
  { number: '03', title: 'Mentalidad', description: 'La forma en que enfrentas el proceso.' },
]

export function CoachingDimensionsSection() {
  return (
    <section className="dimensions-section" aria-labelledby="dimensions-title">
      <div className="dimensions-intro">
        <p className="eyebrow editorial-eyebrow">Una experiencia integral</p>
        <h2 id="dimensions-title">No trabajamos únicamente tu físico.</h2>
        <p className="dimensions-description">
          El cambio real ocurre cuando entrenas tu cuerpo, construyes hábitos que se sostienen y desarrollas una mentalidad que te mantiene en el camino.
        </p>
      </div>

      <div className="dimension-list" role="list" aria-label="Dimensiones del coaching">
        {dimensions.map((dimension) => (
          <article className="dimension-item" key={dimension.number} role="listitem">
            <span className="dimension-number" aria-hidden="true">{dimension.number}</span>
            <h3>{dimension.title}</h3>
            <p>{dimension.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CoachingDimensionsSection
