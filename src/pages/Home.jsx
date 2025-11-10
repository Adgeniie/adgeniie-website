// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResponsiveVideo from "../components/ResponsiveVideo";

const Home = () => {
  const hoverButtonVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
      boxShadow: "0px 0px 15px rgba(255,255,255,0.4)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <ResponsiveVideo
          desktopSrc="/videos/hero-desktop.mp4"
          mobileSrc="/videos/hero-mobile.mp4"
          poster="/videos/hero-poster.jpg"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6">
            Welcome to <span className="text-purple-400">Adgeniie</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-sm sm:max-w-md md:max-w-2xl mb-4 sm:mb-6 md:mb-8">
            Revolutionizing digital advertising with immersive indoor & outdoor experiences.
          </p>

          {/* Pulsing Hero Button */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 15px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
              to="/contact"
              className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-3 rounded-2xl text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 transition duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Indoor Advertising */}
      <motion.section
        className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <ResponsiveVideo
          desktopSrc="/videos/indoor-desktop.mp4"
          mobileSrc="/videos/indoor-mobile.mp4"
          poster="/videos/indoor-poster.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Indoor Boards
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-2xl mb-3 sm:mb-4 md:mb-6">
            Stunning indoor digital screens to engage customers like never before.
          </p>
          <motion.div whileHover="hover" variants={hoverButtonVariants}>
            <Link
              to="/indoor"
              className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-3 rounded-2xl text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 transition duration-300 shadow-lg"
            >
              Explore Indoor
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Outdoor Advertising */}
      <motion.section
        className="relative w-full h-screen overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <ResponsiveVideo
          desktopSrc="/videos/outdoor-desktop.mp4"
          mobileSrc="/videos/outdoor-mobile.mp4"
          poster="/videos/outdoor-poster.jpg"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Outdoor Boards
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-2xl mb-3 sm:mb-4 md:mb-6">
            Large-scale outdoor displays that dominate attention on the go.
          </p>
          <motion.div whileHover="hover" variants={hoverButtonVariants}>
            <Link
              to="/outdoor"
              className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-3 rounded-2xl text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 transition duration-300 shadow-lg"
            >
              Explore Outdoor
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Innovations */}
      <section className="relative py-16 sm:py-20 md:py-24 px-6 md:px-20 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 animate-pulse blur-3xl" />
        </div>

        {/* Floating particles */}
        <motion.div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-white/20 rounded-full absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-sm sm:max-w-md md:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Upcoming Innovations
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10">
            Explore futuristic solutions like smart salon, AI-driven ad-boards, and next-gen café displays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.div whileHover="hover" variants={hoverButtonVariants}>
              <Link
                to="/project-k"
                className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-3 rounded-2xl text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 transition duration-300 shadow-lg"
              >
                Project K
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={hoverButtonVariants}>
              <Link
                to="/smart-salon"
                className="px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-3 rounded-2xl text-sm sm:text-base md:text-lg font-medium bg-gradient-to-r from-blue-500 to-cyan-400 transition duration-300 shadow-lg"
              >
                Smart Salon
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
