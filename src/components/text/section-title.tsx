import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

function SectionTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h1"> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "h1"

  return (
    <Comp
      className={cn(
        "mb-4 text-2xl sm:text-4xl font-bold text-secondary",
        className,
      )}
      {...props}
    />
  )
}

export { SectionTitle }
