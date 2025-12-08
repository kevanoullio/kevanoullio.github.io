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

    </div>
  )
}
