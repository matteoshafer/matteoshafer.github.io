import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css"; // Adjust path based on your folder structure

function MastersThesisPage() {
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
          Integrating Deep Learning, Stochastic Modeling, &amp; Physics-Based Methods
        </motion.h2>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <strong>An Interdisciplinary Master's Thesis Project (IN PROGRESS)</strong> by Jaden Fix.
        </motion.p>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Cryptocurrency markets are known for their extreme volatility and complex dynamics. This project proposes an integrated
          framework that utilizes:
        </motion.p>
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
            <strong>Deep Learning:</strong> LSTM and Transformer architectures for time-series forecasting.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <strong>Stochastic Modeling:</strong> Advanced ARIMA and GARCH techniques tailored for heavy-tailed market data.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <strong>Physics-Based Methods:</strong> Fractal analysis, the Hurst exponent, and entropy measures to model market complexity.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <strong>Sentiment Analysis:</strong> Data from social media (e.g., X/Twitter, Google Trends) to integrate public sentiment.
          </motion.li>
        </motion.ul>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          Repository Structure
        </motion.h3>
        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >{`
masters_thesis/
├── crypto-agent/
│   ├── init.py
│   ├── data_scraper.py
│   ├── aggregator.py
│   └── README.md
├── models/
│   ├── deep_learning.py
│   ├── stochastic.py
│   └── physics_based.py
├── backtesting/
│   ├── strategy_backtest.ipynb
│   └── performance_evaluation.py
└── docs/
    ├── methodology.md
    └── additional_analysis.md
        `}</motion.pre>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          Setup & Usage
        </motion.h3>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          Requires Python 3.12 and libraries such as Twikit, Pandas, Transformers, and nest_asyncio. Install dependencies:
        </motion.p>
        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >{`pip install twikit pandas transformers nest_asyncio`}</motion.pre>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          For full documentation, please visit the{" "}
          <motion.a
            href="https://github.com/matteoshafer/masters_thesis"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Masters Thesis on GitHub
          </motion.a>.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default MastersThesisPage;