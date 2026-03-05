import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "Vintique Sound",
    subtitle: "Business Website",
    description: "A responsive mostly static website for my music business.",
    longDescription: "I designed and developed a modern, responsive website for my music business, Vintique Sound. The site showcases my audio engineering services, integrates a contact form, and features a clean, professional design. Built with Astro, React, and Tailwind CSS, it demonstrates my ability to deliver production-ready web solutions and manage all aspects of the development lifecycle.",
    image: "./project_cards/vintique_sound_website-preview.png",
    tags: ["Website", "React", "Tailwind CSS", "Astro"],
    categories: ["Website", "Music", "Audio Engineering"],
    technologies: ["React", "Tailwind CSS", "Astro"],
    role: "Sole Developer (all code)",
    liveUrl: "https://vintiquesound.netlify.app/"
  },
  {
    title: "Vintique Sound",
    subtitle: "Website Prototype",
    description: "A responsive static website prototype for my music business.",
    longDescription: "This prototype was my first iteration of the Vintique Sound website, built solely with HTML, CSS, and JavaScript. It allowed me to experiment with layout, branding, and user experience of a simple tech stack before moving to a more modern and complex one. The project highlights my ability to quickly prototype ideas and iterate based on feedback.",
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
    subtitle: "Android Mobile App",
    description: "A tutoring mobile app for tutors and students, developed for Android.",
    longDescription: "Led a team of four other students as Scrum Master and Software Architect to develop House of Tutor, an Android app connecting tutors and students. Managed project planning, architecture, and implementation using Kotlin, SQLite, and Firebase. The app features scheduling, messaging, and user management. This project demonstrates my leadership and technical skills in mobile development.",
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
    subtitle: "Card Game with AI Agent",
    description: "An AI Agent and fully functional Apples to Apples game.",
    longDescription: "Developed an AI agent and a digital version of the Apples to Apples game as part of a three-person team. Utilized Python, Word2vec, and Keras to create intelligent gameplay and natural language processing features. This project showcases my experience in AI/ML, game development, and collaborative research.",
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
