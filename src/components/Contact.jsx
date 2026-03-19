import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-row">
        <span className="section-label">Contact</span>
        <motion.div
          className="section-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact-text">
            I'm always open to new opportunities, collaborations, and interesting
            conversations. Feel free to reach out!
          </p>
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
          </div>

          <div className="contact-footer">
            <p>© 2026 Sahil. Built with React & ❤️</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
