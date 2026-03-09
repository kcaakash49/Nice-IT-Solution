import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = {
  key: string;
  title: string;
  subtitle: string;
  description: string[];
  primaryCta?: { label: string; onClick?: () => void } | null;
  secondaryCta?: { label: string; onClick?: () => void } | null;
  imageSrc: string;
  ariaLabel: string;
  isLogo?: boolean;
};

const slides: Slide[] = [
  {
    key: "logo",
    imageSrc: "/logonit.png", // put logonit.png inside public folder
    title: "",
    subtitle: "",
    description: [],
    ariaLabel: "Nice IT Solution",
    primaryCta: null,
    secondaryCta: null,
    isLogo: true,
  },
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
    imageSrc: "/serviceImage/networking.webp",
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
    imageSrc: "/serviceImage/itService.webp",
    ariaLabel: "IT Services overview",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceInfoCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const slideCount = slides.length;

  useEffect(() => {
    const next = () => setCurrent((prev) => (prev + 1) % slideCount);

    timeoutRef.current = window.setTimeout(next, 6000);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current, slideCount]);

  const handlePrev = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  const activeSlide = slides[current];

  return (
    <section className="relative w-full overflow-hidden shadow-xl bg-[#0f172a]">
      <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.key}
            aria-label={activeSlide.ariaLabel}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            {activeSlide.isLogo ? (
              <div className="relative flex h-full w-full items-center justify-center px-6 py-10 bg-[#0f172a]">
                <motion.img
                  src={activeSlide.imageSrc}
                  alt="Nice IT Solution"
                  className="max-h-[230px] w-auto object-contain brightness-200"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={activeSlide.imageSrc}
                  alt={activeSlide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55" />

                <div className="relative z-10 flex h-full w-full items-center">
                  <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
                    <div className="max-w-2xl">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.h2
                          variants={itemVariants}
                          className="mb-2 text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
                        >
                          {activeSlide.title}
                        </motion.h2>

                        <motion.p
                          variants={itemVariants}
                          className="mb-4 text-sm text-white/90 sm:mb-5 sm:text-lg lg:text-xl"
                        >
                          {activeSlide.subtitle}
                        </motion.p>

                        <motion.ul
                          variants={itemVariants}
                          className="mb-6 space-y-2 pl-5 text-sm leading-relaxed text-white sm:text-base"
                        >
                          {activeSlide.description.map((item, index) => (
                            <li key={index} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </motion.ul>

                        {(activeSlide.primaryCta || activeSlide.secondaryCta) && (
                          <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3"
                          >
                            {activeSlide.primaryCta && (
                              <button
                                onClick={activeSlide.primaryCta.onClick}
                                className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-transparent sm:px-6 sm:text-base"
                              >
                                {activeSlide.primaryCta.label}
                              </button>
                            )}

                            {activeSlide.secondaryCta && (
                              <button
                                onClick={activeSlide.secondaryCta.onClick}
                                className="rounded-full border border-white/80 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 sm:px-6 sm:text-base"
                              >
                                {activeSlide.secondaryCta.label}
                              </button>
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-3 sm:px-4">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-xl text-white transition hover:bg-black/55 focus:outline-none dark:bg-white/15 dark:hover:bg-white/25"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-xl text-white transition hover:bg-black/55 focus:outline-none dark:bg-white/15 dark:hover:bg-white/25"
          >
            ›
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 gap-2 sm:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current ? "bg-white" : "bg-white/40 hover:bg-white/65"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}