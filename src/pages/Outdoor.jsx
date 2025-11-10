import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Outdoor = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Outdoor Digital Advertising | Adgeniie</title>
        <meta
          name="description"
          content="Catch attention with massive outdoor LED/LCD screens strategically placed on high-traffic roads. Perfect for brand awareness and instant engagement."
        />
      </Helmet>

      <motion.main
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/outdoor-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110 saturate-110"
          >
            <source src="/videos/outdoor-desktop.mp4" type="video/mp4" />
            <source src="/videos/outdoor-mobile.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-20">
            <motion.h1
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 text-yellow-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
            >
              Outdoor Digital Advertising
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-xs sm:max-w-sm md:max-w-3xl text-white/90 drop-shadow leading-relaxed mb-4 sm:mb-6 md:mb-8"
            >
              Catch attention from afar with massive LED/LCD outdoor screens
              strategically placed on high-traffic roads. Perfect for brand
              awareness and instant engagement.
            </motion.p>

            <motion.a
              href="/contact"
              className="mt-4 sm:mt-6 md:mt-10 inline-block bg-yellow-500 text-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-600 shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Contact Sales
            </motion.a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 md:px-20 bg-gray-100">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-10 sm:mb-12 md:mb-16 text-center text-gray-900"
          >
            Why Choose Our Outdoor Displays?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                title: "High Impact",
                desc: "Large format displays that catch attention instantly.",
                icon: "/images/outdoor-impact.svg",
              },
              {
                title: "Strategic Locations",
                desc: "Placed at busy roads, junctions, and high footfall areas.",
                icon: "/images/outdoor-location.svg",
              },
              {
                title: "Remote CMS Control",
                desc: "Easily schedule and manage content remotely for maximum efficiency.",
                icon: "/images/outdoor-cms.svg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-yellow-600">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-yellow-50 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-900"
          >
            Ready to Boost Your Outdoor Visibility?
          </motion.h2>

          <motion.a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-600 transition-transform transform hover:scale-110 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Book a Slot
          </motion.a>
        </section>
      </motion.main>
    </>
  );
};

export default Outdoor;

