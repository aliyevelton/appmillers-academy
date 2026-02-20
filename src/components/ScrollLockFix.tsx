import { useEffect } from "react";

function forceScrollbarVisible() {
  // Only override body so we don't add a second scrollbar/gutter on html (which caused a blank column)
  document.body.style.setProperty("overflow-y", "scroll", "important");
  document.body.style.setProperty("margin-right", "0", "important");
}

/**
 * Radix Select (and other overlays) lock body scroll and hide the scrollbar.
 * This effect re-applies overflow so the scrollbar stays visible.
 */
export default function ScrollLockFix() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.hasAttribute("data-scroll-locked")) {
        // Radix may apply styles in the same or next frame; override multiple times to win
        forceScrollbarVisible();
        requestAnimationFrame(() => {
          forceScrollbarVisible();
          requestAnimationFrame(forceScrollbarVisible);
        });
        setTimeout(forceScrollbarVisible, 50);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
