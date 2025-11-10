import React from "react";
import { motion } from "framer-motion";

export default function ProjectK() {
  // Animation variants for scroll-triggered text
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      {/* Hero Section with Background Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-lg"
          src="/videos/project-k-bg.mp4" // make sure this exists in public/videos
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        <div className="relative z-20 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white text-5xl md:text-7xl font-bold text-center"
          >
            Project K: Smart Street Advertising
          </motion.h1>
        </div>
      </div>

      {/* Scroll Triggered Sections */}
      <div className="bg-black text-white py-32 space-y-32">
        {/* Section 1 */}
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          variants={textVariant}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            High-Impact Outdoor Displays
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Transform local shops, stations, and streets into high-visibility advertising hubs
            with dynamic, real-time content.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={textVariant}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Smart CMS & Scheduling
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Manage campaigns effortlessly — schedule content, monitor boards, and ensure your
            ads reach the right audience at the right time.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={textVariant}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Real-Time Monitoring & Analytics
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Receive instant alerts for offline displays, glitches, and performance metrics,
            keeping your Project K network fully optimized.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
