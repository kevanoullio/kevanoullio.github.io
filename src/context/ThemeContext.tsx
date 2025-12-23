import { useEffect, useState, type ReactNode } from "react"

import {
  applyColorTokens,
  applySurfaceTokens,
  colorThemeConfig,
  type ColorTheme,
} from "./theme-config"

import { ThemeContext, type ThemeContextType } from "./theme-context"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

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
        return (localStorage.getItem("colorTheme") as ColorTheme) || "orange"
      }
    } catch {
      // localStorage may be unavailable in private browsing mode
    }
    return "orange" // orange is the default color
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

  const value: ThemeContextType = { theme, colorTheme, setTheme, setColorTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
