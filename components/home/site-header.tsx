"use client"

import { useState } from "react"

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Coaching", href: "#coaching" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre Ariel", href: "#sobre-ariel" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#inicio" aria-label="Ariel Criollo, inicio">
          ARIEL <span>CRIOLLO</span>
        </a>

        <nav className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href="#evaluacion" onClick={() => setMenuOpen(false)}>
            Solicitar evaluación gratuita
          </a>
        </nav>

        <a className="header-cta" href="#evaluacion">
          Solicitar evaluación gratuita
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Navegación móvil"
        inert={!menuOpen}
      >
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="mobile-menu-cta" href="#evaluacion" onClick={() => setMenuOpen(false)}>
          Solicitar evaluación gratuita
        </a>
      </nav>
    </header>
  )
}

export function EvaluationLink({ className = "" }: { className?: string }) {
  return (
    <a className={`evaluation-link ${className}`} href="#evaluacion">
      Solicitar evaluación gratuita
    </a>
  )
}

export function EvaluationAnchor() {
  return <span className="evaluation-anchor" id="evaluacion" aria-hidden="true" />
}
