import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"
type ColorTheme = "blue" | "purple" | "green" | "orange" | "rose"

interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const colorThemeConfig: Record<ColorTheme, { primary: string; accent: string; secondary: string; muted: string }> = {
  blue: {
    primary: "0.549 0.194 262.5",
    accent: "0.582 0.223 306.3",
    secondary: "0.549 0.194 262.5",
    muted: "0.85 0.036 262.5",
  },
  purple: {
    primary: "0.582 0.223 306.3",
    accent: "0.583 0.214 328.3",
    secondary: "0.582 0.223 306.3",
    muted: "0.85 0.052 306.3",
  },
  green: {
    primary: "0.515 0.158 142.5",
    accent: "0.604 0.213 199.5",
    secondary: "0.515 0.158 142.5",
    muted: "0.85 0.046 142.5",
  },
  orange: {
    primary: "0.623 0.214 41.3",
    accent: "0.628 0.21 53.2",
    secondary: "0.623 0.214 41.3",
    muted: "0.88 0.063 41.3",
  },
  rose: {
    primary: "0.566 0.213 10.2",
    accent: "0.582 0.223 306.3",
    secondary: "0.566 0.213 10.2",
    muted: "0.85 0.062 10.2",
  },
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
    const root = document.documentElement

    // Remove all theme classes
    root.classList.remove("light", "dark")

    // Determine actual theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    try {
      localStorage.setItem("theme", theme)
    } catch {
      // localStorage may be unavailable
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    const config = colorThemeConfig[colorTheme]

    root.style.setProperty("--primary", config.primary)
    root.style.setProperty("--accent", config.accent)
    root.style.setProperty("--secondary", config.secondary)
    root.style.setProperty("--muted", config.muted)
    root.style.setProperty("--ring", config.primary)
    root.style.setProperty("--sidebar-primary", config.primary)
    root.style.setProperty("--sidebar-accent", config.accent)

    try {
      localStorage.setItem("colorTheme", colorTheme)
    } catch {
      // localStorage may be unavailable
    }
  }, [colorTheme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(mediaQuery.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

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
