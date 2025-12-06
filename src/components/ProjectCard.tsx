import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  categories?: string[]
  technologies?: string[]
  repoUrl?: string
  liveUrl?: string
}


export function ProjectCard({ title, description, image, categories = [], technologies = [], repoUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">

    </Card>
  )
}
