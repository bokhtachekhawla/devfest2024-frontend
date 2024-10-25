import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useDelayedTitle(delay: number = 300) {
  const [title, setTitle] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTitle = pathname.split('/')[1] || 'Dashboard'
      const formattedTitle = newTitle.replace(/-/g, ' ')
      setTitle(formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1))
    }, delay)

    return () => clearTimeout(timer)
  }, [pathname, delay])

  return title
}