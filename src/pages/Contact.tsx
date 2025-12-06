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
    <div>

    </div>
  )
}
