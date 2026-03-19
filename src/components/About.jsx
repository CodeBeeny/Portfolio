import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-row">
        <span className="section-label">About</span>
        <motion.div
          className="section-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-text">
            I'm <strong>Sahil</strong>, a passionate Fullstack Developer who loves building
            production-grade web applications and exploring the frontiers of Machine Learning.
          </p>
          <p className="about-text">
            I work across the entire stack — from crafting responsive React frontends to
            designing robust Node.js and Express backends with MongoDB and PostgreSQL databases.
            I also have strong experience with <strong>Java</strong> and <strong>Spring Boot</strong> for
            building enterprise-grade microservices and REST APIs.
          </p>
          <p className="about-text">
            Beyond web development, I'm diving into <strong>Machine Learning</strong> with Python,
            building models and exploring data science pipelines. I believe in bridging modern
            web technologies with intelligent systems to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
