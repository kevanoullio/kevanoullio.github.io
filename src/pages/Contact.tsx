import { Mail, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Feel free to reach out via email",
    value: "kevanoullio@outlook.com",
    href: "mailto:kevanoullio@outlook.com",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code and contributions",
    value: "github.com/kevanoullio",
    href: "https://github.com/kevanoullio",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    value: "linkedin.com/in/kevanoullio",
    href: "https://www.linkedin.com/in/kevinulliac/",
  },
]

export function Contact() {
  return (
    <div className="py-12">
      <div className="mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your visions. Feel free to reach out through any of the following channels.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className="transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="link" asChild className="p-0">
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
