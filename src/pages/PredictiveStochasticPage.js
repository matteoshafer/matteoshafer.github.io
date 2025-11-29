import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function PredictiveStochasticPage() {
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
          Predictive Stochastic Modeling for Financial Markets
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
            Introduction
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            This repository, honored with the <strong>Adam Smith Award</strong>, demonstrates how financial and macroeconomic indicators,
            when integrated with advanced Markov-switching and regression techniques, can improve market prediction in bear markets.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Using Bayesian inference, time-series econometrics, and machine learning for forecasting, this work deepens our understanding
            of market downturns.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <strong>Read the full thesis:</strong>{" "}
            <motion.a
              href="https://github.com/matteoshafer/Predictive-Stochastic-Modeling-for-Financial-Markets-/blob/main/Predictive_Stochastic_Modeling_for_Financial_Markets.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Full Thesis PDF
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Project Overview
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.4 }}
            >
              ✅ Bayesian Markov-Switching Autoregressive Models for regime estimation.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.4 }}
            >
              ✅ OLS &amp; Beta Regression modeling for forecasting.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.4 }}
            >
              ✅ Feature engineering based on market and macroeconomic indicators.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.4 }}
            >
              ✅ Rigorous statistical evaluation across forecasting horizons.
            </motion.li>
          </motion.ul>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            How to Explore
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.5 }}
          >
            - <strong>Code Implementation:</strong>{" "}
            <motion.a
              href="https://github.com/matteoshafer/Predictive-Stochastic-Modeling-for-Financial-Markets-/blob/main/code.R"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Code (R)
            </motion.a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >
            - <strong>Dataset:</strong>{" "}
            <motion.a
              href="https://github.com/matteoshafer/Predictive-Stochastic-Modeling-for-Financial-Markets-/blob/main/one45.csv"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              one45.csv
            </motion.a>
          </motion.p>
        </motion.section>

        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.6 }}
        >
          For more details, visit:{" "}
          <motion.a
            href="https://github.com/matteoshafer/Predictive-Stochastic-Modeling-for-Financial-Markets-"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Predictive Stochastic Modeling on GitHub
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default PredictiveStochasticPage;