import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { TypingText } from "@/components/TypingText"

export function Home() {
  return (
    <Section id="home">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Profile image */}
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
            <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full border-2 border-accent/40 bg-accent/10" />
            <div className="absolute -top-2 -left-2 h-5 w-5 rounded-full border-2 border-secondary/40 bg-secondary/10" />
            <img
              src="/kevano_phonebooth.jpg"
              alt="Kevin Ulliac"
              width={360}
              height={360}
              className="rounded-lg object-cover border border-border"
            />
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 text-secondary text-sm tracking-widest uppercase">
            {'// SYSTEM_BOOT: user_profile_loaded'}
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-secondary">{'>'}</span>{' '}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              <TypingText
                text="Kevin Ulliac"
                speed={70}
                delay={500}
              />
            </span>
          </h1>
          <p className="mx-auto md:mx-0 mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A passionate software developer crafting elegant solutions to complex problems.
            I love building applications that make a difference.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Button theme="solid-primary" size="lg">
              <a href="#projects" className="flex items-center gap-2">
                <span>VIEW_WORK</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button theme="outline" size="lg">
              <a href="#contact" className="flex items-center gap-2">
                <span>GET_IN_TOUCH</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
