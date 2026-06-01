import { createContext } from "react"

export type Mode = "light" | "dark" | "system"

export interface ThemeContextType {
  permIndex: number
  isDark: boolean
  theme: Mode
  setTheme: (theme: Mode) => void
  next: () => void
  prev: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
