import { useRef } from "react";
import { Link } from "wouter";
import {
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

const deckIds = ["unified-dashboard", "central-intelligence", "prestige-pulse", "mission-control", "prop-monitor"];
const deck = deckIds
  .map((id) => builds.find((b) => b.id === id))
  .filter((b): b is (typeof builds)[number] => !!b && b.shots.length > 0);

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

  if (reduce || !wide) return <DeckRow />;
  return <DeckSpread />;
}

/** Mobile and reduced-motion version: a plain row of builds. */
function DeckRow() {
  return (
    <div className="mt-14 min-[900px]:pb-32">
      <ul
        className="flex snap-x snap-mandatory scroll-px-[clamp(1.25rem,4vw,2.5rem)] gap-4 overflow-x-auto px-[clamp(1.25rem,4vw,2.5rem)] pb-4 [scrollbar-width:none] min-[900px]:wrap min-[900px]:grid min-[900px]:grid-cols-5 min-[900px]:overflow-visible"
        aria-label="Selected builds"
      >
        {deck.map((b) => (
          <li key={b.id} className="w-[78vw] max-w-[22rem] shrink-0 snap-start min-[900px]:w-auto min-[900px]:max-w-none">
            <Link href={`/work#${b.id}`} className="group block">
              <div className="shot aspect-[16/10]">
                <img src={b.shots[0].src} alt={b.shots[0].alt} loading="lazy" />
              </div>
              <p className="mt-3 font-semibold tracking-[-0.01em] group-hover:text-primary">{b.title}</p>
              <p className="text-sm text-muted-foreground">{b.context}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Desktop: a stacked deck that pins and deals itself into a row as you scroll. */
function DeckSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.45", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.6 });
  const labels = useTransform(progress, [0.75, 1], [0, 1]);
  // Stacked deck sits high so it peeks into the first screen; the finished row settles mid-screen.
  const top = useTransform(progress, [0, 1], ["9vh", "40vh"]);

  return (
    <div ref={ref} className="relative mt-12 h-[175vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="wrap relative h-full"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.55 }}
        >
          <motion.div className="relative" style={{ top }} role="list" aria-label="Selected builds">
            {deck.map((b, i) => (
              <DeckCard
                key={b.id}
                build={b}
                offset={i - (deck.length - 1) / 2}
                progress={progress}
                labels={labels}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const STACK_W = 50; // % of the content width
const ROW_W = 18;
const ROW_STEP = 20.5;

function DeckCard({
  build,
  offset,
  progress,
  labels,
}: {
  build: (typeof builds)[number];
  offset: number;
  progress: MotionValue<number>;
  labels: MotionValue<number>;
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
      className="absolute top-0"
      style={{ left, width, y, rotate, scale, zIndex: 10 - depth, transformOrigin: "50% 100%" }}
    >
      <Link href={`/work#${build.id}`} className="group block" aria-label={`${build.title}, ${build.context}`}>
        <div className="shot aspect-[16/10] transition-[border-color] duration-300 group-hover:border-primary/60">
          <img src={build.shots[0].src} alt={build.shots[0].alt} decoding="async" />
        </div>
        <motion.div style={{ opacity: labels }} className="mt-3">
          <p className="truncate font-semibold tracking-[-0.01em] transition-colors group-hover:text-primary">
            {build.title}
          </p>
          <p className="truncate text-sm text-muted-foreground">{build.context}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
