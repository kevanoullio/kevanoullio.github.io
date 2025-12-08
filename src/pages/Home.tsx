import { Link } from "react-router-dom"
import { ArrowRight, Code2, Terminal, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import reactLogo from "../assets/react.svg"
import viteLogo from "../../public/vite.svg"

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[80vh]">
        <div className="flex justify-center p-12">
          <img
            src="../../public/kevano_phonebooth.jpg"
            alt="a picture of kevin in front of a phonebooth"
            width={320}
            height={640}
          />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>
    </div>
  )
}
