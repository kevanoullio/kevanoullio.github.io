import { LuPalette } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/useTheme"
import { PERMUTATIONS } from "@/context/theme-config"

const COLOR_LABELS: Record<string, string> = {
  cyan: "Cyan",
  rose: "Rose",
  amber: "Amber",
}

const COLOR_SWATCHES: Record<string, string> = {
  cyan: "oklch(0.65 0.12 195)",
  rose: "oklch(0.65 0.18 15)",
  amber: "oklch(0.72 0.12 75)",
}

export function ThemeColorDropdown() {
  const { permIndex, setPermIndex } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          theme="outline"
          size="icon"
          aria-label="Select color palette"
          className="bg-background text-foreground border-border hover:border-secondary/60 hover:bg-muted hover:text-secondary"
        >
          <LuPalette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuLabel className="text-xs tracking-widest text-muted-foreground">
          Color Palette
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {PERMUTATIONS.map((perm, index) => {
          const label = `${COLOR_LABELS[perm.primary]} / ${COLOR_LABELS[perm.secondary]} / ${COLOR_LABELS[perm.accent]}`
          return (
            <DropdownMenuItem
              key={`${perm.primary}-${perm.secondary}-${perm.accent}-${index}`}
              onClick={() => setPermIndex(index)}
              className={permIndex === index ? "text-primary" : ""}
            >
              <span className="flex items-center gap-1">
                <span
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-border/50"
                  style={{ backgroundColor: COLOR_SWATCHES[perm.primary] }}
                />
                <span
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-border/50"
                  style={{ backgroundColor: COLOR_SWATCHES[perm.secondary] }}
                />
                <span
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-border/50"
                  style={{ backgroundColor: COLOR_SWATCHES[perm.accent] }}
                />
              </span>
              <span className="ml-2 text-xs font-mono tracking-wider text-muted-foreground">
                {label}
              </span>
              {permIndex === index && (
                <span className="ml-auto text-[10px] uppercase tracking-widest text-primary">
                  Active
                </span>
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
