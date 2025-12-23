import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  categories?: string[]
  technologies?: string[]
  role?: string
  repoUrl?: string
  liveUrl?: string
}


export function ProjectCard({ title, description, image, categories = [], technologies = [], role, repoUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 gap-0 py-0",
        image && "pt-0" // Remove the top padding if an image exists, the image should be flush with the top of the card
      )}
    >
      {image && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="text-left pt-6 pb-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
        {role && (
          <div className="mt-2 text-xs text-muted-foreground">
            <span className="font-semibold">Role:</span> {role}
          </div>
        )}
      </CardHeader>
      <div className="mt-auto border-t border-border bg-muted/40">
        <CardContent className="flex-1 flex flex-col py-4">
          {(categories.length > 0 || technologies.length > 0) && (
            <div className="flex flex-col gap-4">
              {categories.length > 0 && (
                <div className="flex flex-col items-start">
                  <div className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Categories</div>
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
                  <div className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Technologies</div>
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
          )}
        </CardContent>

        <CardFooter className="gap-2 pb-6">
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
            <Button
              size="sm"
              className="shadow-sm"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
