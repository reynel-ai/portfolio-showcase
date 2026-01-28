import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BarChart3 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/dashboards", label: "Dashboards" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const getActiveIndex = () => {
    return navLinks.findIndex(link => link.href === location);
  };

  const currentIndex = hoveredIndex !== null ? hoveredIndex : getActiveIndex();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1"
            data-testid="link-logo"
          >
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Reynel Elerio</span>
          </Link>

          <div 
            ref={navRef}
            className="hidden md:flex items-center relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative z-10 ${
                  currentIndex === index
                    ? "text-white"
                    : "text-muted-foreground"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <div 
              className="absolute h-8 bg-primary rounded-md transition-all duration-300 ease-out -z-0"
              style={{
                width: navLinks[currentIndex >= 0 ? currentIndex : 0]?.label.length * 9 + 24 + 'px',
                left: `${navLinks.slice(0, currentIndex >= 0 ? currentIndex : 0).reduce((acc, link) => acc + link.label.length * 9 + 32, 0)}px`,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: currentIndex >= 0 ? 1 : 1,
              }}
            />
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                        location === link.href
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
