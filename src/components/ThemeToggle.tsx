import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useTheme } from "@/context/useTheme"
import { PERMUTATIONS } from "@/context/theme-config"

import { Button } from "@/components/ui/button";

const ROLE_LABELS = ["PRIMARY", "SECONDARY", "ACCENT"] as const

export function ThemeToggle() {
  const { permIndex, next, prev } = useTheme()
  const perm = PERMUTATIONS[permIndex]

  return (
    <div className="flex items-center gap-1.5">
      <Button
        theme="ghost"
        onClick={prev}
        aria-label="Previous color theme"
        className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 hover:text-secondary hover:bg-muted transition-colors"
      >
        <LuChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-2 px-2 py-1">
        {ROLE_LABELS.map((role) => {
          const colorKey = perm[role.toLowerCase() as "primary" | "secondary" | "accent"]
          const bgMap: Record<string, string> = {
            cyan: "oklch(0.65 0.12 195)",
            rose: "oklch(0.65 0.18 15)",
            amber: "oklch(0.72 0.12 75)",
          }
          return (
            <div key={role} className="flex flex-col items-center gap-0.5">
              <span className="text-[9px] font-mono tracking-widest text-foreground/40 uppercase">
                {role}
              </span>
              <div
                className="h-5 w-5 rounded-full ring-1 ring-border/50"
                style={{ backgroundColor: bgMap[colorKey] }}
              />
            </div>
          )
        })}
      </div>

      <Button
        theme="ghost"
        onClick={next}
        aria-label="Next color theme"
        className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 hover:text-secondary hover:bg-muted transition-colors"
      >
        <LuChevronRight className="h-4 w-4" />
      </Button>

      <span className="hidden xl:flex mr-2 font-mono text-xs text-foreground/40">
        {permIndex + 1} / {PERMUTATIONS.length}
      </span>
    </div>
  )
}
