const footerNavigation = [
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre Ariel', href: '#sobre-ariel' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/arieelcrtrainer/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/arieelcrtrainer', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@arieelcrtrainer', icon: 'youtube' },
  { label: 'WhatsApp', href: 'https://wa.link/9g4eix', icon: 'whatsapp' },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="footer-social-icon-dot" cx="17.6" cy="6.7" r="1" /></svg>
  }

  if (name === 'facebook') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.3-1.4 1.4-1.4h1.5V5.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H7.8v2.8h2.5V21h3.2Z" /></svg>
  }

  if (name === 'youtube') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 7.1a2.6 2.6 0 0 0-1.8-1.8C17.8 4.9 12 4.9 12 4.9s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z" /><path className="footer-social-play" d="m10 15.5 5-3.5-5-3.5v7Z" /></svg>
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 11.7a8.1 8.1 0 0 1-11.9 7.1L4 20l1.2-4.2a8.1 8.1 0 1 1 15.1-4.1Z" /><path d="M9 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3 0 .6a6.6 6.6 0 0 0 2.6 2.3c.3.2.4.2.6 0l.7-.8c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.7-.5.5-1.2.7-2 .6-1-.2-2.2-.7-3.8-2.1-1.3-1.2-2.2-2.6-2.5-3.5-.3-.9 0-1.7.4-2.2.3-.4.6-.6.8-.6Z" /></svg>
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-wordmark" href="#inicio" aria-label="Ariel Criollo, volver al inicio">ARIEL CRIOLLO</a>
          <p>MBA &amp; Entrenador/Mentor en Hábitos, Entrenamiento y Alimentación.</p>
          <nav className="footer-social-links" aria-label="Redes sociales">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </nav>
        </div>
        <nav className="footer-navigation" aria-label="Navegación del pie de página">
          {footerNavigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
      </div>
      <div className="footer-meta">
        <p className="footer-legal">Privacidad · Términos · Información legal</p>
        <p className="footer-copyright">© 2026 Ariel Criollo · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default SiteFooter
