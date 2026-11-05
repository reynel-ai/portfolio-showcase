import { Fragment, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "01$%#&*+=<>/\\[]{}ABCDEFXYZ0123456789";
const rand = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

type Line = { text: string; start: number };

/**
 * Headline whose letters scramble like a terminal, then lock in left to right.
 * Every character keeps a slot sized to its final letter, so nothing reflows.
 * Hovering a line (fine pointers only) scrambles it again.
 */
export function DecryptHeadline({ lines, className }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const root = useRef<HTMLHeadingElement>(null);
  const running = useRef<Set<number>>(new Set());

  const play = (lineIndex: number, delay: number, speed = 1) => {
    const el = root.current?.querySelector<HTMLElement>(`[data-line="${lineIndex}"]`);
    if (!el || running.current.has(lineIndex)) return;
    const glyphs = Array.from(el.querySelectorAll<HTMLElement>("[data-g]"));
    running.current.add(lineIndex);
    el.classList.add("is-decrypting");

    const t0 = performance.now() + delay;
    const settleAt = glyphs.map((_, i) => (650 + i * 58) / speed + Math.random() * 140);
    let lastSwap = 0;
    let raf = 0;

    const tick = (now: number) => {
      const t = now - t0;
      if (t < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const swap = now - lastSwap > 55;
      if (swap) lastSwap = now;
      let done = true;
      glyphs.forEach((g, i) => {
        const final = g.dataset.g!;
        if (final === " ") return;
        if (t >= settleAt[i]) {
          if (g.textContent !== final) {
            g.textContent = final;
            g.classList.remove("is-noise");
          }
        } else {
          done = false;
          if (swap) {
            g.textContent = rand();
            g.classList.add("is-noise");
          }
        }
      });
      if (done) {
        el.classList.remove("is-decrypting");
        running.current.delete(lineIndex);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  };

  useEffect(() => {
    if (reduce) return;
    const stops = lines.map((_, i) => play(i, 150 + i * 260));
    return () => stops.forEach((s) => s?.());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  const plan: Line[] = lines.map((text, i) => ({ text, start: i }));
  const hoverable =
    typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <h1 ref={root} className={className} aria-label={lines.join(" ")}>
      {plan.map((line, li) => (
        <span
          key={line.text}
          data-line={li}
          className="decrypt-line block"
          aria-hidden
          onPointerEnter={hoverable && !reduce ? () => play(li, 0, 1.8) : undefined}
        >
          {line.text.split(" ").map((word, wi, words) => (
            <Fragment key={wi}>
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((ch, ci) => (
                  <span key={ci} className="decrypt-slot">
                    <span className="decrypt-sizer">{ch}</span>
                    <span data-g={ch} className={`decrypt-glyph${reduce ? "" : " is-noise"}`}>
                      {reduce ? ch : rand()}
                    </span>
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && " "}
            </Fragment>
          ))}
        </span>
      ))}
    </h1>
  );
}
