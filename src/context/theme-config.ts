type ResolvedTheme = "light" | "dark"
export type ColorTheme = "blue" | "purple" | "green" | "orange" | "rose"

type ColorThemeDefinition = {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

const BASE_LIGHT = "oklch(1 0 0)"
const BASE_DARK = "oklch(0.21 0.007 258)"

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

export const colorThemeConfig: Record<ColorTheme, ColorThemeDefinition> = {
  blue: createPalette({
    primary: "0.5398 0.1685 257.94",
    secondary: "0.5599 0.2051 2.44",
    accent: "0.6988 0.1389 69.45",
  }),
  purple: createPalette({
    primary: "0.582 0.223 306.3",
    secondary: "0.54 0.16 301.2",
    accent: "0.583 0.214 350.92",
    lightTint: 10,
    darkTint: 24,
  }),
  green: createPalette({
    primary: "0.6454 0.1905 141.54",
    secondary: "0.46 0.12 150",
    accent: "0.5564 0.095 225.93",
  }),
  orange: createPalette({
    primary: "0.7828 0.168 66.2",
    secondary: "0.74 0.12 75",
    accent: "0.7552 0.1114 190.88",
    lightTint: 6,
    darkTint: 20,
  }),
  rose: createPalette({
    primary: "0.566 0.213 10.2",
    secondary: "0.52 0.16 20",
    accent: "0.64 0.2421 304.95",
    lightTint: 9,
    darkTint: 24,
  }),
}

export const applySurfaceTokens = (
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

export const applyColorTokens = (
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
