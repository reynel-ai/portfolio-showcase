/** Scroll to an in-page section by id, honouring reduced motion. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  return true;
}

/** After a route renders, jump to the hash target if there is one. */
export function scrollToHashOnLoad() {
  const id = window.location.hash.replace("#", "");
  if (!id) return;
  // Wait a frame so images above the target have reserved their space.
  requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
}
