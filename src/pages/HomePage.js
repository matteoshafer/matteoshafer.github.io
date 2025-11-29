import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaCode, FaLayerGroup, FaChartLine } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects, categories, stats } from "../data/projects";
import "./HomePage.css";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [typedText, setTypedText] = useState("");
  const fullText = "Building intelligent systems at the intersection of AI, finance, and data.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="grid-overlay" />
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm <span className="highlight">Matteo Shafer</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Data Analyst & Solutions Specialist
          </motion.p>

          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {typedText}
            <span className="cursor">|</span>
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a 
              href="https://github.com/matteoshafer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-primary"
            >
              <FaGithub /> View GitHub
            </a>
            <a href="#projects" className="cta-secondary">
              Explore Projects
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="stats-grid">
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <span className="stat-number">{stats.repositories}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-card">
            <FaLayerGroup className="stat-icon" />
            <span className="stat-number">{stats.languages}</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <span className="stat-number">{stats.categories}</span>
            <span className="stat-label">Specializations</span>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of my work spanning AI, financial modeling, data science, and software development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="filter-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm passionate about exploring the intersection of data science, economics, and blockchain technology. 
            I continually expand my expertise in machine learning, stochastic modeling, econometrics, and modern 
            software engineering frameworks.
          </p>
          <p className="about-text">
            My work spans from award-winning financial market research to building automated trading systems 
            and implementing deep learning solutions for complex real-world problems.
          </p>
          <div className="skills-container">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">R</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Scala</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Deep Learning</span>
            <span className="skill-tag">Stochastic Modeling</span>
            <span className="skill-tag">Blockchain</span>
            <span className="skill-tag">Data Visualization</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always eager to connect with others interested in quantitative strategy, 
            blockchain technologies, or AI/ML/DL. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a 
              href="https://github.com/matteoshafer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
