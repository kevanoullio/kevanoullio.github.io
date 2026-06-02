import { useState, useEffect } from "react"
import {
  LuCodeXml, LuServer, LuDatabase, LuTabletSmartphone, LuPalette, LuWorkflow, LuCloud, LuNetwork,
  LuGitMerge, LuFlaskConical, LuLockKeyhole, LuFolderTree, LuGraduationCap, LuTerminal,
  LuCpu, LuChartSpline, LuChartScatter, LuBrainCircuit, LuBot,
  LuChartArea, LuChartPie, LuPi, LuSigma, LuWrench,
  LuCode, LuSquareTerminal, LuDatabaseZap, LuFileJson2
} from "react-icons/lu"
import { TbMatrix } from "react-icons/tb"
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
      { label: "FRONTEND", icon: LuCodeXml, value: "HTML, CSS, Tailwind CSS, Javascript, TypeScript, Astro, React, Next.js, Vite" },
      { label: "BACKEND", icon: LuServer, value: "Javascript, TypeScript, Java, C#, .NET, Node.js, Express.js, npm, pnpm" },
      { label: "DATABASE", icon: LuDatabase, value: "PostgreSQL, MySQL, SQLite, Drizzle ORM, MongoDB, Firestore" },
      { label: "MOBILE", icon: LuTabletSmartphone, value: "Android Studio, Kotlin, Gradle, Jetpack Compose, Material Design" },
      { label: "DESIGN", icon: LuPalette, value: "Responsive Design, Accessibility (WCAG), Figma, CSS Grid/Flexbox" },
      { label: "DEVOPS", icon: LuWorkflow, value: "CI/CD Pipelines, GitHub Actions, Linux, Bash" },
      { label: "CLOUD_PLATFORMS", icon: LuCloud, value: "Netlify, Supabase, Firebase, Render" },
      { label: "APIs", icon: LuNetwork, value: "REST, Postman" },
    ],
  },
    {
    id: "ENGINEERING",
    label: "ENGINEERING",
    icon: "◆",
    skills: [
      { label: "VERSION_CONTROL", icon: LuGitMerge, value: "Git, Git Flow, Git Tagging, GitHub, GitLab"},
      { label: "TESTING", icon: LuFlaskConical, value: "Unit / Integration / End-to-end, PyTest, Vitest, JUnit, Playwright"},
      { label: "SECURITY", icon: LuLockKeyhole, value: "Authentication (OAuth, JWT), Input Validation, SQL Injection Prevention" },
      { label: "ARCHITECTURE", icon: LuFolderTree, value: "MVC/MVVM, Monolith, Microservices, Serverless" },
      { label: "METHODOLOGIES", icon: LuGraduationCap, value: "Git Flow, Agile, Scrum, Kanban" },
      { label: "CLI_TOOLS", icon: LuTerminal, value: "Lazygit, Neovim, Vim, tmux" },
    ],
  },
  {
    id: "ML_AND_AI",
    label: "ML_AND_AI",
    icon: "◆",
    skills: [
      { label: "FRAMEWORKS", icon: LuCpu, value: "TensorFlow, PyTorch, Keras, SciPy, Scikit-learn, Hugging Face" },
      { label: "ML_MATHEMATICS", icon: LuChartSpline, value: "Gradient Descent, Backpropagation, Matrix Operations, Probability Distributions" },
      { label: "ML_METHODS", icon: LuChartScatter, value: "Linear Regression, Neural Networks, K-Means Clustering, PCA, Decision Trees" },
      { label: "AI_METHODS", icon: LuBrainCircuit, value: "NLP, Embeddings, Computer Vision, Reinforcement Learning" },
      { label: "AI_CODING", icon: LuBot, value: "Claude LuCode, GitHub Copilot, Opencode, LM Studio, Ollama, MCP Servers" },
    ],
  },
  {
    id: "DATA_SCIENCE",
    label: "DATA_SCIENCE",
    icon: "◆",
    skills: [
      { label: "ANALYTICS", icon: LuChartArea, value: "Pandas, NumPy, StatsModels" },
      { label: "VISUALIZATION", icon: LuChartPie, value: "Matplotlib, Seaborn, Plotly, ggplot2" },
      { label: "LINEAR_ALGEBRA", icon: TbMatrix, value: "Vectors, Matrices, Matrix Decomposition, Eigenvalues/Eigenvectors" },
      { label: "APPLIED_MATH", icon: LuPi, value: "Calculus, Numerical Methods, Optimization, Interpolation, Graph Theory" },
      { label: "STATISTICS", icon: LuSigma, value: "Hypothesis Testing, Probability, Regression Analysis, Time Series Analysis" },
      { label: "TOOLS", icon: LuWrench, value: "Jupyter Notebooks, R Studio" },
    ],
  },
  {
    id: "LANGUAGES",
    label: "LANGUAGES",
    icon: "◆",
    skills: [
      { label: "PROGRAMMING_LANGUAGES", icon: LuCode, value: "Python, C, JavaScript, TypeScript, Java, Kotlin, C#, R" },
      { label: "SCRIPTING_LANGUAGES", icon: LuSquareTerminal, value: "Bash, PowerShell, Pine Script"},
      { label: "QUERY_LANGUAGES", icon: LuDatabaseZap, value: "SQL" },
      { label: "MARKUP_LANGUAGES", icon: LuCodeXml, value: "HTML, Markdown, MDX, XML" },
      { label: "DATA_FORMATS", icon: LuFileJson2, value: "CSV, JSON, YAML, TOML" },
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
      <div key={fadeKey} className="space-y-8 ml-4 pl-6 border-l-2 border-dashed border-border/50">
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
