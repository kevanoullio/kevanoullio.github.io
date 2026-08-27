import { useEffect, useRef, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
  className?: string
}

export function TypingText({
  text,
  speed = 60,
  delay = 300,
  onComplete,
  className = "",
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const onCompleteRef = useRef(onComplete)
  const speedRef = useRef(speed)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    speedRef.current = speed
  }, [speed])

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible) return

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const type = (i: number, wait: number) => {
      if (cancelled) return
      timer = setTimeout(() => {
        if (i > text.length) {
          setDone(true)
          onCompleteRef.current?.()
          return
        }
        setDisplayed(text.slice(0, i))
        type(i + 1, speedRef.current)
      }, wait)
    }

    type(0, delay)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [visible, text, delay])

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {displayed}
      <span
        aria-hidden="true"
        className={`ml-px inline-block h-[1em] w-0.5 bg-primary align-middle ${
          done ? "invisible" : ""
        }`}
        style={{ animation: "blink-caret 0.75s step-end infinite" }}
      />
    </span>
  )
}
