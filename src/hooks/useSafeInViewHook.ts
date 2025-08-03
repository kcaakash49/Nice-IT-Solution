import { useRef, useState, useEffect } from "react";

export function useSafeInViewHook({
  threshold = 0.2,
}: {
  threshold?: number;
}) {
  // Change here: useRef<HTMLDivElement | null>
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (observer) observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(ref.current);
    } catch (e) {
      console.warn("IntersectionObserver failed", e);
    }

    return () => {
      if (observer) observer.disconnect();
      setInView(false); // reset so it can re-trigger on navigation back
    };
  }, [threshold]);

  return { ref, inView };
}
