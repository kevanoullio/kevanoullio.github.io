import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface TextGlowProps extends HTMLAttributes<HTMLSpanElement> {
  intensity?: "low" | "medium" | "high"
}

/**
 * Adds a subtle phosphor glow effect to text,
 * mimicking the light bleed of old CRT phosphors.
 */
export function TextGlow({
  children,
  className,
  intensity = "low",
  ...props
}: TextGlowProps) {
  const glowMap = {
    low: "0 0 4px oklch(var(--primary) / 0.15)",
    medium: "0 0 8px oklch(var(--primary) / 0.25), 0 0 16px oklch(var(--primary) / 0.1)",
    high: "0 0 10px oklch(var(--primary) / 0.4), 0 0 20px oklch(var(--primary) / 0.2), 0 0 40px oklch(var(--primary) / 0.1)",
  }

  return (
    <span
      className={cn(
        "inline-block",
        "transition-all duration-300",
        className
      )}
      style={{
        textShadow: glowMap[intensity],
      }}
      {...props}
    >
      {children}
    </span>
  )
}
