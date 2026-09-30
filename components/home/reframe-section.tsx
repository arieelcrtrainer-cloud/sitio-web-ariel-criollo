import Image from 'next/image'

export function ReframeSection() {
  return (
    <section className="reframe-section editorial-section" aria-labelledby="reframe-title">
      <figure className="reframe-image editorial-image">
        <Image
          src="/images/editorial-planning.png"
          alt="Cuaderno abierto, bolígrafo y portátil en un espacio de planificación junto al entrenamiento."
          fill
          sizes="(max-width: 760px) 100vw, 48vw"
          loading="lazy"
          quality={78}
        />
      </figure>

      <div className="reframe-copy editorial-copy">
        <p className="eyebrow editorial-eyebrow">Una estrategia con intención</p>
        <h2 id="reframe-title">La estrategia tiene que responder a tu realidad.</h2>
        <p>
          Tu objetivo, tu experiencia, el tiempo que tienes disponible, tus hábitos y la forma en que responde tu cuerpo condicionan las decisiones que debes tomar.
        </p>
        <p>
          Por eso una estrategia útil no se limita a decirte qué hacer. También debe permitirte saber qué mantener, qué ajustar y cuándo hacerlo.
        </p>
        <p className="reframe-conclusion">Necesitas una estrategia diseñada para ti.</p>
      </div>
    </section>
  )
}

export default ReframeSection
