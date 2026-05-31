import { ArrowRight, Terminal, Cpu, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  { label: "FULL_STACK", icon: Cpu, value: "React, Node.js, TypeScript, Python" },
  { label: "MOBILE", icon: Code2, value: "Android (Kotlin), Flutter" },
  { label: "CLI_TOOLS", icon: Terminal, value: "Bash, Rust, Go, Node CLI" },
]

export function Home() {
  return (
    <div className="px-12">
      {/* Hero Section */}
      <section className="my-16 min-h-[65vh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
              <img
                src="/kevano_phonebooth.jpg"
                alt="Kevin Ulliac"
                width={280}
                height={560}
                className="rounded-lg object-cover border border-border"
              />
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 text-muted-foreground text-sm tracking-widest uppercase">
              {'// SYSTEM_BOOT: user_profile_loaded'}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-muted-foreground">{'>'}</span>{' '}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Kevin Ulliac
              </span>
            </h1>
            <p className="mx-auto md:mx-0 mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A passionate software developer crafting elegant solutions to complex problems.
              I love building applications that make a difference.
            </p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Button size="lg" variant="default" className="border border-primary/50">
                <a href="#projects" className="flex items-center gap-2">
                  <span>VIEW_WORK</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border border-border">
                <a href="#contact" className="flex items-center gap-2">
                  <span>GET_IN_TOUCH</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="my-16 border-t border-border">
        <h2 className="mb-8 text-2xl font-bold text-primary underline decoration-double underline-offset-4">
          {'[SYSTEM_CAPABILITIES]'}
        </h2>
        <div className="space-y-6 ml-4 border-l-2 border-dashed border-border/50 pl-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.label}
                className="group transition-colors hover:text-primary"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-lg font-bold tracking-wider">
                    {skill.label}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {'::'}
                  </span>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.value}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Built With — Terminal Status Style (NO CARDS) */}
      <section className="my-16 border-t border-border">
        <h2 className="mb-8 text-2xl font-bold text-primary underline decoration-double underline-offset-4">
          {'[ENVIRONMENT]'}
        </h2>
        <div className="flex flex-wrap items-center gap-8 px-4">
          <div className="flex items-center gap-3 border border-border px-4 py-2">
            <img src="/react.svg" alt="React" className="h-6 w-6" />
            <span className="text-sm tracking-wider">REACT</span>
          </div>
          <div className="flex items-center gap-3 border border-border px-4 py-2">
            <img src="/vite.svg" alt="Vite" className="h-6 w-6" />
            <span className="text-sm tracking-wider">VITE</span>
          </div>
          <div className="flex items-center gap-3 border border-border px-4 py-2">
            <img src="/tailwindcss.svg" alt="Tailwind CSS" className="h-6 w-6" />
            <span className="text-sm tracking-wider">TAILWIND</span>
          </div>
        </div>
      </section>

      {/* CTA — Terminal Prompt Style */}
      <section className="my-16 border-t border-border bg-muted/30 py-20">
        <div className="text-center">
          <p className="mb-2 text-muted-foreground text-sm tracking-widest uppercase">
            {'// AWAITING_INPUT'}
          </p>
          <h2 className="mb-4 text-3xl font-bold">Ready to see my work?</h2>
          <p className="mb-8 text-muted-foreground">
            Check out my projects to see what I've been building.
          </p>
          <Button size="lg" variant="default" className="border border-primary/50">
            <a href="#projects" className="flex items-center gap-2">
              <span>EXPLORE_PROJECTS</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
