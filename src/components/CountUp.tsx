import { useRef, useState, useEffect } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({ end, duration = 2000, suffix = "", className = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();
    const startValue = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart for a smooth slowdown at the end
      const eased = 1 - (1 - progress) ** 4;
      const current = Math.round(startValue + (end - startValue) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [hasAnimated, end, duration]);

  const formatted = value.toLocaleString("en-US") + suffix;

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
