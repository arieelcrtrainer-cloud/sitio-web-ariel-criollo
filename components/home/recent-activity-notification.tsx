'use client'

import { useEffect, useState } from 'react'

type Program = 'COACHING BÁSICO' | 'COACHING PERSONALIZADO' | 'COACHING PRIVADO 1:1'
type Activity = {
  id: number
  name: string
  country: string
  flag: string
  program: Program
  time: string
}

const demoActivities: Activity[] = [
  { id: 0, name: 'Carlos', country: 'Ecuador', flag: '🇪🇨', program: 'COACHING PRIVADO 1:1', time: 'Hace 5 horas' },
  { id: 1, name: 'Sofía', country: 'Colombia', flag: '🇨🇴', program: 'COACHING PERSONALIZADO', time: 'Hace 1 día' },
  { id: 2, name: 'Mateo', country: 'USA', flag: '🇺🇸', program: 'COACHING PRIVADO 1:1', time: 'Hace 2 horas' },
  { id: 3, name: 'Valeria', country: 'Perú', flag: '🇵🇪', program: 'COACHING BÁSICO', time: 'Hace 3 días' },
  { id: 4, name: 'Andrés', country: 'México', flag: '🇲🇽', program: 'COACHING PRIVADO 1:1', time: 'Hace 12 horas' },
  { id: 5, name: 'Camila', country: 'Bolivia', flag: '🇧🇴', program: 'COACHING BÁSICO', time: 'Hace 1 día' },
  { id: 6, name: 'Santiago', country: 'Ecuador', flag: '🇪🇨', program: 'COACHING PERSONALIZADO', time: 'Hace 4 horas' },
  { id: 7, name: 'Isabella', country: 'USA', flag: '🇺🇸', program: 'COACHING PRIVADO 1:1', time: 'Hace 2 días' },
  { id: 8, name: 'Daniel', country: 'Colombia', flag: '🇨🇴', program: 'COACHING PERSONALIZADO', time: 'Hace 8 horas' },
  { id: 9, name: 'Lucía', country: 'Perú', flag: '🇵🇪', program: 'COACHING PERSONALIZADO', time: 'Hace 1 día' },
  { id: 10, name: 'Mariana', country: 'México', flag: '🇲🇽', program: 'COACHING PERSONALIZADO', time: 'Hace 5 horas' },
  { id: 11, name: 'Micaela', country: 'Ecuador', flag: '🇪🇨', program: 'COACHING PERSONALIZADO', time: 'Hace 2 días' },
  { id: 12, name: 'Gabriela', country: 'Bolivia', flag: '🇧🇴', program: 'COACHING PRIVADO 1:1', time: 'Hace 18 horas' },
  { id: 13, name: 'Sebastián', country: 'Colombia', flag: '🇨🇴', program: 'COACHING PRIVADO 1:1', time: 'Hace 3 días' },
  { id: 14, name: 'John', country: 'USA', flag: '🇺🇸', program: 'COACHING PRIVADO 1:1', time: 'Hace 7 horas' },
  { id: 15, name: 'Claudia', country: 'USA', flag: '🇺🇸', program: 'COACHING PRIVADO 1:1', time: 'Hace un momento' },
]

function shuffleActivities(previousId?: number) {
  const shuffled = [...demoActivities]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  if (shuffled.length > 1 && shuffled[0].id === previousId) {
    const swapIndex = 1 + Math.floor(Math.random() * (shuffled.length - 1))
    ;[shuffled[0], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[0]]
  }

  return shuffled
}

export function RecentActivityNotification() {
  const [activity, setActivity] = useState<Activity | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timer: number
    let shuffled = shuffleActivities()
    let nextIndex = 0
    let previousId: number | undefined

    const showNext = () => {
      if (nextIndex >= shuffled.length) {
        shuffled = shuffleActivities(previousId)
        nextIndex = 0
      }

      const nextActivity = shuffled[nextIndex]
      nextIndex += 1
      previousId = nextActivity.id
      setActivity(nextActivity)
      setIsVisible(true)

      timer = window.setTimeout(() => {
        setIsVisible(false)
        const exitDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400
        timer = window.setTimeout(() => {
          timer = window.setTimeout(showNext, 90_000)
        }, exitDuration)
      }, 6_000)
    }

    timer = window.setTimeout(showNext, 10_000)

    return () => window.clearTimeout(timer)
  }, [])

  if (!activity) return null

  const programTone = activity.program === 'COACHING BÁSICO'
    ? 'basic'
    : activity.program === 'COACHING PERSONALIZADO'
      ? 'personalized'
      : 'private'

  return (
    <aside
      className={`recent-activity${isVisible ? ' is-visible' : ''}`}
      aria-hidden={!isVisible}
      role="status"
      aria-live="polite"
    >
      <span className="recent-activity-indicator" aria-hidden="true" />
      <div className="recent-activity-copy">
        <p className="recent-activity-demo">Actividad de demostración</p>
        <p className="recent-activity-message">
          <span>{`${activity.name} desde ${activity.country} ${activity.flag} aplicó al `}</span>
          <strong className={`recent-activity-program recent-activity-program-${programTone}`}>{activity.program}</strong>
          <span>{` • ${activity.time}`}</span>
        </p>
      </div>
    </aside>
  )
}

export default RecentActivityNotification
