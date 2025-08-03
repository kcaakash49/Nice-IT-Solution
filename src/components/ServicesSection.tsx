import { motion, Variants } from "framer-motion";
import {
  Code2,
  Camera,
  Smartphone,
  Server,
  Database,
  Network,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Fullstack Development",
    description:
      "Modern, scalable web applications from frontend to backend using the latest technologies.",
    icon: <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "IP Camera",
    description:
      "Reliable IP camera installation and monitoring solutions for security and surveillance.",
    icon: <Camera className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Android App Development",
    description:
      "Custom Android applications built for performance, usability, and scalability.",
    icon: <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Web Hosting",
    description:
      "Fast and secure hosting solutions for websites, applications, and APIs.",
    icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "Database Management",
    description:
      "Efficient database setup, optimization, and maintenance to ensure smooth performance.",
    icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: "FTTH Trading",
    description:
      "High-quality fiber optic trading for fast and reliable internet connectivity.",
    icon: <Network className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
];

const wrapperVariants: Variants = {
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

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
            Our Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of technology solutions—connectivity,
            development, infrastructure, and trading—tailored for growth and
            reliability.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <div className="p-6 flex items-start gap-4">
                <div>{svc.icon}</div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                    {svc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
