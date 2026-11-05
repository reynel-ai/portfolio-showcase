import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Images, Plus } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Lightbox, type LightboxItem } from "@/components/site/Lightbox";
import { stackSentence } from "@/components/site/Sections";
import { builds, dashboards, reports, type Build } from "@/lib/content";
import { scrollToHashOnLoad, scrollToId } from "@/lib/scroll";

const ease = [0.23, 1, 0.32, 1] as const;

type Gallery = { title: string; items: LightboxItem[]; index: number } | null;

export default function Work() {
  const [gallery, setGallery] = useState<Gallery>(null);

  useEffect(() => {
    document.title = "Things I've built — Reynel Elerio";
    scrollToHashOnLoad();
    return () => {
      document.title = "Reynel Elerio — Analytics and AI engineering";
    };
  }, []);

  const openBuild = (b: Build, index = 0) =>
    b.shots.length && setGallery({ title: b.title, items: b.shots, index });

  return (
    <>
      <Nav />
      <main>
        <header className="wrap pt-28 sm:pt-36">
          <h1 className="display max-w-[12ch]">Things I've built</h1>
          <p className="lede mt-8">
            Tools, dashboards and data systems for prop trading research, reporting and decisions.
          </p>
          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
            {[
              { id: "builds", label: "Builds", n: builds.length },
              { id: "analysis", label: "Analysis", n: reports.length },
              { id: "dashboards", label: "Dashboards", n: dashboards.length },
            ].map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.id);
                  history.replaceState(null, "", `#${l.id}`);
                }}
                className="press inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-[0.95rem] hover:border-foreground/40"
              >
                {l.label}
                <span className="tnum text-muted-foreground">{l.n}</span>
              </a>
            ))}
          </nav>
        </header>

        <BuildsShowcase onOpen={openBuild} />
        <Analysis onOpen={(title, items, index) => setGallery({ title, items, index })} />
        <Dashboards
          onOpen={(index) =>
            setGallery({
              title: "Dashboards",
              items: dashboards.map((d) => ({ src: d.image, alt: d.title, caption: `${d.title}. ${d.description}` })),
              index,
            })
          }
        />
      </main>
      <Footer />

      <Lightbox
        items={gallery?.items ?? []}
        index={gallery?.index ?? null}
        title={gallery?.title}
        onClose={() => setGallery(null)}
        onIndex={(i) => setGallery((g) => (g ? { ...g, index: i } : g))}
      />
    </>
  );
}

/* ---------------- Builds ---------------- */

