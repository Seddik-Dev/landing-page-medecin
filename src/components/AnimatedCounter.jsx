import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);
        let startTime;
        let frame;

        const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));

          if (progress < 1) {
            frame = window.requestAnimationFrame(animate);
          }
        };

        frame = window.requestAnimationFrame(animate);
        observer.disconnect();

        return () => window.cancelAnimationFrame(frame);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [duration, hasAnimated, value]);

  return <span ref={ref}>{count.toLocaleString() + suffix}</span>;
}
