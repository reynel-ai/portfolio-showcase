import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full hover-elevate transition-all duration-300 group" data-testid={`card-project-${project.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${project.id}`}>
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-1">Problem</h4>
          <p className="text-sm" data-testid={`text-project-problem-${project.id}`}>{project.problem}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Tools Used</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs font-normal">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <h4 className="text-sm font-medium text-primary mb-1">Impact</h4>
          <p className="text-sm" data-testid={`text-project-impact-${project.id}`}>{project.impact}</p>
        </div>
      </CardContent>
    </Card>
  );
}
