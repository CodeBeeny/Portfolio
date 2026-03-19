import { motion } from 'framer-motion'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div>
      <div className="page-header">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          A little background on who I am and what I do.
        </motion.p>
      </div>

      <div className="section">
        <motion.div
          className="about-page-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="about-card glass-card">
            <div className="about-row">
              <span className="about-label">Who</span>
              <p className="about-value">
                I'm <strong>Sahil</strong>, a passionate Fullstack Developer based in India. I love
                turning ideas into production-ready applications that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-row">
              <span className="about-label">What I Do</span>
              <p className="about-value">
                I build full-stack web applications using the <strong>MERN stack</strong> — React
                frontends, Node.js/Express backends, and MongoDB/PostgreSQL databases. I also work
                with <strong>Java</strong> and <strong>Spring Boot</strong> for enterprise-grade
                microservices, REST APIs, and authentication systems.
              </p>
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-row">
              <span className="about-label">ML & AI</span>
              <p className="about-value">
                Beyond web development, I'm actively exploring <strong>Machine Learning</strong> with
                Python, TensorFlow, and scikit-learn. I've built sentiment analysis engines, image
                classification models, and data science pipelines. I believe in bridging web
                technologies with intelligent systems.
              </p>
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-row">
              <span className="about-label">Philosophy</span>
              <p className="about-value">
                I care about writing clean, maintainable code and building systems that scale.
                Continuous learning is at my core — whether it's picking up a new framework,
                understanding design patterns, or diving into a research paper.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
