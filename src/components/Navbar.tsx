import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { ThemeColorDropdown } from "./ThemeColorDropdown"
import { ThemeModeDropdown } from "./ThemeModeDropdown"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "HOME", path: "#home" },
  { name: "SKILLS", path: "#skills" },
  { name: "PROJECTS", path: "#projects" },
  { name: "CONTACT", path: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )
    sections.forEach((section) => observerRef.current?.observe(section))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(path)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-1000 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center space-x-2 text-primary"
        >
          <span className="text-lg font-bold tracking-wider">[KEVANOULLIO]</span>
        </a>

        {/* Desktop Navigation — centered, shows at md: */}
        <div className="hidden md:flex md:items-center md:gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
              className={cn(
                "text-sm font-medium tracking-wider transition-colors",
                activeSection === link.path
                  ? "text-primary underline decoration-primary decoration-2 underline-offset-4"
                  : "text-muted-foreground hover:text-secondary"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side — theme controls, shows at lg: */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <ThemeToggle />
          <ThemeModeDropdown />
        </div>

        {/* Mid-size: color dropdown + mode dropdown */}
        <div className="hidden md:flex lg:hidden items-center gap-2">
          <ThemeColorDropdown />
          <ThemeModeDropdown />
        </div>

        {/* Mobile Navigation Toggle — shows at <768px */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeColorDropdown />
          <ThemeModeDropdown />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="border border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu — shows at <1280px */}
      {mobileMenuOpen && (
        <div className="border-t border-border xl:hidden">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
                className={cn(
                  "block py-2 text-center text-sm font-medium tracking-wider transition-colors",
                  activeSection === link.path
                    ? "text-primary underline decoration-primary decoration-2 underline-offset-4"
                    : "text-muted-foreground hover:text-secondary"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
