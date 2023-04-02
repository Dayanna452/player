import { useEffect, useState, useRef } from 'react'

export const useOutsideClick = (
  initialOpen?: boolean,
  callback?: () => unknown
) => {
  const [open, setOpen] = useState(initialOpen || false)
  const btn = useRef<any>(null)
  const optionsRef = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (btn.current && !btn.current.contains(event.target)) {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
          setOpen(false)
        }
        callback && callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [btn])

  return { btn, optionsRef, open, setOpen }
}
