import { PrimaryCta } from '@/components/home/primary-header'

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Un mejor físico
          <br />
          empieza con una
          <br />
          <span>estrategia diseñada</span>
          <br />
          <span>para ti.</span>
        </h1>
        <p className="hero-description">
          Pérdida de grasa, recomposición corporal y hábitos sostenibles, con un acompañamiento
          profesional que se adapta a tu vida.
        </p>
        <div className="hero-action">
          <PrimaryCta className="hero-cta" />
          <p className="cta-note">Evaluación inicial sin costo <span aria-hidden="true">·</span> Sin compromiso</p>
        </div>
      </div>

      <div
        className="hero-portrait"
        role="img"
        aria-label="Espacio reservado para el retrato editorial de Ariel Criollo"
      >
        <div className="portrait-light" aria-hidden="true" />
        <div className="portrait-frame" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="portrait-caption">
          <span>Retrato editorial</span>
          <span>Imagen de Ariel pendiente</span>
        </div>
      </div>
    </section>
  )
}

export function ResultsSection() {
  const cases = ['Caso uno', 'Caso dos', 'Caso tres', 'Caso cuatro']

  return (
    <section className="results-section" id="resultados" aria-labelledby="results-title">
      <div className="section-heading results-heading">
        <p className="eyebrow">El trabajo habla por sí mismo</p>
        <h2 id="results-title">Resultados reales</h2>
      </div>
      <div className="results-viewport" aria-label="Franja continua de espacios para fotografías reales de clientes">
        <div className="results-track">
          {[...cases, ...cases].map((caseName, index) => (
            <article
              className="transformation"
              key={`${caseName}-${index}`}
              aria-label="Espacio reservado para fotografías de antes y después de un cliente real"
            >
              <div className="transformation-image before-image" role="img" aria-label="Fotografía de antes pendiente">
                <span>Antes</span>
                <small>Fotografía pendiente</small>
              </div>
              <div className="transformation-image after-image" role="img" aria-label="Fotografía de después pendiente">
                <span>Después</span>
                <small>Fotografía pendiente</small>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="results-caption">Una selección de procesos reales. Cada historia, única.</p>
    </section>
  )
}
