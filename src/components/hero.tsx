import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-5xl md:text-7xl font-bold max-w-4xl mb-8 leading-tight"
      >
Trade skills, not bills.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-400 text-xl max-w-2xl mb-12"
      >
        A place where people can exchange knowledge and skills without financial
        constraints{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
          Join Waitlist →
        </button>
      </motion.div>
    </div>
  );
}
