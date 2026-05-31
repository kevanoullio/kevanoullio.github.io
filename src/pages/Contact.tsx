import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  { label: "EMAIL", icon: Mail, value: "kevanoullio@example.com", href: "mailto:kevanoullio@example.com" },
  { label: "GITHUB", icon: Github, value: "@kevanoullio", href: "https://github.com/kevanoullio" },
  { label: "LINKEDIN", icon: Linkedin, value: "Kevin Ulliac", href: "https://linkedin.com/in/kevanoullio" },
  { label: "LOCATION", icon: MapPin, value: "Edmonton, AB, Canada", href: null },
]

export function Contact() {
  return (
    <div className="px-12">
      <section className="my-16 text-center">
        <div className="mb-4 text-muted-foreground text-sm tracking-widest uppercase">
          {'// CONNECTION_REQUEST: INITIATED'}
        </div>
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </section>

      <section className="my-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form — Terminal Input Style */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-primary underline decoration-double underline-offset-4">
            {'[SEND_MESSAGE]'}
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-1 tracking-wider">
                {'> YOUR_NAME:'}
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-1 tracking-wider">
                {'> YOUR_EMAIL:'}
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-1 tracking-wider">
                {'> MESSAGE:'}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Type your message..."
              />
            </div>
            <Button size="lg" variant="default" className="w-full border border-primary/50">
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                <span>SEND_MESSAGE</span>
              </span>
            </Button>
          </form>
        </div>

        {/* Contact Links — Terminal List Style (NO CARDS) */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-primary underline decoration-double underline-offset-4">
            {'[ADDRESS_BOOK]'}
          </h2>
          <div className="space-y-4 border-l-2 border-dashed border-border/50 pl-6">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <div key={link.label} className="group">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold tracking-wider">{link.label}</span>
                    <span className="text-muted-foreground text-xs">{'::'}</span>
                  </div>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground group-hover:text-primary transition-colors text-sm"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{link.value}</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Terminal decoration */}
          <div className="mt-12 p-4 border border-border bg-muted/20">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-primary">{'>'}</span> Waiting for your message...<br />
              <span className="text-primary">{'>'}</span> Response time: usually within 1-2 business days<br />
              <span className="text-primary">{'>'}</span> Languages: EN, FR
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
