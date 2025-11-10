import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        
        {/* Left - Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-xl font-bold tracking-wide text-white">Adgeniie</h2>
          <p className="text-sm opacity-80">
            Innovating Outdoor & Indoor Digital Advertising
          </p>
        </motion.div>

        {/* Middle - Contact Info (perfectly centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-1"
        >
          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:adgeniie7@gmail.com"
              className="hover:underline"
            >
              adgeniie7@gmail.com
            </a>
          </p>
          <p className="text-sm">
            📞{" "}
            <a href="tel:+919959666537" className="hover:underline">
              +91 9959666537
            </a>{" "}
            |{" "}
            <a href="tel:+918688045385" className="hover:underline">
              +91 8688045385
            </a>
          </p>
        </motion.div>

        {/* Right - Social Media (slightly pushed right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end space-x-5"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={22} />
          </a>
        </motion.div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs mt-4 opacity-70">
        © {new Date().getFullYear()} Adgeniie. All Rights Reserved.
      </div>
    </footer>
  );
}

