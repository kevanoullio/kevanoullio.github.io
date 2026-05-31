/**
 * Renders a blinking block cursor for decorative terminal effect.
 * Use after text to simulate a terminal prompt.
 */

export function BlinkingCursor({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        animation: 'cursor-blink 1s step-end infinite',
        color: 'oklch(var(--primary))',
      }}
      aria-hidden="true"
    >
      {'█'}
    </span>
  )
}
