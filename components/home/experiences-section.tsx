const testimonials = [
  {
    name: 'Melissa Fuentes',
    coaching: 'Coaching Privado 1:1',
    coachingType: 'private',
    videoId: 'sitnd2AwJyg',
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
  },
]

const googleSearchUrl = 'https://www.google.com/search?q=Ariel+Criollo+rese%C3%B1as'

const googleReviews = [
  {
    name: 'Santiago Corrales',
    rating: '★★★★★',
    text: 'Ariel es súper paciente y se acopla a las necesidades de cada persona, si estás empezando te hace sentir cómodo, te enseña y motiva a continuar',
    url: googleSearchUrl,
  },
  {
    name: 'Mikaela Sempértegui',
    rating: '★★★★★',
    text: 'Un excelente entrenador. Siempre demuestra compromiso, paciencia y motivación. Explica las técnicas de forma clara y se asegura de que todos mejoren constantemente. Además de enfocarse en el rendimiento, también fomenta la disciplina y la confianza',
    url: googleSearchUrl,
  },
  {
    name: 'Kary Lopez',
    rating: '★★★★★',
    text: 'Ariel es sin duda el profesional mas increíble que conozca, antes probé entrenar con varias personas de su medio y nadie me atinó, me hacían vivir contracturada y no tenía ganas de ejercitarme, los recomiendo 1000%. Su atención es personalizada y según tu necesidad, no solo ejercicios, el te enseña a ser integral, comida, descansos, ejercicio, etc',
    url: googleSearchUrl,
  },
]

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
            <div className="testimonial-video-frame">
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
            <h3 id="google-reviews-title">+85 reseñas en Google</h3>
          </div>
          <a className="google-reviews-link" href={googleSearchUrl} target="_blank" rel="noreferrer">
            Ver reseña en Google <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="google-review-list" aria-label="Reseñas de clientes en Google">
          {googleReviews.map((review) => (
            <article className="google-review-item" key={review.name}>
              <div className="google-review-content">
                <span className="google-review-rating" aria-label="5 de 5 estrellas">{review.rating}</span>
                <p className="google-review-author">{review.name}</p>
                <blockquote className="google-review-excerpt">{review.text}</blockquote>
                <a href={review.url} target="_blank" rel="noopener noreferrer">
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
