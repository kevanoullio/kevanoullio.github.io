import { useEffect, useState, useCallback, type ReactNode } from "react"

import { applyThemeTokens, NUM_PERMUTATIONS } from "./theme-config"
import { ThemeContext } from "./theme-context"

type Mode = "light" | "dark" | "system"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [permIndex, setPermIndex] = useState<number>(() => {
    try {
      const stored = localStorage.getItem("permIndex")
      if (stored !== null) {
        const n = parseInt(stored, 10)
        if (n >= 0 && n < NUM_PERMUTATIONS) return n
      }
    } catch {
      // ignore
    }
    return 0
  })

  const [theme, setTheme] = useState<Mode>(() => {
    try {
      const stored = localStorage.getItem("theme") as Mode
      if (stored && ["light", "dark", "system"].includes(stored)) return stored
    } catch {
      // ignore
    }
    return "system"
  })

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })

  const apply = useCallback(() => {
    const root = document.documentElement
    const resolved = theme === "system" ? (isDark ? "dark" : "light") : theme
    applyThemeTokens(root, permIndex, resolved === "dark")
    try {
      localStorage.setItem("permIndex", String(permIndex))
      localStorage.setItem("theme", theme)
    } catch {
      // ignore
    }
  }, [permIndex, theme, isDark])

  useEffect(() => {
    apply()
  }, [apply])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => setIsDark(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const next = useCallback(() => {
    setPermIndex((prev) => (prev + 1) % NUM_PERMUTATIONS)
  }, [])

  const prev = useCallback(() => {
    setPermIndex((prev) => (prev - 1 + NUM_PERMUTATIONS) % NUM_PERMUTATIONS)
  }, [])

  return (
    <ThemeContext.Provider value={{ permIndex, setPermIndex, isDark, theme, setTheme, next, prev }}>
      {children}
    </ThemeContext.Provider>
  )
}
