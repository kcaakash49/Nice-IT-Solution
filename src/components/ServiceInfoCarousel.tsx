import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = {
  key: string;
  title: string;
  subtitle: string;
  description: string[];
  primaryCta: { label: string; onClick?: () => void };
  secondaryCta?: { label: string; onClick?: () => void };
  imageSrc: string;
  ariaLabel: string;
};

const slides: Slide[] = [
  {
    key: "ftth",
    title: "FTTH Trading",
    subtitle: "Premium fiber goods for blazing connectivity.",
    description: [
      "Optical fibers, splitters, and terminal boxes.",
      "Accessories: connectors, patch cords, and tools.",
      "Bulk pricing for resellers and installers.",
      "Fast shipping within Nepal.",
    ],
    primaryCta: { label: "Shop Now" },
    secondaryCta: { label: "Request Quote" },
    imageSrc: "/src/assets/serviceImage/networking.webp",
    ariaLabel: "FTTH Trading services overview",
  },
  {
    key: "it",
    title: "IT Services",
    subtitle: "Managed infrastructure, support, and consulting.",
    description: [
      "On-site and remote support.",
      "Network setup & monitoring.",
      "Security audits and backup solutions.",
      "Custom solutions for small/medium businesses.",
    ],
    primaryCta: { label: "Learn More" },
    secondaryCta: { label: "Get a Consultation" },
    imageSrc: "/src/assets/serviceImage/itService.webp",
    ariaLabel: "IT Services overview",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.22, 0.61, 0.36, 1],
      duration: 0.45,
    },
  },
};

export default function ServiceInfoCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<number | null>(null);
  const slideCount = slides.length;

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageSrc;
      img.onload = () =>
        setLoaded((prev) => ({ ...prev, [slide.key]: true }));
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    const advance = () => setCurrent((c) => (c + 1) % slideCount);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(advance, 6000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current, slideCount]);

  const handlePrev = () =>
    setCurrent((c) => (c - 1 + slideCount) % slideCount);
  const handleNext = () => setCurrent((c) => (c + 1) % slideCount);

  return (
    <div className="relative w-full overflow-hidden shadow-xl bg-gray-100 dark:bg-[#0f172a]">
      <AnimatePresence initial={false} mode="wait">
        {slides.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={slide.key}
              aria-label={slide.ariaLabel}
              className="absolute inset-0 flex flex-col-reverse lg:flex-row items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Image */}
              <motion.img
                src={slide.imageSrc}
                alt={slide.title}
                className="absolute inset-0 object-cover w-full h-full"
                initial={{ opacity: 0.2, scale: 1.03 }}
                animate={
                  loaded[slide.key]
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.2 }
                }
                transition={{ opacity: { duration: 1 }, scale: { duration: 1 } }}
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, [slide.key]: true }))
                }
                aria-hidden="true"
              />

              {/* Darkening overlays */}
              <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 dark:from-black/80 dark:via-black/50 dark:to-black/70" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-6xl w-full px-6 py-12 sm:py-16 flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col justify-center">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={loaded[slide.key] ? "visible" : "hidden"}
                  >
                    <motion.h2
                      className="font-extrabold mb-2 leading-tight text-white"
                      style={{
                        fontSize: "clamp(1.5rem, 5vw, 3rem)",
                      }}
                      variants={itemVariants}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      className="mb-4 text-white/90"
                      style={{
                        fontSize: "clamp(0.875rem, 3vw, 1.25rem)",
                      }}
                      variants={itemVariants}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      className="mb-6"
                      variants={itemVariants}
                    >
                      <ul
                        className="list-disc pl-5 space-y-1 text-white"
                        style={{ fontSize: "clamp(0.65rem, 2.2vw, 1rem)" }}
                      >
                        {slide.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      variants={itemVariants}
                    >
                      <button
                        onClick={slide.primaryCta.onClick}
                        className="rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                        style={{
                          padding: "0.5rem 1rem",
                          backgroundColor: "#6366F1",
                          color: "white",
                        }}
                      >
                        {slide.primaryCta.label}
                      </button>
                      {slide.secondaryCta && (
                        <button
                          onClick={slide.secondaryCta.onClick}
                          className="rounded-full font-medium focus:outline-none transition"
                          style={{
                            padding: "0.5rem 1rem",
                            border: "1px solid rgba(255,255,255,0.8)",
                            background: "transparent",
                            color: "white",
                          }}
                        >
                          {slide.secondaryCta.label}
                        </button>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="pointer-events-auto bg-black/30 dark:bg-white/20 p-2 rounded-full text-white hover:bg-black/50 dark:text-gray-200 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="pointer-events-auto bg-black/30 dark:bg-white/20 p-2 rounded-full text-white hover:bg-black/50 dark:text-gray-200 focus:outline-none"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:flex gap-2 hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full focus:outline-none transition ${
              i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
