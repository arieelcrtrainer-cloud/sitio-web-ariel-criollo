import Image from 'next/image'
import { PrimaryCta } from '@/components/home/primary-header'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
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
          <p>Evaluación inicial sin costo <span aria-hidden="true">·</span> Sin compromiso</p>
        </div>
      </div>

      <div className="hero-visual" aria-label="Espacio reservado para el retrato real de Ariel Criollo">
        <Image
          className="hero-image"
          src="/images/editorial-studio.png"
          alt=""
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <div className="media-placeholder">
          <span className="placeholder-rule" aria-hidden="true" />
          <span>Retrato editorial de Ariel</span>
          <span className="placeholder-note">Espacio preparado para fotografía real</span>
        </div>
      </div>
    </section>
  )
}
