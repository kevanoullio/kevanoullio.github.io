type ResolvedTheme = "light" | "dark"
export type ColorTheme =
  | "rose"        // Warm rose (Vintage Mac terminal)
  | "amber"       // Warm pastel amber
  | "cyan"        // Teal/cyan phosphor
  | "sage"        // Soft sage green pastel
  | "lavender"    // Soft lavender pastel

type ColorThemeDefinition = {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  surface: string
  highlight: string
}

const createPalette = ({
  primary,
  secondary,
  accent,
  background,
  text,
  surface,
  highlight,
}: ColorThemeDefinition): ColorThemeDefinition => ({
  primary,
  secondary,
  accent,
  background,
  text,
  surface,
  highlight,
})

// ============================================
// COLOR PALETTES — FIVE PASTEL VINTAGE
// ============================================

export const colorThemeConfig: Record<ColorTheme, ColorThemeDefinition> = {
  // --- CYAN: DEC VT52 teal phosphor ---
  cyan: createPalette({
    primary: "0.72 0.14 195",       // Teal/cyan
    secondary: "0.50 0.10 190",     // Muted teal
    accent: "0.88 0.08 200",        // Bright cyan highlight
    background: "0.10 0.006 195",   // Dark teal-black
    text: "0.75 0.10 195",          // Cyan text
    surface: "0.14 0.008 195",      // Slightly lighter surface
    highlight: "0.92 0.06 198",     // Glowing cyan
  }),

  // --- ROSE: Vintage Mac terminal ---
  rose: createPalette({
    primary: "0.65 0.18 15",        // Warm rose
    secondary: "0.48 0.12 10",      // Muted rose
    accent: "0.82 0.12 18",         // Bright rose highlight
    background: "0.12 0.01 15",     // Dark rose-black
    text: "0.80 0.08 15",           // Rose text
    surface: "0.16 0.012 15",       // Slightly lighter surface
    highlight: "0.90 0.10 17",      // Glowing rose
  }),

  // --- SAGE: Soft sage green pastel ---
  sage: createPalette({
    primary: "0.68 0.12 145",      // Soft sage green
    secondary: "0.50 0.08 140",    // Muted sage
    accent: "0.80 0.08 148",       // Bright sage highlight
    background: "0.10 0.005 145",  // Dark sage-black
    text: "0.70 0.09 145",         // Sage text
    surface: "0.14 0.006 145",     // Slightly lighter surface
    highlight: "0.85 0.06 148",    // Glowing sage
  }),

  // --- LAVENDER: Soft lavender pastel ---
  lavender: createPalette({
    primary: "0.70 0.12 305",      // Soft lavender
    secondary: "0.48 0.08 300",    // Muted lavender
    accent: "0.82 0.08 308",       // Bright lavender highlight
    background: "0.10 0.006 305",  // Dark lavender-black
    text: "0.72 0.09 305",         // Lavender text
    surface: "0.14 0.007 305",     // Slightly lighter surface
    highlight: "0.88 0.06 308",    // Glowing lavender
  }),

  // --- AMBER: Warm pastel amber/peach ---
  amber: createPalette({
    primary: "0.72 0.12 75",       // Warm pastel amber
    secondary: "0.55 0.09 70",     // Muted amber
    accent: "0.85 0.08 78",        // Bright amber highlight
    background: "0.10 0.006 75",   // Dark amber-black
    text: "0.74 0.09 75",          // Amber text
    surface: "0.14 0.007 75",      // Slightly lighter surface
    highlight: "0.90 0.06 78",     // Glowing amber
  }),
}

// ============================================
// SURFACE TOKENS — Enhanced depth layers
// ============================================

export const applySurfaceTokens = (
  root: HTMLElement,
  config: ColorThemeDefinition,
  resolvedTheme: ResolvedTheme
) => {
  const lightSurface = config.background
  const darkSurface = config.text
  const background = resolvedTheme === "light" ? lightSurface : darkSurface
  const foreground = resolvedTheme === "light" ? darkSurface : lightSurface

  // Card/surface with deeper contrast for terminal feel
  const card =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 94%, ${foreground} 6%)`
      : `color-mix(in oklch, ${background} 88%, ${foreground} 12%)`
  const popover =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 97%, ${foreground} 3%)`
      : `color-mix(in oklch, ${background} 85%, ${foreground} 15%)`
  const sidebar =
    resolvedTheme === "light"
      ? `color-mix(in oklch, ${background} 92%, ${foreground} 8%)`
      : `color-mix(in oklch, ${background} 84%, ${foreground} 16%)`

  root.style.setProperty("--background", background)
  root.style.setProperty("--foreground", foreground)
  root.style.setProperty("--card", card)
  root.style.setProperty("--card-foreground", foreground)
  root.style.setProperty("--popover", popover)
  root.style.setProperty("--popover-foreground", foreground)
  root.style.setProperty("--sidebar", sidebar)
  root.style.setProperty("--sidebar-foreground", foreground)

  // Sharper borders for terminal aesthetic
  const border = `color-mix(in oklch, ${foreground} 20%, ${background})`
  root.style.setProperty("--border", border)
  root.style.setProperty("--input", border)
  root.style.setProperty("--sidebar-border", border)

  const sidebarRing = `color-mix(in oklch, ${foreground} 35%, ${background})`
  root.style.setProperty("--sidebar-ring", sidebarRing)
}

// ============================================
// COLOR TOKENS — Pastel terminal feel
// ============================================

export const applyColorTokens = (
  root: HTMLElement,
  config: ColorThemeDefinition,
  resolvedTheme: ResolvedTheme
) => {
  root.style.setProperty("--primary", config.primary)
  root.style.setProperty("--secondary", config.secondary)
  root.style.setProperty("--accent", config.accent)
  root.style.setProperty("--ring", config.primary)
  root.style.setProperty("--sidebar-primary", config.primary)
  root.style.setProperty("--sidebar-accent", config.accent)

  // Muted: closer to background, subtle primary tint
  const muted = `color-mix(in oklch, var(--background) 85%, oklch(${config.primary}) 15%)`
  // Muted foreground: legible on muted, mix toward foreground
  const mutedForeground = `color-mix(in oklch, var(--foreground) 50%, oklch(${config.primary}) 25%, var(--background) 25%)`
  root.style.setProperty("--muted", muted)
  root.style.setProperty("--muted-foreground", mutedForeground)

  root.style.setProperty("--primary-foreground", config.background)
  root.style.setProperty("--secondary-foreground", config.background)
  root.style.setProperty("--accent-foreground", config.background)
  root.style.setProperty("--sidebar-primary-foreground", config.background)
  root.style.setProperty("--sidebar-accent-foreground", config.background)
}
