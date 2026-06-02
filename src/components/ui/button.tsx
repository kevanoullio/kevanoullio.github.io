import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

import { buttonVariants, type ButtonVariantProps } from "./button-variants"

function Button({
  theme,
  size,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ theme, size }),
        className,
      )}
      {...props}
    />
  )
}

export { Button }
