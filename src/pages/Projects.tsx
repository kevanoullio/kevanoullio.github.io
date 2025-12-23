import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "Apples to Apples",
    description: "An AI Agent and fully functional Apples to Apples game.",
    image: "/.svg",
    categories: ["AI", "Machine Learning", "Game Development"],
    technologies: ["Python", "Word2vec", "Keras"],
    role: "Researcher and Developer (team of 3)",
    repoUrl: "https://github.com/kevanoullio/apples-to-apples-agent",
    liveUrl: "none"
  },
  {
    title: "House of Tutor",
    description: "A tutoring mobile app for tutors and students, developed for Android.",
    image: "/.svg",
    categories: ["Education", "Mobile App", "Android Development"],
    technologies: ["Kotlin", "Gradle", "SQLite", "Firebase"],
    role: "Scrum Master and Software Architect (team of 5)",
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
    liveUrl: "none"
  },
  {
    title: "Vintique Sound",
    description: "A responsive static website prototype for my music business.",
    image: "../public/project_cards/vintique_sound_website_prototype_preview.png",
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["HTML", "JavaScript", "CSS"],
    role: "Sole Developer (all code)",
    repoUrl: "https://github.com/kevanoullio/vintique-sound-website-prototype",
    liveUrl: "none"
  }
]

export function Projects() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience. Click on any project to explore its code on GitHub.
          </p>
        </section>

        <section className="mb-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
