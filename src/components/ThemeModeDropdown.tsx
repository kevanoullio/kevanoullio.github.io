import { LuSun, LuMoon, LuMonitor } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type ThemeMode, useTheme } from "@/context/theme-context"

const MODES: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Light", icon: <LuSun className="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: <LuMoon className="h-4 w-4" /> },
  { value: "system", label: "System", icon: <LuMonitor className="h-4 w-4" /> },
]

export function ThemeModeDropdown() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          theme="outline"
          size="icon"
          aria-label="Toggle theme mode"
        >
          {theme === "light" && <LuSun className="h-4 w-4" />}
          {theme === "dark" && <LuMoon className="h-4 w-4" />}
          {theme === "system" && <LuMonitor className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {MODES.map((m) => (
          <DropdownMenuItem
            key={m.value}
            onClick={() => setTheme(m.value)}
            className={theme === m.value ? "text-primary" : ""}
          >
            {m.icon}
            <span className="ml-2">{m.label}</span>
            {theme === m.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
