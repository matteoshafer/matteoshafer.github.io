import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function JavaProjectsPage() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Java Development Projects
        </motion.h2>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            🏃 Run Forest Man Run
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Java-based game or interactive application featuring dynamic movement and game mechanics.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/Run-Forest-Man-Run"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Run Forest Man Run on GitHub
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            🐘 Java Hadoop Classwork
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Hadoop-based big data processing projects and assignments from Java Hadoop coursework.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/java-hadoop"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Java Hadoop on GitHub
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
          >
            ☕ Simple Java Work
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            Basic Java programming exercises and projects from introductory computer science classes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/simple-java-work"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Simple Java Work on GitHub
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            🤖 Humer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.5 }}
          >
            Java-based AI or robotics project focusing on human-robot interaction and automation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/Humer"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Humer on GitHub
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.0, duration: 0.5 }}
          >
            📊 Project 2-203
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.5 }}
          >
            Advanced Java project focusing on data processing, algorithms, and software engineering principles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.4, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/Project-2-203"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Project 2-203 on GitHub
            </motion.a>
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

export default JavaProjectsPage;
