import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ColorTheme = 'blue' | 'purple' | 'green' | 'orange' | 'rose'

interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const colorThemeConfig: Record<ColorTheme, { primary: string; accent: string }> = {
  blue: {
    primary: '221.2 83.2% 53.3%',
    accent: '262.1 83.3% 57.8%',
  },
  purple: {
    primary: '262.1 83.3% 57.8%',
    accent: '330.4 81.2% 60.4%',
  },
  green: {
    primary: '142.1 76.2% 36.3%',
    accent: '199.4 95.5% 53.8%',
  },
  orange: {
    primary: '24.6 95% 53.1%',
    accent: '38.2 92% 50.2%',
  },
  rose: {
    primary: '346.8 77.2% 49.8%',
    accent: '262.1 83.3% 57.8%',
  },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('colorTheme') as ColorTheme) || 'blue'
    }
    return 'blue'
  })

  useEffect(() => {
    const root = document.documentElement

    // Remove all theme classes
    root.classList.remove('light', 'dark')

    // Determine actual theme
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    const config = colorThemeConfig[colorTheme]

    root.style.setProperty('--primary', config.primary)
    root.style.setProperty('--accent', config.accent)
    root.style.setProperty('--ring', config.primary)

    localStorage.setItem('colorTheme', colorTheme)
  }, [colorTheme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (theme === 'system') {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
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
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
