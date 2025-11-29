import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function NLPPage() {
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
          N-Gram Language Model for Next-Word Prediction
        </motion.h2>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          This project implements a statistical language model using unigram, bigram, and trigram approaches for next-word prediction.
        </motion.p>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Key Features
        </motion.h3>
        <motion.ul
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            Word-level unigram, bigram, and trigram probability estimation
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            Smoothing techniques: add-k smoothing and linear interpolation
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            Automatic handling of sentence boundaries and low-frequency words (&lt;UNK&gt;)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            Evaluation using perplexity metrics
          </motion.li>
        </motion.ul>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          Technical Overview
        </motion.h3>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          Frequency tables, caching of probabilities, and scalable code design allow for easy experimentation.
        </motion.p>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          Workflow
        </motion.h3>
        <motion.ol
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.3, duration: 0.4 }}
          >
            <strong>Data Processing:</strong> Load raw text and tokenize with boundary markers.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          >
            <strong>Model Training:</strong> Train the model using MLE with smoothing enhancements.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.4 }}
          >
            <strong>Evaluation:</strong> Measure performance via perplexity on a validation/test set.
          </motion.li>
        </motion.ol>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.6 }}
        >
          For full details, visit the repository:{" "}
          <motion.a
            href="https://github.com/matteoshafer/NLP"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            https://github.com/matteoshafer/NLP
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default NLPPage;