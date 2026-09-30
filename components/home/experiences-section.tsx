const testimonials = [
  {
    name: 'Melissa Fuentes',
    coaching: 'Coaching Privado 1:1',
    coachingType: 'private',
    videoId: 'sitnd2AwJyg',
    format: 'portrait',
  },
  {
    name: 'Fernando Romero',
    coaching: 'Coaching Privado 1:1',
    coachingType: 'private',
    videoId: 'eUC75jP3_3k',
    format: 'landscape',
  },
  {
    name: 'Mary Silva',
    coaching: 'Coaching Personalizado',
    coachingType: 'personalized',
    videoId: 'CjSAyyBX4q4',
    format: 'portrait',
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

      <div className="testimonial-grid" aria-label="Testimonios en video">
        {testimonials.map((testimonial) => (
          <article className="testimonial-item" key={testimonial.videoId}>
            <div className={`testimonial-video-frame testimonial-video-${testimonial.format}`}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${testimonial.videoId}?rel=0&playsinline=1`}
                title={`Testimonio en video de ${testimonial.name}`}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="testimonial-caption">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className={`testimonial-type testimonial-type-${testimonial.coachingType}`}>
                {testimonial.coaching}
              </p>
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