function BuildsShowcase({ onOpen }: { onOpen: (b: Build, i?: number) => void }) {
  const [active, setActive] = useState(builds[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const reduce = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = builds.find((b) => b.id === active) ?? builds[0];

  return (
    <section id="builds" className="wrap pt-24 sm:pt-32" aria-labelledby="builds-title">
      <h2 id="builds-title" className="h-section">
        Builds
      </h2>

      <div className="mt-8 grid gap-10 lg:mt-4 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          {builds.map((b, i) => (
            <Fragment key={b.id}>
              {(i === 0 || builds[i - 1].group !== b.group) && (
                <h3 className="rule pt-5 text-sm font-semibold text-muted-foreground lg:mt-16 first:lg:mt-10">
                  {b.group}
                </h3>
              )}
              <article
                id={b.id}
                ref={(el) => (refs.current[b.id] = el)}
                className="py-8 lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center lg:py-12"
              >
                <div className="mb-6 lg:hidden">
                  <BuildFrame build={b} onOpen={() => onOpen(b)} />
                </div>
                <p className="text-sm text-muted-foreground">{b.context}</p>
                <h4
                  className={`mt-1 text-[1.75rem] font-bold leading-tight tracking-[-0.025em] transition-colors duration-300 sm:text-[2rem] ${
                    active === b.id ? "lg:text-foreground" : "lg:text-foreground/45"
                  }`}
                >
                  {b.title}
                </h4>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{b.summary}</p>
                {b.detail && <p className="mt-3 leading-relaxed text-muted-foreground">{b.detail}</p>}
                <p className="mt-5 text-sm text-muted-foreground">
                  <span className="text-foreground">{b.stackLabel ?? "Built with"}</span> {stackSentence(b.stack)}.
                </p>
                {b.status && <p className="mt-1 text-sm text-muted-foreground">Status: {b.status}</p>}
                <div className="mt-6 flex flex-wrap gap-3">
                  {b.link && (
                    <a
                      href={b.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary press h-11 text-[0.95rem]"
                    >
                      {b.link.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                  {b.shots.length > 0 && (
                    <button type="button" onClick={() => onOpen(b)} className="btn btn-quiet press h-11 text-[0.95rem]">
                      <Images className="h-4 w-4" aria-hidden />
                      {b.shots.length > 1 ? `View ${b.shots.length} screenshots` : "View screenshot"}
                    </button>
                  )}
                </div>
              </article>
            </Fragment>
          ))}
        </div>

        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-[calc(50vh-min(22vw,17rem))]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease }}
              >
                <BuildFrame build={current} onOpen={() => onOpen(current)} />
                <p className="mt-4 text-sm text-muted-foreground">
                  {current.shots[0]?.alt ?? `${current.title} is running live; open the demo to explore it.`}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildFrame({ build, onOpen }: { build: Build; onOpen: () => void }) {
  if (!build.shots.length) {
    return (
      <div className="shot flex aspect-[16/10] flex-col justify-between p-[6%] text-white">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <p className="relative text-sm text-white/60">{build.context}</p>
        <div className="relative">
          <p className="text-[clamp(1.75rem,3.4vw,3rem)] font-bold leading-none tracking-[-0.03em]">{build.title}</p>
          {build.link && (
            <a
              href={build.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-[0.95rem] text-[hsl(205_80%_68%)] underline decoration-white/25 underline-offset-4 hover:decoration-current"
            >
              {build.link.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group shot block aspect-[16/10] w-full cursor-zoom-in"
      aria-label={`Enlarge screenshots of ${build.title}`}
    >
      <img
        src={build.shots[0].src}
        alt={build.shots[0].alt}
        loading="lazy"
        className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:scale-[1.02]"
      />
      {build.shots.length > 1 && (
        <span className="tnum absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          1 of {build.shots.length}
        </span>
      )}
    </button>
  );
}

/* ---------------- Analysis ---------------- */

function Analysis({
  onOpen,
}: {
  onOpen: (title: string, items: LightboxItem[], index: number) => void;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="analysis" className="wrap pt-28 sm:pt-40" aria-labelledby="analysis-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <h2 id="analysis-title" className="h-section lg:col-span-5">
          Analysis
        </h2>
        <p className="lede lg:col-span-7 lg:pt-3">
          Research and reporting for Prop Firm Match: surveys, forecasts and launch reviews. Figures that
          belong to partners are left out.
        </p>
      </div>

      <ul className="mt-12">
        {reports.map((r) => {
          const isOpen = open === r.id;
          const items = r.images.map((src, i) => ({ src, alt: `${r.title}, page ${i + 1}` }));
          return (
            <li key={r.id} className="rule">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : r.id)}
                aria-expanded={isOpen}
                aria-controls={`${r.id}-panel`}
                className="group grid w-full grid-cols-[1fr_auto] items-start gap-4 py-6 text-left sm:grid-cols-[8rem_1fr_auto] sm:gap-8"
              >
                <span className="hidden pt-1 text-sm text-muted-foreground sm:block">{r.category}</span>
                <span>
                  <span className="block text-[1.25rem] font-semibold tracking-[-0.015em] transition-colors group-hover:text-primary sm:text-[1.375rem]">
                    {r.title}
                  </span>
                  <span className="mt-1 block text-muted-foreground">{r.question}</span>
                </span>
                <span
                  className={`mt-1 grid h-9 w-9 place-items-center rounded-full border border-border transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-foreground/40 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${r.id}-panel`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 sm:grid-cols-[8rem_1fr] sm:gap-8">
                      <div className="hidden sm:block" />
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <p className="leading-relaxed">{r.outcome}</p>
                          <ul className="mt-5 space-y-2 text-muted-foreground">
                            {r.findings.map((f) => (
                              <li key={f} className="relative pl-5">
                                <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-5 text-sm text-muted-foreground">
                            <span className="text-foreground">Tools:</span> {stackSentence(r.tools)}.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {r.images.slice(0, 4).map((src, i) => (
                            <button
                              key={src}
                              type="button"
                              onClick={() => onOpen(r.title, items, i)}
                              className="group shot aspect-[16/10] cursor-zoom-in !rounded-lg"
                              aria-label={`Open ${r.title}, page ${i + 1} of ${r.images.length}`}
                            >
                              <img
                                src={src}
                                alt=""
                                loading="lazy"
                                className="transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.03]"
                              />
                              {i === 3 && r.images.length > 4 && (
                                <span className="absolute inset-0 grid place-items-center bg-black/55 text-sm font-semibold text-white">
                                  +{r.images.length - 4} more
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
        <li className="rule" aria-hidden />
      </ul>
    </section>
  );
}

/* ---------------- Dashboards ---------------- */

function Dashboards({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="dashboards" className="wrap pt-28 sm:pt-40" aria-labelledby="dash-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <h2 id="dash-title" className="h-section lg:col-span-5">
          Dashboards
        </h2>
        <p className="lede lg:col-span-7 lg:pt-3">
          Dashboards for revenue, payouts, members, surveys and partner commissions.
        </p>
      </div>
      <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {dashboards.map((d, i) => (
          <li key={d.id}>
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="group block w-full text-left"
              aria-label={`Enlarge ${d.title} dashboard`}
            >
              <div className="shot aspect-[16/10]">
                <img
                  src={d.image}
                  alt={`${d.title} dashboard`}
                  loading="lazy"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-4 font-semibold tracking-[-0.01em] transition-colors group-hover:text-primary">{d.title}</p>
              <p className="mt-1 text-[0.95rem] text-muted-foreground">{d.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
