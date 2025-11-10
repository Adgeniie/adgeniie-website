import React from "react";
import { motion } from "framer-motion";

const VideoSection = ({ title, description, videoSrc, link, linkText, reverse }) => {
  return (
    <section className={`relative flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-20 overflow-hidden ${reverse ? "md:flex-row-reverse" : ""}`}>
      {/* Background Video */}
      <motion.video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10"></div>

      {/* Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left relative z-20 text-white"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400">{title}</h2>
          <p className="text-lg md:text-xl mb-6 text-white/90">{description}</p>
          <a
            href={link}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 shadow-lg transition transform hover:scale-105"
          >
            {linkText}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
