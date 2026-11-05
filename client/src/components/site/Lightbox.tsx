import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = { src: string; alt: string; caption?: string };

const ease = [0.23, 1, 0.32, 1] as const;

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
  title,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
  title?: string;
}) {
  const open = index !== null && items.length > 0;
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndex((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      returnFocus.current?.focus?.();
    };
  }, [open, onClose, go]);

  const item = open ? items[index!] : null;

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? item.alt}
          className="fixed inset-0 z-50 flex flex-col bg-[hsl(215_35%_4%/0.92)] text-white"
          style={{ paddingTop: "env(safe-area-inset-top, 0px)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <div className="wrap flex h-16 shrink-0 items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
            <p className="truncate text-sm text-white/75">
              {title && <span className="font-semibold text-white">{title}</span>}
              {items.length > 1 && (
                <span className="tnum ml-3">
                  {index! + 1} of {items.length}
                </span>
              )}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="press grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-lg object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.28, ease }}
                draggable={false}
              />
            </AnimatePresence>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="press absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:left-4"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="press absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:right-4"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="wrap flex min-h-16 shrink-0 items-center py-3" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm text-white/75">{item.caption ?? item.alt}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
