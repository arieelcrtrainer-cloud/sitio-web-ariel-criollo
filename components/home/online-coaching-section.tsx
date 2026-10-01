import Image from 'next/image'

const onlineBenefits = [
  {
    number: '01',
    title: 'Flexibilidad',
    description: 'Tu proceso puede adaptarse a dónde entrenas y a cómo está organizada tu semana.',
  },
  {
    number: '02',
    title: 'Continuidad',
    description: 'No dependes de coincidir físicamente con tu entrenador para mantener el proceso.',
  },
  {
    number: '03',
    title: 'Seguimiento',
    description: 'Tu evolución se registra, se revisa y se utiliza para tomar decisiones.',
  },
]

export function OnlineCoachingSection() {
  return (
    <section className="online-coaching-section editorial-section" aria-labelledby="online-coaching-title">
      <Image
        className="online-coaching-background"
        src="/images/editorial-online-coaching.png"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        quality={75}
      />
      <div className="online-coaching-copy editorial-copy">
        <p className="eyebrow editorial-eyebrow">Coaching online</p>
        <h2 id="online-coaching-title">El acompañamiento no depende de estar en el mismo lugar.</h2>
        <p>
          La tecnología nos permite mantener la cercanía, la constancia y la calidad del proceso, sin importar dónde estés.
        </p>
      </div>

      <ol className="online-benefits">
        {onlineBenefits.map((benefit) => (
          <li className="online-benefit" key={benefit.number}>
            <span className="online-benefit-number" aria-hidden="true">{benefit.number}</span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default OnlineCoachingSection
