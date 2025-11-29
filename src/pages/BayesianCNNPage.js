import React from "react";
import { motion } from "framer-motion";
import "../ModernPages.css";

function BayesianCNNPage() {
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
          Bayesian CNN for CIFAR-10 Image Classification
        </motion.h2>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          This project implements a Simplified Bayesian Convolutional Neural Network (CNN) using TensorFlow and TensorFlow Probability to classify CIFAR-10 images while quantifying uncertainty.
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
            <strong>Uncertainty Estimation:</strong> Incorporates DenseFlipout layers and Monte Carlo sampling.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <strong>Data Augmentation:</strong> Uses ImageDataGenerator for improved generalization.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <strong>Robust Architecture:</strong> Combines convolutional layers with Bayesian dense layers and dropout.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <strong>Benchmarking:</strong> Compares against MobileNetV2 and ResNet50 for performance.
          </motion.li>
        </motion.ul>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          Model Overview
        </motion.h3>
        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >{`
Input: 32x32 RGB Image (CIFAR-10)
 ├─ Conv2D (32 filters, ReLU) → BatchNorm → MaxPooling
 ├─ Conv2D (64 filters, ReLU) → BatchNorm → MaxPooling
 ├─ Conv2D (128 filters, ReLU) → BatchNorm → MaxPooling
 ├─ Flatten → DenseFlipout (128 units, ReLU) → Dropout (40%)
 └─ DenseFlipout (10 classes, Softmax)
        `}</motion.pre>
        <motion.h3
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          Learn More
        </motion.h3>
        <motion.p
          className="section-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          For full code details, please visit the repository:{" "}
          <motion.a
            href="https://github.com/matteoshafer/Bayesian-Neural-Network-for-CIFAR-10-Image-Classification"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Bayesian CNN on GitHub
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default BayesianCNNPage;