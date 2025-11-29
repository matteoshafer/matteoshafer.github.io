import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function SolanaToolsPage() {
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
          Solana Trading Tools Suite
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
            Overview
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            This suite leverages the Solana blockchain for algorithmic trading and portfolio management. The main focus is the
            Solana Trading Bot—an end-to-end system that automates data ingestion, strategy execution, and risk management.
          </motion.p>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Projects
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.4 }}
            >
              <motion.a
                href="https://github.com/matteoshafer/solanatools/tree/main/solana-bot"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                ⚡ Solana Trading Bot
              </motion.a>{" "}
              – Automated trading with real–time data and robust risk management.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.4 }}
            >
              <motion.a
                href="https://github.com/matteoshafer/solanatools/blob/main/backteststrats.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                🧪 Strategy Backtesting Framework
              </motion.a>{" "}
              – Quantitative analysis using RSI momentum and more.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.4 }}
            >
              <strong>Portfolio Tracker:</strong> A multi–wallet monitoring tool featuring:
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.3 }}
                >
                  Real–time balance tracking via Solana RPC
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 0.3 }}
                >
                  ML–driven risk prediction
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.3, duration: 0.3 }}
                >
                  Historical performance simulation
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4, duration: 0.3 }}
                >
                  Dockerized deployment
                </motion.li>
              </motion.ul>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.4 }}
            >
              <strong>Trading Platform:</strong> Institutional–grade features including OMS, data aggregation, model tracking, and analytics.
            </motion.li>
          </motion.ul>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.5 }}
          >
            Project Structure
          </motion.h3>
          <motion.pre
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.1, duration: 0.6 }}
          >{`
solanatools/
├── solana-bot/            # Main Trading Bot project
├── backteststrats.ipynb   # Strategy Backtesting Notebook
├── solana_portfolio/      # Portfolio Tracker
└── solana_trading_platform/  # Institutional-grade trading infrastructure
          `}</motion.pre>
        </motion.section>

        <motion.section
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.6 }}
        >
          <motion.h3
            className="section-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            Installation & Setup
          </motion.h3>
          <motion.ol
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7, duration: 0.6 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.8, duration: 0.4 }}
            >
              Clone the repository: <code>git clone https://github.com/matteoshafer/solanatools.git</code>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.9, duration: 0.4 }}
            >
              Install dependencies: <code>pip install -r requirements.txt</code>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.0, duration: 0.4 }}
            >
              Copy <code>.env.example</code> to <code>.env</code> to configure your environment.
            </motion.li>
          </motion.ol>
        </motion.section>

        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.6 }}
        >
          For more details, please visit the repository:{" "}
          <motion.a
            href="https://github.com/matteoshafer/solanatools"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Solana Trading Tools on GitHub
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default SolanaToolsPage;