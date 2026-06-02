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
      className={`flex flex-col justify-center my-16 px-12 md:px-16 min-h-[60vh] max-w-6xl fade-in scroll-mt-16 relative ${outerClassName}`}
    >
      <div className={`${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
