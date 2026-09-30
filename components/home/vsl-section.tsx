'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DiagnosticCta } from '@/components/home/primary-header'

export function VslSection() {
  const [requestedPlayback, setRequestedPlayback] = useState(false)

  return (
    <section className="vsl-section" id="como-funciona" aria-labelledby="vsl-title">
      <div className="vsl-copy">
        <p className="eyebrow">Una decisión informada</p>
        <h2 id="vsl-title">Antes de tomar una decisión, quiero darte información <strong>para que puedas decidir</strong>.</h2>
      </div>

      <div className="vsl-media-column">
        <div className="vsl-frame">
          <Image
            className="vsl-poster"
            src="/images/editorial-studio.png"
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 760px) 100vw, 58vw"
          />
          <div className="vsl-shade" aria-hidden="true" />
          <div className="vsl-placeholder-copy" aria-hidden="true">
            <span className="vsl-overline">Presentación personal</span>
            <span className="vsl-name">Ariel Criollo</span>
            <span className="vsl-pending">Video de Ariel próximamente</span>
          </div>
          <button
            className="play-button"
            type="button"
            aria-label="Consultar disponibilidad del video de presentación de Ariel"
            onClick={() => setRequestedPlayback(true)}
          >
            <span className="play-triangle" aria-hidden="true" />
          </button>
        </div>
        <p className="vsl-status" aria-live="polite">
          {requestedPlayback ? 'El video de presentación estará disponible aquí próximamente.' : ''}
        </p>
        <DiagnosticCta className="vsl-cta" />
      </div>
    </section>
  )
}
