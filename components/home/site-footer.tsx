const footerNavigation = [
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre Ariel', href: '#sobre-ariel' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-wordmark" href="#inicio" aria-label="Ariel Criollo, volver al inicio">ARIEL CRIOLLO</a>
          <p>Coaching online para pérdida de grasa y recomposición corporal.</p>
        </div>
        <nav className="footer-navigation" aria-label="Navegación del pie de página">
          {footerNavigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
      </div>
      <div className="footer-meta">
        <p className="footer-social-note">Instagram y YouTube: pendientes de conectar.</p>
        <div className="footer-legal" aria-label="Información legal pendiente de publicación">
          <span>Privacidad</span>
          <span>Términos</span>
          <span>Información legal</span>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Ariel Criollo</p>
      </div>
    </footer>
  )
}

export default SiteFooter
