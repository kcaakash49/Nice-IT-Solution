import { motion } from "framer-motion";

type AnimatedTextProps = {
  as?: "h1" | "h2" | "p";
  children: React.ReactNode;
  delay?: number; // seconds
  className?: string;
};

const staggerVariant = {
  hidden: { opacity: 0, x: -60, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

export function AnimatedText({
  as = "p",
  children,
  delay = 0,
  className = "",
}: AnimatedTextProps) {
  const Component = as as any;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerVariant}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
