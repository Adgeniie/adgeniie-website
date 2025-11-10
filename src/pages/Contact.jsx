// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { createLead } from "../api/leadApi";
import { notifySuccess, notifyError } from "../utils/toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Honeypot spam check
    if (form.company) {
      notifyError("Spam detected.");
      setLoading(false);
      return;
    }

    // ✅ Phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      notifyError("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    try {
      const data = await createLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });

      if (data.success) {
        notifySuccess("Thanks! We’ll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", message: "", company: "" });
        setTimeout(() => toggleModal(), 1500);
      } else {
        notifyError(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      notifyError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Adgeniie</title>
        <meta
          name="description"
          content="Get in touch with Adgeniie for indoor and outdoor digital advertising solutions. We help your brand shine!"
        />
      </Helmet>

      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-screen flex flex-col items-center justify-center text-center px-6 md:px-20 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
            poster="/videos/contact-poster.jpg"
          >
            <source src="/videos/contact-desktop.mp4" media="(min-width:768px)" type="video/mp4" />
            <source src="/videos/contact-mobile.mp4" media="(max-width:767px)" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10" />

          <motion.div
            className="relative z-20 text-white max-w-3xl"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
              Get in Touch with Adgeniie
            </h1>
            <p className="text-lg md:text-2xl mb-6 drop-shadow">
              Have questions or want to explore our digital advertising solutions?
            </p>

            <button
              onClick={toggleModal}
              className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition"
            >
              Contact Us
            </button>
          </motion.div>
        </section>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/95 rounded-2xl shadow-2xl p-6 w-96 relative"
            >
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />

                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}

        {/* Map Section */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <motion.div
            className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789%3A0xabcdef123456!2sMotinagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-96 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adgeniie Location"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Contact;






