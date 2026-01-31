import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative"
      >
        <motion.h1
          className="text-9xl font-extrabold tracking-tight text-indigo-600"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -6, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          404
        </motion.h1>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-200 via-white to-transparent blur-2xl" />
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-6 max-w-md text-lg text-gray-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oops! The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 12 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
