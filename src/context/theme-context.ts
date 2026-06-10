import { createContext, useContext } from "react"

export type ThemeMode = "light" | "dark" | "system"

export interface ThemeContextType {
  permIndex: number
  setPermIndex: (index: number) => void
  isDark: boolean
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  next: () => void
  prev: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
