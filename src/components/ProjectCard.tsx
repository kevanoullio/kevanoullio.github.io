import * as React from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  image?: string
  tags?: string[]
  categories?: string[]
  technologies?: string[]
  role?: string
  repoUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  longDescription,
  image,
  tags = [],
  categories = [],
  technologies = [],
  role,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const canOpenDetails = Boolean(
    longDescription || role || categories.length > 0 || technologies.length > 0
  )

  React.useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  return (
    <>
      <Card
        className={cn(
          "flex flex-col overflow-hidden gap-0 py-0 transition-all hover:border-primary/50 hover:shadow-lg",
          image && "pt-0"
        )}
      >
        {image && (
          <div className="relative aspect-video overflow-hidden bg-muted">
            {canOpenDetails ? (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="h-full w-full text-left"
                aria-label={`Open details for ${title}`}
                aria-expanded={isOpen}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </button>
            ) : (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        )}

        <CardHeader className="pb-4 pt-5 text-left">
          <div className="space-y-1">
            <CardTitle className="text-lg leading-tight tracking-tight">
              {canOpenDetails ? (
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer text-left hover:underline"
                  aria-label={`Open details for ${title}`}
                  aria-expanded={isOpen}
                >
                  {title}
                </button>
              ) : (
                title
              )}
            </CardTitle>

            {subtitle && (
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground/90">
                {subtitle}
              </div>
            )}
          </div>

          <CardDescription className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>

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
                className="border-border bg-background text-foreground hover:border-primary/60 hover:bg-muted hover:text-primary dark:border-primary/28 dark:bg-primary/8 dark:hover:border-primary/45 dark:hover:bg-primary/12"
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

      {isOpen && canOpenDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} details`}
          onClick={() => setIsOpen(false)}
        >
          <Card
            className="max-h-[90vh] w-full max-w-4xl overflow-auto"
            onClick={(event) => event.stopPropagation()}
          >
            {image && (
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img src={image} alt={title} className="h-full w-full object-contain" />
              </div>
            )}

            <CardHeader className="text-left pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  {subtitle && <div className="mt-1 text-sm text-muted-foreground">{subtitle}</div>}
                  <CardDescription className="mt-2 text-base">{description}</CardDescription>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pb-4">
              {longDescription && (
                <p className="text-sm leading-6 text-muted-foreground">{longDescription}</p>
              )}

              {role && (
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Role:</span> {role}
                </div>
              )}

              {categories.length > 0 && (
                <div className="flex flex-col items-start">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Categories</div>
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

              {technologies.length > 0 && (
                <div className="flex flex-col items-start">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            <div className="mt-auto border-t border-border bg-muted/40">
              <CardFooter className="justify-between gap-4 py-4">
                <div className="flex gap-4">
                  {repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border bg-background text-foreground hover:border-primary/60 hover:bg-muted hover:text-primary dark:border-primary/28 dark:bg-primary/8 dark:hover:border-primary/45 dark:hover:bg-primary/12"
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

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close details"
                >
                  <X className="mr-2 h-4 w-4" />
                  Close
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
