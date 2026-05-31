/**
 * CRT Monitor Overlay
 * Adds subtle scanlines, vignette, and phosphor glow to the entire page.
 * Rendered once at the root level. Non-interactive (pointer-events: none).
 */

export function CrtOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 2px,
            oklch(var(--foreground) / 0.015) 2px,
            oklch(var(--foreground) / 0.015) 4px
          )
        `,
        background: `
          radial-gradient(
            ellipse at center,
            transparent 50%,
            oklch(var(--background) / 0.3) 100%
          )
        `,
        animation: "crt-flicker 0.15s infinite alternate",
      }}
    />
  )
}
