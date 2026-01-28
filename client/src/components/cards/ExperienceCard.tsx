import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";
import type { Experience } from "@shared/schema";

interface ExperienceCardProps {
  experience: Experience;
  isFirst?: boolean;
}

export function ExperienceCard({ experience, isFirst = false }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0" data-testid={`experience-${experience.id}`}>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className={`absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-[3px] ${isFirst ? 'bg-primary' : 'bg-muted-foreground'}`} />
      
      <Card className="hover-elevate transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-md ${isFirst ? 'bg-primary/10' : 'bg-muted'}`}>
                <Briefcase className={`h-4 w-4 ${isFirst ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h3 className="font-semibold" data-testid={`text-role-${experience.id}`}>{experience.role}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-company-${experience.id}`}>{experience.company}</p>
              </div>
            </div>
            <Badge variant={isFirst ? "default" : "secondary"} className="text-xs">
              {experience.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground" data-testid={`text-description-${experience.id}`}>
            {experience.description}
          </p>

          <div className="space-y-2">
            {experience.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
