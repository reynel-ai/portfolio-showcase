import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { builds, contact, experience, toolkit, type Build } from "@/lib/content";
import { Lightbox } from "./Lightbox";
import { DataFlow } from "./DataFlow";

/* ---------------- Selected work ---------------- */

const featuredIds = ["prestige-pulse", "central-intelligence", "unified-dashboard"];

export function stackSentence(stack: string[]) {
  if (stack.length < 2) return stack.join("");
  return `${stack.slice(0, -1).join(", ")} and ${stack[stack.length - 1]}`;
}

export function FeaturedWork() {
  const featured = featuredIds.map((id) => builds.find((b) => b.id === id)!).filter(Boolean);
  const [open, setOpen] = useState<{ build: Build; index: number } | null>(null);

  return (
    <section id="selected" className="wrap pt-28 sm:pt-40 min-[900px]:pt-0" aria-labelledby="work-title">
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <h2 id="work-title" className="h-section max-w-[14ch]">
          Selected work
        </h2>
        <p className="max-w-[40ch] text-muted-foreground">
          Three of the nine tools I've built for Prop Firm Match and Prop Firm Prestige.{" "}
          <Link href="/work" className="link-ink whitespace-nowrap">
            See all nine builds
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {featured.map((b) => (
          <article key={b.id} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <button
              type="button"
              onClick={() => setOpen({ build: b, index: 0 })}
              className="group shot aspect-[16/10] cursor-zoom-in text-left lg:col-span-8"
              aria-label={`Enlarge screenshots of ${b.title}`}
            >
              <img
                src={b.shots[0].src}
                alt={b.shots[0].alt}
                loading="lazy"
                className="transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:scale-[1.02]"
              />
            </button>
            <div className="flex flex-col lg:col-span-4 lg:pt-2">
              <p className="text-sm text-muted-foreground">{b.context}</p>
              <h3 className="mt-1 text-[1.75rem] font-bold leading-tight tracking-[-0.025em] sm:text-[2rem]">
                {b.title}
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{b.summary}</p>
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="text-foreground">{b.stackLabel ?? "Built with"}</span> {stackSentence(b.stack)}.
              </p>
              <Link
                href={`/work#${b.id}`}
                className="link-ink mt-6 inline-flex w-fit items-center gap-1 text-[0.95rem] font-semibold"
              >
                Read more about {b.title}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        items={open ? open.build.shots : []}
        index={open?.index ?? null}
        title={open?.build.title}
        onClose={() => setOpen(null)}
        onIndex={(i) => setOpen((o) => (o ? { ...o, index: i } : o))}
      />
    </section>
  );
}

/* ---------------- How the work flows ---------------- */

const steps = [
  {
    title: "Collect",
    text: "Pull every source into one warehouse: site events, partner sales, ads, email, reviews and the open web.",
    tools: "BigQuery, PostHog, GA4, Airbyte",
  },
  {
    title: "Model",
    text: "Clean it and give every number one definition, so finance, marketing and product read the same figure.",
    tools: "dbt, SQL, Python",
  },
  {
    title: "Explain",
    text: "Dashboards and reports that answer the question someone actually asked, including why a number moved.",
    tools: "React, Looker Studio, Recharts",
  },
  {
    title: "Act",
    text: "Put the answer where people work: Slack alerts, monitors, simulators and agents that take questions in plain English.",
    tools: "Claude, LangGraph, MCP, Slack",
  },
];

export function Pipeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="wrap pt-28 sm:pt-40" aria-labelledby="flow-title">
      <h2 id="flow-title" className="h-section max-w-[18ch]">
        From raw data to a decision someone can act on
      </h2>
      <p className="lede mt-6">
        Most of my work is the same four steps. The difference is that I build every step myself,
        so nothing waits on a handover.
      </p>

      <ol ref={ref} className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
        <div className="absolute left-0 right-0 top-[0.35rem] hidden h-px bg-border md:block" aria-hidden>
          <motion.div
            className="h-px origin-left bg-primary/50"
            style={{ scaleX: reduce ? 1 : fill }}
          />
        </div>
        <DataFlow container={ref} reach={fill} />
        {steps.map((s, i) => (
          <li key={s.title} className="relative border-l border-border pl-5 md:border-l-0 md:pl-0 md:pt-10">
            <span
              data-node
              className="absolute -left-[5px] top-1.5 z-10 h-[9px] w-[9px] rounded-full border-2 border-background bg-primary md:left-0 md:top-0"
              aria-hidden
            />
            <p className="tnum text-sm text-muted-foreground">Step {i + 1}</p>
            <h3 className="mt-1 text-[1.375rem] font-bold tracking-[-0.02em]">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
            <p className="mt-4 text-sm text-foreground/80">{s.tools}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="wrap pt-28 sm:pt-40" aria-labelledby="about-title">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h2 id="about-title" className="h-section lg:col-span-5">
          Analytics with the engineering built in
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-3">
          <p>
            I've worked with data since 2017: Google Ads analysis for China, Brazil and EMEA, user research
            for Google products, and market assessments at Accenture. At{" "}
            <span className="text-foreground">Prop Firm Match</span> I own data and analytics end to end,
            from user behaviour and firm performance to revenue trends and the ranking system that orders
            every firm on the site.
          </p>
          <p>
            Somewhere along the way the reports stopped being enough. When the team needed a tool, I built
            it: a dbt workbench, an earnings pipeline, a monitor that catches rule changes before traders
            do. Claude and Replit are how I build. The judgement about what to build comes from years of
            sitting with the numbers.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h3 className="text-[1.375rem] font-bold tracking-[-0.02em] lg:col-span-5">Experience</h3>
        <ol className="lg:col-span-7">
          {experience.map((r) => (
            <li key={r.company} className="rule grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
              <p className="tnum text-sm text-muted-foreground sm:pt-0.5">{r.period}</p>
              <div>
                <p className="font-semibold">
                  {r.role}, <span className="font-normal text-muted-foreground">{r.company}</span>
                </p>
                <p className="mt-1 text-[0.95rem] text-muted-foreground">{r.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <h3 className="text-[1.375rem] font-bold tracking-[-0.02em] lg:col-span-5">Toolkit</h3>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-7">
          {toolkit.map((g) => (
            <div key={g.label}>
              <dt className="text-sm text-muted-foreground">{g.label}</dt>
              <dd className="mt-2">
                <ul className="space-y-1">
                  {g.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

const field =
  "w-full rounded-xl border border-border bg-card px-4 text-[1rem] text-foreground placeholder:text-muted-foreground/80 transition-[border-color,box-shadow] duration-200 hover:border-foreground/25 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-destructive";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sentTo, setSentTo] = useState("");
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });
  const { errors } = form.formState;

  const onSubmit = async (data: InsertContactMessage) => {
    setStatus("sending");
    try {
      await apiRequest("POST", "/api/contact", data);
      setSentTo(data.email);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="wrap pt-28 sm:pt-40" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="h-section max-w-[14ch]">
            Have a data problem that needs a tool?
          </h2>
          <p className="lede mt-6">
            Tell me what you're trying to decide and what data you have. I'll tell you what I'd build.
          </p>
          <ul className="mt-10 space-y-3 text-[1.0625rem]">
            <li>
              <a href={`mailto:${contact.email}`} className="link-ink break-all">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-ink">
                LinkedIn
              </a>
            </li>
            <li className="text-muted-foreground">{contact.location}</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-2xl border border-border bg-card p-8"
              role="status"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/12 text-primary">
                <Check className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xl font-semibold">Message sent</p>
              <p className="mt-2 text-muted-foreground">I'll reply to {sentTo}.</p>
              <button type="button" onClick={() => setStatus("idle")} className="link-ink mt-6 font-semibold">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message} id="c-name">
                  <input
                    id="c-name"
                    autoComplete="name"
                    className={`${field} h-12`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "c-name-err" : undefined}
                    {...form.register("name")}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message} id="c-email">
                  <input
                    id="c-email"
                    type="email"
                    autoComplete="email"
                    className={`${field} h-12`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "c-email-err" : undefined}
                    {...form.register("email")}
                  />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject?.message} id="c-subject">
                <input
                  id="c-subject"
                  className={`${field} h-12`}
                  placeholder="A dashboard for our partner sales"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "c-subject-err" : undefined}
                  {...form.register("subject")}
                />
              </Field>
              <Field label="Message" error={errors.message?.message} id="c-message">
                <textarea
                  id="c-message"
                  rows={6}
                  className={`${field} resize-y py-3 leading-relaxed`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "c-message-err" : undefined}
                  {...form.register("message")}
                />
              </Field>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === "sending"} className="btn btn-primary press disabled:opacity-70">
                  {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                  {status === "sending" ? "Sending" : "Send message"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    The message didn't send. Check your connection and try again, or email me directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
