import { motion, Variants } from "framer-motion";
import { useSafeInViewHook } from "../hooks/useSafeInViewHook"; // Adjust path as needed
import { products } from "../utils/intex";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 18,
    },
  },
};

export default function FTTHProductsSection() {
  // Separate refs for header and grid
  const { ref: headerRef, inView: headerInView } = useSafeInViewHook({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useSafeInViewHook({ threshold: 0.15 });

  return (
    <section className="py-10 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-1">FTTH Products</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Quality components to build and scale your fiber-based network infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Product cards grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {products.map((prod) => (
            <motion.div
              key={prod.id}
              className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="h-52 w-full overflow-hidden flex-shrink-0">
                <motion.img
                  src={prod.imageUrl}
                  alt={prod.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <motion.h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, y: 6 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {prod.title}
                </motion.h3>
                <motion.p
                  className="text-sm flex-grow text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={gridInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  {prod.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
