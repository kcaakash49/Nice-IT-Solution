
import { motion, Variants } from "framer-motion"; // if using verbatimModuleSyntax in tsconfig, split: import { motion } from "framer-motion"; import type { Variants } from "framer-motion";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
};

const services: Service[] = [
  {
    title: "FTTH Trading",
    description:
      "We supply and deploy fiber-to-the-home infrastructure, ensuring ultra-fast and reliable connectivity tailored to homes and businesses.",
    imageUrl:
      "/src/assets/serviceImage/ftthtrading.webp",
  },
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built for performance, scalability, and user experience—modern frontend, resilient backend.",
    imageUrl:
      "/src/assets/serviceImage/webdevelopment.webp",
  },
  {
    title: "IP Camera Setup",
    description:
      "End-to-end IP camera installation and configuration for security monitoring with smart access and remote viewing.",
    imageUrl:
      "/src/assets/serviceImage/ipcamera.webp",
  },
  {
    title: "IT Solutions",
    description:
      "Managed IT services, infrastructure planning, support, and maintenance to keep your systems up, secure, and aligned with growth.",
    imageUrl:
      "/src/assets/serviceImage/itsolution.webp",
  },
];

const wrapperVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function WhoWeAreSection() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top row: a and b */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* a: left block */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Who We Are
            </h2>
            <div className="text-lg lg:text-4xl font-bold text-gray-700 dark:text-gray-300">
              <span>FTTH And IT Solution </span><span className="lg:hidden">Provider</span>
              <p className="hidden lg:block">Provider</p>
              
            </div>
          </motion.div>

          {/* b: right block */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Nice IT Solution is your trusted partner for connectivity and
              digital transformation. We blend cutting-edge fiber
              infrastructure with intelligent web presence, surveillance
              systems, and full-spectrum IT support to keep your operations
              seamless, secure, and future-ready. Our goal is to give businesses
              and homes reliable, scalable, and modern IT ecosystems that adapt
              as they grow.
            </p>
          </motion.div>
        </div>

        {/* c: animated service cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={wrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform will-change-transform"
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="h-40 sm:h-48 w-full flex-shrink-0 overflow-hidden">
                <img
                  src={svc.imageUrl}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
