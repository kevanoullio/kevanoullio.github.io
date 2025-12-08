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

const colorThemes = [
  { name: "Blue", value: "blue" as const, color: "bg-blue-500" },
  { name: "Purple", value: "purple" as const, color: "bg-purple-500" },
  { name: "Green", value: "green" as const, color: "bg-green-500" },
  { name: "Orange", value: "orange" as const, color: "bg-orange-500" },
  { name: "Rose", value: "rose" as const, color: "bg-rose-500" },
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
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
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
        <div className="flex gap-1 p-2">
          {colorThemes.map((ct) => (
            <button
              key={ct.value}
              onClick={() => setColorTheme(ct.value)}
              className={`h-6 w-6 rounded-full ${ct.color} transition-transform hover:scale-110 ${
                colorTheme === ct.value ? "ring-2 ring-offset-2 ring-offset-background ring-foreground" : ""
              }`}
              title={ct.name}
              aria-label={`Set ${ct.name} color theme`}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
