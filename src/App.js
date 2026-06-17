import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import HomePage from "./pages/HomePage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/headshot.png" alt="Matteo Shafer" className="logo-avatar" />
          <span className="logo-name">Matteo Shafer</span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <button 
            className="nav-link nav-button" 
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button 
            className="nav-link nav-button" 
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="nav-link nav-button"
            onClick={() => scrollToSection("reviews")}
          >
            Reviews
          </button>
          <button
            className="nav-link nav-button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <a 
            href="https://github.com/matteoshafer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-github"
          >
            <FaGithub />
          </a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Matteo Shafer. All rights reserved.</p>
            <div className="footer-links">
              <a 
                href="https://github.com/matteoshafer" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
