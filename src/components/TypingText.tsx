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
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !visible) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.current.observe(ref.current)
    return () => observer.current?.disconnect()
  }, [visible])

  useEffect(() => {
    if (!visible) return

    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i))
          i++
        } else {
          clearInterval(interval)
          setDone(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [visible, text, speed, delay, onComplete])

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
    >
      {displayed}
      {!done && (
        <span
          className="inline-block w-[2px] h-[1em] bg-primary ml-[1px] align-middle"
          style={{
            animation: "blink-caret 0.75s step-end infinite",
          }}
        />
      )}
    </span>
  )
}
