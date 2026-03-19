import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="hero-time">
          {new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </div>

        <motion.div
          className="hero-avatar"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="avatar-ring">
            <div className="avatar-placeholder">S</div>
          </div>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sahil
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Fullstack Developer
        </motion.p>

        <motion.div
          className="hero-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="status-dot"></span>
          Available for new opportunities
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/CodeBeeny" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sahil-tiwari-3b55b8328" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:sahiltiwari637@gmail.com" className="social-icon" title="Email">
            <FiMail />
          </a>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href="https://www.linkedin.com/in/sahil-tiwari-3b55b8328" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            LinkedIn
          </a>
          <span className="cta-separator">or</span>
          <a href="#" className="btn btn-outline">
            Resume <FiFileText />
          </a>
        </motion.div>

        <motion.div
          className="hero-location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          INDIA • FULLSTACK DEV • ML ENTHUSIAST
        </motion.div>
      </motion.div>
    </section>
  )
}
