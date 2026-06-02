import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

function SectionPrompt({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "mb-4 text-primary text-sm tracking-widest uppercase",
        className,
      )}
      {...props}
    />
  )
}

export { SectionPrompt }
