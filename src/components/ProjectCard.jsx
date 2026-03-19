import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="project-card-top">
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
              <FiGithub />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className="project-card-meta">
        {project.timeline && (
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">{project.timeline}</span>
          </div>
        )}
        {project.role && (
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">{project.role}</span>
          </div>
        )}
      </div>

      <p className="project-card-desc">{project.description}</p>

      <div className="project-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
