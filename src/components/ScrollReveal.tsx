import { useRef, useState, useEffect } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animating in */
  delay?: number;
  /** Only animate once (default true) */
  once?: boolean;
  /** How much of the element must be visible (0–1). Default 0.08 */
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!once) setInView(false);
          return;
        }
        if (delay > 0) {
          timeoutId = setTimeout(() => setInView(true), delay);
        } else {
          setInView(true);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, once, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
