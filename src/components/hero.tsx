import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <button className="bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-8 hover:bg-white/20 transition-colors">
          ✨ Introducing Magic UI Template →
        </button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-5xl md:text-7xl font-bold max-w-4xl mb-8 leading-tight"
      >
        Magic UI is the new way to build landing pages.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-400 text-xl max-w-2xl mb-12"
      >
        Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
          Get Started for free →
        </button>
      </motion.div>
    </div>
  );
}