const plans = [
  {
    id: 'coaching-basico',
    name: 'Coaching Básico',
    tone: 'basic',
    descriptor: 'Estructura para avanzar por tu cuenta.',
    price: '$97',
    description:
      'Un proceso de 90 días para que tengas claridad sobre qué hacer, cómo entrenar y cómo avanzar sin depender de acompañamiento constante.',
    features: [
      'Plan de entrenamiento + guía de alimentación',
      'Evaluación inicial y final',
      'Seguimiento cada 15 días',
      'Soporte para resolver dudas',
    ],
  },
  {
    id: 'coaching-personalizado',
    name: 'Coaching Personalizado',
    tone: 'personalized',
    descriptor: 'Supervisión que evoluciona contigo.',
    price: '$197',
    description:
      'Tu entrenamiento y estrategia nutricional son revisados semanalmente para adaptar el proceso a tu evolución.',
    features: [
      'Planificación personalizada',
      'NutriMind + espacio de seguimiento',
      'Revisión cada viernes',
      'Ajustes según evolución',
    ],
    featured: true,
  },
  {
    id: 'coaching-privado',
    name: 'Coaching Privado 1:1',
    tone: 'private',
    descriptor: 'Acompañamiento privado y adaptación continua.',
    price: '$397',
    description:
      'Una experiencia de mayor intervención y acceso directo, diseñada para quienes buscan el máximo nivel de personalización.',
    features: [
      'Evaluación + sesión estratégica 1:1',
      'Planificación altamente personalizada',
      'Revisión semanal + intervención según necesidad',
      'Acceso directo L–V',
    ],
  },
]

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article
      className={`plan-card plan-card-${plan.tone}${plan.featured ? ' plan-card-featured' : ''}`}
      id={plan.id}
      aria-labelledby={`${plan.id}-title`}
    >
      {plan.featured && <p className="plan-badge">Más elegido</p>}
      <div className="plan-card-top">
        <p className="plan-category">{plan.name}</p>
        <h3 id={`${plan.id}-title`}>{plan.descriptor}</h3>
      </div>

      <p className="plan-price">
        <span>{plan.price}</span>
        <span className="plan-duration">/ 90 días</span>
      </p>
      <p className="plan-description">{plan.description}</p>

      <ul className="plan-features">
        {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      {plan.id === 'coaching-basico' ? (
        <details className="plan-details">
          <summary>Ver detalles</summary>
          <div className="plan-details-content">
            <p>{plan.description}</p>
            <p>Duración: 90 días.</p>
          </div>
        </details>
      ) : (
        <a className="button button-primary plan-cta" href="#diagnostico">
          Descubrir mi nivel de coaching
        </a>
      )}

      {plan.tone === 'private' && (
        <p className="plan-capacity-note">5 plazas activas</p>
      )}
    </article>
  )
}

export function CoachingOffersSection() {
  return (
    <section className="coaching-offers-section" id="coaching" aria-labelledby="coaching-offers-title">
      <div className="coaching-offers-heading">
        <p className="eyebrow editorial-eyebrow">Coaching</p>
        <h2 id="coaching-offers-title">¿Cómo quieres trabajar conmigo?</h2>
        <p>
          No todas las personas necesitan el mismo nivel de acompañamiento. Elige la experiencia que mejor se adapte a lo que necesitas durante tu proceso.
        </p>
      </div>

      <div className="plan-grid">
        {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
      </div>
    </section>
  )
}

export default CoachingOffersSection
