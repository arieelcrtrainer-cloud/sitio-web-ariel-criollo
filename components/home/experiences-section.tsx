import Image from 'next/image'

const testimonials = [
  {
    image: '/images/editorial-process.png',
    type: 'Coaching por confirmar',
  },
  {
    image: '/images/editorial-planning.png',
    type: 'Coaching por confirmar',
  },
  {
    image: '/images/online-coaching-placeholder.png',
    type: 'Coaching por confirmar',
  },
]

const googleReviews = ['01', '02', '03']
const googleSearchUrl = 'https://www.google.com/search?q=Ariel+Criollo+rese%C3%B1as'

export function ExperiencesSection() {
  return (
    <section className="experiences-section" aria-labelledby="experiences-title">
      <div className="experiences-heading">
        <div>
          <p className="eyebrow editorial-eyebrow">Experiencias reales</p>
          <h2 id="experiences-title">El resultado también se siente en el proceso.</h2>
        </div>
        <p className="experiences-subtitle">
          Personas que llegaron con objetivos distintos, contextos distintos y puntos de partida distintos.
        </p>
      </div>

      <div className="testimonial-grid" aria-label="Espacios para testimonios en video" tabIndex={0}>
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-item" key={testimonial.image}>
            <div className="testimonial-poster">
              <Image
                src={testimonial.image}
                alt=""
                fill
                sizes="(max-width: 760px) 82vw, (max-width: 1050px) 42vw, 30vw"
                loading="lazy"
                quality={72}
              />
              <span className="testimonial-poster-label">Video testimonial real pendiente</span>
              <button
                className="testimonial-play"
                type="button"
                disabled
                aria-label={`Video testimonial ${index + 1}, pendiente de cargar`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="m9 6 9 6-9 6V6Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="testimonial-caption">
              <p className="testimonial-name">Nombre real pendiente</p>
              <p className="testimonial-type">{testimonial.type}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="google-reviews" id="reseñas-google" aria-labelledby="google-reviews-title">
        <div className="google-reviews-heading">
          <div>
            <p className="google-reviews-kicker">Reputación fuera de esta web</p>
            <h3 id="google-reviews-title">85+ reseñas en Google</h3>
          </div>
          <a className="google-reviews-link" href={googleSearchUrl} target="_blank" rel="noreferrer">
            Ver reseña en Google <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="google-review-list" aria-label="Espacios para reseñas reales de Google" tabIndex={0}>
          {googleReviews.map((review) => (
            <article className="google-review-item" key={review}>
              <span className="google-review-index" aria-hidden="true">{review}</span>
              <div>
                <p className="google-review-author">Nombre real pendiente</p>
                <p className="google-review-excerpt">Extracto de reseña real pendiente de cargar.</p>
                <a href={googleSearchUrl} target="_blank" rel="noreferrer">
                  Ver reseña en Google <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection
