import { createContext } from "react"

import type { ColorTheme } from "./theme-config"

type Theme = "light" | "dark" | "system"

export interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
