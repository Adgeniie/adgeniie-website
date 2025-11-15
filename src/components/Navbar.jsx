// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Detect scroll for background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Indoor", path: "/indoor" },
//     { name: "Outdoor", path: "/outdoor" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.4)]"
//           : "bg-transparent"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text px-1 py-1 leading-normal"
//         >
//           Adgeniie
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.path}
//               className={`relative text-white font-semibold transition-colors duration-300 hover:text-blue-400 hover:drop-shadow-lg ${
//                 location.pathname === link.path ? "text-blue-400 drop-shadow-lg" : ""
//               }`}
//             >
//               {link.name}
//               {/* Animated underline for active link */}
//               {location.pathname === link.path && (
//                 <motion.span
//                   layoutId="underline"
//                   className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 rounded shadow-md"
//                   transition={{ duration: 0.3 }}
//                 />
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none text-white text-3xl drop-shadow-md"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-black/70 backdrop-blur-md px-6 py-6 rounded-xl shadow-lg"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//         >
//           <div className="flex flex-col space-y-4">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-white font-semibold text-xl transition-colors duration-300 hover:text-blue-400 ${
//                   location.pathname === link.path ? "text-blue-400" : ""
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;



// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Adgeniie
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-lg font-medium">
            <Link to="/">Home</Link>
            <Link to="/indoor">Indoor</Link>
            <Link to="/outdoor">Outdoor</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
   {isMenuOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999]"
    onClick={() => setIsMenuOpen(false)} // close when tapping outside
  >

          {/* MENU PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()} // prevent closing on inside click
          >
            {/* Close Button */}
            <button
              className="text-3xl absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            {/* Menu Items */}
            <nav className="mt-16 flex flex-col gap-6 text-lg font-semibold">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/indoor" onClick={() => setIsMenuOpen(false)}>
                Indoor
              </Link>
              <Link to="/outdoor" onClick={() => setIsMenuOpen(false)}>
                Outdoor
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
