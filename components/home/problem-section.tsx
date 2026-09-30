import Image from 'next/image'

export function ProblemSection() {
  return (
    <section className="problem-section editorial-section" aria-labelledby="problem-title">
      <div className="problem-copy editorial-copy">
        <p className="eyebrow editorial-eyebrow">El problema</p>
        <h2 id="problem-title">Has empezado más de una vez.<br />Mantener el proceso es otra historia.</h2>
        <p>
          Quizás ya has probado entrenamientos, dietas o planes que funcionaron durante un tiempo. El problema aparece cuando cambia tu horario, pierdes ritmo, tienes una semana complicada o simplemente dejas de saber qué deberías ajustar.
        </p>
        <p>
          El resultado suele ser el mismo: vuelves a empezar, cambias de estrategia y vuelves a buscar qué hacer.
        </p>
      </div>

      <figure className="problem-image editorial-image">
        <Image
          src="/images/editorial-process.png"
          alt="Una persona se toma un momento de pausa y reflexión en un estudio de entrenamiento oscuro."
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          loading="lazy"
          quality={78}
        />
      </figure>
    </section>
  )
}

export default ProblemSection
