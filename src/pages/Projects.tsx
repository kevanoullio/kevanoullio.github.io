import { Section } from "@/components/Section"
import { ImagePopup } from "@/components/ImagePopup"
import { SectionPrompt } from "@/components/text/section-prompt"
import { SectionSubtitle } from "@/components/text/section-subtitle"
import { SectionTitle } from "@/components/text/section-title"
import { ExternalLink, Folder } from "lucide-react"
import { LuGithub } from "react-icons/lu"
import { useState } from "react"

const projects = [
  {
    title: "Vintique Sound (work in progress)",
    description: "A responsive mostly static website for my music business.",
    image: "/project_cards/vintique_sound_website-preview.png",
    tags: ["Website", "Astro", "React", "Tailwind CSS"],
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["Astro", "TypeScript", "React", "Tailwind CSS", "PostgreSQL", "Drizzle"],
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
    technologies: ["Kotlin", "Gradle", "Jetpack Compose UI", "SQLite", "Firebase"],
    role: "Scrum Master and Software Architect (team of 5)",
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
  },
  {
    title: "Apples to Apples",
    description: "An AI Agent and fully functional Apples to Apples game.",
    image: "/project_cards/apples_to_apples-preview.png",
    tags: ["AI/ML", "Game Development", "Python"],
    categories: ["AI/ML", "Artificial Intelligence", "Machine Learning", "Game Development"],
    technologies: ["Python", "C", "Word2vec", "Keras"],
    role: "Researcher and Developer (team of 3)",
    repoUrl: "https://github.com/kevanoullio/apples-to-apples-agent",
  }
]

export function Projects() {
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string; repoUrl?: string; liveUrl?: string } | null>(null)

  return (
    <Section id="projects">
      <div className="mb-16 text-center">
        <SectionPrompt>// LOG_ARCHIVE: project_entries</SectionPrompt>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and learning experience. Click on any project to explore its code on GitHub.
        </SectionSubtitle>
      </div>

      <section>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border-b border-border last:border-b-0"
            >
              <div className="px-0 sm:px-4 py-6 flex items-start gap-4">
                {/* Project Header */}
                <span className="text-secondary text-sm font-mono mt-1">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Folder className="h-4 w-4 text-accent" />
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {`>> ${project.title}`}
                    </h3>
                  </div>
                  <p className="mb-3 text-muted-foreground italic">
                    {`"${project.description}"`}
                  </p>

                  {/* Role / Metadata */}
                  <p className="mb-3 text-xs tracking-wider uppercase">
                    <span className="text-secondary">role:</span>{' '}
                    <span className="text-foreground">{project.role}</span>
                  </p>

                  {/* Technology tags — colored borders */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-accent/30 text-accent px-2 py-0.5 tracking-wider"
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
                        className="flex items-center gap-1 text-muted-foreground hover:text-secondary transition-colors"
                      >
                        <LuGithub className="h-3 w-3" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Preview image */}
                {project.image && (
                  <div className="hidden lg:block w-64 shrink-0">
                    <div className="border border-accent/20 p-1 cursor-zoom-in" onClick={() => setPopupImage({ src: project.image!, alt: project.title, repoUrl: project.repoUrl, liveUrl: project.liveUrl })}>
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

      {popupImage && (
        <ImagePopup
          src={popupImage.src}
          alt={popupImage.alt}
          repoUrl={popupImage.repoUrl}
          liveUrl={popupImage.liveUrl}
          onClose={() => setPopupImage(null)}
        />
      )}
    </Section>
  )
}
