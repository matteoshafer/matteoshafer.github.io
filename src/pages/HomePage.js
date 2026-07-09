import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaCode, FaLayerGroup, FaChartLine } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects, categories, stats } from "../data/projects";
import "./HomePage.css";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [reviewState, handleReviewSubmit] = useForm("mbdvykrj");
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
          <motion.img
            src="/headshot.png"
            alt="Matteo Shafer"
            className="hero-headshot"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          />

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
            Quantitative Analyst & Machine Learning Engineer
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
            My work spans from building automated trading systems to implementing deep learning solutions
            for complex real-world problems, with a focus on quantitative strategy and data-driven decision making.
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

      {/* Athletics Section */}
      <section id="athletics" className="athletics-section">
        <motion.div
          className="athletics-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Athletic Achievements</h2>
          <p className="section-subtitle">Competing at the highest amateur levels across endurance sports and tennis</p>
          <div className="athletics-grid">
            {[
              { icon: "🥉", title: "50-Mile Ultra Marathon", detail: "3rd Place — Age Group", badge: "podium" },
              { icon: "🥉", title: "Spartan Ultra 50km", detail: "3rd Place", badge: "podium" },
              { icon: "🥉", title: "Golden Gate Trail Run Marathon", detail: "3rd Place", badge: "podium" },
              { icon: "🏆", title: "Tennis", detail: "High School State Champion", badge: "champion" },
              { icon: "🔱", title: "Ironman Texas", detail: "Full Ironman Finisher", badge: "finish" },
              { icon: "🔱", title: "Ironman 70.3 Indian Wells", detail: "Half Ironman Finisher", badge: "finish" },
              { icon: "⚡", title: "Ultra Marathons", detail: "2 Finishes (50km+)", badge: "stats" },
              { icon: "🏅", title: "Marathons", detail: "4 Finishes", badge: "stats" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`athletic-card ${item.badge}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="athletic-icon">{item.icon}</div>
                <div className="athletic-info">
                  <div className="athletic-title">{item.title}</div>
                  <div className="athletic-detail">{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <motion.div
          className="reviews-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tutoring &amp; Coaching Reviews</h2>
          <p className="section-subtitle">What students and families are saying</p>
          <div className="reviews-grid">
            {[
              {
                name: "Esther A.",
                location: "La Jolla Heights",
                text: "Matteo is a wonderful tutor. Extremely helpful and really skilled at explaining high school math. I highly recommend hiring Matteo."
              },
              {
                name: "Elizabeth L.",
                location: "Carmel Valley Circle",
                text: "Matteo helped my daughter go from a state of anxiety to excelling in the midterm exam of her college statistics class. He is patient and very helpful. I strongly recommend him if your child needs help."
              },
              {
                name: "Lisa Taylor",
                location: "North Clairemont Drive",
                text: "We are on our third session with Matteo and very happy! My son finds him \"very chill\" and easy to work with. This says a lot coming from a 14 year old. After his first session my son got a B on his make up exam. Looking forward to seeing more results! He has the patience and knowledge to take the time to explain the work until my son can understand. We highly recommend."
              },
              {
                name: "Stephanie Gonda",
                location: "Del Mar",
                text: "Matteo has been an awesome coach for my son! He's patient, encouraging, and knows how to make lessons fun while still helping the kids improve. My son always looks forward to practice, and we've seen so much growth in his confidence and skills. Highly recommend! He is a very well rounded guy!"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                className="review-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="card-glow" />
                <div className="review-card-content">
                  <div className="review-header">
                    <div className="review-avatar">{review.name[0]}</div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="review-location">{review.location}</div>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-stars">{"★★★★★"}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            className="review-submit-form"
            onSubmit={handleReviewSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {reviewState.succeeded ? (
              <p className="review-submit-feedback success">Thanks! Your review has been submitted.</p>
            ) : (
              <>
                <p className="review-submit-label">Leave a Review</p>
                <div className="review-submit-row">
                  <input className="review-input" type="text" name="name" placeholder="Your name" required />
                  <ValidationError field="name" errors={reviewState.errors} className="review-submit-feedback error" />
                  <input className="review-input" type="text" name="location" placeholder="Location (optional)" />
                </div>
                <textarea
                  className="review-input review-textarea"
                  name="message"
                  placeholder="Share your experience..."
                  required
                  rows={3}
                />
                <ValidationError field="message" errors={reviewState.errors} className="review-submit-feedback error" />
                <button className="review-submit-btn" type="submit" disabled={reviewState.submitting}>
                  {reviewState.submitting ? "Sending..." : "Submit Review"}
                </button>
              </>
            )}
          </motion.form>
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
