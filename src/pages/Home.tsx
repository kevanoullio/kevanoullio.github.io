import { Link } from "react-router-dom"
import { ArrowRight, Code2, Terminal, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[65vh]">
          <div className="flex justify-center pb-12">
            <img
              src="../../public/kevano_phonebooth.jpg"
              alt="a picture of kevin in front of a phonebooth"
              width={320}
              height={640}
            />
          </div>
          <h1 className="text-center mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Kevin Ulliac
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A passionate software developer crafting elegant solutions to complex problems.
            I love building applications that make a difference.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Features/Skills Section */}
        <section className="border-t border-border py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">What I Do</h2>
          <div className="grid gap-8 md:grid-cols-3">

            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Full Stack Apps</h3>
              <p className="text-muted-foreground">
                Developing complete web applications from frontend to backend with modern technologies.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Terminal Applications</h3>
              <p className="text-muted-foreground">
                Building powerful CLI tools and terminal-based applications with clean, efficient code.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Backend Development</h3>
              <p className="text-muted-foreground">
                Creating robust, scalable backend systems using various programming languages and frameworks.
              </p>
            </div>

          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="border-t border-border py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Built With</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="group relative" tabIndex={0} aria-label="React">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:-translate-y-1 group-focus-visible:shadow-lg">
                <img src="/react.svg" alt="React logo" className="h-8 w-8" />
              </div>
              <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100 group-focus-visible:-translate-y-5 group-focus-visible:opacity-100">
                <div className="rounded-full bg-linear-to-r from-primary to-accent p-px">
                  <div className="whitespace-nowrap rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      React
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative" tabIndex={0} aria-label="Vite">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:-translate-y-1 group-focus-visible:shadow-lg">
                <img src="/vite.svg" alt="Vite logo" className="h-8 w-8" />
              </div>
              <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100 group-focus-visible:-translate-y-5 group-focus-visible:opacity-100">
                <div className="rounded-full bg-linear-to-r from-primary to-accent p-px">
                  <div className="whitespace-nowrap rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      Vite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative" tabIndex={0} aria-label="Tailwind CSS">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:-translate-y-1 group-focus-visible:shadow-lg">
                <img src="/tailwindcss.svg" alt="Tailwind CSS logo" className="h-8 w-8" />
              </div>
              <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100 group-focus-visible:-translate-y-5 group-focus-visible:opacity-100">
                <div className="rounded-full bg-linear-to-r from-primary to-accent p-px">
                  <div className="whitespace-nowrap rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/50 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to see my work?</h2>
          <p className="mb-8 text-muted-foreground">
            Check out my projects to see what I've been building.
          </p>
          <Button size="lg" asChild>
            <Link to="/projects">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
