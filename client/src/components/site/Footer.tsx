import { Link } from "wouter";
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="rule mt-24">
      <div
        className="wrap flex flex-col gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <p>Reynel Elerio, {contact.location.split(",")[0]}. Built with Claude and Replit.</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/work" className="link-ink">
              Work
            </Link>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="link-ink">
              Email
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-ink">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
