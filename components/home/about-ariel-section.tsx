import Image from 'next/image'

export function AboutArielSection() {
  return (
    <section className="about-ariel-section editorial-section" id="sobre-ariel" aria-labelledby="about-ariel-title">
      <div className="about-ariel-copy editorial-copy">
        <p className="eyebrow editorial-eyebrow">Sobre Ariel</p>
        <h2 id="about-ariel-title">Soy Ariel Criollo.</h2>
        <p className="about-ariel-lede">
          Mi trabajo consiste en convertir tus objetivos en un proceso de entrenamiento que puedas ejecutar, medir y sostener.
        </p>

        <div className="about-ariel-bio">
          <p>Me formé en un entorno donde la responsabilidad y la disciplina eran la norma, una mentalidad que sigo aplicando en mi vida personal y profesional. A diferencia del fitness convencional que satura las redes con rutinas de culturismo e instrucciones genéricas, mi enfoque es integral; entendí que una persona con un ritmo de vida exigente no necesita entrenar como un atleta de competencia, ni someterse a restricciones que choquen con sus responsabilidades diarias o familiares.</p>
          <p>Llevo más de 5 años trabajando en el sector, incluyendo mis inicios como entrenador de planta. Esa experiencia en el terreno, viendo el día a día de cientos de personas, me enseñó que los planes rígidos no funcionan en el mundo real. Por eso, mi Sistema de Coaching no consiste en darte un papel y desaparecer; me encargo de ajustar el plan sobre la marcha ante cualquier imprevisto o cambio en tu rutina.</p>
          <p>No me interesa complicar las cosas con tecnicismos. Mi metodología combina esa experiencia práctica con mi formación profesional. Tras haber entrenado a personas desde los 10 hasta los 87 años, la conclusión siempre es la misma: el ejercicio debe adaptarse a tu realidad, no al revés.</p>
          <p>Mi objetivo es claro: darte el criterio para que dejes de adivinar, logrando que el bienestar físico se vuelva parte de tu día a día de forma completamente natural.</p>
        </div>

        <div className="about-signature">
          <p className="about-signature-name">Ariel Criollo</p>
          <p className="about-signature-role">MBA &amp; Entrenador/Mentor en Hábitos, Entrenamiento y Alimentación</p>
          <p className="about-signature-registration">Reg. Oficial 1040-2025-307365 | MDT-OC-323226</p>
        </div>
      </div>

      <figure className="about-ariel-image">
        <Image
          src="/images/ariel-profile-placeholder.png"
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          loading="lazy"
          quality={78}
        />
        <figcaption>Imagen provisional · fotografía real de Ariel pendiente</figcaption>
      </figure>
    </section>
  )
}

export default AboutArielSection
