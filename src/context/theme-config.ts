// ============================================
// BASE COLORS — cyan, rose, amber
// ============================================

const BASE_COLORS = {
  cyan: "0.65 0.12 195",
  rose: "0.65 0.18 15",
  amber: "0.72 0.12 75",
} as const

export type BaseColor = keyof typeof BASE_COLORS

// ============================================
// 6 PERMUTATIONS — all (primary, secondary, accent) combos
// ============================================

export const PERMUTATIONS: { primary: BaseColor; secondary: BaseColor; accent: BaseColor }[] = [
  { primary: "cyan", secondary: "amber", accent: "rose" },
  { primary: "cyan", secondary: "rose", accent: "amber" },
  { primary: "amber", secondary: "cyan", accent: "rose" },
  { primary: "amber", secondary: "rose", accent: "cyan" },
  { primary: "rose", secondary: "cyan", accent: "amber" },
  { primary: "rose", secondary: "amber", accent: "cyan" },
]

export const NUM_PERMUTATIONS = PERMUTATIONS.length

// ============================================
// APPLY TOKENS — sets all CSS variables
// ============================================

export const applyThemeTokens = (
  root: HTMLElement,
  permIndex: number,
  isDark: boolean
) => {
  const perm = PERMUTATIONS[permIndex]
  const primary = BASE_COLORS[perm.primary]
  const secondary = BASE_COLORS[perm.secondary]
  const accent = BASE_COLORS[perm.accent]

  const brighten = (l: number, amount: number) => Math.min(l + amount, 0.95)

  // Background / foreground
  const bg = isDark ? "0.10 0.005 250" : "0.95 0.003 250"
  const fg = isDark ? "0.95 0.005 250" : "0.20 0.008 250"

  root.style.setProperty("--background", `oklch(${bg})`)
  root.style.setProperty("--foreground", `oklch(${fg})`)

  // Derived surfaces
  const card = isDark
    ? `color-mix(in oklch, oklch(${bg}) 90%, oklch(${fg}) 10%)`
    : `color-mix(in oklch, oklch(${bg}) 96%, oklch(${fg}) 4%)`
  const popover = isDark
    ? `color-mix(in oklch, oklch(${bg}) 88%, oklch(${fg}) 12%)`
    : `color-mix(in oklch, oklch(${bg}) 98%, oklch(${fg}) 2%)`

  root.style.setProperty("--card", card)
  root.style.setProperty("--card-foreground", `oklch(${fg})`)
  root.style.setProperty("--popover", popover)
  root.style.setProperty("--popover-foreground", `oklch(${fg})`)

  // Primary
  const primaryParts = primary.split(" ").map(Number)
  const primaryVal = isDark
    ? `${brighten(primaryParts[0], 0.12)} ${primaryParts[1]} ${primaryParts[2]}`
    : primary
  root.style.setProperty("--primary", primaryVal)

  // Foreground mixing for card/button text
  const fgMix = isDark
    ? `color-mix(in oklch, oklch(1 0 0) 95%, oklch(${primary}) 5%)`
    : `color-mix(in oklch, oklch(0 0 0) 95%, oklch(${primary}) 5%)`
  root.style.setProperty("--primary-foreground", fgMix)
  root.style.setProperty("--secondary-foreground", fgMix)
  root.style.setProperty("--accent-foreground", fgMix)

  // Muted
  const muted = isDark
    ? `color-mix(in oklch, oklch(${bg}) 85%, oklch(${primary}) 15%)`
    : `color-mix(in oklch, oklch(${bg}) 90%, oklch(${primary}) 10%)`
  const mutedFg = isDark
    ? `color-mix(in oklch, oklch(${fg}) 50%, oklch(${primary}) 25%, oklch(${bg}) 25%)`
    : `color-mix(in oklch, oklch(${fg}) 60%, oklch(${primary}) 20%, oklch(${bg}) 20%)`
  root.style.setProperty("--muted", muted)
  root.style.setProperty("--muted-foreground", mutedFg)

  // Secondary — brighter in dark mode for visibility
  const secParts = secondary.split(" ").map(Number)
  const secondaryVal = isDark
    ? `${brighten(secParts[0], 0.15)} ${secParts[1]} ${secParts[2]}`
    : secondary
  root.style.setProperty("--secondary", secondaryVal)

  // Accent — brightest in dark mode for emphasis
  const accParts = accent.split(" ").map(Number)
  const accentVal = isDark
    ? `${brighten(accParts[0], 0.2)} ${accParts[1]} ${accParts[2]}`
    : accent
  root.style.setProperty("--accent", accentVal)

  // Destructive
  const destructive = isDark ? "0.704 0.191 22.216" : "0.577 0.245 27.325"
  root.style.setProperty("--destructive", destructive)

  // Ring
  root.style.setProperty("--ring", primaryVal)

  // Borders
  const border = isDark
    ? `color-mix(in oklch, oklch(${fg}) 20%, oklch(${bg}))`
    : `color-mix(in oklch, oklch(${fg}) 15%, oklch(${bg}))`
  root.style.setProperty("--border", border)
  root.style.setProperty("--input", border)

  // Sidebar
  const sidebar = isDark
    ? `color-mix(in oklch, oklch(${bg}) 92%, oklch(${fg}) 8%)`
    : `color-mix(in oklch, oklch(${bg}) 94%, oklch(${fg}) 6%)`
  root.style.setProperty("--sidebar", sidebar)
  root.style.setProperty("--sidebar-foreground", `oklch(${fg})`)
  root.style.setProperty("--sidebar-primary", `oklch(${primaryVal})`)
  root.style.setProperty("--sidebar-accent", `oklch(${accentVal})`)
  root.style.setProperty("--sidebar-border", border)
  root.style.setProperty("--sidebar-ring", `oklch(${primaryVal})`)
  root.style.setProperty("--sidebar-primary-foreground", fgMix)
  root.style.setProperty("--sidebar-accent-foreground", fgMix)

  // Color scheme for form controls
  root.style.setProperty("color-scheme", isDark ? "dark" : "light")
}
