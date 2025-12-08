import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold text-primary">Kevin Ulliac</span>
            <p className="text-sm text-muted-foreground">
              Building software, one line at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:kevanoullio@outlook.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/kevanoullio"
              target="_blank"
              rel="noopener"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevinulliac/"
              target="_blank"
              rel="noopener"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kevin Ulliac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
