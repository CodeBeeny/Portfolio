import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi'
import '../components/Contact.css'

export default function ContactPage() {
  return (
    <div>
      <div className="page-header">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Let's connect — I'm always open to collaborations and interesting conversations.
        </motion.p>
      </div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="contact-links">
          <a href="mailto:sahiltiwari637@gmail.com" className="contact-item">
            <FiMail className="contact-icon" />
            <div>
              <span className="contact-label">Email</span>
              <span className="contact-value">sahiltiwari637@gmail.com</span>
            </div>
            <FiSend className="contact-arrow" />
          </a>
          <a href="https://github.com/CodeBeeny" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FiGithub className="contact-icon" />
            <div>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/CodeBeeny</span>
            </div>
            <FiSend className="contact-arrow" />
          </a>
          <a href="https://www.linkedin.com/in/sahil-tiwari-3b55b8328" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FiLinkedin className="contact-icon" />
            <div>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/sahil-tiwari</span>
            </div>
            <FiSend className="contact-arrow" />
          </a>
          <div className="contact-item" style={{ cursor: 'default' }}>
            <FiMapPin className="contact-icon" />
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">India</span>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2026 Sahil. Built with React & ❤️</p>
        </div>
      </motion.div>
    </div>
  )
}
