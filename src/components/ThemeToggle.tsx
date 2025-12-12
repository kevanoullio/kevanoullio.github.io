import { Sun, Moon, Monitor, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/ThemeContext"
import { colorThemeConfig } from "@/context/ThemeContext"

const colorThemes = [
  { name: "Blue", value: "blue" as const },
  { name: "Purple", value: "purple" as const },
  { name: "Green", value: "green" as const },
  { name: "Tropical Sunrise", value: "tropical_sunrise" as const },
  { name: "Rose", value: "rose" as const },
]

export function ThemeToggle() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme()

    const getCurrentIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          className="bg-background text-foreground border-border hover:border-primary/60 dark:border-input dark:hover:border-primary/60 hover:bg-muted hover:text-primary"
        >
          {getCurrentIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
          {theme === "light" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
          {theme === "dark" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
          {theme === "system" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center">
          <Palette className="mr-2 h-4 w-4" />
          Color Theme
        </DropdownMenuLabel>
        <div className="flex gap-2 p-2">
          {colorThemes.map((ct) => {
            const config = colorThemeConfig[ct.value]
            const style = {
              backgroundColor: `oklch(${config.primary})`,
            }
            return (
              <button
                key={ct.value}
                onClick={() => setColorTheme(ct.value)}
                className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${
                  colorTheme === ct.value ? "ring-2 ring-offset-2 ring-offset-background ring-foreground" : ""
                }`}
                style={style}
                title={ct.name}
                aria-label={`Set ${ct.name} color theme`}
              />
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
