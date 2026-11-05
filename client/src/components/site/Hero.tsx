import { useEffect, useRef, useState, type FocusEvent, type RefObject } from "react";
import { Link } from "wouter";
import { Pause, Play } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { builds } from "@/lib/content";
import { useMedia } from "@/hooks/use-media";
import { SectionLink } from "./Nav";
import { DecryptHeadline } from "./DecryptText";

const ease = [0.23, 1, 0.32, 1] as const;

const headline = ["I build the systems", "that turn raw data", "into decisions."];

type PreviewSlide = {
  key: string;
  build: (typeof builds)[number];
  shot: (typeof builds)[number]["shots"][number];
};

const previewSlides: PreviewSlide[] = [
  ...builds.flatMap((build) =>
    build.shots.slice(0, 1).map((shot, index) => ({ key: `${build.id}-${index}`, build, shot })),
  ),
  ...builds.flatMap((build) =>
    build.shots.slice(1).map((shot, index) => ({ key: `${build.id}-${index + 1}`, build, shot })),
  ),
];
const PREVIEW_CARD_COUNT = 5;

function slidesAt(start: number) {
  return Array.from(
    { length: Math.min(PREVIEW_CARD_COUNT, previewSlides.length) },
    (_, position) => previewSlides[(start + position) % previewSlides.length],
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-x-clip pt-28 sm:pt-36">
      <div className="wrap">
        <motion.p
          className="mb-6 text-[0.95rem] text-muted-foreground sm:mb-8"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          Reynel Elerio, analytics and AI engineering at Prop Firm Match
        </motion.p>

        <DecryptHeadline lines={headline} className="display max-w-[15ch]" />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mt-8 flex flex-col gap-8 sm:mt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="lede">
            Dashboards, data pipelines, monitoring tools and AI agents for the prop trading industry. I
            scope them, build them with Claude and Replit, and ship them without waiting for an
            engineering team.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/work" className="btn btn-primary press">
              See the work
            </Link>
            <SectionLink id="contact" className="btn btn-quiet press">
              Get in touch
            </SectionLink>
          </div>
        </motion.div>
      </div>

      <Deck />
    </section>
  );
}

/* ---------------- The build deck ---------------- */

function Deck() {
  const reduce = useReducedMotion();
  const wide = useMedia("(min-width: 900px)", true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(Boolean(reduce));
  const [focusWithin, setFocusWithin] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (reduce) setPaused(true);
  }, [reduce]);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const shouldPlay = !paused && !focusWithin && pageVisible && inView;
  useEffect(() => {
    if (!shouldPlay || previewSlides.length < 2) return;
    const timer = window.setInterval(
      () => setStart((current) => (current - 1 + previewSlides.length) % previewSlides.length),
      1200,
    );
    return () => window.clearInterval(timer);
  }, [shouldPlay]);

  const slides = slidesAt(start);
  const sharedProps = {
    slides,
    reduce: Boolean(reduce),
    paused,
    onToggle: () => setPaused((value) => !value),
    containerRef,
    onFocusCapture: () => setFocusWithin(true),
    onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusWithin(false);
    },
  };

  if (reduce || !wide) return <DeckRow {...sharedProps} />;
  return <DeckSpread {...sharedProps} />;
}

/** Mobile and reduced-motion version: a horizontally scrollable row. */
type DeckProps = {
  slides: PreviewSlide[];
  reduce: boolean;
  paused: boolean;
  onToggle: () => void;
  containerRef: RefObject<HTMLDivElement>;
  onFocusCapture: () => void;
  onBlurCapture: (event: FocusEvent<HTMLDivElement>) => void;
};

