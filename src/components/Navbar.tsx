import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", path: '/' },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Kevin Ulliac</span>
        </Link>
        <div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
