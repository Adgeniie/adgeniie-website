import React from "react";
import { motion } from "framer-motion";

export default function SmartSalon() {
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
          src="/videos/salon-bg.mp4"
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
            Something Special is Coming
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
            Redefining Salon Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            A smart mirror that transforms your style journey — from haircuts to facials —
            blending AI, design, and innovation.
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
            Touch or Remote Control
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Interact effortlessly — either directly with touch, or through a mobile remote
            QR code system built for every customer.
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
            AI-Powered Style Suggestions
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            
          </p>
        </motion.div>
      </div>
    </div>
  );
}
