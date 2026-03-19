import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { categories } from '../data/projectsData.js'
import './Projects.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <div className="projects-page section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Browse my work organized by technology stack. Each category groups
          similar projects together.
        </p>
      </motion.div>

      <motion.div
        className="categories-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.map((cat) => (
          <motion.div key={cat.slug} variants={item}>
            <Link to={`/projects/${cat.slug}`} className="category-card">
              <div
                className="category-accent"
                style={{ background: cat.color }}
              />
              <span className="category-icon">{cat.icon}</span>
              <h2 className="category-name">{cat.name}</h2>
              <p className="category-desc">{cat.description}</p>
              <div className="category-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <span className="category-arrow">
                Explore <FiArrowRight />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
