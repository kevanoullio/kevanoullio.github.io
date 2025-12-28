import * as React from "react"

import { cn } from "@/lib/utils"

type TechBadgeProps = {
  label: string
  src: string
  alt: string
}

export function TechBadge({ label, src, alt }: TechBadgeProps) {
  const [isRevealed, setIsRevealed] = React.useState(false)
  const [isHoverCapable, setIsHoverCapable] = React.useState(true)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const query = "(hover: hover) and (pointer: fine)"
    const mql = window.matchMedia(query)
    const update = () => setIsHoverCapable(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  React.useEffect(() => {
    if (isHoverCapable) setIsRevealed(false)
  }, [isHoverCapable])

  const onToggle = () => {
    // If hover is available, keep hover-only behavior; otherwise allow click-to-flip.
    if (isHoverCapable) return
    setIsRevealed((prev) => !prev)
  }

  return (
    <button
      type="button"
      className="group relative"
      aria-label={label}
      aria-pressed={isRevealed}
      onClick={onToggle}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center transition-all duration-300 perspective-[1000px] rounded-full",
          isHoverCapable && "group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:-translate-y-1 group-focus-visible:shadow-lg"
        )}
      >
        <div
          className={cn(
            "relative h-full w-full transition-transform duration-500 transform-3d",
            isRevealed && "transform-[rotateY(180deg)]"
          )}
        >
          {/* Front face: circle + icon (icon hides when revealed) */}
          <div className="absolute inset-0 flex items-center justify-center backface-hidden">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <img
                src={src}
                alt={alt}
                className={cn("h-8 w-8 transition-opacity duration-300", isRevealed && "opacity-0")}
              />
            </div>
          </div>

          {/* Back face: same circle, icon hidden, pill shown */}
          <div className="absolute inset-0 flex items-center justify-center transform-[rotateY(180deg)] backface-hidden">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <div className="rounded-full bg-linear-to-r from-primary to-accent p-px">
                <div className="whitespace-nowrap rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold leading-tight backdrop-blur text-center">
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">{label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isHoverCapable && (
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1 opacity-0 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-100 group-focus-visible:-translate-y-4 group-focus-visible:opacity-100 z-10">
          <div className="rounded-full bg-linear-to-r from-primary to-accent p-px">
            <div className="whitespace-nowrap rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">{label}</span>
            </div>
          </div>
        </div>
      )}
    </button>
  )
}
