import { Link } from "wouter";
import { BarChart3, Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 mb-4 w-fit"
              data-testid="link-footer-logo"
            >
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">Reynel Elerio</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Data Scientist & Analytics Manager passionate about turning complex data into 
              actionable insights that drive business growth and revenue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors" data-testid="link-footer-projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/dashboards" className="hover:text-primary transition-colors" data-testid="link-footer-dashboards">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="mailto:reynel@example.com"
                className="p-2 rounded-md bg-muted hover:bg-accent transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover:bg-accent transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted hover:bg-accent transition-colors"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Reynel Elerio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
