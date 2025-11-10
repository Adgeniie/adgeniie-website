import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Indoor = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Indoor Digital Advertising | Adgeniie</title>
        <meta
          name="description"
          content="Engage customers inside malls, cafés, and retail stores with vibrant indoor displays and smart content scheduling."
        />
      </Helmet>

      <motion.main
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/indoor-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-125"
          >
            <source src="/videos/indoor-desktop.mp4" type="video/mp4" />
            <source src="/videos/indoor-mobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
            <motion.h1
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-indigo-600 drop-shadow-lg"
            >
              Indoor Digital Advertising
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-xs sm:max-w-sm md:max-w-3xl text-white/90 leading-relaxed drop-shadow mb-6 sm:mb-8 md:mb-10"
            >
              Engage customers inside malls, cafés, and retail stores with vibrant indoor
              displays and smart content scheduling.
            </motion.p>

            <motion.a
              href="/contact"
              className="mt-6 sm:mt-8 md:mt-10 inline-block bg-indigo-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg hover:bg-indigo-700 hover:scale-110 transition-transform"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              Contact Sales
            </motion.a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 md:px-20 bg-gray-100">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 sm:mb-12 md:mb-16 text-center text-gray-900"
          >
            Why Choose Our Indoor Displays?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "Compact & Stylish",
                desc: "Fits perfectly in small spaces while catching attention.",
                icon: "/images/indoor-compact.svg",
              },
              {
                title: "High Resolution",
                desc: "Crisp visuals for videos, images, and animations.",
                icon: "/images/indoor-hd.svg",
              },
              {
                title: "Smart CMS",
                desc: "Easily schedule and manage content remotely.",
                icon: "/images/indoor-cms.svg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-indigo-700">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-indigo-50 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-900"
          >
            Ready to Boost Your Indoor Presence?
          </motion.h2>

          <motion.a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-md hover:bg-indigo-700 hover:scale-110 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Book a Slot
          </motion.a>
        </section>
      </motion.main>
    </>
  );
};

export default Indoor;
