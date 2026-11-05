import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
      className="press fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
