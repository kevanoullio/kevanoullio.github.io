interface SectionProps {
  children: React.ReactNode
  id?: string
  outerClassName?: string
  innerClassName?: string
}

export function Section({ children, id, outerClassName = "", innerClassName = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center p-16 min-h-[64vh] max-w-6xl fade-in scroll-mt-0 relative ${outerClassName}`}
    >
      <div className="absolute top-0 left-8 h-px w-12 bg-accent/40" />
      <div className={`${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
