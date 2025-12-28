import * as React from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags?: string[]
  categories?: string[]
  technologies?: string[]
  role?: string
  repoUrl?: string
  liveUrl?: string
}

export function ProjectCard({ title, description, image, tags = [], categories = [], technologies = [], role, repoUrl, liveUrl }: ProjectCardProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  return (
    <>
      <Card
        className={cn(
          "flex flex-col overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 gap-0 py-0",
          image && "pt-0"
        )}
      >
        {image && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative aspect-video overflow-hidden bg-muted text-left cursor-pointer"
            aria-label={`Open details for ${title}`}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </button>
        )}
        <CardHeader className="text-left pt-6 pb-4">
          <CardTitle className="text-lg">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="text-left hover:underline cursor-pointer"
              aria-label={`Open details for ${title}`}
            >
              {title}
            </button>
          </CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>

          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardHeader>
        <div className="mt-auto border-t border-border bg-muted/40">
          <CardFooter className="gap-4 py-4">
            {repoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="bg-background text-foreground border-border hover:border-primary/60 dark:border-input dark:hover:border-primary/60 hover:bg-muted hover:text-primary"
                asChild
              >
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" className="shadow-sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} details`}
          onClick={() => setIsOpen(false)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Card className={cn("overflow-hidden gap-0 py-0", image && "pt-0")}>
              {image && (
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <CardHeader className="text-left pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <CardTitle className="text-2xl">{title}</CardTitle>
                    <CardDescription className="mt-2 text-md">{description}</CardDescription>
                  </div>

                </div>
              </CardHeader>

              <CardContent className="py-4">
                {role && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Role:</span> {role}
                  </div>
                )}

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {categories.length > 0 && (
                    <div className="flex flex-col items-start">
                      <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Categories</div>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <span
                            key={category}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {technologies.length > 0 && (
                    <div className="flex flex-col items-start">
                      <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>

              <div className="mt-auto border-t border-border bg-muted/40">
                <CardFooter className="py-4 justify-between">
                  <div className="flex gap-4">
                    {repoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-background text-foreground border-border hover:border-primary/60 dark:border-input dark:hover:border-primary/60 hover:bg-muted hover:text-primary"
                        asChild
                      >
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {liveUrl && (
                      <Button size="sm" className="shadow-sm" asChild>
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                  <div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="shrink-0 hover:bg-primary/10 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
