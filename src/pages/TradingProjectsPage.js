import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function TradingProjectsPage() {
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
          Trading & Financial Projects
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
            🤖 Trading Bot Watcher Guru
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Python-based trading bot for automated trading strategies and market analysis.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/tradingbotwatcher-guru"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Trading Bot on GitHub
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
            📈 Crypto Trading AI (Fork)
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Build an AI to assist in trading crypto for maximum profit. Jupyter Notebook implementation with machine learning models for cryptocurrency trading.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/cryptoTrading_fork"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Crypto Trading AI on GitHub
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
            🏢 Quarter Line Systems
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            Quarter line systems child company of PSI - financial systems and trading infrastructure development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/quarter_line"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Quarter Line Systems on GitHub
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
            🧠 Cognito Systems
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.5 }}
          >
            Cognito systems child company of PSI - AI and cognitive computing solutions for financial applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/matteoshafer/cognito_systems"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              View Cognito Systems on GitHub
            </motion.a>
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

export default TradingProjectsPage;
