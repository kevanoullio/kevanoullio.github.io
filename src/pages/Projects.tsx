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
  },
  {
    title: "House of Tutor",
    description: "A tutoring mobile app for tutors and students, developed for Android.",
    image: "/.svg",
    categories: ["Education", "Mobile App", "Android Development"],
    technologies: ["Kotlin", "Gradle", "SQLite/Room", "Firebase"],
    role: "Scrum Master and Software Architect (team of 5)",
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
  },
  {
    title: "Vintique Sound",
    description: "A responsive static website prototype for my music business.",
    image: "/.svg",
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["HTML", "JavaScript", "CSS"],
    role: "Sole Developer (all code)",
    repoUrl: "https://github.com/kevanoullio/vintique-sound-website-prototype",
  }
]

export function Projects() {
  return (
    <div className="flex flex-col">
      <section>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience. Click on any project to explore its code on GitHub.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

    </div>
  )
}
