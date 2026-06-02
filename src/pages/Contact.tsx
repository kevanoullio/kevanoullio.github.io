import { useState, useCallback } from "react"
import type { FormEvent, ChangeEvent } from "react"
import { LuMail, LuGithub, LuLinkedin, LuMapPin, LuSend } from "react-icons/lu"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { SectionPrompt } from "@/components/text/section-prompt"
import { SectionTitle } from "@/components/text/section-title"
import { SectionSubtitle } from "@/components/text/section-subtitle"
import { Toast } from "@/components/Toast"

const contactLinks = [
  { label: "EMAIL", icon: LuMail, value: "kevanoullio@outlook.com", href: "mailto:kevanoullio@outlook.com" },
  { label: "GITHUB", icon: LuGithub, value: "@kevanoullio", href: "https://github.com/kevanoullio" },
  { label: "LINKEDIN", icon: LuLinkedin, value: "Kevin Ulliac", href: "https://linkedin.com/in/kevinulliac" },
  { label: "LOCATION", icon: LuMapPin, value: "Edmonton, AB, Canada", href: null },
]

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format"
    }
    if (!message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [name, email, message])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)

    const subject = encodeURIComponent("kevanoullio.github.io - Contact Form")
    const body = encodeURIComponent(`A message from ${name.trim()} - ${email.trim()}\n\n${message.trim()}`)
    const mailtoLink = `mailto:kevanoullio@outlook.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setToast({ message: "Opening your email client...", type: "success" })
    setName("")
    setEmail("")
    setMessage("")
    setErrors({})
    setLoading(false)
  }

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value)
    if (errors[e.target.id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.id]: undefined }))
    }
  }

  return (
    <Section id="contact">
      <div className="mb-16 text-center">
        <SectionPrompt>// CONNECTION_REQUEST: initiated</SectionPrompt>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </SectionSubtitle>
      </div>

      <section className="my-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-accent underline decoration-double underline-offset-4">
            {'[SEND_MESSAGE]'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm text-secondary mb-1 tracking-wider">
                {'> YOUR_NAME: '}<span className="text-primary">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleInputChange(setName)}
                className={`w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-accent transition-colors ${errors.name ? "border-red-400" : ""}`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-secondary mb-1 tracking-wider">
                {'> YOUR_EMAIL: '}<span className="text-primary">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className={`w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-accent transition-colors ${errors.email ? "border-red-400" : ""}`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-secondary mb-1 tracking-wider">
                {'> MESSAGE: '}<span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={handleInputChange(setMessage)}
                className={`w-full bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-accent transition-colors resize-none ${errors.message ? "border-red-400" : ""}`}
                placeholder="Type your message..."
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>
            <Button
              theme="solid-primary"
              size="lg"
              className="w-full"
              disabled={loading}
              type="submit"
            >
              <span className="flex items-center gap-2">
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <LuSend className="h-4 w-4" />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
              </span>
            </Button>
          </form>
        </div>

        {/* Contact Links */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-accent underline decoration-double underline-offset-4">
            {'[ADDRESS_BOOK]'}
          </h2>
          <div className="space-y-4 border-l-2 border-dashed border-border/50 pl-6">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <div key={link.label} className="group">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-bold tracking-wider text-secondary">{link.label}</span>
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
          <div className="mt-12 p-4 border border-accent/20 bg-accent/5">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-accent">{'>'}</span> Waiting for your message...<br />
              <span className="text-accent">{'>'}</span> Response time: usually within 1-2 business days<br />
              <span className="text-accent">{'>'}</span> Languages: EN, FR
            </p>
          </div>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </Section>
  )
}
