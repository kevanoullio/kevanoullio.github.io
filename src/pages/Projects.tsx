import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "Vintique Sound (WIP)",
    description: "A responsive mostly static website for my music business.",
    image: "./project_cards/vintique_sound_website-preview.png",
    tags: ["Website", "React", "Tailwind CSS", "Astro"],
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["React", "Tailwind CSS", "Astro"],
    role: "Sole Developer (all code)",
  },
  {
    title: "Vintique Sound (prototype)",
    description: "A responsive static website prototype for my music business.",
    image: "./project_cards/vintique_sound_website_prototype-preview.png",
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
    image: "./project_cards/house_of_tutor-preview.png",
    tags: ["Android Development", "Mobile App", "Kotlin"],
    categories: ["Education", "Mobile App", "Android Development"],
    technologies: ["Kotlin", "Gradle", "SQLite", "Firebase"],
    role: "Scrum Master and Software Architect (team of 5)",
    repoUrl: "https://github.com/kevanoullio/house-of-tutor-android-app",
    // liveUrl: "none"
  },
  {
    title: "Apples to Apples",
    description: "An AI Agent and fully functional Apples to Apples game.",
    image: "./project_cards/apples_to_apples-preview.png",
    tags: ["AI/ML", "Game Development", "Python"],
    categories: ["AI/ML", "Artificial Intelligence", "Machine Learning", "Game Development"],
    technologies: ["Python", "Word2vec", "Keras"],
    role: "Researcher and Developer (team of 3)",
    repoUrl: "https://github.com/kevanoullio/apples-to-apples-agent",
    // liveUrl: "none"
  }
]

export function Projects() {
  return (
    <div className="container mx-auto px-4">
      <section className="my-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and learning experience. Click on any project to explore its code on GitHub.
        </p>
      </section>

      <section className="my-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}
