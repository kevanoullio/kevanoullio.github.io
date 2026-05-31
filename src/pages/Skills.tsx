import { Code2, TabletSmartphone, Terminal, CpuIcon, BotIcon } from "lucide-react"
import { Section } from "@/components/Section"
import { TypingText } from "@/components/TypingText"

const skills = [
  { label: "FULL_STACK", icon: Code2, value: "Astro, React, Node.js, Javascript, TypeScript, SQL, NoSQL, GitHub Actions" },
  { label: "MOBILE", icon: TabletSmartphone, value: "Android Studio, Kotlin, Gradle, Jetpack Compose, Flutter" },
  { label: "CLI_TOOLS", icon: Terminal, value: "Python, Java, C, Bash" },
  { label: "ML", icon: CpuIcon, value: "Linear Algebra, Vectors, Matrices, Calculus, Tensorflow, Keras" },
  { label: "AI", icon: BotIcon, value: "Claude Code, GitHub Copilot, Opencode, LM Studio, Ollama" },
]

export function Skills() {
  return (
    <Section id="skills" innerClassName="border-t border-border">
      <div className="mb-8">
        <TypingText
          text="[SYSTEM_CAPABILITIES]"
          speed={80}
          delay={200}
          className="text-2xl font-bold text-primary"
        />
      </div>

      <div className="space-y-6 ml-4 border-l-2 border-dashed border-border/50 pl-6">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.label}
              className="group transition-colors hover:text-primary"
            >
              <div className="flex items-center gap-3 mb-1">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold tracking-wider">
                  {skill.label}
                </span>
                <span className="text-muted-foreground text-sm">
                  {'::'}
                </span>
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.value}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
