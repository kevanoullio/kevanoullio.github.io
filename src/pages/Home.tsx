import { Link } from "react-router-dom"
import { ArrowRight, Code2, Terminal, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import reactLogo from "../assets/react.svg"
// import viteLogo from "./vite.svg"

export function Home() {
  return (
    <div className="flex flex-col">
      <section>
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
      </section>
    </div>
  )
}
