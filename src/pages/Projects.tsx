import { Github, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "Vintique Sound (work in progress)",
    description: "A responsive mostly static website for my music business.",
    image: "/project_cards/vintique_sound_website-preview.png",
    tags: ["Website", "Astro", "React", "Tailwind CSS"],
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["Astro", "TypeScript", "React", "Tailwind CSS"],
    role: "Sole Developer (all code)",
    liveUrl: "https://vintiquesound.netlify.app/"
  },
  {
    title: "Vintique Sound (prototype)",
    description: "A responsive static website prototype for my music business.",
    image: "/project_cards/vintique_sound_website_prototype-preview.png",
    tags: ["Website", "HTML", "CSS", "JavaScript"],
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["HTML", "JavaScript", "CSS"],
    role: "Sole Developer (all code)",
    repoUrl: "https://github.com/kevanoullio/vintique-sound-website-prototype",
    liveUrl: "https://kevanoullio.github.io/vintique-sound-website-prototype/"
  },
  {
    title: "House of Tutor",
    description: "A tutoring mobile app for tutors and students, developed for Android.",
    image: "/project_cards/house_of_tutor-preview.png",
    tags: ["Android Development", "Mobile App", "Kotlin"],
    categories: ["Education", "Mobile App", "Android Development"],
    technologies: ["Kotlin", "Gradle", "SQLite", "Firebase"],
    role: "Scrum Master and Software Architect (team of 5)",
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
  },
  {
    title: "Apples to Apples",
    description: "An AI Agent and fully functional Apples to Apples game.",
    image: "/project_cards/apples_to_apple-preview.png",
    tags: ["AI/ML", "Game Development", "Python"],
    categories: ["AI/ML", "Artificial Intelligence", "Machine Learning", "Game Development"],
    technologies: ["Python", "Word2vec", "Keras"],
    role: "Researcher and Developer (team of 3)",
    repoUrl: "https://github.com/kevanoullio/apples-to-apples-agent",
  }
]

export function Projects() {
  return (
    <div className="px-12">
      <section className="my-16 text-center">
        <div className="mb-4 text-muted-foreground text-sm tracking-widest uppercase">
          {'// LOG_ARCHIVE: PROJECT_ENTRIES'}
        </div>
        <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and learning experience. Click on any project to explore its code on GitHub.
        </p>
      </section>

      <section className="my-16">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border-b border-border last:border-b-0"
            >
              {/* Project Header */}
              <div className="px-4 py-6 flex items-start gap-4">
                <span className="text-muted-foreground text-sm font-mono mt-1">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Folder className="h-4 w-4 text-primary" />
                    <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                      {`>> ${project.title}`}
                    </h3>
                  </div>
                  <p className="mb-3 text-muted-foreground italic">
                    {`"${project.description}"`}
                  </p>

                  {/* Role / Metadata */}
                  <p className="mb-3 text-xs text-muted-foreground tracking-wider uppercase">
                    <span className="text-primary">role:</span> {project.role}
                  </p>

                  {/* Technology tags — no cards, just inline brackets */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-border/60 px-2 py-0.5 tracking-wider"
                      >
                        [{tech}]
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-3 w-3" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Preview image — shown on hover or always on the right */}
                {project.image && (
                  <div className="hidden lg:block w-48 flex-shrink-0">
                    <div className="border border-border p-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
