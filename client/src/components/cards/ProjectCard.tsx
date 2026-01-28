import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Eye, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = project.previewImages && project.previewImages.length > 0;
  const hasPreview = hasImages || (project.previewSections && project.previewSections.length > 0);

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => 
        prev === project.previewImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.previewImages!.length - 1 : prev - 1
      );
    }
  };

  return (
    <Dialog>
      <Card className="h-full hover-elevate transition-all duration-300 group" data-testid={`card-project-${project.id}`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${project.id}`}>
              {project.category}
            </Badge>
            {hasPreview && (
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-1 h-7 text-xs"
                  data-testid={`button-preview-${project.id}`}
                >
                  <Eye className="h-3.5 w-3.5" />
                  Preview
                </Button>
              </DialogTrigger>
            )}
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
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {project.title}
            <Badge variant="secondary" className="text-xs font-normal">
              {project.category}
            </Badge>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            Sensitive data has been redacted for confidentiality
          </DialogDescription>
        </DialogHeader>
        
        {hasImages && (
          <div className="mt-4 space-y-3">
            <div className="relative rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
              <div className="relative">
                <img 
                  src={project.previewImages![currentImageIndex]} 
                  alt={`${project.title} preview ${currentImageIndex + 1}`}
                  className="w-full h-auto blur-[2px] hover:blur-none transition-all duration-300"
                  data-testid={`img-preview-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              
              {project.previewImages!.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full opacity-80 hover:opacity-100"
                    onClick={prevImage}
                    data-testid={`button-prev-image-${project.id}`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full opacity-80 hover:opacity-100"
                    onClick={nextImage}
                    data-testid={`button-next-image-${project.id}`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
            
            {project.previewImages!.length > 1 && (
              <div className="flex justify-center gap-1.5">
                {project.previewImages!.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                    data-testid={`button-dot-${project.id}-${idx}`}
                  />
                ))}
              </div>
            )}
            
            <p className="text-xs text-center text-muted-foreground italic">
              Hover over image to view clearly. Data shown is for demonstration purposes.
            </p>
          </div>
        )}
        
        {project.previewSections && (
          <div className="space-y-6 mt-4">
            {project.previewSections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-semibold text-sm text-primary border-b border-border pb-1">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.content.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-[6px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground italic">
            This preview contains censored data. Full reports available upon request for authorized stakeholders.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
