import { ProjectCard } from '@/components/ProjectCard'

const projects = [
  {
    title: 'Java Terminal Game',
    description: 'An interactive terminal-based game built with Java, featuring ASCII graphics and engaging gameplay mechanics.',
    image: '/java-game.svg',
    tags: ['Java', 'CLI', 'Game Development'],
    repoUrl: 'https://github.com/kevanoullio/java-terminal-game',
  },
  {
    title: 'Python Application',
    description: 'A versatile Python application demonstrating data processing and automation capabilities.',
    image: '/python-app.svg',
    tags: ['Python', 'Automation', 'CLI'],
    repoUrl: 'https://github.com/kevanoullio/python-app',
  },
  {
    title: 'C Application',
    description: 'A high-performance C application showcasing systems programming and memory management.',
    image: '/c-app.svg',
    tags: ['C', 'Systems Programming', 'Performance'],
    repoUrl: 'https://github.com/kevanoullio/c-application',
  },
]

export function Projects() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
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

        <div className="mt-16 rounded-lg border border-border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Want to see more?</h2>
          <p className="mb-6 text-muted-foreground">
            Visit my GitHub profile to explore all my repositories and contributions.
          </p>
          <a
            href="https://github.com/kevanoullio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
