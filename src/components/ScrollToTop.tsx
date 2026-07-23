import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const scrollToHash = () => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'auto' })
          return true
        }
        return false
      }

      if (scrollToHash()) return

      const timer = window.setTimeout(scrollToHash, 100)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
