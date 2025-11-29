import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const languageColors = {
  Python: "#3572A5",
  R: "#198CE7",
  Java: "#B07219",
  Scala: "#C22D40",
  "Jupyter Notebook": "#DA5B0B",
  Tableau: "#E97627",
  JavaScript: "#F7DF1E"
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-glow" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.name}</h3>
          {project.featured && <span className="featured-badge">Featured</span>}
        </div>
        
        <p className="card-description">{project.description}</p>
        
        <div className="card-footer">
          <div className="language-tag">
            <span 
              className="language-dot" 
              style={{ backgroundColor: languageColors[project.language] || "#6e7681" }}
            />
            <span className="language-name">{project.language}</span>
          </div>
          
          <div className="card-links">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="View on GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Open Project"
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

