import { useRef, useState, useEffect, Children } from "react";

type ScrollRevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms between each child. Default 80 */
  staggerMs?: number;
  /** How much of the element must be visible (0–1). Default 0.06 */
  threshold?: number;
};

export default function ScrollRevealStagger({
  children,
  className = "",
  staggerMs = 80,
  threshold = 0.06,
}: ScrollRevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          className={`transition-[opacity,transform] duration-500 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: inView ? `${i * staggerMs}ms` : "0ms" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
