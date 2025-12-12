import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"
type ColorTheme = "blue" | "purple" | "green" | "tropical_sunrise" | "rose"

interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const BASE_LIGHT = "oklch(1 0 0)"
const BASE_DARK = "oklch(0.21 0.007 258)"

type ColorThemeDefinition = {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

const mixWithPrimary = (primary: string, base: string, primaryPercentage: number) => {
  const basePercentage = 100 - primaryPercentage
  return `color-mix(in oklch, ${base} ${basePercentage}%, oklch(${primary}) ${primaryPercentage}%)`
}

const createPalette = ({
  primary,
  secondary,
  accent,
  lightTint = 8,
  darkTint = 22,
}: {
  primary: string
  secondary: string
  accent: string
  lightTint?: number
  darkTint?: number
}): ColorThemeDefinition => ({
  primary,
  secondary,
  accent,
  background: mixWithPrimary(primary, BASE_LIGHT, lightTint),
  text: mixWithPrimary(primary, BASE_DARK, darkTint),
})

const applySurfaceTokens = (
  root: HTMLElement,
  config: ColorThemeDefinition,
  resolvedTheme: ResolvedTheme
) => {
  const lightSurface = config.background
  const darkSurface = config.text
  const background = resolvedTheme === "light" ? lightSurface : darkSurface
  const foreground = resolvedTheme === "light" ? darkSurface : lightSurface

  const card =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 96%, ${foreground} 4%)`
      : `color-mix(in oklch, ${background} 90%, ${foreground} 10%)`
  const popover =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 98%, ${foreground} 2%)`
      : `color-mix(in oklch, ${background} 88%, ${foreground} 12%)`
  const sidebar =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 93%, ${foreground} 7%)`
      : `color-mix(in oklch, ${background} 87%, ${foreground} 13%)`

  root.style.setProperty("--background", background)
  root.style.setProperty("--foreground", foreground)
  root.style.setProperty("--card", card)
  root.style.setProperty("--card-foreground", foreground)
  root.style.setProperty("--popover", popover)
  root.style.setProperty("--popover-foreground", foreground)
  root.style.setProperty("--sidebar", sidebar)
  root.style.setProperty("--sidebar-foreground", foreground)

  const border = `color-mix(in oklch, ${foreground} 12%, ${background})`
  root.style.setProperty("--border", border)
  root.style.setProperty("--input", border)
  root.style.setProperty("--sidebar-border", border)
  const sidebarRing = `color-mix(in oklch, ${foreground} 30%, ${background})`
  root.style.setProperty("--sidebar-ring", sidebarRing)
}

const applyColorTokens = (
  root: HTMLElement,
  config: ColorThemeDefinition,
  resolvedTheme: ResolvedTheme
) => {
  const background = resolvedTheme === "light" ? config.background : config.text
  const foreground = resolvedTheme === "light" ? config.text : config.background

  root.style.setProperty("--primary", config.primary)
  root.style.setProperty("--secondary", config.secondary)
  root.style.setProperty("--accent", config.accent)
  root.style.setProperty("--ring", config.primary)
  root.style.setProperty("--sidebar-primary", config.primary)
  root.style.setProperty("--sidebar-accent", config.accent)

  const muted = `color-mix(in oklch, ${background} 85%, oklch(${config.primary}) 15%)`
  const mutedForeground = `color-mix(in oklch, ${foreground} 75%, oklch(${config.primary}) 25%)`
  root.style.setProperty("--muted", muted)
  root.style.setProperty("--muted-foreground", mutedForeground)

  root.style.setProperty("--primary-foreground", config.background)
  root.style.setProperty("--secondary-foreground", config.background)
  root.style.setProperty("--accent-foreground", config.background)
  root.style.setProperty("--sidebar-primary-foreground", config.background)
  root.style.setProperty("--sidebar-accent-foreground", config.background)
}

export const colorThemeConfig: Record<ColorTheme, ColorThemeDefinition> = {
  blue: createPalette({
    primary: "0.549 0.194 262.5",
    secondary: "0.63 0.14 262.5",
    accent: "0.582 0.223 306.3",
  }),
  purple: createPalette({
    primary: "0.582 0.223 306.3",
    secondary: "0.54 0.16 301.2",
    accent: "0.583 0.214 328.3",
    lightTint: 10,
    darkTint: 24,
  }),
  green: createPalette({
    primary: "0.515 0.158 142.5",
    secondary: "0.46 0.12 150",
    accent: "0.604 0.213 199.5",
  }),
  tropical_sunrise: createPalette({
    primary: "0.7828 0.168 66.2",
    secondary: "0.74 0.12 75",
    accent: "0.9351 0.0415 190.88",
    lightTint: 6,
    darkTint: 20,
  }),
  rose: createPalette({
    primary: "0.566 0.213 10.2",
    secondary: "0.52 0.16 20",
    accent: "0.64 0.25 345",
    lightTint: 9,
    darkTint: 24,
  }),
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as Theme) || "system"
      }
    } catch {
      // localStorage may be unavailable in private browsing mode
    }
    return "system"
  })

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    try {
      if (typeof window !== "undefined") {
        return (localStorage.getItem("colorTheme") as ColorTheme) || "blue"
      }
    } catch {
      // localStorage may be unavailable in private browsing mode
    }
    return "blue" // blue is the default color
  })

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const root = document.documentElement
    const config = colorThemeConfig[colorTheme]
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const resolvedTheme: ResolvedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme

    // Remove all theme classes
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)
    root.style.setProperty("color-scheme", resolvedTheme)

    applySurfaceTokens(root, config, resolvedTheme)
    applyColorTokens(root, config, resolvedTheme)

    try {
      localStorage.setItem("theme", theme)
    } catch {
      // localStorage may be unavailable
    }

    try {
      localStorage.setItem("colorTheme", colorTheme)
    } catch {
      // localStorage may be unavailable
    }
  }, [theme, colorTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const resolvedTheme: ResolvedTheme = mediaQuery.matches ? "dark" : "light"
        const root = document.documentElement
        const config = colorThemeConfig[colorTheme]
        root.classList.remove("light", "dark")
        root.classList.add(resolvedTheme)
        root.style.setProperty("color-scheme", resolvedTheme)
        applySurfaceTokens(root, config, resolvedTheme)
        applyColorTokens(root, config, resolvedTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, colorTheme])

    return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
