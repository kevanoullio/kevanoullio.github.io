import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"
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

  // IntersectionObserver to track which section is in view
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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center space-x-2 text-primary"
        >
          <span className="text-lg font-bold tracking-wider">[KEVANO]</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
              className={cn(
                "text-sm font-medium tracking-wider transition-colors",
                activeSection === link.path
                  ? "text-primary underline decoration-primary decoration-2 underline-offset-4"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="border border-primary/20 dark:border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
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
                    : "text-muted-foreground hover:text-primary"
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
