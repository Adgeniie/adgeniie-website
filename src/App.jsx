import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast"; // ✅ use react-hot-toast

// Pages
import Home from "./pages/Home";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import Contact from "./pages/Contact";
import SmartSalon from "./pages/SmartSalon";
import ProjectK from "./pages/projectk";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Smooth page transitions wrapper
const PageWrapper = ({ children, location }) => {
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col min-h-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<PageWrapper location={location}><Home /></PageWrapper>}
        />
        <Route
          path="/indoor"
          element={<PageWrapper location={location}><Indoor /></PageWrapper>}
        />
        <Route
          path="/outdoor"
          element={<PageWrapper location={location}><Outdoor /></PageWrapper>}
        />
        <Route
          path="/contact"
          element={<PageWrapper location={location}><Contact /></PageWrapper>}
        />
        <Route
          path="/smart-salon"
          element={<PageWrapper location={location}><SmartSalon /></PageWrapper>}
        />
        <Route
          path="/project-k"
          element={<PageWrapper location={location}><ProjectK /></PageWrapper>}
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow overflow-hidden">
          <AnimatedRoutes />
        </main>
        <Footer />

        {/* ✅ Toast Container (global for react-hot-toast) */}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Router>
  );
};

export default App;
