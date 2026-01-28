import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BarChart3, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  dashboard: {
    id: string;
    title: string;
    description: string;
  };
}

export function DashboardCard({ dashboard }: DashboardCardProps) {
  return (
    <Dialog>
      <Card className="h-full hover-elevate transition-all duration-300 group cursor-pointer" data-testid={`card-dashboard-${dashboard.id}`}>
        <CardContent className="p-0">
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <BarChart3 className="h-16 w-16 text-primary/30" />
            <DialogTrigger asChild>
              <Button 
                variant="secondary" 
                size="sm" 
                className="absolute bottom-3 right-3 invisible group-hover:visible gap-1"
                data-testid={`button-preview-${dashboard.id}`}
              >
                <Eye className="h-3.5 w-3.5" />
                Preview
              </Button>
            </DialogTrigger>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors" data-testid={`text-dashboard-title-${dashboard.id}`}>
              {dashboard.title}
            </h3>
            <p className="text-xs text-muted-foreground" data-testid={`text-dashboard-desc-${dashboard.id}`}>
              {dashboard.description}
            </p>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle data-testid={`dialog-title-${dashboard.id}`}>{dashboard.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="text-center">
            <BarChart3 className="h-24 w-24 text-primary/40 mx-auto mb-4" />
            <p className="text-muted-foreground">Dashboard preview placeholder</p>
            <p className="text-sm text-muted-foreground mt-1">{dashboard.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
