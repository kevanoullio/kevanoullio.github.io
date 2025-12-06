import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "Apples to Apples AI Agent",
    description: "An AI Agent and fully functional Apples to Apples game.",
    image: "/.svg",
    categories: ["AI", "Machine Learning", "Game Development"],
    technologies: ["Python"],
    repoUrl: "https://github.com/kevanoullio/apples-to-apples-agent",
  },
  {
    title: "House of Tutor Mobile App",
    description: "A tutoring mobile app developed for Android.",
    image: "/.svg",
    categories: ["Education", "Mobile App", "Android Development"],
    technologies: ["Kotlin", "Gradle", "SQLite/Room", "Firebase"],
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
  },
  {
    title: "Vintique Sound responsive website prototype",
    description: "A responsive static website prototype for my music business.",
    image: "/.svg",
    categories: ["Music",  "Website", "Webapp"],
    technologies: ["HTML", "JavaScript", "CSS"],
    repoUrl: "https://github.com/kevanoullio/vintique-sound-website-prototype",
  }
]

export function Projects() {
  return (
    <div className="flex flex-col">

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and learning experience. Click on any project to explore its code on GitHub.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </div>
  )
}
