import { PrimaryCta } from '@/components/home/primary-header'

const plans = [
  { id: 'basic', title: 'Coaching Básico', price: '$97', tone: 'basic' },
  { id: 'personalized', title: 'Coaching Personalizado', price: '$197', tone: 'personalized', featured: true },
  { id: 'private', title: 'Coaching Privado 1:1', price: '$397', tone: 'private' },
]

const rows = [
  { name: 'Personalización', values: ['Inicial', 'Alta', 'Muy alta'] },
  { name: 'Seguimiento', values: ['Cada 15 días', 'Semanal', 'Revisión semanal + intervención cuando sea necesaria'] },
  { name: 'Ajustes', values: ['Limitados, dentro del alcance', 'Según evolución', 'Según necesidad'] },
  { name: 'Planificación de entrenamiento', values: ['Sí', 'Sí', 'Sí'] },
  { name: 'Estrategia nutricional', values: ['Base', 'Personalizada', 'Personalizada + adaptativa'] },
  { name: 'NutriMind', values: ['No', 'Sí', 'Sí'] },
  { name: 'Espacio de seguimiento', values: ['Básico', 'Sí', 'Sí'] },
  { name: 'Sesión inicial', values: ['No', '20–30 min', '45–60 min'] },
  { name: 'Acceso directo a Ariel', values: ['Limitado', 'Viernes, según sistema establecido', 'Lunes–viernes'] },
  { name: 'Videoanálisis', values: ['No', 'Parcial', 'Completo'] },
  { name: 'Adaptación contextual', values: ['Limitada', 'Sí, dentro del alcance', 'Alta'] },
  { name: 'Evaluación de progreso', values: ['Sí', 'Sí', 'Profunda'] },
  { name: 'Nivel de autonomía', values: ['Alta', 'Media-alta', 'Media'] },
]

export function CoachingComparisonSection() {
  return (
    <section className="comparison-section" id="comparativa-coaching" aria-labelledby="comparison-title">
      <div className="comparison-heading">
        <p className="eyebrow editorial-eyebrow">Una decisión informada</p>
        <h2 id="comparison-title">¿Qué nivel de acompañamiento necesitas?</h2>
        <p>
          Cada proceso requiere un nivel distinto de acompañamiento. Compara las opciones y elige la experiencia que mejor encaje con lo que buscas.
        </p>
      </div>

      <div className="comparison-scroll" role="region" aria-label="Comparación de niveles de coaching. Desplázate horizontalmente para consultar todos los niveles." tabIndex={0}>
        <table className="comparison-table">
          <caption className="sr-only">Características y precios de los tres niveles de coaching, por 90 días.</caption>
          <thead>
            <tr>
              <th className="comparison-feature-head" scope="col">Acompañamiento</th>
              {plans.map((plan) => (
                <th className={`comparison-plan comparison-plan-${plan.tone}`} scope="col" key={plan.id}>
                  <span className="comparison-plan-name">{plan.title}</span>
                  {plan.featured && <span className="comparison-badge">Más elegido</span>}
                  {plan.tone === 'private' && <span className="comparison-capacity">5 plazas activas</span>}
                  <span className="comparison-price">{plan.price}</span>
                  <span className="comparison-duration">/ 90 días</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row">{row.name}</th>
                {row.values.map((value, index) => (
                  <td className={`comparison-value comparison-value-${plans[index].tone}`} key={`${row.name}-${plans[index].id}`}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparison-scroll-hint" aria-hidden="true">Desliza para comparar los tres niveles</p>

      <div className="comparison-cta">
        <PrimaryCta />
        <p>Te ayudamos a determinar qué nivel de acompañamiento tiene más sentido para ti.</p>
      </div>
    </section>
  )
}

export default CoachingComparisonSection
