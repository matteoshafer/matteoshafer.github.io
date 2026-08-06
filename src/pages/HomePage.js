import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLayerGroup, FaChartLine } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projects, categories, stats } from "../data/projects";
import "./HomePage.css";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [reviewState, handleReviewSubmit] = useForm("mbdvykrj");
  const [typedText, setTypedText] = useState("");
  const [currentReview, setCurrentReview] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [repoCount, setRepoCount] = useState(stats.repositories);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const PROJECTS_INITIAL_COUNT = 6;
  const languageCount = new Set(projects.map(p => p.language)).size;

  useEffect(() => {
    fetch("https://api.github.com/users/matteoshafer")
      .then(r => r.json())
      .then(data => { if (data.public_repos) setRepoCount(data.public_repos); })
      .catch(() => {});
  }, []);

  const reviews = [
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
    },
    {
      name: "Arson O.",
      location: "Cal Poly SLO",
      text: "Matteo was a great tutor for my second devision stat class. Such a positive guy that was a wealth of information. I recommend him to anyone at the collegiate academic level."
    },
    {
      name: "Jade",
      location: "Cal Poly SLO",
      text: "Matteo was an excellent tutor. Not only is he very knowledgeable and intelligent in math but he teaches the subjects in an understandable way. He works hard to break down barriers of confusion and articulates larger concepts into building block ideas. His ability to grow confidence in difficult subjects helped me feel more strongly about my work and led me to getting a 4 on my AP Calculus exam."
    },
    {
      name: "Ben Rosbach",
      location: "Cal Poly SLO",
      text: "Matteo helped me quite a bit during undergrad as a tutor for my Stats classes. He was very helpful and was able to help explain the coursework in a way that clicked for me. Definitely recommend taking advantage of his knowledge if you need help getting through those more technical classes!"
    },
    {
      name: "Carmelo Maggio",
      location: "Cal Poly SLO",
      text: "Matteo absolutely saved me in my statistics class. Because of several bad experiences, I had always been skeptical of online tutoring. However, I connected with Matteo out of desperation after being unable to find an in-person tutor, and he completely changed my perspective on what online tutoring can be. He consistently held me accountable for attending our sessions and made sure I truly understood each concept. Even when I tried to move on without fully understanding something, he recognized it and took the time to explain the problem in as many different ways as necessary until it finally clicked. I also really appreciated his honesty. Whenever he was unsure about a topic because he had not worked with it recently, he took the time to research it and make sure he fully understood it before explaining it to me, rather than giving me an answer he was not confident about. Matteo is patient, persistent, knowledgeable, and genuinely invested in his students' success. I would 100% work with him again and highly recommend him to anyone looking for a tutor or as a professional in any field. Thank you Matteo!!"
    }
  ];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 350 : -350, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -350 : 350, opacity: 0 }),
  };

  const paginate = (dir) => {
    setSlideDirection(dir);
    setCurrentReview((prev) => (prev + dir + reviews.length) % reviews.length);
  };
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
    setShowAllProjects(false);
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
            <span className="stat-number">{repoCount}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-card">
            <FaLayerGroup className="stat-icon" />
            <span className="stat-number">{languageCount}</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <span className="stat-number">{stats.categories}</span>
            <span className="stat-label">Focus Areas</span>
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
            {(showAllProjects ? filteredProjects : filteredProjects.slice(0, PROJECTS_INITIAL_COUNT)).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length > PROJECTS_INITIAL_COUNT && (
          <div className="view-more-container">
            <motion.button
              className="view-more-btn"
              onClick={() => setShowAllProjects(prev => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? "View Less" : `View More (${filteredProjects.length - PROJECTS_INITIAL_COUNT} more)`}
            </motion.button>
          </div>
        )}
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
          <div className="languages-container">
            <span className="languages-label">Spoken Languages</span>
            <div className="language-tags">
              <span className="language-tag">🇺🇸 English</span>
              <span className="language-tag">🇮🇹 Italian</span>
              <span className="language-tag">🇪🇸 Spanish</span>
            </div>
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
              { icon: "🔱", title: "50-Mile Ultra Marathon", detail: "Finisher", badge: "finish" },
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
          <div className="reviews-carousel">
            <button className="carousel-btn carousel-prev" onClick={() => paginate(-1)} aria-label="Previous review">&#8249;</button>
            <div className="carousel-track">
              <AnimatePresence custom={slideDirection} mode="wait">
                <motion.div
                  key={currentReview}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(_, { offset }) => {
                    if (offset.x < -60) paginate(1);
                    else if (offset.x > 60) paginate(-1);
                  }}
                  className="review-card"
                >
                  <div className="card-glow" />
                  <div className="review-card-content">
                    <div className="review-header">
                      <div className="review-avatar">{reviews[currentReview].name[0]}</div>
                      <div>
                        <div className="review-name">{reviews[currentReview].name}</div>
                        <div className="review-location">{reviews[currentReview].location}</div>
                      </div>
                    </div>
                    <p className="review-text">{reviews[currentReview].text}</p>
                    <div className="review-stars">{"★★★★★"}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="carousel-btn carousel-next" onClick={() => paginate(1)} aria-label="Next review">&#8250;</button>
          </div>
          <div className="carousel-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentReview ? "active" : ""}`}
                onClick={() => { setSlideDirection(i > currentReview ? 1 : -1); setCurrentReview(i); }}
                aria-label={`Review ${i + 1}`}
              />
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
            <a
              href="https://www.linkedin.com/in/matteo-shafer-102105197/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:matteoshafer@gmail.com"
              className="contact-link"
            >
              <FaEnvelope /> Gmail
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
