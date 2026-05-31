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
      className={`flex flex-col justify-center p-16 min-h-[64vh] max-w-6xl fade-in scroll-mt-0 ${outerClassName}`}
    >
      <div className={`${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