function DeckRow({ slides, reduce, paused, onToggle, containerRef, ...interactionProps }: DeckProps) {
  return (
    <div ref={containerRef} className="relative mt-14 min-[900px]:pb-32" {...interactionProps}>
      <PreviewToggle paused={paused} onToggle={onToggle} className="absolute -top-12 right-[clamp(1.25rem,4vw,2.5rem)] z-10" />
      <ul
        className="flex snap-x snap-mandatory scroll-px-[clamp(1.25rem,4vw,2.5rem)] gap-4 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-4 [scrollbar-width:none] min-[900px]:wrap min-[900px]:grid min-[900px]:grid-cols-5 min-[900px]:overflow-visible"
        aria-label="Project image previews"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {slides.map((slide) => (
            <motion.li
              key={slide.key}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: 32 }}
              transition={{ duration: reduce ? 0.16 : 0.5, ease, layout: { duration: reduce ? 0 : 0.55, ease } }}
              className="w-[78vw] max-w-[22rem] shrink-0 snap-start min-[900px]:w-auto min-[900px]:max-w-none"
            >
              <Link href={`/work#${slide.build.id}`} className="group block" aria-label={`${slide.build.title}: ${slide.shot.alt}`}>
                <DeckPreviewImage slide={slide} />
                <p className="mt-3 font-semibold tracking-[-0.01em] group-hover:text-primary">{slide.build.title}</p>
                <p className="text-sm text-muted-foreground">{slide.build.context}</p>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

/** Desktop: a stacked deck that pins and deals itself into a row as you scroll. */
function DeckSpread({ slides, reduce, paused, onToggle, containerRef, ...interactionProps }: DeckProps) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.45", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.6 });
  const labels = useTransform(progress, [0.75, 1], [0, 1]);
  // Stacked deck sits high so it peeks into the first screen; the finished row settles mid-screen.
  const top = useTransform(progress, [0, 1], ["9vh", "40vh"]);

  return (
    <div ref={containerRef} className="relative mt-12 h-[175vh]" {...interactionProps}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="wrap relative h-full"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.55 }}
        >
          <motion.div className="relative" style={{ top }} role="list" aria-label="Project image previews">
            <AnimatePresence initial={false}>
              {slides.map((slide, i) => (
                <DeckCard
                  key={slide.key}
                  slide={slide}
                  offset={i - (slides.length - 1) / 2}
                  progress={progress}
                  labels={labels}
                  reduce={reduce}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          <PreviewToggle paused={paused} onToggle={onToggle} className="absolute bottom-6 left-0 z-20" />
        </motion.div>
      </div>
    </div>
  );
}

const STACK_W = 50; // % of the content width
const ROW_W = 18;
const ROW_STEP = 20.5;

function DeckCard({
  slide,
  offset,
  progress,
  labels,
  reduce,
}: {
  slide: PreviewSlide;
  offset: number;
  progress: MotionValue<number>;
  labels: MotionValue<number>;
  reduce: boolean;
}) {
  const depth = Math.abs(offset);
  // Positions are in % of the content width, so the row never spills past the page edge.
  const left = useTransform(progress, (p) => {
    const w = STACK_W + (ROW_W - STACK_W) * p;
    const centre = 50 + offset * (4.5 + (ROW_STEP - 4.5) * p);
    return `${centre - w / 2}%`;
  });
  const width = useTransform(progress, (p) => `${STACK_W + (ROW_W - STACK_W) * p}%`);
  const y = useTransform(progress, [0, 1], [depth * 18, 0]);
  const rotate = useTransform(progress, [0, 1], [offset * 4, 0]);
  const scale = useTransform(progress, [0, 1], [1 - depth * 0.06, 1]);

  return (
    <motion.div
      role="listitem"
      layout={!reduce}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: reduce ? 0.16 : 0.5, ease, layout: { duration: reduce ? 0 : 0.55, ease } }}
      className="absolute top-0"
      style={{ left, width, y, rotate, scale, zIndex: 10 - depth, transformOrigin: "50% 100%" }}
    >
      <Link href={`/work#${slide.build.id}`} className="group block" aria-label={`${slide.build.title}: ${slide.shot.alt}`}>
        <DeckPreviewImage
          slide={slide}
          className="transition-[border-color] duration-300 group-hover:border-primary/60"
        />
        <motion.div style={{ opacity: labels }} className="mt-3">
          <p className="truncate font-semibold tracking-[-0.01em] transition-colors group-hover:text-primary">
            {slide.build.title}
          </p>
          <p className="truncate text-sm text-muted-foreground">{slide.build.context}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

function DeckPreviewImage({
  slide,
  className = "",
}: {
  slide: PreviewSlide;
  className?: string;
}) {
  return (
    <div className={`shot aspect-[16/10] ${className}`}>
      <img src={slide.shot.src} alt={slide.shot.alt} loading="lazy" decoding="async" />
    </div>
  );
}

function PreviewToggle({
  paused,
  onToggle,
  className = "",
}: {
  paused: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const Icon = paused ? Play : Pause;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "Play project previews" : "Pause project previews"}
      aria-pressed={!paused}
      className={`press grid h-11 w-11 place-items-center rounded-full border border-border bg-background/85 text-foreground shadow-sm backdrop-blur transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
