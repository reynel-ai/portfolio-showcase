import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { scrollToId } from "@/lib/scroll";

/** A link to a section on the home page that works from any route. */
export function SectionLink({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [location, navigate] = useLocation();
  return (
    <a
      href={`/#${id}`}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        if (location === "/") {
          scrollToId(id);
          history.replaceState(null, "", `/#${id}`);
        } else {
          navigate(`/#${id}`);
        }
      }}
    >
      {children}
    </a>
  );
}

export function Nav() {
  const [location] = useLocation();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const linkCls =
    "press rounded-full px-2 py-2 text-[0.95rem] max-[380px]:px-1.5 max-[380px]:text-[0.9rem] text-muted-foreground hover:text-foreground sm:px-3";

  return (
    <header
      className="fixed inset-x-0 top-0 z-40"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div
        className={`absolute inset-0 border-b transition-[background-color,border-color] duration-300 ${
          scrolled ? "border-border bg-background/[0.94]" : "border-transparent bg-transparent"
        }`}
        aria-hidden
      />
      <nav className="wrap relative flex h-16 items-center justify-between gap-3" aria-label="Main">
        <Link href="/" className="press -ml-1 whitespace-nowrap rounded-md px-1 py-1 text-[1.05rem] font-bold tracking-[-0.02em]">
          Reynel Elerio
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <Link
            href="/work"
            className={`${linkCls} ${location === "/work" ? "text-foreground" : ""}`}
            aria-current={location === "/work" ? "page" : undefined}
          >
            Work
          </Link>
          <SectionLink id="about" className={linkCls}>
            About
          </SectionLink>
          <SectionLink id="contact" className={linkCls}>
            Contact
          </SectionLink>
          <button
            type="button"
            onClick={toggle}
            className="press ml-0.5 grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
