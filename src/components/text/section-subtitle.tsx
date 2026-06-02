import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

function SectionSubtitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "p"

  return (
    <Comp
      className={cn(
        "mx-auto mb-8 max-w-2xl text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { SectionSubtitle }
