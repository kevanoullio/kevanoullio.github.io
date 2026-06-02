import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md outline-none cursor-pointer",
    "whitespace-nowrap text-sm font-medium",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
    "[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    "transition-all"
  ],
  {
    variants: {
      theme: {
        "solid-primary":
          "bg-primary text-primary-foreground border border-primary/50 hover:bg-primary/85 hover:border-accent/85",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-border bg-background text-foreground shadow-xs hover:bg-accent/10 hover:text-secondary hover:border-secondary/60",
        "solid-secondary":
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      theme: "solid-primary",
      size: "default"
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
