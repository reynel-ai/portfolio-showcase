import { useEffect, useRef } from "react";
import { useReducedMotion, type MotionValue } from "framer-motion";

/**
 * Data moving through the pipeline. Particles enter "Collect" as scattered raw
 * data, snap into a clean stream at "Model", pulse each step they pass, and only
 * flow as far as the reader has scrolled (`reach`, 0 to 1).
 *
 * The parent marks each step's dot with data-node. The canvas follows those
 * dots, so it works for the horizontal desktop layout and the vertical mobile one.
 */

type P = { s: number; v: number; size: number; amp: number; phase: number; wob: number };
type Pulse = { x: number; y: number; t: number };
type Pt = { x: number; y: number };

const PAD_TOP = 48;
const PAD_LEFT = 24;

function readHsl(name: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const [h, s, l] = raw.split(/\s+/);
  return (a: number) => `hsla(${h}, ${s}, ${l}, ${a})`;
}

export function DataFlow({
  container,
  reach,
}: {
  container: React.RefObject<HTMLElement>;
  reach: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const host = container.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    let path: Pt[] = [];
    let cum: number[] = [];
    let nodeS: number[] = [];
    let total = 0;
    let vertical = false;
    let primary = readHsl("--primary");
    let muted = readHsl("--muted-foreground");

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodes = Array.from(host.querySelectorAll<HTMLElement>("[data-node]")).map((n) => {
        const r = n.getBoundingClientRect();
        return { x: r.left + r.width / 2 - rect.left, y: r.top + r.height / 2 - rect.top };
      });
      if (nodes.length < 2) return;
      vertical = Math.abs(nodes[1].y - nodes[0].y) > Math.abs(nodes[1].x - nodes[0].x);
      const last = nodes[nodes.length - 1];
      const end = vertical ? { x: last.x, y: h - 8 } : { x: w - 4, y: last.y };
      const start = vertical ? { x: nodes[0].x, y: nodes[0].y - 24 } : { x: Math.max(0, nodes[0].x - 24), y: nodes[0].y };
      path = [start, ...nodes, end];
      cum = [0];
      for (let i = 1; i < path.length; i++) {
        cum.push(cum[i - 1] + Math.hypot(path[i].x - path[i - 1].x, path[i].y - path[i - 1].y));
      }
      total = cum[cum.length - 1];
      nodeS = nodes.map((_, i) => cum[i + 1]);
    };

    const at = (s: number) => {
      let i = 1;
      while (i < cum.length - 1 && cum[i] < s) i++;
      const a = path[i - 1], b = path[i];
      const seg = cum[i] - cum[i - 1] || 1;
      const t = Math.min(1, Math.max(0, (s - cum[i - 1]) / seg));
      const dx = (b.x - a.x) / seg, dy = (b.y - a.y) / seg;
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, dx, dy };
    };

    const particles: P[] = [];
    const pulses: Pulse[] = [];
    const lastPulse: number[] = [];
    let spawnAcc = 0;
    let prev = performance.now();
    let raf = 0;
    let visible = false;
    let inView = false;

    const spawn = () => {
      const big = !vertical;
      particles.push({
        s: 0,
        v: (big ? 110 : 70) + Math.random() * (big ? 120 : 60),
        size: 1.2 + Math.random() * 2.6,
        amp: (big ? 10 : 3) + Math.random() * (big ? 26 : 7),
        phase: Math.random() * Math.PI * 2,
        wob: 1.5 + Math.random() * 3,
      });
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      ctx.clearRect(0, 0, w, h);
      if (!total) {
        raf = requestAnimationFrame(frame);
        return;
      }

      const maxS = Math.max(0, Math.min(1, reach.get())) * total;
      const model = nodeS[1] ?? total * 0.33;
      const collect = nodeS[0] ?? 0;

      if (maxS > collect) {
        spawnAcc += dt * (vertical ? 16 : 34);
        while (spawnAcc > 1 && particles.length < 260) {
          spawn();
          spawnAcc -= 1;
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const before = p.s;
        // Raw data dawdles; modelled data moves as one stream.
        const clean = Math.min(1, Math.max(0, (p.s - collect) / Math.max(1, model - collect)));
        const speed = p.v * (1 - clean) + 210 * clean;
        p.s += speed * dt;
        if (p.s > total || p.s > maxS + 40) {
          particles.splice(i, 1);
          continue;
        }

        nodeS.forEach((ns, ni) => {
          if (before < ns && p.s >= ns && ns <= maxS && now - (lastPulse[ni] ?? 0) > 260) {
            lastPulse[ni] = now;
            const q = at(ns);
            pulses.push({ x: q.x, y: q.y, t: now });
          }
        });

        const q = at(p.s);
        const jitter = p.amp * (1 - clean) * Math.sin(p.phase + now * 0.001 * p.wob);
        const x = q.x - q.dy * jitter;
        const y = q.y + q.dx * jitter;

        let alpha = 0.35 + 0.6 * clean;
        alpha *= Math.min(1, Math.max(0, (maxS - p.s) / 30));
        const tail = path[path.length - 2];
        const lastNodeS = cum[path.length - 2];
        if (tail && p.s > lastNodeS) alpha *= Math.max(0, 1 - (p.s - lastNodeS) / Math.max(40, total - lastNodeS));
        if (alpha <= 0.01) continue;

        if (clean < 1) {
          const size = p.size * (1 - clean) + 1.6 * clean;
          ctx.fillStyle = clean > 0.5 ? primary(alpha) : muted(alpha);
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const len = 6 + p.size * 3;
          ctx.strokeStyle = primary(alpha);
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(x - q.dx * len, y - q.dy * len);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const k = (now - pulses[i].t) / 700;
        if (k >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const e = 1 - Math.pow(1 - k, 3);
        ctx.strokeStyle = primary(0.55 * (1 - k));
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pulses[i].x, pulses[i].y, 5 + e * 16, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (visible) raf = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (raf) cancelAnimationFrame(raf);
      prev = performance.now();
      raf = requestAnimationFrame(frame);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      visible = inView && !document.hidden;
      if (visible) startLoop();
      else cancelAnimationFrame(raf);
    });
    io.observe(host);
    const onVis = () => {
      visible = inView && !document.hidden;
      if (visible) startLoop();
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);
    const mo = new MutationObserver(() => {
      primary = readHsl("--primary");
      muted = readHsl("--muted-foreground");
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [container, reach, reduce]);

  if (reduce) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute"
      style={{ top: -PAD_TOP, left: -PAD_LEFT, right: 0, bottom: 0, width: `calc(100% + ${PAD_LEFT}px)`, height: `calc(100% + ${PAD_TOP}px)` }}
    />
  );
}
