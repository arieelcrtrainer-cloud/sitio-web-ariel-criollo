'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre Ariel', href: '#sobre-ariel' },
]

export function PrimaryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}>
      <div className="header-inner">
        <Link className="wordmark" href="#inicio" aria-label="Ariel Criollo, inicio" onClick={closeMenu}>
          ARIEL CRIOLLO
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary conversion-cta header-cta" href="#diagnostico">
          <span className="cta-label">SOLICITAR DIAGNÓSTICO GRATUITO</span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`mobile-navigation${isMenuOpen ? ' is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a href={item.href} key={item.label} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-primary conversion-cta mobile-cta"
            href="#diagnostico"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span className="cta-label">SOLICITAR DIAGNÓSTICO GRATUITO</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export function PrimaryCta({ className = '' }: { className?: string }) {
  return (
    <a className={`button button-primary conversion-cta ${className}`.trim()} href="#diagnostico">
      <span className="cta-label">SOLICITAR DIAGNÓSTICO GRATUITO</span>
      <span className="cta-arrow" aria-hidden="true">→</span>
    </a>
  )
}

export function DiagnosticCta({ className = '' }: { className?: string }) {
  return (
    <a className={`button button-primary conversion-cta ${className}`.trim()} href="#diagnostico">
      <span className="cta-label">SOLICITAR DIAGNÓSTICO GRATUITO</span>
      <span className="cta-arrow" aria-hidden="true">→</span>
    </a>
  )
}

export function SecondaryCta({ className = '' }: { className?: string }) {
  return (
    <a className={`button button-primary button-secondary conversion-cta ${className}`.trim()} href="#diagnostico">
      <span className="cta-label">SOLICITAR DIAGNÓSTICO GRATUITO</span>
      <span className="cta-arrow" aria-hidden="true">→</span>
    </a>
  )
}

export function NavigationAnchors() {
  return navigation
}
