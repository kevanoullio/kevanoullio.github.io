import { Code2, Server, Database, Workflow, TabletSmartphone, BookType, Terminal, PiIcon, CpuIcon, BotIcon } from "lucide-react"
import { Section } from "@/components/Section"
import { TypingText } from "@/components/TypingText"

const skills = [
  { label: "FRONTEND", icon: Code2, value: "HTML, CSS, Tailwind CSS, Javascript, TypeScript, Astro, React" },
  { label: "BACKEND", icon: Server, value: "Javascript, TypeScript, Python, Java, C#, Node.js, npm, pnpm" },
  { label: "DATABASE", icon: Database, value: "PostgreSQL, MySQL, SQLite, MongoDB, Supabase, Firebase" },
  { label: "MOBILE", icon: TabletSmartphone, value: "Android Studio, Kotlin, Gradle, Jetpack Compose, Flutter" },
  { label: "DEVOPS", icon: Workflow, value: "Git, GitHub Actions" },
  { label: "CLI_TOOLS", icon: Terminal, value: "Lazygit, Neovim, Vim," },
  { label: "LANGUAGES", icon: BookType, value: "C, Bash" },
  { label: "ML", icon: CpuIcon, value: "Tensorflow, Keras" },
  { label: "AI", icon: BotIcon, value: "Claude Code, GitHub Copilot, Opencode, LM Studio, Ollama" },
  { label: "MATHEMATICS", icon: PiIcon, value: "Linear Algebra, Vectors, Matrices, Calculus" },
]

const accentColors = [
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
  "text-accent",
]

export function Skills() {
  return (
    <Section id="skills" innerClassName="border-t border-border">
      <div className="mb-8">
        <TypingText
          text="[SYSTEM_CAPABILITIES]"
          speed={80}
          delay={200}
          className="text-2xl font-bold text-accent"
        />
      </div>

      <div className="space-y-6 ml-4 border-l-2 border-dashed border-border/50 pl-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.label}
              className="group transition-colors hover:text-secondary"
            >
              <div className="flex items-center gap-3 mb-1">
                <Icon className={`h-5 w-5 ${accentColors[i]}`} />
                <span className="text-lg font-bold tracking-wider text-secondary">
                  {skill.label}
                </span>
                <span className="text-muted-foreground text-sm">
                  {'::'}
                </span>
              </div>
              <p className="text-muted-foreground group-hover:text-secondary transition-colors">
                {skill.value}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
