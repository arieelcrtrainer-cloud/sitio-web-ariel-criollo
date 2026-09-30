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

        <p className="about-credentials" aria-label="Credenciales profesionales pendientes de confirmar">
          Credenciales profesionales pendientes de confirmar
        </p>

        <p className="about-ariel-bio">
          La presentación profesional de Ariel se completará con su trayectoria, formación y filosofía de trabajo verificadas.
        </p>
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
