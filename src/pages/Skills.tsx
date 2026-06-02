import { useState, useEffect } from "react"
import {
  Code2, Server, Database, TabletSmartphone, Workflow, Cloud, MonitorCloud,
  BookType, CpuIcon, ChartSpline, BrainCircuit, BotIcon,
  ChartScatter, ChartPie, PiIcon, Sigma, Wrench,
  FlaskConical, Palette, Terminal, GraduationCap
} from "lucide-react"
import { Section } from "@/components/Section"
import { SectionPrompt } from "@/components/text/section-prompt"
import { SectionTitle } from "@/components/text/section-title"
import { SectionSubtitle } from "@/components/text/section-subtitle"

const categories = [
  {
    id: "WEB_DEVELOPMENT",
    label: "WEB_DEVELOPMENT",
    icon: "◆",
    skills: [
      { label: "FRONTEND", icon: Code2, value: "HTML, CSS, Tailwind CSS, Javascript, TypeScript, Astro, React, Next.js, Vite" },
      { label: "BACKEND", icon: Server, value: "Javascript, TypeScript, Python, Java, C#, Node.js, Express.js, npm, pnpm" },
      { label: "DATABASE", icon: Database, value: "PostgreSQL, MySQL, SQLite, MongoDB, Supabase, Firebase" },
      { label: "MOBILE", icon: TabletSmartphone, value: "Android Studio, Kotlin, Gradle, Jetpack Compose, Material Design" },
      { label: "DEVOPS", icon: Workflow, value: "Git, Git Flow, GitHub, GitHub Actions, CI/CD Pipelines" },
      { label: "CLOUD_PLATFORMS", icon: Cloud, value: "Netlify, Supabase, Firebase" },
      { label: "APIs", icon: MonitorCloud, value: "REST, Postman" },
    ],
  },
  {
    id: "ML_AND_AI",
    label: "ML_AND_AI",
    icon: "◆",
    skills: [
      { label: "LANGUAGES", icon: BookType, value: "Python, R" },
      { label: "FRAMEWORKS", icon: CpuIcon, value: "TensorFlow, PyTorch, Keras, SciPy, Scikit-learn" },
      { label: "ML_METHODS", icon: ChartSpline, value: "Linear Regression, Neural Networks, K-Means Clustering, PCA" },
      { label: "AI_METHODS", icon: BrainCircuit, value: "Natural Language Processing, Computer Vision, Reinforcement Learning" },
      { label: "AI_CODING", icon: BotIcon, value: "Claude Code, GitHub Copilot, Opencode, LM Studio, Ollama, MCP Servers" },
    ],
  },
  {
    id: "DATA_SCIENCE",
    label: "DATA_SCIENCE",
    icon: "◆",
    skills: [
      { label: "LANGUAGES", icon: BookType, value: "Python, R, SQL" },
      { label: "ANALYTICS", icon: ChartScatter, value: "Pandas, NumPy" },
      { label: "VISUALIZATION", icon: ChartPie, value: "Matplotlib, Seaborn, Plotly, ggplot2" },
      { label: "MATHEMATICS", icon: PiIcon, value: "Linear Algebra, Vectors, Matrices, Calculus" },
      { label: "STATISTICS", icon: Sigma, value: "Hypothesis Testing, Probability, Regression Analysis" },
      { label: "TOOLS", icon: Wrench, value: "Jupyter Notebooks, R Studio" },
    ],
  },
  {
    id: "OTHER",
    label: "OTHER",
    icon: "◆",
    skills: [
      { label: "PROGRAMMING_LANGUAGES", icon: BookType, value: "Python, C, C#, Java, Kotlin, SQL, Pine Script, Bash" },
      { label: "TESTING", icon: FlaskConical, value: "Unit / Integration / End-to-end, PyTest, Vitest, JUnit, Playwright"},
      { label: "DESIGN", icon: Palette, value: "Figma, CSS Grid/Flexbox" },
      { label: "CLI_TOOLS", icon: Terminal, value: "Lazygit, Neovim, Vim, tmux" },
      { label: "METHODOLOGIES", icon: GraduationCap, value: "Git Flow, Agile, Scrum" },
    ],
  },
]

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)

  useEffect(() => {
    setFadeKey((prev) => prev + 1)
  }, [activeIndex])

  const active = categories[activeIndex]

  return (
    <Section
      id="skills"
      outerClassName="min-w-64 md:min-w-128 lg:min-w-232"
    >
      <div className="mb-16 text-center">
        <SectionPrompt>// LOG_ARCHIVE: skill_entries</SectionPrompt>
        <SectionTitle>My Skills</SectionTitle>
        <SectionSubtitle>
          A breakdown of my technical abilities across web development, machine learning, data science,
          and more. Each category represents a domain I've invested time and effort into.
        </SectionSubtitle>
      </div>

      {/* Tab bar */}
      <div className="mb-6">
        <div className="bg-muted/30 border border-border rounded-t-lg px-4 overflow-x-auto">
          <div className="flex items-center h-10 gap-0">
            {categories.map((cat, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    relative flex items-center h-full px-4 text-sm font-mono font-bold tracking-wider
                    transition-all duration-200 select-none
                    ${isActive
                      ? "text-accent border-b-2 border-accent"
                      : "text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-muted"
                    }
                  `}
                >
                  <span className="mr-2 opacity-60">{cat.icon}</span>
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="ml-1.5 inline-block w-2.5 h-4 bg-accent animate-blink-block" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Category header */}
      <div className="mb-4 ml-4">
        <span className="text-accent font-bold tracking-widest text-lg">
          {"["}
          {active.label}
          {"]"}
        </span>
        <span className="text-muted-foreground text-sm ml-3">
          {"// "}{active.skills.length} subcategories
        </span>
      </div>

      {/* Skills list */}
      <div key={fadeKey} className="min-h-88 space-y-8 ml-4 pl-6 border-l-2 border-dashed border-border/50">
        <div className="animate-fade-in-up">
          {active.skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.label}
                className="mb-4 group transition-colors hover:text-secondary"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-lg font-bold tracking-wider text-secondary">
                    {skill.label}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {'::'}
                  </span>
                </div>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.value}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
