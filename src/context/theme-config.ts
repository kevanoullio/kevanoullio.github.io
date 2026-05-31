type ResolvedTheme = "light" | "dark"
export type ColorTheme = 
  | "amber"       // Classic amber terminal (IBM 8514 / VT100)
  | "green"       // Phosphor green terminal (Retro CRT)
  | "blue"        // Retro IBM blue (Color PC)
  | "white"       // White-on-black terminal (High contrast)
  | "cyan"        // Teal/cyan phosphor (DEC VT52)
  | "rose"        // Warm rose (Vintage Mac terminal)

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
// COLOR PALETTES — VINTAGE TERMINAL EDITION
// ============================================

export const colorThemeConfig: Record<ColorTheme, ColorThemeDefinition> = {
  // --- AMBER: Classic amber phosphor terminal ---
  amber: createPalette({
    primary: "0.75 0.165 85",        // Warm amber glow
    secondary: "0.60 0.12 80",       // Muted amber
    accent: "0.90 0.10 90",          // Bright amber highlight
    background: "0.18 0.015 85",     // Very dark warm background
    text: "0.85 0.08 85",            // Amber text
    surface: "0.22 0.02 85",         // Slightly lighter surface
    highlight: "0.95 0.12 88",       // Glowing highlight
  }),

  // --- GREEN: Phosphor green CRT ---
  green: createPalette({
    primary: "0.70 0.185 145",      // Classic phosphor green
    secondary: "0.50 0.14 140",     // Muted green
    accent: "0.85 0.10 150",        // Bright green highlight
    background: "0.10 0.005 145",   // Near-black green-tinted
    text: "0.75 0.12 145",          // Green text
    surface: "0.14 0.008 145",      // Slightly lighter surface
    highlight: "0.90 0.08 148",     // Glowing green
  }),

  // --- BLUE: Retro IBM color PC ---
  blue: createPalette({
    primary: "0.65 0.16 250",       // Retro blue
    secondary: "0.45 0.12 245",     // Muted blue
    accent: "0.80 0.10 248",        // Bright blue highlight
    background: "0.10 0.008 250",   // Dark blue-black
    text: "0.70 0.10 250",          // Blue text
    surface: "0.14 0.01 250",       // Slightly lighter surface
    highlight: "0.85 0.08 252",     // Glowing blue
  }),

  // --- WHITE: High contrast white-on-black ---
  white: createPalette({
    primary: "0.95 0.005 270",      // Slightly cool white
    secondary: "0.70 0.01 260",     // Muted gray-white
    accent: "1.00 0.002 270",        // Pure white highlight
    background: "0.08 0.003 270",   // Near-black
    text: "0.92 0.005 270",         // White text
    surface: "0.12 0.004 265",      // Slightly lighter surface
    highlight: "1.00 0.001 270",    // Pure white glow
  }),

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
// COLOR TOKENS — Enhanced terminal feel
// ============================================

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

  // Muted tones with stronger primary influence for terminal feel
  const muted = `color-mix(in oklch, ${background} 75%, oklch(${config.primary}) 25%)`
  const mutedForeground = `color-mix(in oklch, ${foreground} 60%, oklch(${config.primary}) 40%)`
  root.style.setProperty("--muted", muted)
  root.style.setProperty("--muted-foreground", mutedForeground)

  root.style.setProperty("--primary-foreground", config.background)
  root.style.setProperty("--secondary-foreground", config.background)
  root.style.setProperty("--accent-foreground", config.background)
  root.style.setProperty("--sidebar-primary-foreground", config.background)
  root.style.setProperty("--sidebar-accent-foreground", config.background)
}
